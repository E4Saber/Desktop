
var c = document.getElementById('fir_canvas');
var ctx = c.getContext('2d');
ctx.lineWidth = 10;
ctx.strokeStyle = 'red';
ctx.beginPath();
ctx.moveTo(10, 10);
ctx.lineTo(150, 50);
ctx.stroke();