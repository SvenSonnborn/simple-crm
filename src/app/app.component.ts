import { Component } from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {FlatTreeControl} from '@angular/cdk/tree';


interface UserNode {
  name: string;
  url: string;
  children?: UserNode[];
}

const TREE_DATA: UserNode[] = [
  {
    name: 'User',
    url: '',
    children: [{name: 'Broker', url: 'broker'}, {name: 'Depo', url: 'depo'}, {name: 'Vermittler', url: 'vermittler'}],
  }
]

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
  url: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private _transformer = (node: UserNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
      url:node.url
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }
  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;


  title = 'simple-crm';
}
