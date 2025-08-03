import{g as e,r as t,j as n,c as i}from"./three-DPdPuE_v.js";import{r as o,d as r,m as a}from"./ui-Bxzja_lu.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)}).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const s=e(o()),l={accent:{primary:"#97c0ee"},text:{primary:"#FFFFFF"},utils:{primaryAccent30:"rgba(74, 158, 255, 0.3)",primaryAccent60:"rgba(74, 158, 255, 0.6)",secondaryAccent40:"rgba(125, 211, 252, 0.4)"},gradients:{primary:"linear-gradient(135deg, #0B1426 0%, #1A2332 100%)"}},c={hueMin:210,hueMax:250},d=r.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${l.gradients.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${l.text.primary};
  text-align: center;
  padding: 20px;
`;class h extends t.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e,t){console.error("3D Background Error:",e,t)}render(){return this.state.hasError?n.jsx(d,{children:n.jsxs("div",{children:[n.jsx("h2",{children:"Loading beautiful background..."}),n.jsx("p",{children:"Fallback mode active for optimal performance"})]})}):this.props.children}}const m=a`
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(180deg);
  }
`,u=a`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,p=r.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
  background: ${l.gradients.primary};
  animation: ${u} 0.5s ease-out;
  overflow: hidden;
`,y=r.div`
  position: absolute;
  left: ${e=>e.left}%;
  top: ${e=>e.top}%;
  width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  border: 1px solid ${l.utils.primaryAccent30};
  border-radius: 50%;
  animation: ${m} ${e=>3+e.delay}s ease-in-out infinite;
  animation-delay: ${e=>e.delay}s;
  opacity: 0.6;
`,f=r.div`
  position: absolute;
  left: ${e=>e.left}%;
  top: ${e=>e.top}%;
  color: ${l.utils.secondaryAccent40};
  font-size: 24px;
  font-family: 'Courier New', monospace;
  animation: ${m} ${e=>4+e.delay}s ease-in-out infinite;
  animation-delay: ${e=>e.delay}s;
  user-select: none;
