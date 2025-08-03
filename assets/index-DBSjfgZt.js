import{g as e,r as t,j as r,c as i}from"./three-DPdPuE_v.js";import{r as n,d as o,m as a}from"./ui-Bxzja_lu.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)}).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const s=e(n()),l={background:{primary:"#0B1426",secondary:"#1A2332"},accent:{primary:"#97c0ee",secondary:"#7DD3FC"},text:{primary:"#FFFFFF",secondary:"#E2E8F0",tertiary:"#94A3B8"},utils:{primaryAccent20:"rgba(74, 158, 255, 0.2)",primaryAccent30:"rgba(74, 158, 255, 0.3)",primaryAccent60:"rgba(74, 158, 255, 0.6)",secondaryAccent20:"rgba(125, 211, 252, 0.2)",secondaryAccent40:"rgba(125, 211, 252, 0.4)"},gradients:{primary:"linear-gradient(135deg, #0B1426 0%, #1A2332 100%)"}},c={hueMin:210,hueMax:250},d=o.div`
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
`;class h extends t.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e,t){console.error("3D Background Error:",e,t)}render(){return this.state.hasError?r.jsx(d,{children:r.jsxs("div",{children:[r.jsx("h2",{children:"Loading beautiful background..."}),r.jsx("p",{children:"Fallback mode active for optimal performance"})]})}):this.props.children}}function p(){const[e,i]=t.useState(!1);return t.useEffect(()=>{const e=()=>{"requestIdleCallback"in window?requestIdleCallback(()=>{setTimeout(()=>i(!0),300)},{timeout:2e3}):setTimeout(()=>{setTimeout(()=>i(!0),300)},800)};requestAnimationFrame(()=>{requestAnimationFrame(e)})},[]),r.jsx(r.Fragment,{children:e&&r.jsx(h,{children:r.jsx(t.Suspense,{fallback:null,children:r.jsx("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"auto",zIndex:-1},children:r.jsx("canvas",{ref:e=>{if(!e)return;const t=e.getContext("2d");if(!t)return;e.width=window.innerWidth,e.height=window.innerHeight;const r=[],i={x:0,y:0,isMoving:!1};let n,o;const a={x:0,y:0,targetX:0,targetY:0},s=180;let d=0;for(let l=0;l<40;l++){const t=2.5*Math.random()+1.5;r.push({x:Math.random()*e.width,y:Math.random()*e.height,vx:.2*(Math.random()-.5),vy:.2*(Math.random()-.5),size:t,originalSize:t,hue:Math.random()*(c.hueMax-c.hueMin)+c.hueMin})}let h=0;const p=(t,r)=>{const o=performance.now();if(o-h<16)return;h=o;const s=e.getBoundingClientRect();i.x=t-s.left,i.y=r-s.top,i.isMoving=!0;const l=e.width/2,c=e.height/2,d=(i.x-l)/l,p=(i.y-c)/c;a.targetY=15*d,a.targetX=15*-p,clearTimeout(n),n=setTimeout(()=>{i.isMoving=!1,a.targetX=0,a.targetY=0},200)},m=e=>{p(e.clientX,e.clientY)},x=e=>{if(e.preventDefault(),e.touches.length>0){const t=e.touches[0];p(t.clientX,t.clientY)}},g=e=>{if(e.touches.length>0){const t=e.touches[0];p(t.clientX,t.clientY)}},u=e.parentElement;u&&(u.addEventListener("mousemove",m),u.addEventListener("touchmove",x,{passive:!1}),u.addEventListener("touchstart",g)),e.addEventListener("mousemove",m),e.addEventListener("touchmove",x,{passive:!1}),e.addEventListener("touchstart",g),function n(){if(!t||!e)return;if(d++,d%2!=0)return void(o=requestAnimationFrame(n));a.x+=.36*(a.targetX-a.x),a.y+=.36*(a.targetY-a.y),e.style.transform=`perspective(1000px) rotateX(${a.x}deg) rotateY(${a.y}deg)`,t.clearRect(0,0,e.width,e.height);const h=i.x,p=i.y;r.forEach((i,n)=>{const o=h-i.x,a=p-i.y,d=o*o+a*a,m=32400;if(d<m){const e=Math.sqrt(d),t=(s-e)/s,r=Math.atan2(a,o);i.vx-=Math.cos(r)*t*.06,i.vy-=Math.sin(r)*t*.06,i.size=i.originalSize*(1+1.2*t),i.hue=i.hue+1.5*t}else i.size+=.08*(i.originalSize-i.size),i.hue+=.005*(Math.random()*(c.hueMax-c.hueMin)+c.hueMin-i.hue);i.vx*=.96,i.vy*=.96,i.x+=i.vx,i.y+=i.vy,i.x<0?i.x=e.width:i.x>e.width&&(i.x=0),i.y<0?i.y=e.height:i.y>e.height&&(i.y=0),t.beginPath(),t.arc(i.x,i.y,i.size,0,2*Math.PI);const x=d<m,g=x?.9:.6,u=x?90:70,f=x?70:50;t.fillStyle=`hsla(${Math.floor(i.hue)}, ${u}%, ${f}%, ${g})`,t.fill();for(let e=n+1;e<r.length;e++){const n=r[e],o=i.x-n.x,a=i.y-n.y,s=o*o+a*a;if(s<14400){const e=Math.sqrt(s);t.beginPath(),t.moveTo(i.x,i.y),t.lineTo(n.x,n.y);const r=.1*(1-e/120),o=(h-i.x)**2+(p-i.y)**2<m||(h-n.x)**2+(p-n.y)**2<m,a=r*(o?2.5:1);t.strokeStyle=`${l.utils.primaryAccent60.replace("0.6",`${Math.min(a,.6)}`)}`,t.lineWidth=o?1.3:1,t.stroke()}}}),o=requestAnimationFrame(n)}();const f=()=>{e&&(e.width=window.innerWidth,e.height=window.innerHeight,r.forEach(t=>{t.x>e.width&&(t.x=Math.random()*e.width),t.y>e.height&&(t.y=Math.random()*e.height)}))};return window.addEventListener("resize",f),()=>{o&&cancelAnimationFrame(o),e&&(e.style.transform=""),window.removeEventListener("resize",f),e.removeEventListener("mousemove",m),e.removeEventListener("touchmove",x),e.removeEventListener("touchstart",g),u&&(u.removeEventListener("mousemove",m),u.removeEventListener("touchmove",x),u.removeEventListener("touchstart",g)),clearTimeout(n)}},style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",cursor:"pointer",touchAction:"none",transformOrigin:"center center",transformStyle:"preserve-3d"}})})})})})}const m=o.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 24px;
  color: white;
  position: relative;
`,x=o.h1`
  font-size: clamp(2.5rem, 8vw, 4rem);
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 700;
  color: ${l.accent.primary};
`,g=o.div`
  font-size: 1.25rem;
  line-height: 1.6;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;

  span {
    font-size: inherit;
    font-weight: 300;
  }
`,u=o.p`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  margin-bottom: 3rem;
  opacity: 0.9;
  font-weight: 600;
  text-align: center;
`,f={autoStart:!0,delay:20,deleteSpeed:.1};function y(){const e=t.useMemo(()=>e=>{e.typeString("<span>I build web apps with clean code and creative design, focusing on performance and innovation. </span>").pauseFor(500).changeDelay(30).typeString("<span>I am committed to delivering exceptional digital solutions</span>").pauseFor(1e3).deleteChars(56).changeDelay(18).typeString("<span>just make nice things for the web, let's create something amazing together!</span>").start()},[]);return r.jsxs(m,{children:[r.jsx(p,{}),r.jsx(x,{children:"Dariusz Berer"}),r.jsx(u,{children:"Frontend Developer"}),r.jsx(g,{children:r.jsx(s,{options:f,onInit:e})})]})}const v=o.div`
  position: fixed;
  top: 20px;
  right: 20px;
  display: flex;
  gap: 12px;
  z-index: 1000;
  opacity: 0.7;
  backdrop-filter: blur(10px);
  background: rgba(${l.background.secondary.replace("#","").match(/.{2}/g)?.map(e=>parseInt(e,16)).join(", ")}, 0.6);
  padding: 12px;
  border-radius: 20px;
  border: 1px solid rgba(${l.accent.primary.replace("#","").match(/.{2}/g)?.map(e=>parseInt(e,16)).join(", ")}, 0.3);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`,b=o.a`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    ${l.utils.primaryAccent20} 0%,
    ${l.utils.secondaryAccent20} 100%
  );
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    inset: 1px;
    background: ${l.background.secondary};
    border-radius: 11px;
    z-index: 1;
    transition: all 0.3s ease;
  }

  svg {
    position: relative;
    z-index: 2;
    width: 18px;
    height: 18px;
    color: ${l.accent.primary};
    transition: all 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(${l.accent.primary.replace("#","").match(/.{2}/g)?.map(e=>parseInt(e,16)).join(", ")}, 0.3);

    &::before {
      background: linear-gradient(
        135deg,
        ${l.utils.primaryAccent20} 0%,
        ${l.utils.secondaryAccent20} 100%
      );
    }

    svg {
      color: ${l.background.primary};
    }
  }
`,j=o.section`
  margin-top: 6rem;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  max-width: 1200px;
  width: 100%;
`,w=o.div`
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
`,z=o.h2`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
  background: linear-gradient(
    135deg,
    ${l.accent.primary} 0%,
    ${l.accent.secondary} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(
      135deg,
      ${l.accent.primary} 0%,
      ${l.accent.secondary} 100%
    );
    border-radius: 2px;
  }
`,$=o.p`
  font-size: 1.25rem;
  color: ${l.text.secondary};
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.6;
  margin-top: 1.5rem;
`,k=o.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
  align-items: center;
  max-width: 600px;
