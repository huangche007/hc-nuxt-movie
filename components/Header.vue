<template>
    <div>
     <a-layout-header>
      <a-menu
        theme="dark"
        mode="horizontal"
        :default-selected-keys="['1']"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">
          <nuxt-link to="/movie/in_theaters">
            正在热映
          </nuxt-link>
          
        </a-menu-item>
        <a-menu-item key="2">
          <nuxt-link to="/movie/coming_soon">即将上映</nuxt-link>
        </a-menu-item>
        <a-menu-item key="3">
           <nuxt-link to="/movie/top250">Top250</nuxt-link>
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    </div>
</template>
<script>
export default {
    
}
</script>