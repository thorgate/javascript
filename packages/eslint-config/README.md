# @thorgate/eslint-config

## Installation

1) Install the package
   ```shell script
   yarn install @thorgate/eslint-config
   ```

2) Install ESLint plugins

   ESLint plugins used by this config must also be installed within your project. This is a [limitation within ESLint](https://github.com/eslint/rfcs/pull/5).
    
   Install required plugins if you have *npm 5+* installed
   ```shell script
   npx install-peerdeps --dev @thorgate/eslint-config
   ```
    
   Otherwise you can use following:
    
   ```shell script
   npm install eslint@^8.3.0 \
               eslint-config-airbnb@^19.0.2 \
               eslint-config-prettier@^8.3.0 \
               eslint-config-react-app@^7.0.0 \
               eslint-plugin-flowtype@^8.0.3 \
               eslint-plugin-import@^2.25.3 \
               eslint-plugin-jest@^25.3.0 \
               eslint-plugin-jsx-a11y@^6.5.1 \
               eslint-plugin-prettier@^4.0.0 \
               eslint-plugin-react@^7.27.1 \
               eslint-plugin-react-hooks@^4.3.0
   ```

3) Configuration

   In your `.eslintrc` add following:

   ```json
   {
     "extends": ["@thorgate"]
   }
   ```
   
   If you need to change some rules then add those to `.eslintrc` also. This goes for adding resolvers also.
