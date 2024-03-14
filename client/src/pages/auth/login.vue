<template>
  <v-sheet class="pa-12" rounded>
    <v-card class="mx-auto px-5 py-8" max-width="340">
      <v-form>
        <p class="text-h4 text-center font-weight-bold">OEC COMPUTERS</p>  

        <div class="text-h6 text-center mb-8">          
          <p>Many possibilities</p>
        </div>    

        <v-text-field 
          density="compact"
          placeholder="Email address"
        ></v-text-field>

        <v-text-field
          density="compact"
          placeholder="Password"
        ></v-text-field>

        <div class="mb-3 d-flex justify-space-between">
          <div class="d-flex ">
            <v-checkbox density="compact" size="small">
              <template v-slot:label>
                <p class="text-subtitle-2">Remember me</p>
              </template>
            </v-checkbox>            
          </div>

          <div>
            <v-btn variant="text" class="text-subtitle-2" color="primary">
              <router-link
                to="/auth/forgot-password?"
                class="text-decoration-none font-weight-bold"
              >
              Forgot Password?
              </router-link>
            </v-btn>
          </div>       
        </div>        

        <v-btn
          class="text-none mb-3"
          color="primary"
          block
        >
          Sign in
        </v-btn>

        <p class="mb-1 text-caption">
          Don't have an account?
          <router-link
            to="/auth/register"
            class="font-weight-bold"
          >
            Register
          </router-link>
        </p>
      </v-form>
    </v-card>
  </v-sheet>
</template>

<style scoped>
.center-vertically {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
