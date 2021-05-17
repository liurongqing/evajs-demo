require('esbuild')
  .serve(
    {
      servedir: 'public',
    },
    {
      entryPoints: ['src/main.js'],
      external: ['path', 'url'],
      outdir: 'public/js',
      inject: ['./global.js'],
      // define: { global: window },
      bundle: true,
    }
  )
  .then((server) => {
    console.log('\x1B[32m', '成功运行在 http://localhost:8000');
    // server.stop()
  });
