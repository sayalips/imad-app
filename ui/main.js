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
        if(request.status===200){
            var counter=request.responseText;
            counter=counter+1;
              var spam=document.getElementById('count');
    spam.innerHTML=counter.toString();
        }
    }
   };
    //make req
    request.open('GET','http://sayali1696.imad.hasura-app.io/counter',true);
    request.send(null);
};
//submit  name

var submit=document.getElementById('Submit_btn');
submit.onclick=function()
{
    
     var request=new XMLHttpRequest();
    //capture the response and store it in var
   request.onreadystatechange=function(){
    if(request.readyState==XMLHttpRequest.DONE)
    {
        //action
        if(request.status===200){
            
            
                
    var names=request.responseText;
    names=JSON.parse(names);
    var list='';
    for(var i=0;i<names.length;i++)
    {
        list +='<li>'+names[i]+'</li>';
    }
   var ul=document.getElementById('namelist');
   ul.innerHTML=list;
           
        }
    }
    
   };
    var nameInput=document.getElementById('name');
var name =nameInput.value;
 request.open('GET','http://sayali1696.imad.hasura-app.io/submit-name?name='+ name,true);
    request.send(null);
};   

}
