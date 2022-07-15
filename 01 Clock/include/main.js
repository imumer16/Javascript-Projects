// clock
function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    if(s >= 30){
        document.getElementById("side1").style.color="#ff0000cb";
        document.getElementById("side1").style.transition = "all 2s";
        document.getElementById("side2").style.color="#ff0000cb";
        document.getElementById("side2").style.transition = "all 2s";
        document.getElementById("side3").style.color="#ff0000cb";
        document.getElementById("side3").style.transition = "all 2s";
    }else{
        document.getElementById("side1").style.color="#67dc67cb";
        document.getElementById("side1").style.transition = "all 2s";
        document.getElementById("side2").style.color="#67dc67cb";
        document.getElementById("side2").style.transition = "all 2s";
        document.getElementById("side3").style.color="#67dc67cb";
        document.getElementById("side3").style.transition = "all 2s";
    }
    document.getElementById('side1').innerHTML =  s;
    document.getElementById('side2').innerHTML =  h;
    document.getElementById('side3').innerHTML =  m;
    setTimeout(startTime, 1000);
}
      
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function normal(){
    document.getElementById("D3Cube").style.transform = "rotateX(-22deg) rotateY(-38deg) rotateZ(0deg)";
}

function s1(){
    document.getElementById("D3Cube").style.transform = "rotateX(-90deg)";
}

function s2(){
    document.getElementById("D3Cube").style.transform = "rotate(0deg)";
}

function s3(){
    document.getElementById("D3Cube").style.transform = "rotateY(-90deg)";
}

// Get timestamp on page load
window.onload=startTime();