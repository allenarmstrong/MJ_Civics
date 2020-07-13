var myimages=new Array()
function preloadimages(){
for (i=0;i<preloadimages.arguments.length;i++){
myimages[i]=new Image()
myimages[i].src=preloadimages.arguments[i]
}
}
preloadimages("../imgmod01/intro.jpg","../imgmod01/intro-over.jpg","../imgmod01/traning.jpg","../imgmod01/traning-over.jpg","../imgmod01/activity.jpg","../imgmod01/activity-over.jpg","../imgmod01/01_01a_b.jpg","../imgmod01/01_01a_c.jpg","../imgmod01/01_01a_d.jpg","../imgmod01/01_01a_e.jpg","../imgmod01/01_01a_f.jpg","../imgmod01/01_01a_g.jpg","../imgmod01/01_01a_h.jpg","../imgmod01/01_01a_i.jpg","../imgmod01/01_01a_a.jpg")

var win = null;
function NewWindow(mypage,myname,w,h,scroll){
LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
settings =
'height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable'
win = window.open(mypage,myname,settings)
}