<template>
  <div class="jstree jstree-2 jstree-default jstree-default-large jstree-checkbox-selection" role="tree">
    <ul
      class="jstree-container-ul jstree-children jstree-striped jstree-no-checkboxes jstree-wholerow-ul jstree-no-dots"
      role="group"
      @click.stop.prevent="Click"
    >
      <MyTreeNode :node-item="MyTreeLogic.RootNode" :my-tree-logic="MyTreeLogic">
        <template #NodeDisplay="{NodeItem}">
          <slot name="NodeDisplay" v-bind:NodeItem="NodeItem"></slot>
        </template>
      </MyTreeNode>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {Prop} from "vue-property-decorator";
import MyTreeNode from "./MyTreeNode.vue";
import {MyTreeLogic} from "./MyTreeLogic";

@Component({
  components: {MyTreeNode}
})
export default class MyTree extends Vue {

  @Prop({required: true, type: Object}) MyTreeLogic !: MyTreeLogic<any>;

  Click(ev: Event) {
    const node = this.FindNearId(ev);
    if (node) {
      this.MyTreeLogic.ToggleSelectNode(node.NodeItem);
    }
  }

  FindNearId(ev: Event) {
    const closestElement = (ev.target as HTMLElement).closest(".jstree-node") as any;
    if (!closestElement) {
      console.warn("FindNearId: cannot find any .jstree-node near here!");
      return null;
    }
    return closestElement.__vue__;
  }

}
</script>
