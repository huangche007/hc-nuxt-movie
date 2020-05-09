<template>
  <a-layout id="components-layout-demo-top" class="layout">
    
    <a-layout-content style="padding: 0 50px">
      <div :style="{ background: '#fff', padding: '24px', minHeight: '280px',marginTop:'24px' }">
        Content
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center" class="test">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
  </a-layout>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
#components-layout-demo-top .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}
.test{
  color: red;
}
</style>