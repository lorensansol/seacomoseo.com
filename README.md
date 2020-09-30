# seacomoseo.com

```html
<sea>
  como
</seo>
````

[https://lorensansol.github.io/seacomoseo.com/](https://lorensansol.github.io/seacomoseo.com/)

Instalar con terminal desde carpeta root:

```
gem install bundler
bundle install
```

Servidor para jekyll:

```
# local (development)
bundle exec jekyll serve --watch --config _config.yml,_config_dev.yml

# production
JEKYLL_ENV=production bundle exec jekyll serve --watch
```

Subir a producción previo minificar y purgar css + minificar js (no olvidar descomentar site.critical-path-css y comentar site.include en _config.yml):

```
# purgar css
purgecss --css _site/_assets/css/styles.css --content _site/**/*.html,_site/assets/js/*.js --output assets/css/

# minificar archivos js
terser _site/_assets/js/scripts.js --comments false --output assets/js/scripts.js
terser _site/_assets/js/search.js --comments false --output assets/js/search.js
terser _site/_assets/js/smooth-scroll.js --comments false --output assets/js/smooth-scroll.js

# deploy con fecha actual
git add .;git commit -m "Actualización: `date +'%Y-%m-%d %H:%M:%S'`";git push
```

Experimental

```
# Comprimir imágenes
imagemin _site/_assets/img/*.* --out-dir=assets/img/ --plugin=pngquant

# minificar todos los archivos js, da error el formato glob
terser _site/_assets/js/*.js --comments false --output assets/js
terser --dir ./_site/_assets/js/*.js --comments false --out-dir=./assets/js

cat _site/index.html | critical --base ./ --inline > index.critical.html
critical _site/index.html --base ./ > critical.css

npx run criticalcss --url _site/index.html --file _site/assets/css/styles.css --output ./styles.min.css
npx run criticalcss --url http://localhost:4000/seacomoseo.com/ --file _site/assets/css/styles.css --output ./styles.min.css

npx babel _site/assets/js/scripts.js --out-file assets/js/scripts.babel.min.js
npx babel assets/js/scripts.min.js --out-file assets/js/scripts.babel.min.js
```

## FALTA

- critical diferente según pagetype
- metadescriptions
- Botón subir
- Comprobar smooth scroll safari
- Comprobar Carga diferida de css
- Quitar acentos en tag links de toc
- Marcado de datos estructurados

- CLI / Gulp padre
  - critical
  - img
  - babel
  - Eliminar comentarios #! de css (purgecss remove special comments)
  - Eliminar comentarios mapping

- logo
- favicon

- Actualizar posts de rejilla y presentación y página sobre y ejemplo rejilla
- Borrar posts de ejemplo y borradores + assets
- Actualizar página de diseño
  - data-showup

- https://jekyllrb.com/docs/step-by-step/10-deployment/
- https://github.com/jekyll/jekyll-gist