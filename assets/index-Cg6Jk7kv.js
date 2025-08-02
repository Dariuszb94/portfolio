const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ParticlesBackground-D-DCFDtQ.js","assets/three-ayeqgxRy.js","assets/ui-BYXUHaSf.js"])))=>i.map(i=>d[i]);
import{g as e,r as t,j as o,_ as i,c as n}from"./three-ayeqgxRy.js";import{r,d as a,m as s}from"./ui-BYXUHaSf.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)}).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const l=e(r()),d=a.div`
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
`;class c extends t.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e,t){console.error("3D Background Error:",e,t)}render(){return this.state.hasError?o.jsx(d,{children:o.jsxs("div",{children:[o.jsx("h2",{children:"Loading beautiful background..."}),o.jsx("p",{children:"Fallback mode active for optimal performance"})]})}):this.props.children}}const p=s`
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(180deg);
  }
`,m=s`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,f=a.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  animation: ${m} 0.5s ease-out;
  overflow: hidden;
`,u=a.div`
  position: absolute;
  left: ${e=>e.left}%;
  top: ${e=>e.top}%;
  width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  border: 1px solid rgba(100, 255, 218, 0.2);
  border-radius: 50%;
  animation: ${p} ${e=>3+e.delay}s ease-in-out infinite;
  animation-delay: ${e=>e.delay}s;
  opacity: 0.6;
`,h=a.div`
  position: absolute;
  left: ${e=>e.left}%;
  top: ${e=>e.top}%;
  color: rgba(130, 170, 255, 0.3);
  font-size: 24px;
  font-family: 'Courier New', monospace;
  animation: ${p} ${e=>4+e.delay}s ease-in-out infinite;
  animation-delay: ${e=>e.delay}s;
  user-select: none;
`,g=t.memo(function(){return o.jsxs(f,{children:[[{size:20,left:10,top:20,delay:0},{size:15,left:80,top:30,delay:.5},{size:25,left:20,top:70,delay:1},{size:18,left:70,top:80,delay:1.5},{size:22,left:50,top:10,delay:2}].map((e,t)=>o.jsx(u,{size:e.size,left:e.left,top:e.top,delay:e.delay},`element-${t}`)),[{symbol:"{",left:15,top:40,delay:.2},{symbol:"}",left:85,top:60,delay:.8},{symbol:"</",left:30,top:85,delay:1.2},{symbol:">",left:75,top:15,delay:1.8}].map((e,t)=>o.jsx(h,{left:e.left,top:e.top,delay:e.delay,children:e.symbol},`symbol-${t}`))]})}),y=t.lazy(()=>i(()=>import("./ParticlesBackground-D-DCFDtQ.js"),__vite__mapDeps([0,1,2]))),x=a.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 24px;
  color: white;
  position: relative;
`,b=a.h1`
  font-size: clamp(2.5rem, 8vw, 4rem);
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 700;
`,j=a.div`
  font-size: 1.25rem;
  line-height: 1.6;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;

  span {
    font-size: inherit;
    font-weight: 300;
  }
`,v=a.p`
  font-size: 1.5rem;
  margin-bottom: 3rem;
  opacity: 0.9;
  font-weight: 300;
  text-align: center;
`,z={autoStart:!0,delay:20,deleteSpeed:.1};function w(){const[e,i]=t.useState(!1);t.useEffect(()=>{const e=setTimeout(()=>{i(!0)},100);return()=>clearTimeout(e)},[]);const n=t.useMemo(()=>e=>{e.typeString("<span>I build web apps with clean code and creative design, focusing on performance and innovation. </span>").pauseFor(500).changeDelay(30).typeString("<span>I am committed to delivering exceptional digital solutions</span>").pauseFor(1e3).deleteChars(56).changeDelay(18).typeString("<span>just make nice things for the web, let's create something amazing together!</span>").start()},[]);return o.jsxs(x,{children:[o.jsx(g,{}),e&&o.jsx(c,{children:o.jsx(t.Suspense,{fallback:null,children:o.jsx(y,{})})}),o.jsx(b,{children:"Dariusz Berer"}),o.jsx(v,{children:"Frontend Developer"}),o.jsx(j,{children:o.jsx(l,{options:z,onInit:n})})]})}function $(){return o.jsx(w,{})}n.createRoot(document.getElementById("root")).render(o.jsx(t.StrictMode,{children:o.jsx($,{})}));
