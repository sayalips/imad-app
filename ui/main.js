//counter code
var button=document.getElementById("counter");
button.onclick=function(){
    counter=counter+1;
    var spam=document.getElementById("count");
    spam.innerHTML=counter.toString();
};