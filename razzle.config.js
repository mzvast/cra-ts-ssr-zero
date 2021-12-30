'use strict';

module.exports = {
  plugins: [
    "manifest",
    {
      name: 'typescript',
      options: {
        useBabel: false,
        tsLoader: {
          transpileOnly: true,
          experimentalWatchApi: true,
        },
        forkTsChecker: {
          tsconfig: './tsconfig.json',
          tslint: false,
          watch: './src',
          typeCheck: true,
        },
      },
    },
  ],
};