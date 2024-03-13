<template>
  <v-sheet class="pa-12" rounded>
    <v-card class="mx-auto px-5 py-8" max-width="340">
      <v-form>
        <p class="text-h4 font-weight-bold mb-2">Forgot Password?</p>
        <p class="mb-8 text-disabled">We'll send you instructions in email</p> 
        <v-text-field
        density="compact"
        placeholder="Enter your email"
        >
        </v-text-field> 
        
        <v-btn
        class="text-none mb-3"
        color="primary"
        block
        >
          Reset password
        </v-btn>

        <p class="text-caption text-center">
          <v-icon icon="mdi-arrow-left">            
          </v-icon>
          <router-link
            to="/auth/login"  
            class="text-decoration-none font-weight-bold"        
          >  
          Back to log in          
          </router-link>          
        </p>
      </v-form>
    </v-card>
  </v-sheet>
</template>
