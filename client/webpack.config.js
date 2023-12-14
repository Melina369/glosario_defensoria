// webpack.config.js

module.exports = {
    // ... Otras configuraciones de webpack
    module: {
      rules: [
        // ... Otras reglas
        {
          test: /\.(png|jpe?g|gif|svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'images/', // Directorio de salida para las imágenes
              },
            },
          ],
        },
      ],
    },
  };
  