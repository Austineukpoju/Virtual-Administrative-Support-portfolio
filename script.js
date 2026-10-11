
const toggle=document.querySelector('.menu-toggle');
const links=document.querySelector('.navlinks');
if(toggle&&links){toggle.addEventListener('click',()=>{links.classList.toggle('open');toggle.setAttribute('aria-expanded',links.classList.contains('open')?'true':'false')})}
document.querySelectorAll('.navlinks a').forEach(a=>a.addEventListener('click',()=>links?.classList.remove('open')));
const year=document.querySelector('[data-year]');if(year)year.textContent=new Date().getFullYear();
const form=document.querySelector('[data-contact-form]');
if(form){form.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form);const subject=encodeURIComponent('Portfolio enquiry: '+d.get('topic'));const body=encodeURIComponent('Hello Matthew,\\n\\n'+d.get('message')+'\\n\\nMy name: '+d.get('name')+'\\nMy email: '+d.get('email'));window.location.href='mailto:matthewaustine21@gmail.com?subject='+subject+'&body='+body;})}
