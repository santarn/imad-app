
var subm=document.getElementById('sub');
subm.onclick=function(){
     var request=new XMLHttpRequest();
    request.onreadystatechange=function(){
      if(request.readyState==XMLHttpRequest.DONE)
      {
          if(request.status==200)
          {alert('INININININ');
          }
          else
          {
              alert('kuch toh gadbad hai');
          }
      }
        
    };
var username=document.getElementById('username').value;
var password=document.getElementById('password').value;
   
   request.open('POST','http://santoshjain2198.imad.hasura-app.io/login',true);
   request.setRequestHeader('Content-Type','application/json');
   request.send(JSON.stringify({username:username,password:password}));
   
   
};