 var canvas = document.querySelector('#canvas');
 ctx = canvas.getContext('2d');
 ctx.save();
 //fill----内容填充   stroke---边框填充，
 //canvas中关于矩形的：
 // ctx.fillStyle = '#f00';//三种颜色表达式都可以使用,画笔的填充颜色
 // ctx.fillRect(150,150,100,100);//150,150表示的是画图原点，100，100表示的是宽高

 // ctx.fillStyle = 'rgba(0,255,0,0.8)';
 // ctx.fillRect(200,200,100,100);

 // ctx.strokeStyle = 'rgb(0,0,255)';
 // ctx.strokeRect(3.5,3.5,100,300);//填充边框,整数不清楚，带了点五后变得清楚，因为是整数的时候，浏览器不能正确表达半像素，他会在两边多选软两个0.5，所以会模糊

 // ctx.clearRect(200,200,50,50);//清除某一部分，依旧是跟的原点+高宽来清除。

 // ctx.clearRect(0,0,400,400);//清楚整个画布

 // //关于线条的
 // ctx.beginPath();//画笔的路径开始，也可以说是画笔得线
 // ctx.moveTo(200,200);//将原点移动到某个点
 // ctx.lineTo(400,0);//线延伸到某个点，也就是说画了一条线
 // ctx.lineTo(400,200);
 // ctx.lineTo(300,400);

 // // ctx.stroke();//填充这个线
 // ctx.fill(); //填充整个区域，颜色为上面所定义的fillStyle的最后定义的一个，
 // //fill   以色块的形式填充范围
 // //stroke 以线条的形式填充路径
 // //画线的路径建立：beginPath moveTo lineTo

 // ctx.clearRect(0,0,400,400);//清除画布

 // ctx.beginPath();
 // ctx.arc(200,200,100,0,Math.PI*2);//200，200--圆心，100-半径，0-开始的角度，Math.PI*2--结束的角度，false / true;--顺时针/逆时针
 // ctx.fill();//填充整个区域，颜色为上面所定义的fillStyle的最后定义的一个
 // ctx.moveTo(270,200);//上一个画完之后移动画笔到
 // ctx.arc(200,200,70,0,Math.PI);//画一个半圆
 // ctx.moveTo(170,160);
 // ctx.arc(160,160,10,0,Math.PI*2);
 // ctx.moveTo(240,160);
 // ctx.arc(230,160,10,0,Math.PI*2)

 // ctx.stroke();
  
 //  ctx.clearRect(0,0,400,400);
 //http://www.victoriakirst.com/beziertool/-------bezier曲线的生成数据
//花一颗心
 /*ctx.beginPath();
 ctr.moveTo(200,200);
 ctx.bezierCurveTo(166,158,112,198,143,255);
 ctx.stroke();*/

 //随机画无数个带阴影的圆
 //画布和程序的结合
 // ctx.shadowoffsetX = 20;
 // ctx.shadowoffsetY = 20;
 // ctx.shadowBlur = 30;
 // ctx.shadowColor = 'rgba(0,0,0,1)';
 // for (var i = 0; i < 100; i++) {
 // 	ctx.beginPath();
 // 	var xinx = Math.floor(Math.random()*1000);
 // 	var xiny = Math.floor(Math.random()*600);
 // 	var ra = Math.floor(Math.random()*10+10);
 // 	ctx.arc(xinx,xiny,ra,0,Math.PI*2);
 // 	ctx.fillStyle = 'rgba('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+',0.8)';
 // 	ctx.fill();
 // };
 // ctx.clearRect(0,0,1000,600);

 // var x=0;
 // var y=0;
 // var sheedx=2;
 // var sheedy=2;
 // var draw = function(){
 // 	ctx.clearRect(0,0,1000,600);
 // 	ctx.beginPath();
 // 	x +=sheedx;
 // 	y +=sheedy;
 // 	if(x >= 990){
 // 		x=990;
 // 		sheedx *= (-1);
 // 	}
 // 	if(x <= 10){
 // 		x=10;
 // 		sheedx *= (-1);
 // 	}
 // 	if(y >= 590){
 // 		y=590; 		
 // 		sheedy *= (-1);
 // 	}
 // 	if(y <= 10){
 // 		y=10; 		
 // 		sheedy *= (-1);
 // 	}
 // 	ctx.arc(x,y,10,0,Math.PI*2);
 // 	ctx.fill();
 // }
 // setInterval(draw,20);

 // var canvas2 = document.querySelector('#canvas2');
 // var ctx2 = canvas2.getContext('2d');
 // for (var i = 0; i < 10; i++) {
 // 	ctx2.beginPath();
 // 	ctx2.fillStyle='#000';
 // 	ctx2.fillRect(150*i,0,100,100);
 // };

/* var img = new Image();
 img.src = 'imgs/1.jpg';*/
 /*var img = document.querySelector('img');
 img.onload = function(){
 	ctx.drawImage(img,0,0);
 }

 var draw = function(){
 	ctx.clearRect(0,0,1000,600);
 	x+=1;
 	ctx.drawImage(img,x,0);
 }*/
 // setInterval(draw,20);


