<template>
  <div>
    <ParentContainer/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {Prop} from "vue-property-decorator";
import ParentContainer from "./components/ParentContainer.vue";

@Component({
  components: {ParentContainer}
})
export default class ParentChild extends Vue {


}
</script>
