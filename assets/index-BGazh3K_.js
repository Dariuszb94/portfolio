import{g as e,r as t,j as n,c as o}from"./three-DPdPuE_v.js";import{r as i,d as r,m as s}from"./ui-Bxzja_lu.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)}).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const a=e(i()),l=r.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  padding: 20px;
`;class d extends t.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e,t){console.error("3D Background Error:",e,t)}render(){return this.state.hasError?n.jsx(l,{children:n.jsxs("div",{children:[n.jsx("h2",{children:"Loading beautiful background..."}),n.jsx("p",{children:"Fallback mode active for optimal performance"})]})}):this.props.children}}const c=s`
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(180deg);
  }
`,h=s`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,m=r.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  animation: ${h} 0.5s ease-out;
  overflow: hidden;
`,u=r.div`
  position: absolute;
  left: ${e=>e.left}%;
  top: ${e=>e.top}%;
  width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  border: 1px solid rgba(100, 255, 218, 0.2);
  border-radius: 50%;
  animation: ${c} ${e=>3+e.delay}s ease-in-out infinite;
  animation-delay: ${e=>e.delay}s;
  opacity: 0.6;
`,p=r.div`
  position: absolute;
  left: ${e=>e.left}%;
  top: ${e=>e.top}%;
  color: rgba(130, 170, 255, 0.3);
  font-size: 24px;
  font-family: 'Courier New', monospace;
  animation: ${c} ${e=>4+e.delay}s ease-in-out infinite;
  animation-delay: ${e=>e.delay}s;
  user-select: none;