`,g=t.memo(function(){return n.jsxs(p,{children:[[{size:20,left:10,top:20,delay:0},{size:15,left:80,top:30,delay:.5},{size:25,left:20,top:70,delay:1},{size:18,left:70,top:80,delay:1.5},{size:22,left:50,top:10,delay:2}].map((e,t)=>n.jsx(y,{size:e.size,left:e.left,top:e.top,delay:e.delay},`element-${t}`)),[{symbol:"<div>",left:15,top:40,delay:.2},{symbol:"CSS",left:85,top:60,delay:.8},{symbol:"JS",left:75,top:15,delay:1.8},{symbol:"TS",left:40,top:25,delay:2.2},{symbol:"<JSX>",left:60,top:75,delay:2.6},{symbol:"[]",left:90,top:40,delay:3},{symbol:"()",left:25,top:60,delay:3.4}].map((e,t)=>n.jsx(f,{left:e.left,top:e.top,delay:e.delay,children:e.symbol},`symbol-${t}`))]})}),x=r.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 24px;
  color: white;
  position: relative;
`,v=r.h1`
  font-size: clamp(2.5rem, 8vw, 4rem);
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 700;
  color: ${l.accent.primary};
`,w=r.div`
  font-size: 1.25rem;
  line-height: 1.6;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;

  span {
    font-size: inherit;
    font-weight: 300;
  }
`,b=r.p`
  font-size: 1.5rem;
  margin-bottom: 3rem;
  opacity: 0.9;
  font-weight: 600;
  text-align: center;
`,M={autoStart:!0,delay:20,deleteSpeed:.1};function $(){const[e,i]=t.useState(!1);t.useEffect(()=>{const e=()=>{"requestIdleCallback"in window?requestIdleCallback(()=>{setTimeout(()=>i(!0),300)},{timeout:2e3}):setTimeout(()=>{setTimeout(()=>i(!0),300)},800)};requestAnimationFrame(()=>{requestAnimationFrame(e)})},[]);const o=t.useMemo(()=>e=>{e.typeString("<span>I build web apps with clean code and creative design, focusing on performance and innovation. </span>").pauseFor(500).changeDelay(30).typeString("<span>I am committed to delivering exceptional digital solutions</span>").pauseFor(1e3).deleteChars(56).changeDelay(18).typeString("<span>just make nice things for the web, let's create something amazing together!</span>").start()},[]);return n.jsxs(x,{children:[n.jsx(g,{}),e&&n.jsx(h,{children:n.jsx(t.Suspense,{fallback:null,children:n.jsx("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"auto",zIndex:-1},children:n.jsx("canvas",{ref:e=>{if(!e)return;const t=e.getContext("2d");if(!t)return;e.width=window.innerWidth,e.height=window.innerHeight;const n=[],i={x:0,y:0,isMoving:!1};let o,r;const a={x:0,y:0,targetX:0,targetY:0},s=180;let d=0;for(let l=0;l<40;l++){const t=2.5*Math.random()+1.5;n.push({x:Math.random()*e.width,y:Math.random()*e.height,vx:.2*(Math.random()-.5),vy:.2*(Math.random()-.5),size:t,originalSize:t,hue:Math.random()*(c.hueMax-c.hueMin)+c.hueMin})}let h=0;const m=(t,n)=>{const r=performance.now();if(r-h<16)return;h=r;const s=e.getBoundingClientRect();i.x=t-s.left,i.y=n-s.top,i.isMoving=!0;const l=e.width/2,c=e.height/2,d=(i.x-l)/l,m=(i.y-c)/c;a.targetY=15*d,a.targetX=15*-m,clearTimeout(o),o=setTimeout(()=>{i.isMoving=!1,a.targetX=0,a.targetY=0},200)},u=e=>{m(e.clientX,e.clientY)},p=e=>{if(e.preventDefault(),e.touches.length>0){const t=e.touches[0];m(t.clientX,t.clientY)}},y=e=>{if(e.touches.length>0){const t=e.touches[0];m(t.clientX,t.clientY)}},f=e.parentElement;f&&(f.addEventListener("mousemove",u),f.addEventListener("touchmove",p,{passive:!1}),f.addEventListener("touchstart",y)),e.addEventListener("mousemove",u),e.addEventListener("touchmove",p,{passive:!1}),e.addEventListener("touchstart",y),function o(){if(!t||!e)return;if(d++,d%2!=0)return void(r=requestAnimationFrame(o));a.x+=.36*(a.targetX-a.x),a.y+=.36*(a.targetY-a.y),e.style.transform=`perspective(1000px) rotateX(${a.x}deg) rotateY(${a.y}deg)`,t.clearRect(0,0,e.width,e.height);const h=i.x,m=i.y;n.forEach((i,o)=>{const r=h-i.x,a=m-i.y,d=r*r+a*a,u=32400;if(d<u){const e=Math.sqrt(d),t=(s-e)/s,n=Math.atan2(a,r);i.vx-=Math.cos(n)*t*.06,i.vy-=Math.sin(n)*t*.06,i.size=i.originalSize*(1+1.2*t),i.hue=i.hue+1.5*t}else i.size+=.08*(i.originalSize-i.size),i.hue+=.005*(Math.random()*(c.hueMax-c.hueMin)+c.hueMin-i.hue);i.vx*=.96,i.vy*=.96,i.x+=i.vx,i.y+=i.vy,i.x<0?i.x=e.width:i.x>e.width&&(i.x=0),i.y<0?i.y=e.height:i.y>e.height&&(i.y=0),t.beginPath(),t.arc(i.x,i.y,i.size,0,2*Math.PI);const p=d<u,y=p?.9:.6,f=p?90:70,g=p?70:50;t.fillStyle=`hsla(${Math.floor(i.hue)}, ${f}%, ${g}%, ${y})`,t.fill();for(let e=o+1;e<n.length;e++){const o=n[e],r=i.x-o.x,a=i.y-o.y,s=r*r+a*a;if(s<14400){const e=Math.sqrt(s);t.beginPath(),t.moveTo(i.x,i.y),t.lineTo(o.x,o.y);const n=.1*(1-e/120),r=(h-i.x)**2+(m-i.y)**2<u||(h-o.x)**2+(m-o.y)**2<u,a=n*(r?2.5:1);t.strokeStyle=`${l.utils.primaryAccent60.replace("0.6",`${Math.min(a,.6)}`)}`,t.lineWidth=r?1.3:1,t.stroke()}}}),r=requestAnimationFrame(o)}();const g=()=>{e&&(e.width=window.innerWidth,e.height=window.innerHeight,n.forEach(t=>{t.x>e.width&&(t.x=Math.random()*e.width),t.y>e.height&&(t.y=Math.random()*e.height)}))};return window.addEventListener("resize",g),()=>{r&&cancelAnimationFrame(r),e&&(e.style.transform=""),window.removeEventListener("resize",g),e.removeEventListener("mousemove",u),e.removeEventListener("touchmove",p),e.removeEventListener("touchstart",y),f&&(f.removeEventListener("mousemove",u),f.removeEventListener("touchmove",p),f.removeEventListener("touchstart",y)),clearTimeout(o)}},style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",cursor:"pointer",touchAction:"none",transformOrigin:"center center",transformStyle:"preserve-3d"}})})})}),n.jsx(v,{children:"Dariusz Berer"}),n.jsx(b,{children:"Frontend Developer"}),n.jsx(w,{children:n.jsx(s,{options:M,onInit:o})})]})}function z(){return n.jsx($,{})}i.createRoot(document.getElementById("root")).render(n.jsx(t.StrictMode,{children:n.jsx(z,{})}));
