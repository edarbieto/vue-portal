<template>
  <!-- <ul>
    <li><p>--- Home ---</p></li>
    <li><router-link to="/about">shop-about</router-link></li>
    <li><router-link to="/cart">shop-cart</router-link></li>
    <li><router-link to="/category/test">shop-category</router-link></li>
    <li><router-link to="/checkout">shop-checkout</router-link></li>
    <li><router-link to="/contact">shop-contact</router-link></li>
    <li><router-link to="/favorites">shop-favorites</router-link></li>
    <li><router-link to="/product/test">shop-productdetail</router-link></li>
    <li><router-link to="/search/test">shop-search</router-link></li>
    <li><p>--- Auth ---</p></li>
    <li><router-link to="/auth/login">auth-login</router-link></li>
    <li><router-link to="/auth/register">auth-register</router-link></li>
    <li><router-link to="/auth/forgot-password">auth-forgotpassword</router-link></li>
    <li><router-link to="/auth/verify-token">auth-verifytoken</router-link></li>
    <li><p>--- Portal ---</p></li>
    <li><router-link to="/portal/profile">portal-profile</router-link></li>
    <li><router-link to="/portal/addresses">portal-addresses</router-link></li>
    <li><router-link to="/portal/assets">portal-assets</router-link></li>
    <li><router-link to="/portal/assets/test">portal-assetsdetail</router-link></li>
    <li><router-link to="/portal/change-password">portal-changepassword</router-link></li>
    <li><router-link to="/portal/contracts">portal-contracts</router-link></li>
    <li><router-link to="/portal/contracts/test">portal-contractdetail</router-link></li>
    <li><router-link to="/portal/login-users">portal-loginusers</router-link></li>
    <li><router-link to="/portal/orders">portal-orders</router-link></li>
    <li><router-link to="/portal/orders/test">portal-orderdetail</router-link></li>
    <li><p>--- Support ---</p></li>
    <li><router-link to="/support/tickets">support-tickets</router-link></li>
    <li><router-link to="/support/tickets/test">support-ticketdetail</router-link></li>
    <li><router-link to="/support/tickets/create">support-ticketcreate</router-link></li>
  </ul> -->
  <v-carousel hide-delimiters>
      <v-carousel-item
        src="https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
        cover
      ></v-carousel-item>
      <v-carousel-item
        src="https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
        cover
      ></v-carousel-item>
      <v-carousel-item
        src="https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
        cover
      ></v-carousel-item>
  </v-carousel>
  <v-container>
    <div class="pa-7 text-black my-4 rounded-lg">
      <h3>Shop Our Top Categories</h3>
      <v-container>

        <v-row>
          <v-col cols="12"
            sm="6"
            md="4"
            lg="3">

              <div class="mx-auto rounded-lg pt-5 border" max-width="300">
                <div class="mx-auto my-2 pa-2 rounded-lg" :style="{
                            width: '150px',
                            height: '150px',
                            backgroundImage:
                            `url(https://picsum.photos/id/1/300/300/)`,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            position: 'relative',
                        }">

                  <!-- <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mygsm.me%2Fbeats-by-dr-dre-solo-black.html&psig=AOvVaw27ZmuAuNyz3y85AHxj1Igl&ust=1710426001563000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCIi6mMS38YQDFQAAAAAdAAAAABAd" alt=""> -->
                </div>
                <div class="mx-auto my-1 text-center pa-2">
                  <span>Electronics</span>
                </div>
              </div>

          </v-col>
          <v-col cols="12"
            sm="6"
            md="4"
            lg="3">
            <div class="mx-auto rounded-lg pt-5 border" max-width="300">
              <div class="mx-auto my-2 pa-2 rounded-lg" :style="{
                          width: '150px',
                          height: '150px',
                          backgroundImage:
                          `url(https://picsum.photos/id/1/300/300/)`,
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                          backgroundSize: 'cover',
                          position: 'relative',
                      }">

                <!-- <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mygsm.me%2Fbeats-by-dr-dre-solo-black.html&psig=AOvVaw27ZmuAuNyz3y85AHxj1Igl&ust=1710426001563000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCIi6mMS38YQDFQAAAAAdAAAAABAd" alt=""> -->
              </div>
              <div class="mx-auto my-1 text-center pa-2">
                <span>Computers</span>
              </div>
            </div>

          </v-col>
          <v-col cols="12"
            sm="6"
            md="4"
            lg="3">
            <div class="mx-auto rounded-lg pt-5 border" max-width="300">
              <div class="mx-auto my-2 pa-2 rounded-lg" :style="{
                          width: '150px',
                          height: '150px',
                          backgroundImage:
                          `url(https://picsum.photos/id/1/300/300/)`,
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                          backgroundSize: 'cover',
                          position: 'relative',
                      }">

                <!-- <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mygsm.me%2Fbeats-by-dr-dre-solo-black.html&psig=AOvVaw27ZmuAuNyz3y85AHxj1Igl&ust=1710426001563000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCIi6mMS38YQDFQAAAAAdAAAAABAd" alt=""> -->
              </div>
              <div class="mx-auto my-1 text-center pa-2">
                <span>Smart Home</span>
              </div>
            </div>

          </v-col>
          <v-col cols="12"
            sm="6"
            md="4"
            lg="3">
            <div class="mx-auto rounded-lg pt-5 border" max-width="300">
              <div class="mx-auto my-2 pa-2 rounded-lg" :style="{
                          width: '150px',
                          height: '150px',
                          backgroundImage:
                          `url(https://picsum.photos/id/1/300/300/)`,
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                          backgroundSize: 'cover',
                          position: 'relative',
                      }">

                <!-- <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mygsm.me%2Fbeats-by-dr-dre-solo-black.html&psig=AOvVaw27ZmuAuNyz3y85AHxj1Igl&ust=1710426001563000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCIi6mMS38YQDFQAAAAAdAAAAABAd" alt=""> -->
              </div>
              <div class="mx-auto my-1 text-center pa-2">
                <span>Electronics</span>
              </div>
            </div>
          </v-col>
        </v-row>


      </v-container>
    </div>

    <div class="pa-7 text-black my-4 bg-grey-lighten-4 rounded-lg">
      <h3>Shop Our Top products</h3>
      <v-container>

        <swiper
          :modules="modules"
          :space-between="50"
          :navigation="true"
          :loop="true"
          :breakpoints="{
              760: { slidesPerView: 1 },
              820: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },

          }"

        >
          <swiper-slide v-for="card in cards"
                        :key="card.id">
            <v-sheet class="mx-auto rounded-lg" max-width="300">
                        <!-- Contenido de la tarjeta -->
                          <div
                              :style="{
                              width: '300px',
                              height: '300px',
                              backgroundImage:
                              `url(https://picsum.photos/id/${card.id}/300/300/)`,
                              backgroundPosition: 'center',
                              backgroundRepeat: 'no-repeat',
                              backgroundSize: 'cover',
                              position: 'relative',
                          }"
                              class="rounded-lg"
                              @click="toggle(card)"
                          >
                              <v-btn
                              density="comfortable"
                              :icon="true"
                              :style="{ position: 'absolute', top: '10px', right: '10px' }"
                              class="bg-white p-2 rounded-full shadow-lg"
                              >
                              <v-icon :style="{ color: card.isSelected ? 'red' : '' }"
                                  >{{ card.isSelected ? "mdi-heart" : "mdi-heart-outline"
                                  }}</v-icon
                              >
                              </v-btn>
                          </div>
                          <div class="mx-2 my-2">
                              <div class="d-flex justify-space-between">
                                <h3 class="font-itillium text-truncate">Python</h3>
                              </div>
                              <div class="d-flex justify-space-between">
                                <h5 class="font-weight-thin">
                                  <v-icon
                                    color="warning"
                                    icon="mdi-star"
                                    size="large"
                                  ></v-icon>
                                  Thin weight text.
                                </h5>
                                <h4 class="font-weight-medium"><p>$25</p></h4>
                              </div>
                              <div class="d-flex justify-space-between">
                                <v-btn color="gray" class="border rounded-pill my-2">Add to cart</v-btn>
                                <v-btn color="primary" class="border rounded-pill my-2">Add to cart</v-btn>
                              </div>
                          </div>
                        </v-sheet>
          </swiper-slide>

        </swiper>
      </v-container>
    </div>


    <v-container>


        <v-row>
          <v-col cols="7" :style="{
                        backgroundImage:
                        `url(https://picsum.photos/id/1/600/200/)`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        position: 'relative',
                    }">


          </v-col>
          <v-col cols="5" class="bg-black">
            <div class="pa-12">
              <div class="text-white mx-auto">
                <h4>THE BEST OF COMPUTERS</h4>
                <h1>30% OFF</h1>
                <div class="d-flex">
                  <h3>See products</h3>
                  <v-icon icon="mdi-chevron-right" size="large">
                  </v-icon>
                </div>
              </div>

            </div>

          </v-col>
        </v-row>



    </v-container>
    <div class="my-4 pa-7">
      <h3>Payments Methods</h3>
      <v-container>

        <v-row>
          <v-col cols="3" class="bg-red" :style="{
                        backgroundImage:
                        `url(https://picsum.photos/id/1/600/200/)`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        position: 'relative',
                    }">
            <div class="pa-6">
                <div class="text-white mx-auto">
                  <h4>THE BEST OF COMPUTERS</h4>
                  <h1>30% OFF</h1>
                  <div class="d-flex">
                    <h3>See products</h3>
                    <v-icon icon="mdi-chevron-right" size="large">
                    </v-icon>
                  </div>
                </div>

              </div>


          </v-col>
          <v-col cols="6" class="bg-red" :style="{
                        backgroundImage:
                        `url(https://picsum.photos/id/1/600/200/)`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        position: 'relative',
                    }">
            <div class="pa-6">
                <div class="text-white mx-auto">
                  <h4>THE BEST OF COMPUTERS</h4>
                  <h1>30% OFF</h1>
                  <div class="d-flex">
                    <h3>See products</h3>
                    <v-icon icon="mdi-chevron-right" size="large">
                    </v-icon>
                  </div>
                </div>

              </div>


          </v-col>
          <v-col cols="3" class="bg-red" :style="{
                        backgroundImage:
                        `url(https://picsum.photos/id/1/600/200/)`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        position: 'relative',
                    }">
            <div class="pa-6">
                <div class="text-white mx-auto">
                  <h4>THE BEST OF COMPUTERS</h4>
                  <h1>30% OFF</h1>
                  <div class="d-flex">
                    <h3>See products</h3>
                    <v-icon icon="mdi-chevron-right" size="large">
                    </v-icon>
                  </div>
                </div>

              </div>


          </v-col>

        </v-row>



      </v-container>
    </div>

    <div class="pa-7 text-black my-4 blue-lighten-5 rounded-lg">
      <h3>Others products</h3>
      <v-container>

        <v-row>
          <v-col cols="12"
            md="6">

            <div class="mr-2">
              <v-row>
                <v-col cols="12" md="6" class="border">
                  <div class="pa-12">
                    <div class="mx-auto">
                      <h5>AUDIO</h5>
                      <h2>¡AUDIO OFFERS!</h2>
                      <div class="mt-3">
                        <v-btn color="primary">see offers</v-btn>
                      </div>
                    </div>

                  </div>

                </v-col>
                <v-col cols="12" md="6" :style="{
                        backgroundImage:
                        `url(https://picsum.photos/id/1/600/200/)`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        position: 'relative',
                    }">

                </v-col>
              </v-row>
            </div>


          </v-col>
          <v-col cols="12"
            md="6">
            <div class="mx-auto rounded-lg">
              <v-row>
                <v-col cols="12" md="6" class="border">
                  <div class="pa-12">
                    <div class="mx-auto">
                      <h5>COMPUTERS</h5>
                      <h2>¡COMPUTERS OFFERS!</h2>
                      <div class="mt-3">
                        <v-btn color="primary">see offers</v-btn>
                      </div>
                    </div>

                  </div>

                </v-col>
                <v-col cols="12" md="6" class="bg-red" :style="{
                        backgroundImage:
                        `url(https://picsum.photos/id/1/600/200/)`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                    }">

                </v-col>
              </v-row>
            </div>

          </v-col>

        </v-row>


      </v-container>
    </div>


  </v-container>


</template>

<script setup>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Navigation } from "swiper/modules";
  import "swiper/css/navigation"

  // Import Swiper styles
  import 'swiper/css';
  import { ref } from "vue";

  const modules=ref([Navigation])
  const doAutoplay = ref(true)

  const MOCKDATA = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    isSelected: false,
  }))

  const show = ref(false)
  const selection = ref([])
  const filteredCards = ref([])
  const drawer = ref(false)
  const search = ref('')
  const cards = ref(MOCKDATA)
  const sorted = ref('')

  function toggle(card) {
    card.isSelected = !card.isSelected
  }

  function filterCards() {
    filteredCards.value = cards.value.filter(card =>
      card.name.toLowerCase().includes(search.value.toLowerCase())
    )
  }


</script>
<style>
.swiper-button-prev, .swiper-button-next {
  color: darkgray;
}

</style>
