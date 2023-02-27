<template>
    <div class="entry-view">

      <section class="entry-form">
 
        <article class="greeting">
          <img class="brand" src="/images/tally-logo.svg" alt="Tally logo">
          <p v-if="mode=='register'">Register. Tally is an invoice management app.</p>
          <p v-else>Login and start managing your business.</p>
        </article>
 

        <form >
          <Input label="username"/>
          <Input label="email"/>
          <Input v-if="mode=='register'" type="password" label="password"/>
          <Input v-if="mode=='register'" type="password" label="confirm password"/>
          <Button v-if="mode=='login'" @click="login" text="Login"/>
          <Button v-else @click="register" text="Register"/>
        </form>

        <p v-if="mode=='register'">Already have an account? <span class="text-link" @click="mode='login'">Login</span></p>
        <p v-else>Don't have an account? <span class="text-link" @click="mode='register'">Register</span></p>
      
      </section>
 
    </div>
</template>


<script setup>

import Input from '@/components/forms/Input.vue' 
import Button from '@/components/Button.vue' 
import { useRoute } from 'vue-router';
import { ref } from 'vue';    
 
const route = useRoute();

const mode = ref('login');
let modeTemp = route.path.split('/').pop();
if(modeTemp){
  mode.value=modeTemp
}
  
const login = function(){
  console.log('login');
}

const register = function(){
  console.log('register');
}
</script>

<style lang="scss" scoped>
  .entry-view{
    position: relative;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .brand{
    display: block;
    width: 162px;
    margin:  0 auto; 
  }
 
  .entry-form{
    width: 100%;
    max-width: 560px;
 
    padding: 4rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    >form{
      display: flex;
      flex-direction: column;
      gap: 1rem;

      >  button{
        margin: 0 auto; 
        margin-top: 1.6rem;
        width: 100%;
  

      }

    }

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