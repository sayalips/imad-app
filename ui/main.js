//counter code
//var counter=0;
var button=document.getElementById("counter");

button.onclick=function(){
    
    //create req
    var request=new XMLHttpRequest();
    //capture the response and store it in var
   request.onreadystatechange=function(){
    if(request.readyState==XMLHttpRequest.DONE)
    {
        //action
        if(requset.status==200){
            var counter=request.responseText;
              var spam=document.getElementById('count');
    spam.innerHTML=counter.toString();
        }
    }
   };
    //make req
    request.open('GET','http://sayali1696.imad.hasura.app.io/counter',true);
    request.send(null);
};