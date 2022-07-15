export interface IMyTreeDataNode<T>{
  id: string;
  text: string;
  state: IMyTreeDataNodeState;
  children: IMyTreeDataNode<T> [];
  Value : T;
}

export interface IMyTreeDataNodeState{
  disabled: boolean;
  opened: boolean;
  selected: boolean;
}
