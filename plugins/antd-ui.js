// 同时参考 Nuxt-cli 创建项目时 创建的 plugin/antd-ui.js
import Vue from 'vue'
import Button from 'ant-design-vue/lib/button'; 
import Menu from 'ant-design-vue/lib/menu'; 
import Card from 'ant-design-vue/lib/card'; 
import Breadcrumb from 'ant-design-vue/lib/breadcrumb'; 
import Layout from 'ant-design-vue/lib/layout'; 

Vue.use(Button)
Vue.use(Menu)
Vue.use(Card)
Vue.use(Breadcrumb)
Vue.use(Layout)