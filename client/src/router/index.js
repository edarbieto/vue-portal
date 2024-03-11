import { createRouter, createWebHistory } from 'vue-router'
// --
// layouts/shop
import LayoutShop from '@/layouts/shop/layout.vue'
// --
// pages/auth
import PageAuthForgotPassword from '@/pages/auth/forgotpassword.vue'
import PageAuthLogin from '@/pages/auth/login.vue'
import PageAuthRegister from '@/pages/auth/register.vue'
import PageAuthVerifyToken from '@/pages/auth/verifytoken.vue'
// pages/shop
import PageShopAbout from '@/pages/shop/about.vue'
import PageShopCart from '@/pages/shop/cart.vue'
import PageShopCategory from '@/pages/shop/category.vue'
import PageShopCheckout from '@/pages/shop/checkout.vue'
import PageShopContact from '@/pages/shop/contact.vue'
import PageShopFavorites from '@/pages/shop/favorites.vue'
import PageShopHome from '@/pages/shop/home.vue'
import PageShopProductDetail from '@/pages/shop/productdetail.vue'
import PageShopSearch from '@/pages/shop/search.vue'
import PageShopNotFound from '@/pages/shop/notfound.vue'
// pages/portal
import PagePortalAddresses from '@/pages/portal/addresses.vue'
import PagePortalAssetDetail from '@/pages/portal/assetdetail.vue'
import PagePortalAssets from '@/pages/portal/assets.vue'
import PagePortalChangePassword from '@/pages/portal/changepassword.vue'
import PagePortalContractDetail from '@/pages/portal/contractdetail.vue'
import PagePortalContracts from '@/pages/portal/contracts.vue'
import PagePortalLoginUsers from '@/pages/portal/loginusers.vue'
import PagePortalOrderDetail from '@/pages/portal/orderdetail.vue'
import PagePortalOrders from '@/pages/portal/orders.vue'
import PagePortalProfile from '@/pages/portal/profile.vue'
// pages/support
import PageSupportTicketCreate from '@/pages/support/ticketcreate.vue'
import PageSupportTicketDetail from '@/pages/support/ticketdetail.vue'
import PageSupportTickets from '@/pages/support/tickets.vue'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: LayoutShop,
      children: [
        {
          path: "",
          component: PageShopHome,
        },
        {
          path: "about",
          component: PageShopAbout,
        },
        {
          path: "cart",
          component: PageShopCart,
        },
        {
          path: "category",
          redirect: "/",
        },
        {
          path: "category/:name",
          component: PageShopCategory,
        },
        {
          path: "checkout",
          component: PageShopCheckout,
        },
        {
          path: "contact",
          component: PageShopContact,
        },
        {
          path: "favorites",
          component: PageShopFavorites,
        },
        {
          path: "product",
          redirect: "/",
        },
        {
          path: "product/:id",
          component: PageShopProductDetail,
        },
        {
          path: "search",
          redirect: "/",
        },
        {
          path: "search/:query",
          component: PageShopSearch,
        },
        {
          path: "auth",
          children: [
            {
              path: "",
              redirect: "/auth/login",
            },
            {
              path: "login",
              component: PageAuthLogin,
            },
            {
              path: "register",
              component: PageAuthRegister,
            },
            {
              path: "forgot-password",
              component: PageAuthForgotPassword,
            },
            {
              path: "verify-token",
              component: PageAuthVerifyToken,
            },
          ],
        },
        {
          path: "portal",
          children: [
            {
              path: "",
              redirect: "/portal/profile",
            },
            {
              path: "profile",
              component: PagePortalProfile,
            },
            {
              path: "addresses",
              component: PagePortalAddresses,
            },
            {
              path: "assets",
              component: PagePortalAssets,
            },
            {
              path: "assets/:id",
              component: PagePortalAssetDetail,
            },
            {
              path: "change-password",
              component: PagePortalChangePassword,
            },
            {
              path: "contracts",
              component: PagePortalContracts,
            },
            {
              path: "contracts/:id",
              component: PagePortalContractDetail,
            },
            {
              path: "login-users",
              component: PagePortalLoginUsers,
            },
            {
              path: "orders",
              component: PagePortalOrders,
            },
            {
              path: "orders/:id",
              component: PagePortalOrderDetail,
            },
          ],
        },
        {
          path: "support",
          children: [
            {
              path: "",
              redirect: "/support/tickets",
            },
            {
              path: "tickets",
              component: PageSupportTickets,
            },
            {
              path: "tickets/create",
              component: PageSupportTicketCreate,
            },
            {
              path: "tickets/:id",
              component: PageSupportTicketDetail,
            },
          ],
        },
        {
          path: "/:pathMatch(.*)*",
          component: PageShopNotFound,
        },
      ],
    },
  ],
})

export default router
