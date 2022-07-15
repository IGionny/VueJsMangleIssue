import {IMyTreeDataNode} from "../@types/IMyTreeDataNode";

export class MyTreeLogic<T> {

  RootNode: IMyTreeDataNode<T> | null = null;
  LastSelectedNode: IMyTreeDataNode<T> | null = null;

  SortFunction: ((nodeA: IMyTreeDataNode<T>, nodeB: IMyTreeDataNode<T>, field: string, ascending: boolean) => number) | null = null;
  SearchFunction: ((node: IMyTreeDataNode<T>) => boolean) | null = null;
  SelectFunction: ((node: IMyTreeDataNode<T>) => boolean) | null = null;
  CanBeSelectedFunction: ((node: IMyTreeDataNode<T>) => boolean) | null = null;
  SearchModeOn: boolean = false;

  private _searchResultCssClass: string | null = "jstree-search";


  public get SearchResultCssClass(): string | null {
    return this._searchResultCssClass;
  }

  public set SearchResultCssClass(value: string | null) {
    this._searchResultCssClass = value;
  }

  private _multiSelectEnabled: boolean = false;

  public get MultiSelectEnabled(): boolean {
    return this._multiSelectEnabled;
  }

  public set MultiSelectEnabled(value: boolean) {
    this._multiSelectEnabled = value;

    //On every change of the modality then clear all selected values

    this._selectedNodes.forEach(x => x.state.selected = false);
    this._selectedNodes.splice(0, this._selectedNodes.length);

    if (this.LastSelectedNode) {
      this.LastSelectedNode.state.selected = false;
      this.LastSelectedNode = null;
    }
  }

  private _selectedNodes: IMyTreeDataNode<T>[] = [];

  public get SelectedNodes() {
    return this._selectedNodes;
  }

  ToggleSelectNode(node: IMyTreeDataNode<T>) {

    if (this.CanBeSelectedFunction) {
      if (!this.CanBeSelectedFunction(node)) {
        return;
      }
    }

    if (this.SelectFunction && !this.SelectFunction(node)) {
      return;
    }

    node.state.selected = !node.state.selected;

    if (!this.MultiSelectEnabled) {
      if (this.LastSelectedNode === node) {
        if (!node.state.selected) {
          this.LastSelectedNode = null;
        }
      } else {
        if (this.LastSelectedNode) {
          this.LastSelectedNode.state.selected = false;
        }
        this.LastSelectedNode = node;
      }
      if (node.state.selected) {
        this._selectedNodes[0] = node;
      } else {
        this._selectedNodes.splice(0, this._selectedNodes.length);
      }
    } else {
      if (this.LastSelectedNode !== node) {
        this.LastSelectedNode = node;
      }

      const nodeIndex = this._selectedNodes.findIndex(x => x === node);
      if (node.state.selected) {
        if (nodeIndex === -1) {
          this._selectedNodes.push(node);
        }
      } else {
        if (nodeIndex > -1) {
          this._selectedNodes.splice(nodeIndex, 1);
        }
      }

    }
  }

  _getById(children: IMyTreeDataNode<T>[], id: string): IMyTreeDataNode<T> | null {
    for (const c of children) {
      if (c.id && c.id === id) {
        return c;
      }
    }
    for (const c of children) {
      if (c.children) {
        const f = this._getById(c.children, id);
        if (f) {
          return f;
        }
      }
    }
    return null;
  }

  GetById(id: string) {
    return this._getById(this.RootNode?.children!, id);
  }

  SetRootNode(rootNode: IMyTreeDataNode<T>, keepLastSelectedNode?: boolean) {
    this.RootNode = rootNode;
    if (keepLastSelectedNode === true) {
      if (this.SelectedNodes.length > 0) {
        const newSelectedNodes: IMyTreeDataNode<T>[] = [];
        this.LastSelectedNode = null;
        for (const oldSelectedNode of this.SelectedNodes) {
          const newSelectedNode = this.GetById(oldSelectedNode.id);
          if (newSelectedNode) {
            newSelectedNode.state.selected = true;
            newSelectedNodes.push(newSelectedNode);
            this.LastSelectedNode = newSelectedNode;
          }
        }
        this.SelectedNodes.splice(0, this.SelectedNodes.length);
        newSelectedNodes.forEach(x => this.SelectedNodes.push(x));
      }
    } else {
      this.LastSelectedNode = null;
      this.SelectedNodes.splice(0, this.SelectedNodes.length);
    }
  }

