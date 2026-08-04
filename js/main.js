const services=[['Inspección de Propiedades','inspeccion-pre-entrega.html'],['Tasaciones','tasaciones.html'],['Eficiencia Energética CEV','cev.html'],['Diseño Arquitectónico','diseno-arquitectonico.html'],['Regularizaciones','regularizacion.html'],['Comunidad y Territorio','comunidad-territorio.html']];
const header=document.querySelector('[data-header]');
if(header){header.innerHTML=`<a class="skip-link" href="#contenido">Saltar al contenido</a><header class="site-header"><div class="container nav"><a class="brand" href="index.html" aria-label="TREVENI, inicio"><img class="brand-mark" src="Imagenes/Imagenes/Logo.png" alt=""><span><strong>TREVENI</strong><small>ARQUITECTURA &amp; TERRITORIO</small></span></a><button class="menu-toggle" aria-expanded="false" aria-controls="main-nav" aria-label="Abrir menú">☰</button><nav class="nav-links" id="main-nav" aria-label="Navegación principal"><a href="index.html">Inicio</a><a href="estudio.html">Equipo</a><div class="dropdown"><button aria-expanded="false">Servicios ▾</button><div class="dropdown-menu">${services.map(s=>`<a href="${s[1]}">${s[0]}</a>`).join('')}</div></div><a href="proyectos.html">Proyectos</a><a href="contacto.html">Contacto</a></nav><a class="btn" href="contacto.html">Solicitar propuesta →</a></div></header>`}
const footer=document.querySelector('[data-footer]');
if(footer){
  footer.innerHTML=`
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a class="brand" href="index.html">
              <img class="footer-emblem" src="Imagenes/Imagenes/Logo_blanco.png" alt="">
              <span><strong>TREVENI</strong><small>ARQUITECTURA &amp; TERRITORIO</small></span>
            </a>
            <span class="footer-accent"></span>
            <p>Arquitectura &amp; Territorio con criterio,<br>método y respaldo profesional.</p>
          </div>
          <div class="footer-column">
            <h3>Servicios</h3>
            <span class="footer-title-line"></span>
            <ul>
              <li><a href="inspeccion-pre-entrega.html">Inspección de Propiedades</a></li>
              <li><a href="tasaciones.html">Tasaciones</a></li>
              <li><a href="cev.html">Eficiencia energética CEV</a></li>
              <li><a href="diseno-arquitectonico.html">Diseño arquitectónico</a></li>
              <li><a href="regularizacion.html">Regularizaciones</a></li>
              <li><a href="comunidad-territorio.html">Comunidad y Territorio</a></li>
            </ul>
          </div>
          <div class="footer-column footer-contact">
            <h3>Contacto / Horario</h3>
            <span class="footer-title-line"></span>
            <p class="footer-contact-item">
              <img src="Imagenes/Iconos/Footer y Nav/location_on_24dp_CDAD98_FILL0_wght100_GRAD0_opsz24.svg" alt="">
              <span>Provincia de Concepción · Provincia de Curicó<br>Región del Biobío · Región del Maule</span>
            </p>
            <p class="footer-contact-item">
              <img src="Imagenes/Iconos/Footer y Nav/call_24dp_CDAD98_FILL0_wght100_GRAD0_opsz24.svg" alt="">
              <a class="footer-contact-link" href="tel:+56964415341" aria-label="Llamar al +56 9 6441 5341">+56 9 6441 5341</a>
            </p>
            <p class="footer-contact-item">
              <img src="Imagenes/Iconos/Footer y Nav/mail_24dp_CDAD98_FILL0_wght100_GRAD0_opsz24.svg" alt="">
              <a class="footer-contact-link" href="mailto:treveni@contacto.cl">treveni@contacto.cl</a>
            </p>
            <p class="footer-contact-item footer-hours">
              <img src="Imagenes/Iconos/Footer y Nav/schedule_24dp_CDAD98_FILL0_wght100_GRAD0_opsz24.svg" alt="">
              <span>Lunes a viernes: 9:00 a. m. a 18:00 p. m.<br>Sábados, domingos y festivos: Cerrado</span>
            </p>
          </div>
        </div>
        <div class="legal">© ${new Date().getFullYear()} TREVENI Arquitectura &amp; Territorio · Todos los derechos reservados.</div>
      </div>
    </footer>`;
}
const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav-links');toggle?.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!open));nav.classList.toggle('open',!open)});
document.querySelectorAll('.nav-links a').forEach(a=>{if(a.getAttribute('href')===location.pathname.split('/').pop()||(!location.pathname.split('/').pop()&&a.getAttribute('href')==='index.html'))a.setAttribute('aria-current','page')});
if(document.querySelector('.dropdown-menu a[aria-current="page"]'))document.querySelector('.dropdown').classList.add('active');
document.querySelectorAll('.dropdown>button').forEach(b=>b.addEventListener('click',()=>{const d=b.parentElement;d.classList.toggle('open');b.setAttribute('aria-expanded',String(d.classList.contains('open')))}));
document.querySelectorAll('.faq-button').forEach(button=>{
  const icon=button.querySelector('span');
  if(icon){
    icon.classList.add('faq-toggle-icon');
    icon.textContent='';
    icon.setAttribute('aria-hidden','true');
  }
  button.addEventListener('click',()=>{
    const item=button.closest('.faq-item');
    item.classList.toggle('open');
    button.setAttribute('aria-expanded',String(item.classList.contains('open')));
  });
});
document.querySelectorAll('.filter-btn').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.filter-btn').forEach(x=>x.classList.remove('active'));b.classList.add('active');document.querySelectorAll('.project-card').forEach(c=>c.hidden=b.dataset.filter!=='all'&&c.dataset.category!==b.dataset.filter)}));
document.querySelectorAll('.service-showcase-card').forEach(card=>{const link=card.querySelector('.service-cta');if(!link)return;card.setAttribute('role','link');card.setAttribute('tabindex','0');card.setAttribute('aria-label',`Abrir ${card.querySelector('h3')?.textContent.trim()||'servicio'}`);card.addEventListener('click',event=>{if(!event.target.closest('a'))location.href=link.href});card.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();location.href=link.href}})});
const homeStats=document.querySelector('.home-page .info-strip');
if(homeStats){
  const counters=[...homeStats.querySelectorAll('[data-count]')];
  const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealStats=()=>{
    if(homeStats.classList.contains('is-visible'))return;
    homeStats.classList.add('is-visible');
    if(reducedMotion)return;
    const startedAt=performance.now();
    const duration=1700;
    const formatter=new Intl.NumberFormat('es-CL');
    const update=now=>{
      const progress=Math.min((now-startedAt)/duration,1);
      const eased=1-Math.pow(1-progress,3);
      counters.forEach(counter=>{
        const target=Number(counter.dataset.count);
        const prefix=counter.dataset.prefix||'';
        counter.textContent=`${prefix}${formatter.format(Math.round(target*eased))}`;
      });
      if(progress<1)requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  };
  homeStats.classList.add('stats-ready');
  if(reducedMotion){
    revealStats();
  }else{
    counters.forEach(counter=>{
      counter.textContent=`${counter.dataset.prefix||''}0`;
    });
    if('IntersectionObserver'in window){
      const observer=new IntersectionObserver(entries=>{
        if(entries.some(entry=>entry.isIntersecting)){
          observer.disconnect();
          revealStats();
        }
      },{threshold:0.35});
      observer.observe(homeStats);
    }else{
      revealStats();
    }
  }
}
const projectCards=[...document.querySelectorAll('.projects-page .gallery-card')];
if(projectCards.length){const imagePool=projectCards.map(card=>card.querySelector(':scope>img').src);const modal=document.createElement('div');modal.className='project-gallery-modal';modal.hidden=true;modal.innerHTML=`<section class="project-gallery-dialog" role="dialog" aria-modal="true" aria-labelledby="gallery-title"><button class="gallery-close" type="button" aria-label="Cerrar galería">×</button><h2 id="gallery-title"></h2><div class="gallery-stage"><button class="gallery-arrow gallery-prev" type="button" aria-label="Imagen anterior">‹</button><img class="gallery-image" src="" alt=""><button class="gallery-arrow gallery-next" type="button" aria-label="Imagen siguiente">›</button></div><div class="gallery-progress" aria-live="polite"></div><p class="gallery-description"></p></section>`;document.body.appendChild(modal);const dialog=modal.querySelector('.project-gallery-dialog'),title=modal.querySelector('#gallery-title'),image=modal.querySelector('.gallery-image'),description=modal.querySelector('.gallery-description'),progress=modal.querySelector('.gallery-progress'),close=modal.querySelector('.gallery-close');let images=[],current=0,lastFocus=null;const render=()=>{image.src=images[current];image.alt=`${title.textContent}, imagen ${current+1} de ${images.length}`;progress.textContent=`${current+1} / ${images.length}`};const hide=()=>{modal.hidden=true;document.body.classList.remove('gallery-open');lastFocus?.focus()};const show=(card,index)=>{lastFocus=card.querySelector('a');title.textContent=card.querySelector('h3').textContent;description.textContent=`${card.querySelectorAll('p')[0].textContent.trim()}. ${card.querySelectorAll('p')[1].textContent.trim()}. Proyecto desarrollado con una mirada funcional, sensible y técnicamente viable.`;images=[imagePool[index],imagePool[(index+1)%imagePool.length],imagePool[(index+2)%imagePool.length],imagePool[(index+3)%imagePool.length]];current=0;render();modal.hidden=false;document.body.classList.add('gallery-open');close.focus()};projectCards.forEach((card,index)=>{const trigger=card.querySelector('a');trigger.addEventListener('click',event=>{event.preventDefault();show(card,index)});card.addEventListener('click',event=>{if(event.target.closest('a'))return;show(card,index)})});modal.querySelector('.gallery-prev').addEventListener('click',()=>{current=(current-1+images.length)%images.length;render()});modal.querySelector('.gallery-next').addEventListener('click',()=>{current=(current+1)%images.length;render()});close.addEventListener('click',hide);modal.addEventListener('click',event=>{if(event.target===modal)hide()});document.addEventListener('keydown',event=>{if(modal.hidden)return;if(event.key==='Escape')hide();if(event.key==='ArrowLeft'){current=(current-1+images.length)%images.length;render()}if(event.key==='ArrowRight'){current=(current+1)%images.length;render()}if(event.key==='Tab'){const controls=[close,modal.querySelector('.gallery-prev'),modal.querySelector('.gallery-next')];const first=controls[0],last=controls.at(-1);if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus()}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus()}}})}
document.querySelector('.form')?.addEventListener('submit',e=>{e.preventDefault();const status=document.querySelector('.form-status');status.textContent='Formulario validado. Configura un servicio de correo para habilitar el envío.'});

const revealSections=[...document.querySelectorAll('main > section, body > .unified-cta-section, [data-footer] > section')];
if(revealSections.length){
  const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  revealSections.forEach(section=>section.classList.add('scroll-reveal'));

  if(reducedMotion||!('IntersectionObserver'in window)){
    revealSections.forEach(section=>section.classList.add('is-revealed'));
  }else{
    const revealObserver=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(!entry.isIntersecting)return;
        entry.target.classList.add('is-revealed');
        revealObserver.unobserve(entry.target);
      });
    },{
      threshold:0.12,
      rootMargin:'0px 0px -8% 0px'
    });
    revealSections.forEach(section=>revealObserver.observe(section));
  }
}
