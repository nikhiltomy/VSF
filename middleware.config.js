module.exports = {
  integrations: {
    shopify: {
      location: '@vue-storefront/shopify-api/server',
      configuration: {
        api: {
          domain: 'au-ki.myshopify.com',
          storefrontAccessToken: 'e00c08e4c3e7845ed35dd3cb38d44e7b'
        },
        currency: 'USD',
        country: 'US'
      }
    }
  }
};
