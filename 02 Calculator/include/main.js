var integer1=0;
document.getElementById("num1").addEventListener("click",()=>{
    integer1=document.getElementById("screen").value;
    document.getElementById("screen").value= integer1+"1";
});
document.getElementById("num2").addEventListener("click",()=>{
    integer1=document.getElementById("screen").value;
    document.getElementById("screen").value= integer1+"2";
});
document.getElementById("num3").addEventListener("click",()=>{
    integer1=document.getElementById("screen").value;
    document.getElementById("screen").value= integer1+"3";});
document.getElementById("num4").addEventListener("click",()=>{
    integer1=document.getElementById("screen").value;
    document.getElementById("screen").value= integer1+"4";
});
document.getElementById("num5").addEventListener("click",()=>{
    integer1=document.getElementById("screen").value;
    document.getElementById("screen").value= integer1+"5";
});
document.getElementById("num6").addEventListener("click",()=>{
    integer1=document.getElementById("screen").value;
    document.getElementById("screen").value= integer1+"6";});
document.getElementById("num7").addEventListener("click",()=>{
    integer1=document.getElementById("screen").value;
    document.getElementById("screen").value= integer1+"7";
});
document.getElementById("num8").addEventListener("click",()=>{
    integer1=document.getElementById("screen").value;
    document.getElementById("screen").value= integer1+"8";
});
document.getElementById("num9").addEventListener("click",()=>{
    integer1=document.getElementById("screen").value;
    document.getElementById("screen").value= integer1+"9";
});
document.getElementById("num0").addEventListener("click",()=>{
    integer1=document.getElementById("screen").value;
    document.getElementById("screen").value= integer1+"0";
});
document.getElementById("add").addEventListener("click",()=>{
    integer1=document.getElementById("screen").value;
    document.getElementById("screen").value= integer1+"+";
});
document.getElementById("sub").addEventListener("click",()=>{
    integer1=document.getElementById("screen").value;
    document.getElementById("screen").value= integer1+"-";
});
document.getElementById("multi").addEventListener("click",()=>{
    integer1=document.getElementById("screen").value;
    document.getElementById("screen").value= integer1+"*";
});
document.getElementById("divide").addEventListener("click",()=>{
    integer1=document.getElementById("screen").value;
    document.getElementById("screen").value= integer1+"/";
});



document.getElementById("equal").addEventListener("click",()=>{
    let str=document.getElementById("screen").value;
    var result=eval(str);
    document.getElementById("screen").value=result;
});


  

document.getElementById("point").addEventListener("click",()=>{
    integer1=document.getElementById("screen").value;
    document.getElementById("screen").value= "";
});




 
document.addEventListener("keypress", function(event) {
  if (event.key === "1") {
    event.preventDefault();
    document.getElementById("num1").click();
  }
  else if (event.key === "2") {
    event.preventDefault();
    document.getElementById("num2").click();
  }
  else if (event.key === "3") {
    event.preventDefault();
    document.getElementById("num3").click();
  }
  else if (event.key === "4") {
    event.preventDefault();
    document.getElementById("num4").click();
  }
  else if (event.key === "5") {
    event.preventDefault();
    document.getElementById("num5").click();
  }
  else if (event.key === "6") {
    event.preventDefault();
    document.getElementById("num6").click();
  }
  else if (event.key === "7") {
    event.preventDefault();
    document.getElementById("num7").click();
  }
  else if (event.key === "8") {
    event.preventDefault();
    document.getElementById("num8").click();
  }
  else if (event.key === "9") {
    event.preventDefault();
    document.getElementById("num9").click();
  }
  else if (event.key === "0") {
    event.preventDefault();
    document.getElementById("num0").click();
  }
  else if (event.key === ".") {
    event.preventDefault();
    document.getElementById("point").click();
  }
  else if (event.key === "+") {
    event.preventDefault();
    document.getElementById("add").click();
  }
  else if (event.key === "-") {
    event.preventDefault();
    document.getElementById("sub").click();
  }
  else if (event.key === "*") {
    event.preventDefault();
    document.getElementById("multi").click();
  }
  else if (event.key === "/") {
    event.preventDefault();
    document.getElementById("divide").click();
  }
  else if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("equal").click();
  }
  else if (event.key === "(") {
    integer1=document.getElementById("screen").value;
    document.getElementById("screen").value=integer1+ "(";
  }
  else if (event.key === ")") {
    integer1=document.getElementById("screen").value;
    document.getElementById("screen").value=integer1+ ")";
  }
  else{
    console.log(" Invalid Key Pressed!!! \n User-Error(001) \n Key: "+event.key);
    event.preventDefault();
  }
});