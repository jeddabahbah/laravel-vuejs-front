<template>
	<div class="col-md-4">
		<div class="thumbnail">
			<img :src="'http://back.dev/images/' + itemproduct.image">

			<div class="caption">
				<h4>{{ itemproduct.user_id }}</h4>
				<h3>{{ itemproduct.name }}</h3>
				<p>{{ itemproduct.price }}</p>

				<!-- <hr>

				<p>
					<a href="#" class="btn btn-default">
						Wish list
					</a>
					<a href="#" class="btn btn-success">
						Buy
					</a>
				</p> -->

				<hr>

				<p v-if="itemproduct.user_id == authenticatedUser.id">
					<a class="btn btn-danger" role="button"
						v-on:click="$emit('delete-item')">Delete</a>

					<router-link class="btn btn-primary" 
						:to="'/products/' + itemproduct.id + '/edit' ">Edit</router-link>

				</p>

			</div>
		</div>
	</div>
</template>

<script>

	export default {
		props: ['itemproduct','authenticatedUser']
	}
</script>