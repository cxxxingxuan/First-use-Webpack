const path =require('path');

var base = {
      index : './src/js/index.js'
}
module.exports = {
      entry:  base,//入口路径
      devtool:'source-map',
      output : {
            path :path.resolve(__dirname,'dist'),
            libraryTarget:'umd',
            filename : 'bundle.js'
      },
      module :{
            rules:[
                  {
                        test: /\.jsx?$/,
                        exclude: [
                              'node_modules'
                        ],
                        use:[
                              {loader: "babel-loader"}
                        ]
                  },
                  {
                        test: /\.css$/,
                        use:[
                              'style-loader',
                              'css-loader'
                        ]
                  },
                  {
                        test :　/\.(png|svg|jpg|gif)$/,
                        use : [
                              'file-loader'
                        ]
                  }
            ]
      }
};


