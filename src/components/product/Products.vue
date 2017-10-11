<template>
	<div>
		<my-itemproduct 
			v-for="product in products"
			:itemproduct="product"> <!-- : <-pass the object -->
		</my-itemproduct>
	</div>
</template>

<script>
	import Product from './Product.vue'
	export default {
		data() {
			return {
				products: []
			}
		},

		components:{
			'my-itemproduct': Product
		},

		created() {
			this.$http.get("api/products")
				.then(response => {
					this.products = response.body
				})
		}
	}
</script>