<template>
  <div>
    <h5>Hi! I'm a Child</h5>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {Prop} from "vue-property-decorator";


@Component
export default class ChildContainer extends Vue {
  
}
</script>
