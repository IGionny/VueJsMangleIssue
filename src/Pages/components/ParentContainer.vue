<template>
  <div>
    <h3>Hi! I'm a Parent</h3>
    
    <ChildContainer/>
    <ChildContainer/>
    <ChildContainer/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {Prop} from "vue-property-decorator";
import ChildContainer from "./ChildContainer.vue";
@Component({
  components: {ChildContainer}
})
export default class ParentContainer extends Vue {

  


}
</script>
