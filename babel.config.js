module.exports = function(api) {

  api.cache(true);
  return {
    presets: ['babel-preset-expo'],

     // TAILWIND 
        plugins: ["tailwindcss-react-native/babel"],
      // TAILWIND 

  };
};
