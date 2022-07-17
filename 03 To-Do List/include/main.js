
document.getElementById("add").addEventListener("click",()=>{
  var temp=document.getElementById("screen").value;
  if(temp != ""){
    var temp1=document.getElementById("display").value;
    if(temp1 === undefined){ 
      document.getElementById("display").innerHTML= temp;
      document.getElementById("display").value= temp;
    }else{
      document.getElementById("display").innerHTML= temp1+"<br>"+temp;
      document.getElementById("display").value= temp1+"<br>"+temp;
    }
  }
});


 
document.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("add").click();
  }
});