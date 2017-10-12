<template>
	<div>
		<my-itemproduct 
			v-for="product in products"
			@delete-item="deleteItem(product)"
			:authenticatedUser="authenticatedUser"
			:itemproduct="product"> <!-- : <-pass the object -->
		</my-itemproduct>
	</div>
</template>

<script>
	import swal from 'sweetalert'
	import Product from './Product.vue'
	export default {
		data() {
			return {
				products: [],
			}
		},

		computed: {
			authenticatedUser() {
				return this.$auth.getAuthenticatedUser()
			}
		},

		components:{
			'my-itemproduct': Product
		},

		methods: {

			deleteItem (product){
				//console.log(product)
				swal({
					  title: "Are you sure?",
					  text: "Once deleted, you will not be able to recover this imaginary file!",
					  icon: "warning",
					  buttons: true,
					  dangerMode: true,
					})
					.then((willDelete) => {
					  if (willDelete) {
					  	this.$http.delete("api/products/" + product.id)
					  		.then(response => {
					  			//console.log(response)
					  			let index = this.products.indexOf(product)

					  			this.products.splice(index, 1)

					  			swal("Poof! Your imaginary file has been deleted!", {
								      icon: "success",
								    });
					  		})
					  } else {
					    swal("Your imaginary file is safe!");
					  }
					});
			}
		},

		created() {
			this.$http.get("api/products")
				.then(response => {
					this.products = response.body
				})
		}
	}
</script>