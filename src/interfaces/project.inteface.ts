import { ISection } from "./section.interface";

export interface IProject {
  id: string;
  title: string;
  description?: string;

  sections: ISection[];
}
