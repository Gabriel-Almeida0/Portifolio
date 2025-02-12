module.exports = {
    basePath: '/portifolio',
    assetPrefix: '/portifolio/',
    output: 'export',
    images: {
      unoptimized: true, // necessário para não gerar erros com imagens
    },
    trailingSlash: true, // garante que as rotas sejam geradas com barra no final
  };