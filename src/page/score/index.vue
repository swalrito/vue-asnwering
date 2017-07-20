<template>
	<div>
		<header>
			<div class="score">
				<span class="score_num">20</span>
				<span class="score_num">分！</span>
			</div>
			<div class="comment">
				<span>你说，你是不是把学得都还给老师了</span>
			</div>
		</header>
		<div class="share"></div>
		<div class="QRcode">
			<p>扫描二维码获取答案</p>
			<img src="../../assets/img/4-4.png" >
		</div>
	</div>
</template>

<script>
	
</script>

<style>
html{
	height: 100%;
	margin: 0;
	padding: 0;
}
body{
	background:url(../../assets/img/4-1.jpg) no-repeat;
	background-size: 100% 100%;
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
	padding-top: 1rem;
}
header{
	background: url(../../assets/img/4-2.png) no-repeat;
	background-size: 100% 100%;
	position: relative;
	margin: 0 auto;
	width: 6rem;
	height: 6.3rem;
}
header .score{
	position: absolute;
	top: 3rem;
	left: 2.1rem;

}
header .score .score_num{
	font-family: Tahoma,Helvetica,Arial;
    color: #a51d31;
    font-size: 0.8rem;
    -webkit-text-stroke: 0.05rem #412318;
}
header .comment{
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
</style>