/* ctx.clearRect(0,0,400,400);

 ctx.restore();

 ctx.save();
 ctx.beginPath();
 ctx.translate(500,300);
 ctx.arc(0,0,100,0,Math.PI*2);
 for (var i = 0; i < 12; i++) {
 	ctx.moveTo(70,0);
 	ctx.rotate(Math.PI/6);
 	ctx.arc(130,0,20,0,Math.PI*2);
 };
 ctx.fill();
 ctx.restore();

 ctx.save();
 ctx.beginPath();
 ctx.moveTo(100,100);
 ctx.lineTo(100,500);
 ctx.moveTo(100,100);
 ctx.lineTo(500,100);
 ctx.stroke();
 ctx.translate(100,100);
 ctx.rotate(Math.PI/6);
 ctx.fillRect(0,0,50,50);
 ctx.fill();*/

 ctx.clearRect(0,0,1000,600);



// var x;
// var i = 1;
// setInterval(function(){
// 	x = Math.PI/30 * i;
// 	i++;
// 	drawClock();
// },1000);
var drawClock = function(){
	var d = new Date();
	var h = d.getHours();
	var m = d.getMinutes();
	var s = d.getSeconds();
	ctx.clearRect(0,0,1000,600);
	//保存一个干净的画布状态
	ctx.save();
	//移动画布原点到中心
	ctx.translate(500,300);
	//表盘最外的圆盘
	ctx.save();
	ctx.shadowoffsetX = 0;
	ctx.shadowoffsetY = 0;
	ctx.shadowBlur = 10;
	ctx.shadowColor = 'rgba(0,0,0,1)';
	ctx.beginPath();
	ctx.strokeStyle = '#2af';
	ctx.lineWidth = 6;
	ctx.arc(0,0,200,0,Math.PI*2);
	ctx.stroke();
	ctx.restore();


	//用循环表盘针
	ctx.save();
	ctx.beginPath();
	ctx.strokeStyle = '#333';
	ctx.lineWidth = 5;
	//花了表盘的内表盘
	ctx.arc(0,0,180,0,Math.PI*2);
	ctx.stroke();
	ctx.lineWidth = 4;
	ctx.lineCap = 'round';
	for (var i = 1; i < 61; i++) {
		ctx.rotate(Math.PI/30);
		ctx.beginPath();
		if(i%5 == 0){
			ctx.lineWidth = 6;
			ctx.moveTo(148,0);
		}else{
			ctx.lineWidth = 4;
			ctx.moveTo(168,0);
		}
		ctx.lineTo(178,0);
		ctx.stroke();
	};

	ctx.restore();

	//时钟时针
	ctx.save();
	ctx.rotate((360*(h*60*60+m*60+s)/43200)/180*Math.PI);
	ctx.beginPath();
	ctx.lineWidth = 12;
	ctx.moveTo(0,20);ctx.lineCap = 'round';
	ctx.lineTo(0,-100);
	ctx.stroke();
	ctx.restore();

	//时钟分针
	ctx.save();
	
	ctx.rotate((360*(m*60+s)/3600)/180*Math.PI);

	ctx.beginPath();
	ctx.strokeStyle = '#000';
	ctx.lineWidth = 8;
	ctx.lineCap = 'round';
	ctx.moveTo(0,20);
	ctx.lineTo(0,-160);
	ctx.stroke();
	ctx.restore();


	
	//表盘秒针
	ctx.save();
	// ctx.rotate(x);
	ctx.rotate(Math.PI/30*s);

	ctx.beginPath();
	ctx.strokeStyle = '#f00';
	ctx.lineWidth = 8;
	ctx.lineCap = 'round';
	ctx.moveTo(0,20);
	ctx.lineTo(0,-150);
	ctx.stroke();
	ctx.moveTo(0,-150);
	ctx.fillStyle = '#f00';
	ctx.arc(0,-100,12,0,Math.PI*2);
	ctx.fill();
	ctx.save();
	ctx.beginPath();
	ctx.fillStyle = '#fff';
	ctx.arc(0,-100,9,0,Math.PI*2);
	ctx.fill();
	ctx.restore();
	//时钟原点嵌套的两个圆
	ctx.save();
	ctx.beginPath();
	ctx.fillStyle = 'red';
	ctx.arc(0,0,10,0,Math.PI*2);
	ctx.fill();
	ctx.restore();
	ctx.save();
	ctx.restore();
	ctx.beginPath();
	ctx.fillStyle = '#535353';
	ctx.arc(0,0,5,0,Math.PI*2);
	ctx.fill();
    ctx.restore();
	

    //复原干净的画布
	ctx.restore();
	requestAnimationFrame(drawClock);
}
	//复原一开始保存的干净的画布状态
	ctx.restore();
 
// drawClock();

requestAnimationFrame(drawClock);