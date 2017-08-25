


var subm=document.getElementById('sub');
subm.onclick=function(){
     var request=new XMLHttpRequest();
    request.onreadystatechange=function(){
      if(request.readyState==XMLHttpRequest.DONE)
      {
          if(request.status==200)
          { 
              alert('data stored');
         
}
          }
      
        
    };
   request.open('POST','http://santoshjain2198.imad.hasura-app.io/create-user',true);
   request.send(JSON.stringify({username:santosh,password:password}));
   
   
};