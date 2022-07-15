<template>
  <div>
    <MyTree :my-tree-logic="MyTreeLogicData" v-if="this.MyTreeLogicData.RootNode">
      <!-- <template #NodeDisplay="{NodeItem}">
        <CustomNode :node-item="NodeItem"/>
      </template> -->
    </MyTree>

  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import MyTree from "../components/MyTree.vue";
//import CustomNode from "./components/CustomNode.vue";
import {MyTreeLogic} from "../components/MyTreeLogic";
import {ICustomTreeItem} from "../@types/ICustomTreeItem";
import {IMyTreeDataNode} from "../@types/IMyTreeDataNode";
import {CoolLevel} from "../@types/enums/CoolLevel";

@Component({
  components: {
  //  CustomNode, 
    MyTree}
})
export default class Tree extends Vue {

  MyTreeLogicData = new MyTreeLogic<ICustomTreeItem>();

  mounted() {
    const rootNode: IMyTreeDataNode<ICustomTreeItem> = {
      id: "1",
      state: {
        selected: false,
        opened: false,
        disabled: false
      },
      text: "ROOT",
      Value: {
        CoolLevel: CoolLevel.SuperCool,
        ExpireAt: null,
        Name: "ROOT"
      },
      children: [
        {
          id: "2",
          state: {
            selected: false,
            opened: false,
            disabled: false
          },
          text: "Father 1",
          Value: {
            CoolLevel: CoolLevel.SuperCool,
            ExpireAt: "2022-04-04T10:40:00Z",
            Name: "Father 1"
          },
          children: []

        }
      ]

    }
    this.MyTreeLogicData.SetRootNode(rootNode);
    this.MyTreeLogicData.OpenAll();
  }

}
</script>