`,f=t.memo(function(){return n.jsxs(m,{children:[[{size:20,left:10,top:20,delay:0},{size:15,left:80,top:30,delay:.5},{size:25,left:20,top:70,delay:1},{size:18,left:70,top:80,delay:1.5},{size:22,left:50,top:10,delay:2}].map((e,t)=>n.jsx(u,{size:e.size,left:e.left,top:e.top,delay:e.delay},`element-${t}`)),[{symbol:"<div>",left:15,top:40,delay:.2},{symbol:"CSS",left:85,top:60,delay:.8},{symbol:"JS",left:75,top:15,delay:1.8},{symbol:"TS",left:40,top:25,delay:2.2},{symbol:"<JSX>",left:60,top:75,delay:2.6},{symbol:"[]",left:90,top:40,delay:3},{symbol:"()",left:25,top:60,delay:3.4}].map((e,t)=>n.jsx(p,{left:e.left,top:e.top,delay:e.delay,children:e.symbol},`symbol-${t}`))]})}),g=r.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 24px;
  color: white;
  position: relative;
`,y=r.h1`
  font-size: clamp(2.5rem, 8vw, 4rem);
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 700;
  color: #64ffda;
`,v=r.div`
  font-size: 1.25rem;
  line-height: 1.6;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;

  span {
    font-size: inherit;
    font-weight: 300;
  }
`,x=r.p`
  font-size: 1.5rem;
  margin-bottom: 3rem;
  opacity: 0.9;
  font-weight: 600;
  text-align: center;
`,w={autoStart:!0,delay:20,deleteSpeed:.1};function b(){const[e,o]=t.useState(!1);t.useEffect(()=>{const e=()=>{"requestIdleCallback"in window?requestIdleCallback(()=>{setTimeout(()=>o(!0),300)},{timeout:2e3}):setTimeout(()=>{setTimeout(()=>o(!0),300)},800)};requestAnimationFrame(()=>{requestAnimationFrame(e)})},[]);const i=t.useMemo(()=>e=>{e.typeString("<span>I build web apps with clean code and creative design, focusing on performance and innovation. </span>").pauseFor(500).changeDelay(30).typeString("<span>I am committed to delivering exceptional digital solutions</span>").pauseFor(1e3).deleteChars(56).changeDelay(18).typeString("<span>just make nice things for the web, let's create something amazing together!</span>").start()},[]);return n.jsxs(g,{children:[n.jsx(f,{}),e&&n.jsx(d,{children:n.jsx(t.Suspense,{fallback:null,children:n.jsx("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"auto",zIndex:-1},children:n.jsx("canvas",{ref:e=>{if(!e)return;const t=e.getContext("2d");if(!t)return;e.width=window.innerWidth,e.height=window.innerHeight;const n=[],o={x:0,y:0,isMoving:!1};let i,r;const s=180;let a=0;for(let f=0;f<40;f++){const t=2.5*Math.random()+1.5;n.push({x:Math.random()*e.width,y:Math.random()*e.height,vx:.2*(Math.random()-.5),vy:.2*(Math.random()-.5),size:t,originalSize:t,hue:60*Math.random()+160})}let l=0;const d=(t,n)=>{const r=performance.now();if(r-l<16)return;l=r;const s=e.getBoundingClientRect();o.x=t-s.left,o.y=n-s.top,o.isMoving=!0,clearTimeout(i),i=setTimeout(()=>{o.isMoving=!1},200)},c=e=>{d(e.clientX,e.clientY)},h=e=>{if(e.preventDefault(),e.touches.length>0){const t=e.touches[0];d(t.clientX,t.clientY)}},m=e=>{if(e.touches.length>0){const t=e.touches[0];d(t.clientX,t.clientY)}},u=e.parentElement;u&&(u.addEventListener("mousemove",c),u.addEventListener("touchmove",h,{passive:!1}),u.addEventListener("touchstart",m)),e.addEventListener("mousemove",c),e.addEventListener("touchmove",h,{passive:!1}),e.addEventListener("touchstart",m),function i(){if(!t||!e)return;if(a++,a%2!=0)return void(r=requestAnimationFrame(i));t.clearRect(0,0,e.width,e.height);const l=o.x,d=o.y;n.forEach((o,i)=>{const r=l-o.x,a=d-o.y,c=r*r+a*a,h=32400;if(c<h){const e=Math.sqrt(c),t=(s-e)/s,n=Math.atan2(a,r);o.vx-=Math.cos(n)*t*.06,o.vy-=Math.sin(n)*t*.06,o.size=o.originalSize*(1+1.2*t),o.hue=o.hue+1.5*t}else o.size+=.08*(o.originalSize-o.size),o.hue+=.005*(60*Math.random()+160-o.hue);o.vx*=.96,o.vy*=.96,o.x+=o.vx,o.y+=o.vy,o.x<0?o.x=e.width:o.x>e.width&&(o.x=0),o.y<0?o.y=e.height:o.y>e.height&&(o.y=0),t.beginPath(),t.arc(o.x,o.y,o.size,0,2*Math.PI);const m=c<h,u=m?.9:.6,p=m?90:70,f=m?70:50;t.fillStyle=`hsla(${Math.floor(o.hue)}, ${p}%, ${f}%, ${u})`,t.fill();for(let e=i+1;e<n.length;e++){const i=n[e],r=o.x-i.x,s=o.y-i.y,a=r*r+s*s;if(a<14400){const e=Math.sqrt(a);t.beginPath(),t.moveTo(o.x,o.y),t.lineTo(i.x,i.y);const n=.1*(1-e/120),r=(l-o.x)**2+(d-o.y)**2<h||(l-i.x)**2+(d-i.y)**2<h,s=n*(r?2.5:1);t.strokeStyle=`rgba(100, 255, 218, ${Math.min(s,.6)})`,t.lineWidth=r?1.3:1,t.stroke()}}}),r=requestAnimationFrame(i)}();const p=()=>{e&&(e.width=window.innerWidth,e.height=window.innerHeight,n.forEach(t=>{t.x>e.width&&(t.x=Math.random()*e.width),t.y>e.height&&(t.y=Math.random()*e.height)}))};return window.addEventListener("resize",p),()=>{r&&cancelAnimationFrame(r),window.removeEventListener("resize",p),e.removeEventListener("mousemove",c),e.removeEventListener("touchmove",h),e.removeEventListener("touchstart",m),u&&(u.removeEventListener("mousemove",c),u.removeEventListener("touchmove",h),u.removeEventListener("touchstart",m)),clearTimeout(i)}},style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",cursor:"pointer",touchAction:"none"}})})})}),n.jsx(y,{children:"Dariusz Berer"}),n.jsx(x,{children:"Frontend Developer"}),n.jsx(v,{children:n.jsx(a,{options:w,onInit:i})})]})}function z(){return n.jsx(b,{})}o.createRoot(document.getElementById("root")).render(n.jsx(t.StrictMode,{children:n.jsx(z,{})}));