  LastSortByField: string | null = null;
  LastAscending: boolean = false;

  OrderBy(field: string, asc: boolean) {
    if (!this.SortFunction) return;
    this.LastSortByField = field;
    this.LastAscending = asc;
    this._orderChildren(this.RootNode!.children);
  }

  _orderChildren(children: IMyTreeDataNode<T>[]) {
    children.sort((a, b) => this.SortFunction!(a, b, this.LastSortByField!, this.LastAscending));
    for (const c of children) {
      if (c.children) {
        this._orderChildren(c.children);
      }
    }
  }


  _toggleOpenedState(children: IMyTreeDataNode<T>[], opened: boolean) {
    for (const c of children) {
      c.state.opened = opened;
      if (c.children) {
        this._toggleOpenedState(c.children, opened);
      }
    }
  }

  DeselectAll() {
    if (this.LastSelectedNode) {
      this.LastSelectedNode.state.selected = false;
      this.LastSelectedNode = null;
    }
  }

  OpenAll(children?: IMyTreeDataNode<T>[]) {
    if (!children) {
      this.RootNode!.state.opened = true;
      this._toggleOpenedState(this.RootNode!.children, true);
    } else {
      this._toggleOpenedState(children, true);
    }
  }

  CloseAll(children?: IMyTreeDataNode<T>[]) {
    if (!children) {
      this.RootNode!.state.opened = false;
      this._toggleOpenedState(this.RootNode!.children, false);
    } else {
      this._toggleOpenedState(children, false);
    }
  }

  _findParent(nodes: IMyTreeDataNode<T>[], lostChild: IMyTreeDataNode<T>): IMyTreeDataNode<T> | null {
    for (const n of nodes) {
      if (n.children.some(x => x === lostChild)) {
        return n;
      }
    }
    for (const n of nodes) {
      if (n.children) {
        const r = this._findParent(n.children, lostChild);
        if (r) {
          return r;
        }
      }
    }
    return null;
  }

  FindParent(node: IMyTreeDataNode<T>) {
    return this._findParent(this.RootNode!.children, node);
  }

  OpenParents(node: IMyTreeDataNode<T>) {
    let p: IMyTreeDataNode<T> | null = node;
    do {
      p = this.FindParent(p);
      if (p) {
        p.state.disabled = false;
        p.state.opened = true;
      }
    } while (p);
  }

  ForEachNode(nodes: IMyTreeDataNode<T>[], func: (node: IMyTreeDataNode<T>) => void) {
    for (const n of nodes) {
      func(n);
      if (n.children) {
        this.ForEachNode(n.children, func);
      }
    }
  }

  Search() {
    if (!this.SearchFunction) return;
    this.SearchModeOn = true;
    this.CloseAll();
    const matchNodes: IMyTreeDataNode<T>[] = [];
    this.ForEachNode(this.RootNode?.children!, (a: IMyTreeDataNode<T>) => {
      a.state.disabled = !this.SearchFunction!(a);
      if (!a.state.disabled) {
        matchNodes.push(a);
      }
    })

    for (const node of matchNodes) {
      this.OpenParents(node);
    }
    this.OpenAll();
  }

  ClearSearch() {
    this.ForEachNode(this.RootNode?.children!, (a: IMyTreeDataNode<T>) => a.state.disabled = false);
    this.OpenAll();
    this.SearchModeOn = false;
  }

  SelectNodeById(id: string) {
    const node = this.GetById(id);
    if (node && !node.state.selected) {
      this.ToggleSelectNode(node);
    }
  }
}
