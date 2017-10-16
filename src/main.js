import Vue from 'vue'
import App from './App.vue'
import Router from './routes.js'
import VeeValidate from 'vee-validate'

import VueResource from 'vue-resource'

import Auth from './packages/auth/Auth.js'

Vue.use(VueResource)
Vue.use(Auth)
Vue.use(VeeValidate)

Vue.http.options.root = 'http://back.dev'
Vue.http.headers.common['Authorization'] = 'Bearer ' + Vue.auth.getToken()

Vue.http.interceptors.push((request, next) => {
	next(response =>{
		if(response.status == 404)
			swal(response.status.toString(), response.body.error, "error")
		else if(response.status == 500)
			swal(response.status.toString(), "Server Error!", "error")
	})
})

//navigation gurards
Router.beforeEach(
	(to, from, next) => {
		if(to.matched.some(record => record.meta.forVisitor)){
			if(Vue.auth.isAuthenticated()){
				next({
					path: '/feed'
				})
			} else next()
		} 

		else if(to.matched.some(record => record.meta.forAuth)){
			if(!Vue.auth.isAuthenticated()){
				next({
					path: '/login'
				})
			} else next()
		} 

		else next()
	}
)

new Vue({
  el: '#app',
  render: h => h(App),
  router: Router
})
