import Vue from 'vue'
import Router from 'vue-router'
import Slider from '@/components/Slider'
import VueTouch from 'vue-touch';

import VueCarousel from 'vue-carousel';

Vue.use(VueCarousel);

Vue.use(Router)
Vue.use(VueTouch);


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Slider',
      component: Slider
    }
  ]
})
