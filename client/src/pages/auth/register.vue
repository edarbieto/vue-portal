<template>
  <v-sheet class="pa-12" rounded>
    <v-card class="mx-auto px-5 py-8" max-width="340">
      <v-form>
        <p class="text-h4 text-center mb-4 font-weight-bold">Register</p>
        <v-text-field
        density="compact"
        placeholder="Email"
        >
        </v-text-field>
        <v-text-field
        density="compact"
        placeholder="Password"
        >
        </v-text-field>
        <v-text-field
        density="compact"
        placeholder="Confirm password"
        >
        </v-text-field>
        <v-text-field
        density="compact"
        placeholder="First name"
        >
        </v-text-field>
        <v-text-field
        density="compact"
        placeholder="Last name"
        >
        </v-text-field>
        <!-- <div class="checkbox"><br>
          <label>
            <input type="checkbox" value="remember-me"> I agre to the terms and conditions.
          </label>          
        </div> -->

        <div class="mb-3 d-flex justify-space-between">
          <div class="d-flex ">
            <v-checkbox density="compact" size="small">
              <template v-slot:label>
                <p class="text-subtitle-2">I agree to the terms and conditions</p>
              </template>
            </v-checkbox>            
          </div>     
        </div>  

        <v-btn
          class="text-none mb-3"   
          color="primary"
          block   
        >
          Register
        </v-btn>

        <p class="mb-1 text-caption">
          Already have an account? 
          <router-link
            to="/auth/login"
            class="font-weight-bold"
          >    
          Log in        
          </router-link>
        </p>
      </v-form>
    </v-card>
  </v-sheet>
</template>
