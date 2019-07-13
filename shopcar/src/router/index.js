import Vue from 'vue'
import Router from 'vue-router'
import HomePage from "../components/homepage"
import Detail from "../components/detail"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      redirect:"/homepage"
    },
    {
      path: '/homepage',
      name: 'homepage',
      component: HomePage
    },{
      path:"/detail/:id",
      component:Detail
    }
  ]
})
