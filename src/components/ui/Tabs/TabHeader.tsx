import { Dispatch, FC, ReactNode, SetStateAction, useState } from "react";

interface Props {
  index: number;
  id: string;
  name: string;
  toggleState: number;
  setToggleState: Dispatch<SetStateAction<number>>;
}

export const TabHeader: FC<Props> = ({ index, id, name, toggleState, setToggleState }) => {
  const toggleTab = (index: number) => {
    setToggleState(index);
  };

  return (
    <li className="mr-2" role="presentation">
      <button className={toggleState === index ? "tab tab-active" : "tab"} onClick={() => toggleTab(index)} id={`${id}-tab`} data-tabs-target={`#${id}`} type="button" role="tab" aria-controls={`${id}`} aria-selected="false">{name}</button>
    </li>
  )
}
