function biaodan()
{
var k=document.getElementById("you").value;
if((k.indexOf("!")==-1)||(k.indexOf("@")==-1)||(k.indexOf("#")==-1))
  {
    alert("密码里不能包含!、@、#等字符");
  }
}