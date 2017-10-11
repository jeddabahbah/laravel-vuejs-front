import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from './components/authentication/Login.vue'
import Register from './components/authentication/Register.vue'
import Feed from './components/Feed.vue'

Vue.use(VueRouter)

const router = new VueRouter({
	routes:[	
		{
			path: "/login",
			component: Login,
			meta: { 
				forVisitor: true
			}
		},

		{
			path: "/register",
			component: Register,
			meta: { 
				forVisitor: true
			}
		},

		{
			path: "/feed",
			component: Feed,
			meta: {
				forAuth: true
			}
		}
	]
})

export default router