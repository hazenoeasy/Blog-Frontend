import Vue from 'vue'
import App from './App'

import router from './router'
import store from './store'

import lodash from 'lodash'
import ElementUI from 'element-ui'

import '@/assets/icon/iconfont.css'
import {formatTime} from "./utils/time";
import '@/assets/theme/index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelopeSquare, faBlog} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithubSquare, faInstagramSquare} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add([faLinkedin,faGithubSquare,faInstagramSquare,faEnvelopeSquare,faBlog])
Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.component('font-awesome-icon',FontAwesomeIcon)
Object.defineProperty(Vue.prototype, '$_', { value: lodash })


Vue.directive('title',  function (el, binding) {
  document.title = el.dataset.title
})
// 格式话时间
Vue.filter('format', formatTime)

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
