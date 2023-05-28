import { ReactNode } from "react";

export interface tabs {
  index: number;
  id: string;
  name: string;
  icon?: string;
  children: ReactNode;
}