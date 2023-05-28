import { FC, ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
  index: number;
  id: string;
  toggleState: number;
}

export const TabContent: FC<Props> = ({ children, index, id, toggleState }) => {
  return (
    <div className={toggleState === index ? "tab-content block" : "tab-content hidden"} id={id} role="tabpanel" aria-labelledby={`${id}-tab`}>
      {children}
    </div>
  )
}
