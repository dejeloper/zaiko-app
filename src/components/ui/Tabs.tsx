import { FC, useState } from "react";

interface Props {
  children: React.ReactNode;
  index: number;
  id: string;
  name: string;
}

export const Tabs: FC<Props> = ({ children, index, id, name }) => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: number) => {
    setToggleState(index);
  };

  return (
    <>
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
          <li className="mr-2" role="presentation">
            <button className={toggleState === index ? "tab tab-active" : "tab"} onClick={() => toggleTab(index)} id={`${id}-tab`} data-tabs-target={`#${id}`} type="button" role="tab" aria-controls={`${id}`} aria-selected="false">{name}</button>
          </li>

          {/* <li className="mr-2" role="presentation">
            <button className={toggleState === 1 ? "tab tab-active" : "tab"} onClick={() => toggleTab(1)} id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
          </li>
          <li className="mr-2" role="presentation">
            <button className={toggleState === 2 ? "tab tab-active" : "tab"} onClick={() => toggleTab(2)} id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Dashboard</button>
          </li>
          <li className="mr-2" role="presentation">
            <button className={toggleState === 3 ? "tab tab-active" : "tab"} onClick={() => toggleTab(3)} id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Settings</button>
          </li>
          <li role="presentation">
            <button className={toggleState === 4 ? "tab tab-active" : "tab"} onClick={() => toggleTab(4)} id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">Contacts</button>
          </li> */}
        </ul>
      </div>
      <div id="myTabContent">
        <div className={toggleState === index ? "tab-content block" : "tab-content hidden"} id={id} role="tabpanel" aria-labelledby={`${id}-tab`}>
          {children}
        </div>
        {/* <div className={toggleState === 1 ? "tab-content block" : "tab-content hidden"} id="profile" role="tabpanel" aria-labelledby="profile-tab">
          <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Profile tabs associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
        </div>
        <div className={toggleState === 2 ? "tab-content block" : "tab-content hidden"} id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
          <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Dashboard tabs associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
        </div>
        <div className={toggleState === 3 ? "tab-content block" : "tab-content hidden"} id="settings" role="tabpanel" aria-labelledby="settings-tab">
          <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Settings tabs associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
        </div>
        <div className={toggleState === 4 ? "tab-content block" : "tab-content hidden"} id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
          <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Contacts tabs associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
        </div> */}
      </div>
    </>
  );
} 