
var c=document.getElementById("huitu");
var w=c.getContext("2d");
var y=w.createLinearGradient(0,0,1400,800);
y.addColorStop(0.3,"#FF69B4");
y.addColorStop(1,"#808080");
w.fillStyle=y;
w.fillRect(0,0,1400,800);

function zhuce()
{
k=document.getElementById("zh").value;
m=document.getElementById("mm").value;
getElementById(z).firstchild.nodevalue=k
getElementById(m).firstchild.nodevalue=m
alert("window.ע��ɹ�"); 
window.open("dengluyemian.html")
}


function denglu()
{
 n=document.getElementById("zhanghao").value;
 x=document.getElementById("mima").value;
 g=getElementById(z)
 d=getElementById(m)
if(!(g===k)||!(d===m))
  {
    alert("window.�˺Ż��������"); 
  }
 else
    {
      window.open("../pe.html")
     }
}
