<template>
	<div>
		<div class="score_header">
			<div class="score">
				<span class="score_num">{{score}}</span>
				<span class="score_num">分！</span>
			</div>
			<div class="comment">
				<span>{{scoreTip}}</span>
			</div>
		</div>
		<div class="share" @click="showShare">
		</div>
		<div class="QRcode">
			<p>扫描二维码获取答案</p>
			<img src="../../assets/img/4-4.png">
		</div>
		<div class="share_display" v-if="display" @click="showShare">
			<img src="../../assets/img/5-2.png">
		</div>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	export default{
		name:'score',
		created(){
			this.computScore();
			document.body.style.backgroundImage = 'url(/static/img/4-1.jpg)';
		},
		data(){
			return {
				display:0 ,//分享页面是否显示
				score:0,//成绩
				scoreTip:'',//显示的成绩评语
				message:['回去看看书好吗！','你说，是不是把知识都还给小学老师了？','还不错，但还需要继续加油哦！','不要嘚瑟还有进步的空间！','智商离爆表只差一步了！','你也太聪明啦，葡萄之家欢迎你！']//成绩最后的评语
			}
		},
		methods:{
			showShare(){
				this.display=!this.display;
			},
			computScore(){
				//返回正确答案//
				this.score=this.answer.filter(function(item,index){
					return (item.is_true>0);
				});
				//计算分数//
				const num=this.score.length;
				this.score=num*20;
				//根据分数选择评语//
				this.scoreTip=this.message[num];
			}
		},
		computed:mapState([
			"answer"//答案对象
			])
	}
</script>

<style>
html{
	height: 100%;
}
body{
	background:url(../../assets/img/4-1.jpg);
	-webkit-background-size: 100% 100%;
	background-size: 100% 100%;
	width: 100%;
	height: 100%;
}
.score_header{
	background: url(../../assets/img/4-2.png) no-repeat;
	background-size: 100% 100%;
	position: relative;
	margin: 0 auto;
	width: 6rem;
	height: 6.3rem;
}
.score{
	position: relative;
	top: 3rem;
	left: 2.1rem;

}
.score .score_num{
	font-family: Tahoma,Helvetica,Arial;
    color: #a51d31;
    font-size: 0.8rem;
    -webkit-text-stroke: 0.05rem #412318;
}
.comment{
	position: absolute;
    width: 5rem;
    left: 0.5rem;
    top: 4.8rem;
    color: #3e2415;
    font-size:0.4rem;
    text-align: center;
}
.share{
	position: relative;
	background: url(../../assets/img/4-3.png) no-repeat;
	background-size: 100% 100%;
	top: 0.8rem;
	width: 3.11rem;
	height: 1.28rem;
	margin: 0 auto;
}
.QRcode{
	position: relative;
	top: 1.2rem;
}
.QRcode p{
	color: #664718;
    font-size: 0.475rem;
    font-family: 'Microsoft YaHei';
    font-weight: 500;
    width: 7rem;
    text-align: center;
    margin:0 auto;
    margin-bottom: 0.13rem;
    
}
.QRcode img{
	margin: 0 auto;
}
.share_display{
	background: url(../../assets/img/5-1.png);
	-webkit-background-size: 100% 100%;
	background-size: 100% 100%;
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
}
.share_display img{
	position: absolute;
	width: 6.37rem;
	height: 5.85rem;
	left: 50%;
	margin-left: -3.15rem;
}
</style>