module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          'module-alias': 'babel-plugin-module-resolver', // Ensure this alias is defined
        },
      },
    ],
    ['module:react-native-dotenv'],
  ],
};
