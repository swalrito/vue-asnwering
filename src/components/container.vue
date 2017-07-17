<template>
<section>
	<header>
		<span v-if="fatherComponent == 'home'">
		第一周
		</span>
		<span v-if="fatherComponent == 'details'">
		第一题
		</span>
	</header>

	<div v-if="fatherComponent == 'home'">
		<div class="home_logo"></div>
		<router-link to="details" class="btn_start">
		</router-link>		
	</div>

	<div v-if="fatherComponent == 'details'" class="details">
	<div class="details_content">
		<p>题目一</p>
	<ul>
		<li>1111</li>
		<li>2222</li>
		<li>3333</li>
		<li>4444</li>
	</ul>
	</div>
	<span class="button_next"></span>
	</div>
</section>
</template>

<script>
	export default
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
	}
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
.btn_start{
	background: url(../assets/img/1-4.png);
	position: absolute;
	width: 2.31rem;
	height: 1.12rem;
	left: 50%;
	margin-left: -1.15rem;
	bottom: 4.5rem;
}

.details{
	background: url(../assets/img/2-1.png) no-repeat;
	background-size: 100% 100%;
	position: absolute;
	width: 7.04rem;
	height: 6.21rem;
	left: 50%;
	margin-left: -3.5rem;
	top: 50%;
	margin-top: -3.1rem;
}
.details_content{
	position: relative;
	top: 1rem;
	width: 7.04rem;
	height: 6.21rem;
	color: #ffffff;
	font-size: 0.5rem;
	font-weight: lighter;
    font-family: 'Microsoft YaHei';
}
.details_content p{
	position: absolute;
	left: 1rem;
}
.details_content ul{
	position: relative;
	top: 1rem;
}

.button_next{
	display: block;
	position: absolute;
	background: url(../assets/img/2-2.png) no-repeat;
	width: 2.31rem;
	height: 1.12rem;
	left: 50%;
	margin-left: -1.15rem;
}
</style>