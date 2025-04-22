(function(){
  const a=document.getElementById('bg-audio');a.volume=0.3;
  const b=`"Ainda que eu ande pelo vale da sombra da morte, não temerei mal algum, porque tu estás comigo” Salmo 23:4`;
  let c=0,d=document.getElementById('verse');
  (function e(){c<b.length?(d.textContent+=b.charAt(c++),setTimeout(e,50)):null})();
  const f=document.querySelectorAll('.gallery img'),
        g=document.createElement('div');
  g.className='modal';
  g.innerHTML='<span class="close">&times;</span><span class="arrow left">&#10094;</span><img src="" alt="Imagem Grande" /><span class="arrow right">&#10095;</span>';
  document.body.appendChild(g);
  const h=g.querySelector('img');
  let i=0;
  const j=new Audio('/sounds/moeda.mp3');
  f.forEach((k,l)=>{k.addEventListener('click',()=>{g.style.display='flex',h.src=k.src,i=l,j.play()})});
  g.querySelector('.close').addEventListener('click',()=>g.style.display='none');
  g.querySelector('.arrow.left').addEventListener('click',()=>{i=(i-1+f.length)%f.length,h.src=f[i].src});
  g.querySelector('.arrow.right').addEventListener('click',()=>{i=(i+1)%f.length,h.src=f[i].src});
  const m=document.querySelector('.instagram-link');
  m.addEventListener('click',()=>{(new Audio('/sounds/eco.mp3')).play()});
  function n(){
    const o=document.getElementById('viewCount');
    if(!o)return;
    o.textContent=Math.floor(Math.random()*29)+3;
  }
  n();setInterval(n,180000);
  document.addEventListener('contextmenu',p=>p.preventDefault());
  document.onkeydown=function(q){if(q.key==="F12"||(q.ctrlKey&&q.shiftKey&&["I","J"].includes(q.key))||(q.ctrlKey&&q.key==="U"))return false};
})();
