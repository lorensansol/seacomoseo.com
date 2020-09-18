---
title: Ejemplo de rejilla adaptable sólo con HTML y CSS
sitemap: false
---

<style type="text/css">
.rejilla * {
  box-sizing: border-box; /* para que los padding y border no se sumen al width */
}
.rejilla {
  text-align: center; /* todo centradico */
}
.rejilla > li {
  display: inline-block;
  width: 100%;
  margin: -2px; /* esto es para solventar la posibilidad de que no entren las columnas diseñadas */
  vertical-align: top; /* alinear cada producto arriba */
}
@media (min-width: 425px) { /* para esta resolución mínima */
  .rejilla > li {
    width: 50%; /* 2 columnas a partir de la resolución indicada */
  }
}
@media (min-width: 768px) { /* para esta resolución mínima */
  .rejilla > li {
    width: 33.33333333%; /* 3 columnas a partir de la resolución indicada */
  }
}
@media (min-width: 992px) { /* para esta resolución mínima */
  .rejilla > li {
    width: 25%; /* 4 columnas a partir de la resolución indicada */
  }
}
.rejilla a {
  display: block; /* para que el enlace abarque toda la "celda" del producto */
  padding: 15px;
}
.rejilla a:hover {
  box-shadow: 0 0 0 2px #ccc; /* efecto para remarcar productos al pasar el cursor por encima */
}
.rejilla img { /* para que las imágenes se autoajusten si la rejilla es más pequeña */
  max-width: 100%;
  height: auto;
}
</style>
<ul class="rejilla">
 	<li><a href="https://www.amazon.es/dp/B00K76QAEW?tag=seacomoseo-21" rel="nofollow" target="_blank"><img itemprop="image" src="https://images-eu.ssl-images-amazon.com/images/I/41nxVS2RBqL._AC_US218_.jpg" width="200" height="200" alt="Técnicas Avanzadas de posicionamiento en buscadores (Títulos Especiales)">
<h3>Técnicas Avanzadas de posicionamiento en buscadores (Títulos Especiales)</h3>
14,24 €

</a><a href="https://www.amazon.es/dp/B00K76QAEW?tag=seacomoseo-21" rel="nofollow" target="_blank"></a></li>
 	<li><a href="https://www.amazon.es/dp/8441537283?tag=seacomoseo-21" rel="nofollow" target="_blank"><img itemprop="image" src="https://images-eu.ssl-images-amazon.com/images/I/41RtJ94F3eL._AC_US218_.jpg" width="200" height="200" alt="Seo. Las claves esenciales (Social Media)">
<h3>Seo. Las claves esenciales (Social Media)</h3>
18,95 €

</a><a href="https://www.amazon.es/dp/8441537283?tag=seacomoseo-21" rel="nofollow" target="_blank"></a></li>
 	<li><a href="https://www.amazon.es/dp/8441537305?tag=seacomoseo-21" rel="nofollow" target="_blank"><img itemprop="image" src="https://images-eu.ssl-images-amazon.com/images/I/51oWjrp4zlL._AC_US218_.jpg" width="200" height="200" alt="SEO. Técnicas Avanzadas (Social Media)">
<h3>SEO. Técnicas Avanzadas (Social Media)</h3>
28,98 €

</a><a href="https://www.amazon.es/dp/8441537305?tag=seacomoseo-21" rel="nofollow" target="_blank"></a></li>
 	<li><a href="https://www.amazon.es/dp/8494568310?tag=seacomoseo-21" rel="nofollow" target="_blank"><img itemprop="image" src="https://images-eu.ssl-images-amazon.com/images/I/41yR2JODdwL._AC_US218_.jpg" width="200" height="200" alt="Google AdWords: Trucos y estrategias para el éxito">
<h3>Google AdWords: Trucos y estrategias para el éxito</h3>
23,75 €

</a><a href="https://www.amazon.es/dp/8494568310?tag=seacomoseo-21" rel="nofollow" target="_blank"></a></li>
 	<li><a href="https://www.amazon.es/dp/B00HH960BU?tag=seacomoseo-21" rel="nofollow" target="_blank"><img itemprop="image" src="https://images-eu.ssl-images-amazon.com/images/I/51CkkImQcGL._AC_US218_.jpg" width="200" height="200" alt="Marketing Online: Colección: La serie el completo">
<h3>Marketing Online: Colección: La serie el completo</h3>
9,99 €

</a><a href="https://www.amazon.es/dp/B00HH960BU?tag=seacomoseo-21" rel="nofollow" target="_blank"></a></li>
 	<li><a href="https://www.amazon.es/dp/8441537097?tag=seacomoseo-21" rel="nofollow" target="_blank"><img itemprop="image" src="https://images-eu.ssl-images-amazon.com/images/I/51XnRzjoOKL._AC_US218_.jpg" width="200" height="200" alt="Marketing Analytics (Social Media)">
<h3>Marketing Analytics (Social Media)</h3>
15,2 €

</a><a href="https://www.amazon.es/dp/8441537097?tag=seacomoseo-21" rel="nofollow" target="_blank"></a></li>
 	<li><a href="https://www.amazon.es/dp/B01A8ZF5H4?tag=seacomoseo-21" rel="nofollow" target="_blank"><img itemprop="image" src="https://images-eu.ssl-images-amazon.com/images/I/51pp8Y8AS7L._AC_US218_.jpg" width="200" height="200" alt="Las 25 mejores páginas de Facebook: Cómo conseguir miles de fans para vender más">
<h3>Las 25 mejores páginas de Facebook: Cómo conseguir miles de fans para vender más</h3>
9,99 €

</a><a href="https://www.amazon.es/dp/B01A8ZF5H4?tag=seacomoseo-21" rel="nofollow" target="_blank"></a></li>
 	<li><a href="https://www.amazon.es/dp/1449304214?tag=seacomoseo-21" rel="nofollow" target="_blank"><img itemprop="image" src="https://images-eu.ssl-images-amazon.com/images/I/41gZRfKJTWL._AC_US218_.jpg" width="200" height="200" alt="The Art of SEO (Theory in Practice)">
<h3>The Art of SEO (Theory in Practice)</h3>
41,6 €

</a><a href="https://www.amazon.es/dp/1449304214?tag=seacomoseo-21" rel="nofollow" target="_blank"></a></li>
</ul>