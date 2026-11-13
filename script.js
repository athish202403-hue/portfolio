const root=document.documentElement;
const themeBtn=document.getElementById('themeBtn');
const savedTheme=localStorage.getItem('athish-theme');
if(savedTheme==='dark')root.dataset.theme='dark';
function updateThemeButton(){themeBtn.textContent=root.dataset.theme==='dark'?'☀':'◐';themeBtn.setAttribute('aria-label',root.dataset.theme==='dark'?'Switch to light theme':'Switch to dark theme')}
updateThemeButton();themeBtn.addEventListener('click',()=>{root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';localStorage.setItem('athish-theme',root.dataset.theme);updateThemeButton()});
const menuBtn=document.getElementById('menuBtn'),navLinks=document.getElementById('navLinks');
menuBtn.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(open));menuBtn.setAttribute('aria-label',open?'Close navigation':'Open navigation')});
navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{navLinks.classList.remove('open');menuBtn.setAttribute('aria-expanded','false')}));
const roles=['Cloud & AWS','Data & Reporting','IT Support','Applied AI'];let roleIndex=0;const roleEl=document.getElementById('roleText');setInterval(()=>{roleIndex=(roleIndex+1)%roles.length;roleEl.classList.add('fade');setTimeout(()=>{roleEl.textContent=roles[roleIndex];roleEl.classList.remove('fade')},180)},2300);
const progress=document.getElementById('topProgress');function onScroll(){const max=document.documentElement.scrollHeight-innerHeight;progress.style.width=(max>0?scrollY/max*100:0)+'%'}window.addEventListener('scroll',onScroll,{passive:true});onScroll();
document.querySelectorAll('.filter-btn').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const filter=btn.dataset.filter;document.querySelectorAll('.project-card').forEach(card=>{card.hidden=filter!=='all'&&card.dataset.category!==filter})}));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');observer.unobserve(entry.target)}}),{threshold:.08});document.querySelectorAll('.section,.expertise-card,.experience-item,.project-card,.education-card,.cert-card,.resume-card').forEach(el=>{el.classList.add('reveal');observer.observe(el)});