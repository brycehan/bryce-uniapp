<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
onLaunch(() => {
  console.log("App Launch");
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>
<style lang="scss">
.uni-page-body,
page {
  background-color: var(--brc-app-background);
  height: 100%;
  overflow: hidden;
}
</style>
