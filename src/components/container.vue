<template>
<section>
	<header>
		<span v-if="fatherComponent == 'home'">
		第一周
		</span>
		<span v-if="fatherComponent == 'details'">
		题目{{itemNum}}
		</span>
	</header>

	<div v-if="fatherComponent == 'home'">
		<div class="home_logo"></div>
		<router-link to="details" class="btn_start">
		</router-link>		
	</div>

	<div v-if="fatherComponent == 'details'" class="details">
	<div class="details_content">
		<p>{{itemDetails[itemNum-1].topic_name}}</p>
	<ul>
		<li v-for="(item,index)  in itemDetails[itemNum-1].topic_answer" @click="choosed(item.topic_answer_id)" class="clearfloat">
		<span :class="{hasChoosed:choose_id==(index+1)}" class="index_button">{{chooseName(index)}}</span>
		<span class="answer_name">{{item.topic_answer_name}}</span>
		</li>
	</ul>
	</div>
	<span class="button next_button" @click="nextQuestion(this.choose_id)" v-if="itemNum < itemDetails.length"></span>
	<span class="button submit_button" @click="nextQuestion(this.choose_id)" v-else></span>
	</div>
</section>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default{
		data(){
 		return {
 			choose_id:null //选中的选项
 		} 
		},
		name:'container',
		props:['fatherComponent'],
		methods:{
			...mapActions(['addNum']),
			chooseName:type =>{
				switch (type) {
					case 0:return 'A';
					case 1:return 'B';
					case 2:return 'C';
					case 3:return 'D';
				}
			},
			nextQuestion() {
					//判断是否选择了答案//
				if(this.choose_id != null)
				{
					
					this.addNum(this.choose_id);
					this.choose_id=null;

				}
				else{
					alert("您还没有选择任何选项");
				}
			},
			choosed(num){
				this.choose_id=num;
			}
		},
		computed: mapState([
	  	'itemNum', //第几题
  		'level', //第几周
  		'itemDetails', //题目详情
	]),
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
	background: url(../assets/img/1-4.png) no-repeat;
	background-size: 100% 100%;
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
	left: 1.5rem;
}
.details_content ul li .hasChoosed{
	background-color: #ffd400;
	color: #575757;
	border-color: #ffd400;
}
.details_content span{
	float: left;
	margin-right: 0.67rem;
}
.details_content .index_button{
	display: inline-block;
	width: 0.67rem;
	height: 0.67rem;
	box-sizing: border-box;
	border-radius: 0.33rem 0.33rem;
}
.button{
	display: block;
	position: absolute;
	width: 2.31rem;
	height: 1.12rem;
	left: 50%;
	margin-left: -1.15rem;
}
.next_button{
	background: url(../assets/img/2-2.png) no-repeat;
}
.submit_button{
	background: url(../assets/img/3-1.png) no-repeat;
}
</style>