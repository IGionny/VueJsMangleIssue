<template>
  <span style="display:contents">
     <i class="jstree-icon jstree-themeicon jstree-themeicon-custom"
        role="presentation"></i>
    <span>
        {{ NodeItem.Value.Name }}
    </span>
    
    <span>
      {{NodeItem.Value.CoolLevel}}
    </span>
    
    <span
      v-if="CustomNode.ExpireAt"
      class="text-truncate badge badge-pill ml-1 treenodeexpiry"
      :class="{'badge badge-pill badge-danger' : ExpirySituation === ExpiryStatus.Expired,
          'badge badge-pill badge-warning' : ExpirySituation === ExpiryStatus.Expiring }">
            {{ CustomNode.ExpireAt}}
          </span>
        <span v-else class="d-inline-flex ml-1 treenodeexpiry">&nbsp;</span>
    
  </span>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {Prop} from "vue-property-decorator";
import {ICustomTreeItem} from "../../@types/ICustomTreeItem";
import {IMyTreeDataNode} from "../../@types/IMyTreeDataNode";
import {ExpiryStatus} from "../../@types/enums/ExpiryStatus";
import moment from "moment";

@Component
export default class CustomNode extends Vue {

  @Prop({required: true, type: Object}) NodeItem !: IMyTreeDataNode<ICustomTreeItem>;


  ExpiryStatus = ExpiryStatus;
  
  get CustomNode(): ICustomTreeItem | null {
    if (!this.NodeItem) return null;
    return this.NodeItem.Value as ICustomTreeItem;
  }


  get ExpirySituation(): ExpiryStatus {
    if (this.CustomNode === null || this.CustomNode.ExpireAt === null || !this.CustomNode.ExpireAt) {
      return ExpiryStatus.NotExpired;
    }
    const m = moment.utc(this.CustomNode.ExpireAt);
    if (m < moment.utc()) {
      return ExpiryStatus.Expired;
    }
    const days = m.diff(moment.utc(), 'days');
    if (days < 30) {
      return ExpiryStatus.Expiring;
    }
    return ExpiryStatus.NotExpired;
  }
}
</script>