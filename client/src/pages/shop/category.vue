<template>
  <v-container>
    <div class="mb-3 d-flex justify-space-between">
      <h1>shop-category</h1>
      <div class="mr-6">

        <!-- <v-btn color="gray" class="border rounded-pill my-2 text-subtitle-1">
          <span>Sort: {{ selected }}</span>
          <v-menu>
            <template v-slot:activator="{ props }">
              <v-icon >mdi-menu-down</v-icon>
            </template>
            <v-list v-bind="props">
              <v-list-item  v-model="selected">
                <v-list-item-title>Best Match</v-list-item-title>
              </v-list-item>
              <v-list-item v-model="selected">
                <v-list-item-title>Low Price</v-list-item-title>
              </v-list-item>
              <v-list-item v-model="selected">
                <v-list-item-title>High Price</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-btn> -->


        <v-menu internal-activator>
          <template v-slot:activator="{ props }">
            <v-btn color="gray" class="border rounded-pill my-2 text-subtitle-1" v-bind="props" v-model="selected">
              <span>Sort: {{ selected }}</span>

            </v-btn>
          </template>
          <v-list density="compact">
            <v-list-item v-model="selected" @click="updateSelected('Best match')" value="Best match">
              <v-list-item-title >Best Match
              </v-list-item-title>
            </v-list-item>

            <v-list-item v-model="selected" @click="updateSelected('Low price')" value="Low price">
              <v-list-item-title >Low price
              </v-list-item-title>
            </v-list-item>
            <v-list-item v-model="selected" @click="updateSelected('High price')" value="High price">
              <v-list-item-title>High price</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

      </div>

    </div>
    <v-row no-gutters>
      <v-col cols="2">
        <v-sheet class="pa-4 cat-menu rounded border" color="gray">

          <router-link to ="/category/electronics" class="text-decoration-none text-black">
            <p class="text-subtitle-2 mb-1">Electronics</p>
          </router-link>


              <router-link to ="/category/electronics" class="text-decoration-none text-black">
                <p class="text-caption ml-2 my-1">Camera & Photo</p>

              </router-link>
              <router-link to ="/category/electronics" class="text-decoration-none text-black">
                <p class="text-caption ml-2 my-1">Headphones</p>

              </router-link>
              <router-link to ="/category/electronics" class="text-decoration-none text-black">
                <p class="text-caption ml-2 my-1">Television & Video</p>

              </router-link>
          <router-link to ="/category/computers" class="text-decoration-none text-black">
            <p class="text-subtitle-2 mb-1">Computers</p>
          </router-link>


              <router-link to ="/category/computers" class="text-decoration-none text-black">
                <p class="text-caption ml-2 my-1">Camera & Photo</p>

              </router-link>
              <router-link to ="/category/computers" class="text-decoration-none text-black">
                <p class="text-caption ml-2 my-1">Headphones</p>

              </router-link>
              <router-link to ="/category/computers" class="text-decoration-none text-black">
                <p class="text-caption ml-2 my-1">Television & Video</p>

              </router-link>
          <router-link to ="/category/smart-home" class="text-decoration-none text-black">
            <p class="text-subtitle-2 mb-1">Smart Home</p>
          </router-link>


              <router-link to ="/category/smart-home" class="text-decoration-none text-black">
                <p class="text-caption ml-2 my-1">Camera & Photo</p>

              </router-link>
              <router-link to ="/category/smart-home" class="text-decoration-none text-black">
                <p class="text-caption ml-2 my-1">Headphones</p>

              </router-link>
              <router-link to ="/category/smart-home" class="text-decoration-none text-black">
                <p class="text-caption ml-2 my-1">Television & Video</p>

              </router-link>
              <v-divider class="border-opacity-25 my-3"></v-divider>
              <p class="text-subtitle-2 mb-1">Brand</p>
              <div class="checkbox d-flex">
                <input class="checkbox-input" name="input" type="checkbox" v-model="checkbox">
                <p class="text-caption ml-2 my-1">Samsung</p>
              </div>
              <div class="checkbox d-flex">
                <input class="checkbox-input" name="input" type="checkbox" v-model="checkbox2">
                <p class="text-caption ml-2 my-1">LG</p>
              </div>
              <div class="checkbox d-flex">
                <input class="checkbox-input" name="input" type="checkbox" v-model="checkbox3">
                <p class="text-caption ml-2 my-1">Sony</p>
              </div>
              <v-divider class="border-opacity-25 my-3"></v-divider>
              <p class="text-subtitle-2 mb-1">Color</p>
              <div class="checkbox d-flex">
                <input class="checkbox-input" name="input" type="checkbox" v-model="checkbox">
                <p class="text-caption ml-2 my-1">Black</p>
              </div>
              <div class="checkbox d-flex">
                <input class="checkbox-input" name="input" type="checkbox" v-model="checkbox2">
                <p class="text-caption ml-2 my-1">White</p>
              </div>
              <div class="checkbox d-flex">
                <input class="checkbox-input" name="input" type="checkbox" v-model="checkbox3">
                <p class="text-caption ml-2 my-1">Gray</p>
              </div>
              <v-divider class="border-opacity-25 my-3" color="black"></v-divider>
              <p class="text-subtitle-2 mb-1">Price</p>
              <div class="checkbox d-flex">
                <input class="checkbox-input" name="input" type="checkbox" v-model="checkbox">
                <p class="text-caption ml-2 my-1">Under $50</p>
              </div>
              <div class="checkbox d-flex">
                <input class="checkbox-input" name="input" type="checkbox" v-model="checkbox2">
                <p class="text-caption ml-2 my-1">$50 to $150</p>
              </div>
              <div class="checkbox d-flex">
                <input class="checkbox-input" name="input" type="checkbox" v-model="checkbox3">
                <p class="text-caption ml-2 my-1">Over $150</p>
              </div>
              <div class="d-flex justify-space-between">

                <div>
                  <v-text-field
                  v-model="blue"
                  density="compact"
                  style="width: 80px"
                  type="number"
                  label="min"


                ></v-text-field>
                </div>
                <div>
                  <v-text-field
                  v-model="blue"
                  density="compact"
                  style="width: 80px"
                  type="number"
                  label="max"


                ></v-text-field>
                </div>

                <div>
                  <v-btn class="rounded-pill" style="background-color:lightgray;">
                  <v-icon icon="mdi-arrow-right" class="rounded-xl" start>

                  </v-icon>

                  </v-btn>
                </div>



              </div>



        </v-sheet>
      </v-col>

      <v-col cols="10">

        <v-row>
            <v-col
                v-for="card in cards"
                :key="card.id"
                cols="12"
                sm="6"
                md="4"
                lg="3"
            >
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
            </v-col>
        </v-row>
        <div class="text-center">
        <v-pagination
          v-model="page"
          :length="15"
          :total-visible="5"
        ></v-pagination>
      </div>
      </v-col>

    </v-row>

  </v-container>
</template>

<script setup>
import { ref } from "vue";

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
const selected = ref('Best match')
// const checkbox = ref(false)
const page = ref(1)

function toggle(card) {
  card.isSelected = !card.isSelected
}

function filterCards() {
  filteredCards.value = cards.value.filter(card =>
    card.name.toLowerCase().includes(search.value.toLowerCase())
  )
}

const updateSelected = (value) => {
  selected.value = value;
};
// function sortedCards(val){
//   if (val=='1'){
//     sorted.value='Best Match'
//   }else if (val=='2'){
//     sorted.value='Low Price'
//   }else{
//     sorted.value='High Price'
//   }
// }
</script>
