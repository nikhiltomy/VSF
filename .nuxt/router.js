import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4172281e = () => interopDefault(import('..\\pages\\Category.vue' /* webpackChunkName: "pages/Category" */))
const _01d6cbd6 = () => interopDefault(import('..\\pages\\Checkout.vue' /* webpackChunkName: "" */))
const _05da30d5 = () => interopDefault(import('..\\pages\\Checkout\\Billing.vue' /* webpackChunkName: "" */))
const _b6ecfa40 = () => interopDefault(import('..\\pages\\Checkout\\Payment.vue' /* webpackChunkName: "" */))
const _15b3bf78 = () => interopDefault(import('..\\pages\\Checkout\\Shipping.vue' /* webpackChunkName: "" */))
const _4298282a = () => interopDefault(import('..\\pages\\Checkout\\ThankYou.vue' /* webpackChunkName: "" */))
const _7f395466 = () => interopDefault(import('..\\pages\\Checkout.vue' /* webpackChunkName: "pages/Checkout" */))
const _0e2211e5 = () => interopDefault(import('..\\pages\\Checkout\\Billing.vue' /* webpackChunkName: "pages/Checkout/Billing" */))
const _a65d3820 = () => interopDefault(import('..\\pages\\Checkout\\Payment.vue' /* webpackChunkName: "pages/Checkout/Payment" */))
const _144b3d98 = () => interopDefault(import('..\\pages\\Checkout\\Shipping.vue' /* webpackChunkName: "pages/Checkout/Shipping" */))
const _412fa64a = () => interopDefault(import('..\\pages\\Checkout\\ThankYou.vue' /* webpackChunkName: "pages/Checkout/ThankYou" */))
const _035c43ee = () => interopDefault(import('..\\pages\\ContactUs.vue' /* webpackChunkName: "pages/ContactUs" */))
const _7db98a22 = () => interopDefault(import('..\\pages\\Home.vue' /* webpackChunkName: "" */))
const _65c08b7f = () => interopDefault(import('..\\pages\\Home.vue' /* webpackChunkName: "pages/Home" */))
const _b9e9031e = () => interopDefault(import('..\\pages\\MyAccount.vue' /* webpackChunkName: "pages/MyAccount" */))
const _736df8e0 = () => interopDefault(import('..\\pages\\MyAccount\\AdressBook.vue' /* webpackChunkName: "pages/MyAccount/AdressBook" */))
const _6db34fd8 = () => interopDefault(import('..\\pages\\MyAccount\\BillingDetails.vue' /* webpackChunkName: "pages/MyAccount/BillingDetails" */))
const _06d6e135 = () => interopDefault(import('..\\pages\\MyAccount\\LoyaltyCard.vue' /* webpackChunkName: "pages/MyAccount/LoyaltyCard" */))
const _2fe31b56 = () => interopDefault(import('..\\pages\\MyAccount\\MyNewsletter.vue' /* webpackChunkName: "pages/MyAccount/MyNewsletter" */))
const _65222d5c = () => interopDefault(import('..\\pages\\MyAccount\\MyProfile.vue' /* webpackChunkName: "pages/MyAccount/MyProfile" */))
const _a6b5e264 = () => interopDefault(import('..\\pages\\MyAccount\\MyReviews.vue' /* webpackChunkName: "pages/MyAccount/MyReviews" */))
const _0b283cb7 = () => interopDefault(import('..\\pages\\MyAccount\\OrderHistory.vue' /* webpackChunkName: "pages/MyAccount/OrderHistory" */))
const _0edbda1a = () => interopDefault(import('..\\pages\\MyAccount\\ShippingDetails.vue' /* webpackChunkName: "pages/MyAccount/ShippingDetails" */))
const _5cc81102 = () => interopDefault(import('..\\pages\\Product.vue' /* webpackChunkName: "pages/Product" */))
const _667c56aa = () => interopDefault(import('..\\pages\\ResetPassword.vue' /* webpackChunkName: "" */))
const _01aeafcc = () => interopDefault(import('..\\pages\\ResetPassword.vue' /* webpackChunkName: "pages/ResetPassword" */))
const _741cf501 = () => interopDefault(import('..\\pages\\MyAccount.vue' /* webpackChunkName: "" */))
const _72b9d20f = () => interopDefault(import('..\\pages\\Product.vue' /* webpackChunkName: "" */))
const _77e0c0e4 = () => interopDefault(import('..\\pages\\Category.vue' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Category",
    component: _4172281e,
    name: "Category___en"
  }, {
    path: "/checkout",
    component: _01d6cbd6,
    name: "checkout___en",
    children: [{
      path: "billing",
      component: _05da30d5,
      name: "billing___en"
    }, {
      path: "payment",
      component: _b6ecfa40,
      name: "payment___en"
    }, {
      path: "shipping",
      component: _15b3bf78,
      name: "shipping___en"
    }, {
      path: "thank-you",
      component: _4298282a,
      name: "thank-you___en"
    }]
  }, {
    path: "/Checkout",
    component: _7f395466,
    name: "Checkout___en",
    children: [{
      path: "Billing",
      component: _0e2211e5,
      name: "Checkout-Billing___en"
    }, {
      path: "Payment",
      component: _a65d3820,
      name: "Checkout-Payment___en"
    }, {
      path: "Shipping",
      component: _144b3d98,
      name: "Checkout-Shipping___en"
    }, {
      path: "ThankYou",
      component: _412fa64a,
      name: "Checkout-ThankYou___en"
    }]
  }, {
    path: "/ContactUs",
    component: _035c43ee,
    name: "ContactUs___en"
  }, {
    path: "/de",
    component: _7db98a22,
    name: "home___de"
  }, {
    path: "/Home",
    component: _65c08b7f,
    name: "Home___en"
  }, {
    path: "/MyAccount",
    component: _b9e9031e,
    name: "MyAccount___en",
    children: [{
      path: "AdressBook",
      component: _736df8e0,
      name: "MyAccount-AdressBook___en"
    }, {
      path: "BillingDetails",
      component: _6db34fd8,
      name: "MyAccount-BillingDetails___en"
    }, {
      path: "LoyaltyCard",
      component: _06d6e135,
      name: "MyAccount-LoyaltyCard___en"
    }, {
      path: "MyNewsletter",
      component: _2fe31b56,
      name: "MyAccount-MyNewsletter___en"
    }, {
      path: "MyProfile",
      component: _65222d5c,
      name: "MyAccount-MyProfile___en"
    }, {
      path: "MyReviews",
      component: _a6b5e264,
      name: "MyAccount-MyReviews___en"
    }, {
      path: "OrderHistory",
      component: _0b283cb7,
      name: "MyAccount-OrderHistory___en"
    }, {
      path: "ShippingDetails",
      component: _0edbda1a,
      name: "MyAccount-ShippingDetails___en"
    }]
  }, {
    path: "/Product",
    component: _5cc81102,
    name: "Product___en"
  }, {
    path: "/reset-password",
    component: _667c56aa,
    name: "reset-password___en"
  }, {
    path: "/ResetPassword",
    component: _01aeafcc,
    name: "ResetPassword___en"
  }, {
    path: "/de/Category",
    component: _4172281e,
    name: "Category___de"
  }, {
    path: "/de/checkout",
    component: _01d6cbd6,
    name: "checkout___de",
    children: [{
      path: "billing",
      component: _05da30d5,
      name: "billing___de"
    }, {
      path: "payment",
      component: _b6ecfa40,
      name: "payment___de"
    }, {
      path: "shipping",
      component: _15b3bf78,
      name: "shipping___de"
    }, {
      path: "thank-you",
      component: _4298282a,
      name: "thank-you___de"
    }]
  }, {
    path: "/de/Checkout",
    component: _7f395466,
    name: "Checkout___de",
    children: [{
      path: "Billing",
      component: _0e2211e5,
      name: "Checkout-Billing___de"
    }, {
      path: "Payment",
      component: _a65d3820,
      name: "Checkout-Payment___de"
    }, {
      path: "Shipping",
      component: _144b3d98,
      name: "Checkout-Shipping___de"
    }, {
      path: "ThankYou",
      component: _412fa64a,
      name: "Checkout-ThankYou___de"
    }]
  }, {
    path: "/de/ContactUs",
    component: _035c43ee,
    name: "ContactUs___de"
  }, {
    path: "/de/Home",
    component: _65c08b7f,
    name: "Home___de"
  }, {
    path: "/de/MyAccount",
    component: _b9e9031e,
    name: "MyAccount___de",
    children: [{
      path: "AdressBook",
      component: _736df8e0,
      name: "MyAccount-AdressBook___de"
    }, {
      path: "BillingDetails",
      component: _6db34fd8,
      name: "MyAccount-BillingDetails___de"
    }, {
      path: "LoyaltyCard",
      component: _06d6e135,
      name: "MyAccount-LoyaltyCard___de"
    }, {
      path: "MyNewsletter",
      component: _2fe31b56,
      name: "MyAccount-MyNewsletter___de"
    }, {
      path: "MyProfile",
      component: _65222d5c,
      name: "MyAccount-MyProfile___de"
    }, {
      path: "MyReviews",
      component: _a6b5e264,
      name: "MyAccount-MyReviews___de"
    }, {
      path: "OrderHistory",
      component: _0b283cb7,
      name: "MyAccount-OrderHistory___de"
    }, {
      path: "ShippingDetails",
      component: _0edbda1a,
      name: "MyAccount-ShippingDetails___de"
    }]
  }, {
    path: "/de/Product",
    component: _5cc81102,
    name: "Product___de"
  }, {
    path: "/de/reset-password",
    component: _667c56aa,
    name: "reset-password___de"
  }, {
    path: "/de/ResetPassword",
    component: _01aeafcc,
    name: "ResetPassword___de"
  }, {
    path: "/de/my-account/:pageName?",
    component: _741cf501,
    name: "my-account___de"
  }, {
    path: "/de/p/:id/:slug",
    component: _72b9d20f,
    name: "product___de"
  }, {
    path: "/de/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _77e0c0e4,
    name: "category___de"
  }, {
    path: "/my-account/:pageName?",
    component: _741cf501,
    name: "my-account___en"
  }, {
    path: "/p/:id/:slug",
    component: _72b9d20f,
    name: "product___en"
  }, {
    path: "/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _77e0c0e4,
    name: "category___en"
  }, {
    path: "/",
    component: _7db98a22,
    name: "home___en"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
