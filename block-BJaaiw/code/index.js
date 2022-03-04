let canvas = document.querySelector('canvas');
 let c = canvas.getContext('2d');
 c.fillStyle = "blue";
 c.fillRect(0,0 ,60,10);
 c.fillRect(70,0 ,60,10);
 c.fillRect(140,0 ,60,10);
 c.fillRect(210,0 ,60,10);
 c.fillRect(0,20 ,60,10);
 c.fillRect(70,20,60,10);
 c.fillRect(140,20 ,60,10);
 c.fillRect(210,20,60,10);
 c.fillRect(0,40 ,60,10);
 c.fillRect(0,40 ,60,10);
 c.fillRect(70,40 ,60,10);
 c.fillRect(140,40 ,60,10);
 c.fillRect(210,40 ,60,10);
 c.fillRect(100,140 ,60,10);


c.beginPath();
c.arc(300,300,30,0,Math.PI*2,false);

c.stroke();