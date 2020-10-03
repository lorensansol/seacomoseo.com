const cookiesMessage=document.getElementById("cookies-message");const cookiesMessageAcept=document.getElementById("cookies-message-acept");const cookiesMessageToogle=document.getElementById("cookies-message-toggle");localStorage.controlcookie>0&&cookiesMessage.classList.remove("active");cookiesMessageAcept.addEventListener("click",()=>{localStorage.controlcookie=localStorage.controlcookie||0,localStorage.controlcookie++,cookiesMessage.classList.remove("active")});cookiesMessageToogle.addEventListener("click",()=>{cookiesMessage.classList.toggle("active")});function loadScript(url,callback){if(!document.getElementById(url)){var s=document.createElement("script");s.onload=callback;s.src=url;s.id=url;document.head.appendChild(s)}}function loadStyle(url,callback){if(!document.getElementById(url)){var s=document.createElement("link");s.onload=callback;s.rel="stylesheet";s.href=url;s.id=url;document.head.appendChild(s)}}if(!("scrollBehavior"in document.documentElement.style)){function smoothScroll(){var anchorOffset=48;var links=document.querySelectorAll('[href^="#"]');links.forEach(link=>{link.addEventListener("click",click=>{click.preventDefault();var target=document.querySelector(link.getAttribute("href"));target.scrollIntoView({behavior:"smooth"})})})}loadScript("/seacomoseo.com/assets/js/smooth-scroll.js",smoothScroll)}function scrollShot(windowMarginTop,windowMarginBottom,selectorCSS,doAfterPre,doBefore=(()=>undefined),doAfterPost=0){const callbackScroll=(entries,observer)=>entries.forEach(entry=>{if(entry.isIntersecting){doAfterPre(entry.target);if(!doAfterPost){observer.unobserve(entry.target)}}else if(doAfterPost){doAfterPost(entry.target)}});const observerScroll=new IntersectionObserver(callbackScroll,{rootMargin:windowMarginTop+" 0px "+windowMarginBottom+" 0px"});document.querySelectorAll(selectorCSS).forEach(nodo=>{observerScroll.observe(nodo);doBefore(nodo)})}scrollShot("-15%","-15%","[data-showup]",nodo=>nodo.classList.remove("showup"),nodo=>nodo.classList.add("showup"));function btnUp(){document.querySelector(".btn-up").classList.toggle("btn-up-hide")}scrollShot("0px","0px",".btn-up-aux",()=>{btnUp()},()=>{if(scrollY<=document.querySelector(".btn-up-aux").scrollHeight-50){btnUp()}},()=>{btnUp()});function srcClock(nodo){nodo.classList.add("lazyload");var width=nodo.getAttribute("width")||"100%";var height=nodo.getAttribute("height")||"100%";nodo.setAttribute("src",`data:image/svg+xml,%3Csvg%20width='${width}'%20height='${height}'%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%3E%3Cstyle%3Epath%7Btransform-origin:center%7Dpath:nth-child%282%29%7Banimation:spin%202s%20linear%20infinite%7Dpath:nth-child%283%29%7Banimation:spin%20calc%282s%20%2A%2012%29%20linear%20infinite%7D%40keyframes%20spin%7Bto%7Btransform:rotate%28360deg%29%7D%7D%3C/style%3E%3Cg%20fill='none'%20stroke='gray'%20stroke-width='1'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-miterlimit='10'%3E%3Ccircle%20cx='8'%20cy='8'%20r='7.5'/%3E%3Cpath%20d='M8%203%20V8'/%3E%3Cpath%20d='M8%208%20L10%2010'/%3E%3C/g%3E%3C/svg%3E`)}scrollShot("0px","0px",".article-post img[data-src]",nodo=>{const imgBig=nodo.dataset.src;const imgSmall="https://images.weserv.nl/?url="+(imgBig.indexOf("://")==-1?location.origin:"")+imgBig+"&w=400&q=65";var width=nodo.getAttribute("width");width?width+="w":width="700w";nodo.src=nodo.dataset.src;nodo.srcset=nodo.dataset.srcset||imgSmall+" 400w, "+imgBig+" "+width;nodo.sizes=nodo.dataset.sizes||"(max-width: 480px) calc(90vw - 30px), (max-width: 600px) calc(90vw - 30px - 40px), (max-width: 927px) calc(90vw - 95px - 40px), 700px";nodo.classList.remove("lazyload")},srcClock);scrollShot("0px","0px","[data-src]:not([src])",nodo=>{nodo.src=nodo.dataset.src;if(nodo.dataset.srcset)nodo.srcset=nodo.dataset.srcset;if(nodo.dataset.sizes)nodo.sizes=nodo.dataset.sizes;nodo.classList.remove("lazyload")},srcClock);scrollShot("0px","160px","[data-style]",nodo=>nodo.style=nodo.dataset.style,nodo=>nodo.style="background-image: url(data:image/svg+xml,%3Csvg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cstyle%3Epath%7Btransform-origin:center%7Dpath:nth-child%282%29%7Banimation:spin 2s linear infinite%7Dpath:nth-child%283%29%7Banimation:spin calc%282s %2A 12%29 linear infinite%7D%40keyframes spin%7Bto%7Btransform:rotate%28360deg%29%7D%7D%3C/style%3E%3Cg fill='none' stroke='gray' stroke-width='1' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10'%3E%3Ccircle cx='8' cy='8' r='7.5'/%3E%3Cpath d='M8 3 V8'/%3E%3Cpath d='M8 8 L10 10'/%3E%3C/g%3E%3C/svg%3E); background-repeat: no-repeat; background-position: center;");setTimeout(()=>document.body.className="",500);function hasTouch(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}if(hasTouch()){try{for(var si in document.styleSheets){var styleSheet=document.styleSheets[si];if(!styleSheet.rules)continue;for(var ri=styleSheet.rules.length-1;ri>=0;ri--){if(!styleSheet.rules[ri].selectorText)continue;if(styleSheet.rules[ri].selectorText.match(":hover")){styleSheet.deleteRule(ri)}}}}catch(ex){}}const navSelector=".nav-icon, #menu, #blackover-nav, body";function toggleNav(){document.querySelectorAll(navSelector).forEach(e=>e.classList.toggle("active"))}function closeNav(){document.querySelectorAll(navSelector).forEach(e=>e.classList.remove("active"))}document.querySelector(".nav-icon").addEventListener("click",toggleNav);document.getElementById("blackover-nav").addEventListener("click",closeNav);document.addEventListener("keyup",e=>e.keyCode==27&&closeNav());document.querySelector(".show-search").addEventListener("click",()=>{document.querySelector(".bd-search").classList.toggle("search--show")});document.getElementById("lunrsearch").addEventListener("click",(function(){loadScript("/seacomoseo.com/assets/js/search.js")}));const btnShowComments=document.querySelector(".show-comments");function loadComments(){var clock=document.getElementById("disqus_thread").insertAdjacentHTML("beforeend",`<img style='height:20em;width:100%' src="data:image/svg+xml,%3Csvg%20width='100%'%20height='100%'%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%3E%3Cstyle%3Epath%7Btransform-origin:center%7Dpath:nth-child%282%29%7Banimation:spin%202s%20linear%20infinite%7Dpath:nth-child%283%29%7Banimation:spin%20calc%282s%20%2A%2012%29%20linear%20infinite%7D%40keyframes%20spin%7Bto%7Btransform:rotate%28360deg%29%7D%7D%3C/style%3E%3Cg%20fill='none'%20stroke='gray'%20stroke-width='1'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-miterlimit='10'%3E%3Ccircle%20cx='8'%20cy='8'%20r='7.5'/%3E%3Cpath%20d='M8%203%20V8'/%3E%3Cpath%20d='M8%208%20L10%2010'/%3E%3C/g%3E%3C/svg%3E">`);var d=document,s1=d.createElement("script"),s2=d.createElement("script");s1.src="https://seacomoseo.disqus.com/count.js";s1.id="dsq-count-scr";d.head.appendChild(s1);s2.src="https://seacomoseo.disqus.com/embed.js";s2.setAttribute("data-timestamp",+new Date);(d.head||d.body).appendChild(s2)}function toggleComments(){document.getElementById("comments").classList.toggle("comments--show")}btnShowComments&&btnShowComments.addEventListener("click",()=>{if(!document.getElementById("dsq-count-scr")){loadComments()}toggleComments()});const codePre=document.querySelectorAll('pre code[class*="language-"]');if(codePre){loadScript("/seacomoseo.com/_assets/js/prism.js");loadStyle("/seacomoseo.com/_assets/css/prism.css")}