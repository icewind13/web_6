var conteiner = document.getElementById('conteiner');
var BigContetnt =document.getElementById('BigContent');
var bigImage =document.createElement('img');

 class gallary extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
        let container=document.createElement('div');
        container.setAttribute('class','conteiner');
        container.setAttribute('id','conteiner');
        let imgUrl;
        let defaultUrl = 'img/unload.jpg';
        imgUrl = this.getAttribute('img').split(',');
        console.log(imgUrl);
        
        for(let i=0;i<imgUrl.length;i++)
        {
            let img = document.createElement('img');
            img.className='rot';
            img.setAttribute('src','img/load.png');
            container.appendChild(img);
            setTimeout(function(){  
                img.setAttribute('src','img/'+imgUrl[i]+'.jpg');
                img.style.width='300px';
                img.style.height='250px';
                img.className='';
                img.onerror = function() {
                    img.setAttribute('src',defaultUrl);
                };
                img.onclick = function(){
                    bigImage.src=this.src;
                    BigContetnt.className='show-block';
                    BigContetnt.append(bigImage);
                }
            },3000);
            
        }
        this.append(container);
    }
 }

 BigContetnt.ondblclick = function ()
        {
            BigContetnt.className='hidden-block';
            setTimeout(function(){BigContetnt.innerHTML=""}, 3000);
        }
 customElements.define('new-gallary', gallary);

 