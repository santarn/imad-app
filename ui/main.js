console.log('Loaded!');
var element=document.getElementById('hey');
element.innerHTML="new value";
var img=document.getElementById('ii');
var marginLeft=0;
function moveright()
{
    marginLeft=marginLeft+1;
     img.style.marginLeft=marginLeft+'px';
}
img.onclick=function(){
   var interval=setInterval(moveright,50);
    
};