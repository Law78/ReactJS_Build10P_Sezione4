module.exports = {
  entry:[
    './src/index.js',
    './app/css/bootstrap.css',
    './app/css/style.css'
  ],
  output:{
    path: __dirname,
    filename: './app/js/main.js'
  },
  resolve: {
    root: __dirname,
     alias: {

     },
     modulesDirectories: [
         'node_modules',
         './src/components/quiz'
     ],
     extensions: ['','.js','.jsx']
  },
  module:{
    loaders:[
      {
        test:/\.jsx?$/,
        loaders:['babel?cacheDirectory'],
        exclude:/node_modules/
      },

      // For Bootstrap
      { test: /\.css$/, loader: 'style-loader!css-loader'},
      { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }

    ]
  },
  devServer: {
    host: 'localhost',
    port: 3000,
    contentBase: './app'
  }
}
