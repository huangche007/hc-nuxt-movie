<template>
    <div>
     <a-layout-header>
      <a-menu
        theme="dark"
        mode="horizontal"
        :default-selected-keys="[mKey]"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="in_theaters">
          <nuxt-link to="/movie/in_theaters">
            正在热映
          </nuxt-link>
          
        </a-menu-item>
        <a-menu-item key="coming_soon">
          <nuxt-link to="/movie/coming_soon">即将上映</nuxt-link>
        </a-menu-item>
        <a-menu-item key="top250">
           <nuxt-link to="/movie/top250">Top250</nuxt-link>
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    </div>
</template>
<script>
export default {
    computed:{
        mKey(){
           return this.$route.path.split('/')[2];
        }
    }
}
</script>