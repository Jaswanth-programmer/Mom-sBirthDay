const memories=[
 ["mom1.jpg","అందమైన జ్ఞాపకం ❤️"],
 ["mom2.jpg","మన కథలో ఒక అందమైన క్షణం"],
 ["mom3.jpg","మీ నవ్వు నాకు ఎప్పుడూ ఇష్టం"],
 ["mom4.jpg","మమ్మీ & నాన్న — ఒక అందమైన జ్ఞాపకం"],
 ["mom5.jpg","ఎప్పటికీ గుర్తుండిపోయే రోజు"],
 ["mom6.jpg","నా ఫేవరెట్ పర్సన్, ఎప్పటికీ"]
];
const gallery=document.getElementById("gallery");
const placements=[
 [-285,-185,-10], [15,-245,6], [290,-170,12],
 [-315,110,8], [25,235,-7], [300,105,-11]
];
memories.forEach(([src,cap],i)=>{
 const b=document.createElement("button"); b.className="card";
 const [x,y,r]=placements[i];
 b.style.setProperty("--x",x+"px");b.style.setProperty("--y",y+"px");b.style.setProperty("--r",r+"deg");b.style.setProperty("--z",i);
 b.innerHTML=`<img src="${src}" alt="${cap}" loading="lazy">`;
 b.onclick=()=>openViewer(src,cap);gallery.appendChild(b);
});
function openViewer(src,cap){
 document.getElementById("viewerImg").src=src;
 document.getElementById("viewerText").textContent=cap;
 document.getElementById("viewer").classList.add("open");
}
function closeViewer(){document.getElementById("viewer").classList.remove("open")}
document.getElementById("close").onclick=closeViewer;
document.getElementById("viewer").onclick=e=>{if(e.target.id==="viewer")closeViewer()};

function hearts(n=70){
 const layer=document.getElementById("heartLayer");
 for(let i=0;i<n;i++){
  const h=document.createElement("span");h.className="float-heart";h.textContent=Math.random()>.18?"♥":"♡";
  h.style.left=(3+Math.random()*94)+"vw";h.style.fontSize=(10+Math.random()*28)+"px";
  h.style.animationDuration=(3.5+Math.random()*4)+"s";h.style.animationDelay=(Math.random()*1.2)+"s";
  layer.appendChild(h);setTimeout(()=>h.remove(),8000);
 }
}
function confetti(){
 const c=document.getElementById("fx"),ctx=c.getContext("2d");c.width=innerWidth;c.height=innerHeight;
 const a=Array.from({length:220},()=>({x:innerWidth/2,y:innerHeight*.45,vx:(Math.random()-.5)*15,vy:-Math.random()*14-4,g:.3,s:2+Math.random()*6,r:Math.random()*6,l:120+Math.random()*80}));
 let f=0;function draw(){ctx.clearRect(0,0,c.width,c.height);a.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.vy+=p.g;p.r+=.12;p.l--;ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.r);ctx.fillStyle=`hsl(${330+Math.random()*45},75%,72%)`;ctx.fillRect(-p.s/2,-p.s/2,p.s,p.s);ctx.restore()});if(f++<180)requestAnimationFrame(draw)}draw();
}
document.getElementById("reveal").onclick=()=>{
 hearts(120);confetti();setTimeout(()=>document.getElementById("story").scrollIntoView({behavior:"smooth"}),650);
};
document.getElementById("celebrate").onclick=()=>{hearts(180);confetti()};
window.addEventListener("resize",()=>{const c=document.getElementById("fx");c.width=innerWidth;c.height=innerHeight});
