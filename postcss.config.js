const mode = process.env.NODE_ENV || 'development';


module.exports = {
  plugins: [
    require('autoprefixer'),
    mode === 'production' && require('cssnano'), // TODO: Minify in production
  ],
};
