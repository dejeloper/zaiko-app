import { FC, ReactNode, useState } from "react";
import { tabs } from '../../../interfaces/tabs';
import { TabHeader } from "./TabHeader";
import { TabContent } from './TabContent';

interface Props {
  tabs: tabs[]
}

export const Tabs: FC<Props> = ({ tabs }) => {
  const [toggleState, setToggleState] = useState(1);
  return (
    <>
      <div className="mb-1 border-b border-gray-200">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
          {
            tabs.map((tab) => {
              const { index, id, name } = tab;

              return <TabHeader key={index} index={index} id={id} name={name} toggleState={toggleState} setToggleState={setToggleState} />
            })
          }
        </ul>
      </div>
      <div id="tabContents">
        {
          tabs.map((tab) => {
            const { children, index, id, } = tab;

            return (
              <TabContent key={index} index={index} id={id} toggleState={toggleState} >
                {children}
              </TabContent>
            )
          })
        }
      </div>
    </>
  );
} 