function startJourney(){
  document.querySelector("#story").scrollIntoView({behavior:"smooth"});
  burstHearts(18);
}
function finalSurprise(){
  document.querySelector("#finalMessage").classList.add("show");
  burstHearts(40);
}
function toggleTheme(){
  document.body.classList.toggle("dark");
  localStorage.setItem("vinnuTheme", document.body.classList.contains("dark") ? "dark" : "light");
}
if(localStorage.getItem("vinnuTheme")==="dark") document.body.classList.add("dark");

function burstHearts(count){
  const box=document.getElementById("hearts");
  const symbols=["♥","♡","✦","✧"];
  for(let i=0;i<count;i++){
    const h=document.createElement("div");
    h.className="heart";
    h.textContent=symbols[Math.floor(Math.random()*symbols.length)];
    h.style.left=Math.random()*100+"vw";
    h.style.animationDuration=(4+Math.random()*3)+"s";
    h.style.fontSize=(12+Math.random()*20)+"px";
    h.style.opacity=.35+Math.random()*.55;
    box.appendChild(h);
    setTimeout(()=>h.remove(),7000);
  }
}
setInterval(()=>burstHearts(1),2200);

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add("visible");
  });
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
