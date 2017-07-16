<template>
<section>
	<header>
		<span v-if="fatherComponent == home">
		第一周
		</span>
	</header>

	<div v-if="fatherComponent == home">
		<div class="home_logo">
		<router-link to="item">
			<img src="../assets/img/1-4.png" class="btn_start">
		</router-link>
			
		</div>
	</div>
</section>
</template>

<script>
	export default[
	{
		name:'container',
		props:['fatherComponent'],
		method:{

		},
		computed:{

		},
		created()
		{
			//初始化信息//
		
		}
	}]
</script>

<style>
html{
	height: 100%;
	margin: 0;
	padding: 0;
}
body{
	position: absolute;
	background-image: url(../assets/img/1-1.jpg);
	background-repeat: no-repeat;
	height: 100%;
	width: 100%;
	background-size: 100% 100%;
	margin: 0;
	padding: 0;
}
header
{
	position: absolute;
	background: url(../assets/img/1-3.png) no-repeat;
	background-size: 100% 100%;
	width: 3.01rem;
    height: 6.29rem;
	right:0.53rem;
	top: -0.5rem;
}
header span{
	position: absolute;
	padding:0;
	margin:0;
	bottom: 0.75rem;
	left: 0.45rem;
	font-size: 0.6rem;
    font-family: '\9ED1\4F53';
    font-weight: 600;
    color: #a57c50;
    text-align: center;
}

.home_logo{
	position: absolute;
	background: url(../assets/img/1-2.png) no-repeat;
	background-size: 100% 100%;
	width: 10rem;
	height:8rem;
	left: 50%;
	top: 50%;
	margin-left: -5rem;
	margin-top: -4rem;
}
.home_logo .btn_start{
	position: absolute;
	width: 2.31rem;
	height: 1.12rem;
	left: 50%;
	margin-left: -1.15rem;
	bottom: 0.13rem;
}
</style>