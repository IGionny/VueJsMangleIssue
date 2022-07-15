import {CoolLevel} from "./enums/CoolLevel";

export interface ICustomTreeItem {
  Name: string | null;
  CoolLevel: CoolLevel;
  ExpireAt: string | null;
}
