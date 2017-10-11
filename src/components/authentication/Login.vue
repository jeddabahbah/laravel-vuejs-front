<template>
	<div class="row">
		<div class="col-md-6 col-md-offset-3">
			<div class="panel panel-default">
				<div class="panel-body">
					<div class="form-group">
						<input type="email" v-model="email" class="form-control" placeholder="Email">
					</div>
					<div class="form-group">
						<input type="password" v-model="password" class="form-control" placeholder="Password">
					</div>
					<button v-on:click="login" class="btn btn-success pull-right">Login</button>
				</div>
			</div>
		</div>
		
			</div>
</template>

<script>
	export default{
		data () {
			return {
				email : '',
				password : '',
			}
		},
		methods: {
			login() {
				var data = {
					client_id: 2,
					client_secret: 'BXrX4oK9f8BAFAE9RWc09l2zk6qkbghZIE84p3tZ',
					grant_type: 'password',
					username: this.email,
					password: this.password,
					scope:''
				}

				this.$http.post("oauth/token", data)
					.then(response => {
						console.log(response)
						this.$auth.setToken(response.body.access_token, response.body.expires_in + Date.now())
						//push path feed after login
						this.$router.push("/feed")
					})

					// .then(function(response){
					// 	console.log(response)
					// })
			}
		}

	}
</script>

<style>
	
</style>
