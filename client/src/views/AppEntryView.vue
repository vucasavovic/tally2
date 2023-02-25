<template>
    <div class="entry-view">

      <div  class="forms">
 
        <article class="greeting">
          <img class="brand" src="/images/tally-logo.svg" alt="Tally logo">
          <p v-if="mode=='register'">Register. Tally is an invoice management app.</p>
          <p v-else>Login and start managing your business.</p>
        </article>

      <RegisterForm v-if="mode=='register'"/>
      <LoginForm v-else/>

      <p v-if="mode=='register'">Already have an account? <span class="text-link" @click="mode='login'">Login</span></p>
      <p v-else>Don't have an account? <span class="text-link" @click="mode='register'">Register</span></p>
      </div>
 
    </div>
</template>


<script setup>
  import RegisterForm from '@/components/forms/RegisterForm.vue' 
  import LoginForm from '@/components/forms/LoginForm.vue' 
  import { useRoute } from 'vue-router';
  import { ref } from 'vue';    
 
  const route = useRoute();

  const mode = ref('login');
  let modeTemp = route.path.split('/').pop();
  if(modeTemp){
    mode.value=modeTemp
  }
  
  const login = function(){

  }
</script>

<style lang="scss" scoped>
  .entry-view{
    position: relative;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .brand{
    display: block;
    width: 132px;
    margin:  0 auto; 
  }
 

  

  .forms{
    width: 100%;
    max-width: 520px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }

  .greeting{
    text-align: center;
    >:first-child{
      font-size: 2rem;
      margin-bottom: 3rem;
    }
  }

  .text-link{
    cursor: pointer;
    color:$purple;
  }
</style>