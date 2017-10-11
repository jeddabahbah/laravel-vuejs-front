<template>
	<div class="col-md-4">
		<div class="thumbnail">
			<img src="http://th.seaicons.com/wp-content/uploads/2015/08/blue-user-icon.png" alt="">

			<div class="caption">
				<h4>{{ itemproduct.user_id }}</h4>
				<h3>{{ itemproduct.name }}</h3>
				<p>{{ itemproduct.price }}</p>

				<hr>

				<p>
					<a href="#" class="btn btn-default">
						Wish list
					</a>
					<a href="#" class="btn btn-success">
						Buy
					</a>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	
	export default {
		props: ['itemproduct']
	}
</script>