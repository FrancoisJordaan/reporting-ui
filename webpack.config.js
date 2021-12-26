import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const config = {
output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index.bundle.mjs'
  },
  devServer: {
    port: 4050,
    watchFiles: ['src/**/*.js', 'src/*.js'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /nodeModules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  experiments: {
    outputModule: true,
  },
  externalsType: 'node-commonjs',
  externalsPresets: {
    node: true
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
}

export default config