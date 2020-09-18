# seacomoseo.com

[https://lorensansol.github.io/seacomoseo.com/](https://lorensansol.github.io/seacomoseo.com/)

Servidor local para jekyll:

```
bundle exec jekyll serve --watch
JEKYLL_ENV=production bundle exec jekyll serve --watch
```

Subir a producción previo minificar y purgar css:

```
purgecss --css _site/assets/css/styles.css --content _site/**/*.html,_site/assets/js/*.js --output assets/css/styles.min.css
purgecss --css _site/assets/css/prism.css --content _site/**/*.html,_site/assets/js/*.js --output assets/css/prism.min.css
git add .;git commit -m "Actualización: `date +'%Y-%m-%d %H:%M:%S'`";git push
```

critical _site/index.html --base ./ --inline > critical.css
cat _site/index.html | critical --base ./ --inline > critical.html

## FALTA

- Eliminar comentarios #! de css (purgecss remove special comments)
- status: draft
- Simplificar fechas
- logo
- devmode en minificación de html, css y js

- Traducciones
- Ofuscar enlaces a categorías etc.
- Ofuscar email

- Aviso de cookies
- Flecha de subir
- Lazyload
- srcset
  - https://www.lizheidner.com/front-end/responsive-images/
  - https://jetholt.com/jekyll-responsive-images/
  - https://medium.com/@ivo.v.valchev/jekyll-responsive-images-with-srcset-5da131415d0f

- Etiqueta title duplicada
- Unir y Minificar JS
- Eliminar comentarios mapping

- Marcado de datos estructurados

- Copiar imágenes
- Organizar carpetas

- seo_paginator_message