`,M=o.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,E=o.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 0;
`,A=o.div`
  width: 56px;
  min-width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    ${l.utils.primaryAccent20} 0%,
    ${l.utils.secondaryAccent20} 100%
  );
  border-radius: 16px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 1px;
    background: ${l.background.secondary};
    border-radius: 15px;
    z-index: 1;
  }

  svg {
    position: relative;
    z-index: 2;
    width: 24px;
    height: 24px;
    color: ${l.accent.primary};
  }
`,C=o.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,L=o.span`
  font-size: 0.9rem;
  color: ${l.text.tertiary};
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,S=o.a`
  font-size: 1.1rem;
  color: ${l.text.primary};
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: ${l.accent.primary};
  }
`;function F({email:e="dariusz.berer@gmail.com",phone:t="+48 535 262 562",linkedin:i="https://linkedin.com/in/berer",github:n="https://github.com/Dariuszb94"}){return r.jsxs(r.Fragment,{children:[r.jsxs(v,{children:[r.jsx(b,{href:n,target:"_blank",rel:"noopener noreferrer",title:"GitHub",children:r.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:r.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})}),r.jsx(b,{href:i,target:"_blank",rel:"noopener noreferrer",title:"LinkedIn",children:r.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:r.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})}),r.jsx(b,{href:`mailto:${e}`,title:"Email",children:r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),r.jsx("polyline",{points:"22,6 12,13 2,6"})]})}),r.jsx(b,{href:`tel:${t.replace(/\s/g,"")}`,title:"Phone",children:r.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:r.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})})})]}),r.jsxs(j,{children:[r.jsxs(w,{children:[r.jsx(z,{children:"Let's Create Something Amazing"}),r.jsx($,{children:"Ready to bring your ideas to life? I'm here to help you build exceptional digital experiences."})]}),r.jsx(k,{children:r.jsxs(M,{children:[r.jsxs(E,{children:[r.jsx(A,{children:r.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:r.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})}),r.jsxs(C,{children:[r.jsx(L,{children:"GitHub"}),r.jsx(S,{href:n,target:"_blank",rel:"noopener noreferrer",children:"@Dariuszb94"})]})]}),r.jsxs(E,{children:[r.jsx(A,{children:r.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:r.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})}),r.jsxs(C,{children:[r.jsx(L,{children:"LinkedIn"}),r.jsx(S,{href:i,target:"_blank",rel:"noopener noreferrer",children:"/in/berer/"})]})]}),r.jsxs(E,{children:[r.jsx(A,{children:r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),r.jsx("polyline",{points:"22,6 12,13 2,6"})]})}),r.jsxs(C,{children:[r.jsx(L,{children:"Email"}),r.jsx(S,{href:`mailto:${e}`,children:e})]})]}),r.jsxs(E,{children:[r.jsx(A,{children:r.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:r.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})})}),r.jsxs(C,{children:[r.jsx(L,{children:"Phone"}),r.jsx(S,{href:`tel:${t.replace(/\s/g,"")}`,children:t})]})]})]})})]})]})}const B=a`
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(180deg);
  }
