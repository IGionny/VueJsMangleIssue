require('webpack');
const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');
const TerserPlugin = require("terser-webpack-plugin");


// ======= FLAGS
const isProductionMode = process.env.NODE_ENV === "production";
const enableBundleAnalyzer = false;

// ======= CUSTOMIZATIONS

const webpackDevServerPort = 8083;

const entries = {
  "Tree": "/src/Pages/Tree.ts",
  "ParentChild": "/src/Pages/ParentChild.ts"
}


const externals = [{
  "jquery": "jQuery",
  "vue": 'Vue',
  "vee-validate": "VeeValidate",
  "chart.js": "Chart",
  "moment": "moment",
  'moment-timezone': 'moment',
  "Printd": "printd",
  "vis": "vis",
  "visnetwork": "visnetwork"
},
  ({context, request}, callback) => {
    if (/^ace$/.test(request)) {
      // The external is a global variable called `ace`.
      return callback(null, 'ace');
    }
    callback();
  }
];

// ======= WEBPACK Configuration

const webPackConf = {
  cache: {
    type: 'filesystem',
    allowCollectingMemory: true,
    buildDependencies: {
      // This makes all dependencies of this file - build dependencies
      config: [__filename],
      // By default webpack and loaders are build dependencies
    }
  },
  entry: entries,
  output: {
    path: path.resolve(__dirname, './pack/'),
    publicPath: '/public/',
    filename: '[name].js'
  },
  mode: process.env.NODE_ENV,
  externals: externals,
  resolve: {
    extensions: ['.ts', '.vue', '.js', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    plugins: [new TsconfigPathsPlugin()],
    fallback:
      {
        "fs": false,
        "tls": false,
        "net": false,
        "path": false,
        "zlib": false,
        "http": false,
        "https": false,
        "stream": false,
        "crypto": false
      }

  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              appendTsSuffixTo: [/\.vue$/],
            }
          }
        ],
        exclude: /node_modules/,

      },
      {
        test: /\.css$/,
        oneOf: [
          // this applies to <style module>
          {
            resourceQuery: /module/,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  localIdentName: '[local]_[hash:base64:8]'
                }
              }
            ]
          },
          // this applies to <style> or <style scoped>
          {
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  url: false
                }
              }
            ]
          }
        ]
      }
    ]
  },

  plugins: [
    new VueLoaderPlugin()
  ]
};


if (!isProductionMode) {
  // In Develop Mode enable dev server and eval-source-map

  webPackConf.devServer = {
    hot: true,
    compress: false,
    port: webpackDevServerPort,
    client: {
      logging: 'verbose',
    },

  };
  webPackConf.devtool = 'eval-source-map';

  if (enableBundleAnalyzer) {

    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
    webPackConf.plugins.push(new BundleAnalyzerPlugin());
  }
} else {



  const terseOptions = {
    terserOptions: {
      mangle: false
    }
  }

  webPackConf.optimization = {
    minimize: true,

    //This not
    //minimizer: [new TerserPlugin(terseOptions)],

    //This cause the problem:
    minimizer: [new TerserPlugin()],
  };
}


module.exports = webPackConf;
