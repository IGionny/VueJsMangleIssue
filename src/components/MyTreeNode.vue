<template>
  <li role="none"
      v-show="!NodeItem.state.disabled"
      class="jstree-node"
      :data-node-id="NodeItem.id"
      @mouseover="MouseHover"
      @mouseout="MouseOut"
      :class="NodeCssClasses" >
    <div role="presentation" class="jstree-wholerow" 
         :class="{'jstree-wholerow-hovered' : Hovered, 'jstree-wholerow-clicked' : NodeItem.state.selected }"
    >&nbsp;
    </div>
    <i class="jstree-icon jstree-ocl" role="presentation" aria-expanded="true"
       @click.stop.prevent="ToggleOpenClose"></i>
    <a href="#" class="jstree-anchor" role="treeitem" :class="{'jstree-clicked' : NodeItem.state.selected}"
       :aria-selected="NodeItem.state.selected">
      <i v-if="MultiSelectEnabled && NodeItem.state.selected" class="fas fa-check-square"/>
      <i v-if="MultiSelectEnabled && !NodeItem.state.selected" class="far fa-square"/>
      <slot name="NodeDisplay" v-bind:NodeItem="NodeItem">
        <i class="jstree-icon jstree-themeicon fas fa-folder text-primary jstree-themeicon-custom"
           role="presentation"></i>
        {{ NodeItem.text }}
      </slot>
    </a>
    <ul role="group" class="jstree-children" v-if="NodeItem.children && NodeItem.children.length > 0">
      <MyTreeNode v-for="node in NodeItem.children" :node-item="node" :my-tree-logic="MyTreeLogic" :key="node.id">
        <template v-for="(index, name) in $scopedSlots" v-slot:[name]="data">
          <slot :name="name" v-bind="data"></slot>
        </template>
      </MyTreeNode>
    </ul>
  </li>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {Prop} from "vue-property-decorator";
import {MyTreeLogic} from "./MyTreeLogic";
import {IMyTreeDataNode} from "../@types/IMyTreeDataNode";

@Component({
  components: {MyTreeNode}
})
export default class MyTreeNode extends Vue {


  /**
   * TODO:
   * - [ ] Open/close nicely with animation
   * - [ ] replace the way to change background color on mouse hover: now is too much js
   Ex: http://jsfiddle.net/vals/L8eSr/1/
   */

  @Prop({required: true, type: Object}) NodeItem !: IMyTreeDataNode<any>;
  @Prop({required: true, type: Object}) MyTreeLogic !: MyTreeLogic<any>;

  get MultiSelectEnabled(){
    return this.MyTreeLogic.MultiSelectEnabled;
  }
  
  get NodeCssClasses() {
    const classes: string[] = [];
    if (!this.HasChildren) {
      classes.push('jstree-leaf');
    }
    if (this.NodeItem.state.opened) {
      classes.push('jstree-open');
    } else {
      classes.push('jstree-closed');
    }
    if (this.MyTreeLogic.SearchModeOn && this.MyTreeLogic.SearchResultCssClass) {
      classes.push(this.MyTreeLogic.SearchResultCssClass);
    }
    return classes;
  }

  Hovered: boolean = false;

  get HasChildren() {
    if (!this.NodeItem) return false;
    return this.NodeItem.children && this.NodeItem.children.length > 0;
  }

  ToggleOpenClose() {
    if (!this.NodeItem) return;
    this.NodeItem.state.opened = !this.NodeItem.state.opened;
  }

  FindNearId(ev: Event) {
    const closestElement = (ev.target as HTMLElement).closest(".jstree-node") as any;
    if (!closestElement) {
      console.warn("FindNearId: cannot find any .jstree-node near here!")
      return null;
    }
    return closestElement.__vue__ as MyTreeNode;
  }

  SetHovered(value: boolean) {
    this.Hovered = value;
  }

  MouseHover(ev: Event) {
    this.FindNearId(ev)?.SetHovered(true);
  }

  MouseOut(ev: Event) {
    this.FindNearId(ev)?.SetHovered(false);
  }

}
</script>

<style>
/*
.jstree-node {
  transition-duration: 4s;
  animation-delay: 4s;
  animation-duration: 5s;
}*/
</style>