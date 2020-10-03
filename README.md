# seacomoseo.com

```html
<sea>
  como
</seo>
````

[https://lorensansol.github.io/seacomoseo.com/](https://lorensansol.github.io/seacomoseo.com/)

Instalar con terminal desde carpeta root:

```bash
gem install bundler
bundle install
```

Servidor para jekyll:

```bash
# local (development)
bundle exec jekyll serve --watch --config _config.yml,_config_dev.yml

# production
JEKYLL_ENV=production bundle exec jekyll serve --watch
```

Subir a producción previo minificar y purgar css + minificar js (no olvidar descomentar site.critical-path-css y comentar site.include en \_config.yml):

```bash
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

```bash
# comprimir imágenes
imagemin _site/_assets/img/*.* --out-dir=assets/img/ --plugin=pngquant

# minificar todos los archivos js, da error el formato glob
terser _site/_assets/js/*.js --comments false --output assets/js
terser --dir ./_site/_assets/js/*.js --comments false --out-dir=./assets/js

# critical path css
cat _site/index.html | critical --base ./ --inline > index.critical.html
critical _site/index.html --base ./ > critical.css

# critical path css
npx run criticalcss --url _site/index.html --file _site/assets/css/styles.css --output ./styles.min.css
npx run criticalcss --url http://localhost:4000/seacomoseo.com/ --file _site/assets/css/styles.css --output ./styles.min.css

# babel js
npx babel _site/assets/js/scripts.js --out-file assets/js/scripts.babel.min.js
npx babel assets/js/scripts.min.js --out-file assets/js/scripts.babel.min.js
```

## FALTA

- Quitar acentos en tag links de toc
- Comprobar Carga diferida de css
  - critical diferente según pagetype
  - Comprobar smooth scroll safari (si con critical no funciona bien, usar js)
- metadescriptions

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
- Marcado de datos estructurados

- https://jekyllrb.com/docs/step-by-step/10-deployment/
- https://github.com/jekyll/jekyll-gist