`,I=a`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,D=o.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
  background: ${l.gradients.primary};
  animation: ${I} 0.5s ease-out;
  overflow: hidden;
`,H=o.div`
  position: absolute;
  left: ${e=>e.left}%;
  top: ${e=>e.top}%;
  width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  border: 1px solid ${l.utils.primaryAccent30};
  border-radius: 50%;
  animation: ${B} ${e=>3+e.delay}s ease-in-out infinite;
  animation-delay: ${e=>e.delay}s;
  opacity: 0.6;
`,Y=o.div`
  position: absolute;
  left: ${e=>e.left}%;
  top: ${e=>e.top}%;
  color: ${l.utils.secondaryAccent40};
  font-size: 24px;
  font-family: 'Courier New', monospace;
  animation: ${B} ${e=>4+e.delay}s ease-in-out infinite;
  animation-delay: ${e=>e.delay}s;
  user-select: none;
`,X=t.memo(function(){return r.jsxs(D,{children:[[{size:20,left:10,top:20,delay:0},{size:15,left:80,top:30,delay:.5},{size:25,left:20,top:70,delay:1},{size:18,left:70,top:80,delay:1.5},{size:22,left:50,top:10,delay:2}].map((e,t)=>r.jsx(H,{size:e.size,left:e.left,top:e.top,delay:e.delay},`element-${t}`)),[{symbol:"<div>",left:15,top:40,delay:.2},{symbol:"CSS",left:85,top:60,delay:.8},{symbol:"JS",left:75,top:15,delay:1.8},{symbol:"TS",left:40,top:25,delay:2.2},{symbol:"<JSX>",left:60,top:75,delay:2.6},{symbol:"[]",left:90,top:40,delay:3},{symbol:"()",left:25,top:60,delay:3.4}].map((e,t)=>r.jsx(Y,{left:e.left,top:e.top,delay:e.delay,children:e.symbol},`symbol-${t}`))]})});function q(){return r.jsxs(r.Fragment,{children:[r.jsx(X,{}),r.jsx(y,{}),r.jsx(F,{})]})}i.createRoot(document.getElementById("root")).render(r.jsx(t.StrictMode,{children:r.jsx(q,{})}));
