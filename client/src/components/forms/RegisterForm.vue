<template>
 
        <form>
          <Input label="username"/>
          <Input label="email"/>
          <Input type="password" label="passwpord"/>
          <Input type="password" label="confirm password"/>
          <Button @click="register" text="Register"/>
        </form>
 
</template>

<script setup>
 import Input from '@/components/forms/Input.vue'
 import Button from '@/components/Button.vue' 


 const register = function(){

}
</script>

<style lang="scss" scoped>
button{
    margin: 0 auto;
    margin-top: 1rem;
  }
</style>