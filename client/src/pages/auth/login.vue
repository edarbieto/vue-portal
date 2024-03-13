<template>
  <v-sheet class="pa-12" rounded>
    <v-card class="mx-auto px-5 py-8" max-width="340">
      <v-form>
        <div class="cont-title">
          <p class="text-h4">OEC COMPUTERS</p>
        </div>
        <div class="text-slogan pa-5">
          <p class="text-h6">One account</p>
          <p class="text-h6">Many possibilities</p>
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
            <v-btn variant="text" class="text-subtitle-2" color="primary">Forgot Password?</v-btn>
          </div>
          
          
        </div>        

        <v-btn
          class="text-none"
          color="primary"
          size="large"
          type="submit"
          block
        >
          Sign in
        </v-btn>

        <p class="mt-3 text-body-2">
          Don't have an account?
          <router-link
            to="/register"
            class="text-subtitle-2"
          >
            Register
          </router-link>
        </p>
      </v-form>
    </v-card>
  </v-sheet>
</template>

<style scoped>
.remember-password{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.cont-title{
  text-align: center;
}
.text-slogan{
  text-align: center;
}
.login-check-box{
  font-size: 12px;    
}
</style>
