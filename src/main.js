import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//FILTERS
import Year from './filters/date.filter'
import Hour from './filters/hour.filter'
import Minutes from './filters/munutes.filter'
import Seconds from './filters/Seconds.filter'

Vue.filter('Hour',Hour)
Vue.filter('Year',Year)
Vue.filter('Minutes',Minutes)
Vue.filter('Seconds',Seconds)

//ENDFILTERS


Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
