import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const router = new VueRouter({
	routes:[	
		{
			path: "/login",
			component: require('./components/authentication/Login.vue'),
			meta: { 
				forVisitor: true
			}
		},

		{
			path: "/register",
			component: require('./components/authentication/Register.vue'),
			meta: { 
				forVisitor: true
			}
		},

		{
			path: "/feed",
			component: require('./components/Feed.vue'),
			meta: {
				forAuth: true
			}
		},

		{
			path: "/products/create",
			component: require('./components/product/Create.vue'),
			meta: {
				forAuth: true
			}
		}
	],

	linkActiveClass: 'active',
	
	mode: 'history'
})

export default router