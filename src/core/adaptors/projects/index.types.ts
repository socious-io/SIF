import { PaginateRes } from '..';

export interface Project {
  id: string;
  coverImg: string;
  category: string;
  title: string;
  description: string;
  //FIXME: later
  creator: { type: any; name: string; img: string };
}

export type ProjectRes = PaginateRes<Project>;
