
require('esbuild').buildSync({
  entryPoints: ['src/main.js'],
  external: ['path', 'url'],
  outdir: 'public/js',
  minify: true,
  inject: ['./global.js'],
  // define: { global: window },
  bundle: true,
})

