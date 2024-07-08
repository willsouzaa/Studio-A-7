module.exports = {
  // ... outras configurações ESLint
  
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['~', './src'] // Configuração de alias para o caminho dos seus arquivos
        ],
        extensions: ['.js', '.jsx', '.json']
      }
    }
  }
};
