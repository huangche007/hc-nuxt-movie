<template>
  <a-layout id="components-layout-demo-top" class="layout">

  </a-layout>
</template>

<script>
export default {
  asyncData({ redirect }) {
    redirect('/movie/in_theaters')
  }
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