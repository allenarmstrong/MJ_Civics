var delay=5000 //set delay in miliseconds
var curindex=0
var randomimages=new Array()
randomimages[0]="imgmod01/01_01a_b.jpg"
randomimages[1]="imgmod01/01_01a_c.jpg"
randomimages[2]="imgmod01/01_01a_d.jpg"
randomimages[3]="imgmod01/01_01a_e.jpg"
randomimages[4]="imgmod01/01_01a_f.jpg"
randomimages[5]="imgmod01/01_01a_g.jpg"
randomimages[6]="imgmod01/01_01a_h.jpg"
randomimages[7]="imgmod01/01_01a_i.jpg"
randomimages[8]="imgmod01/01_01a_a.jpg"

var preload=new Array()
for (n=0;n<randomimages.length;n++)
{
preload[n]=new Image()
preload[n].src=randomimages[n]
}
document.write('<img name="defaultimage" title="Physical Activity" src="'+randomimages[Math.floor(Math.random()*(randomimages.length))]+'">')
function rotateimage()
{
if (curindex==(tempindex=Math.floor(Math.random()*(randomimages.length)))){
curindex=curindex==0? 1 : curindex-1
}
else
curindex=tempindex
document.images.defaultimage.src=randomimages[curindex]
}
setInterval("rotateimage()",delay)