<template>
   
        <form>
          <Input label="email"/>
          <Input type="password" label="password"/>
         <Button @click="emit('submited')" text="Login"/>
        </form> 
         
    
</template>

<script setup>
 import Input from '@/components/forms/Input.vue'
 import Button from '@/components/Button.vue'
 
 const emit = defineEmits(['submited'])

</script>

<style lang="scss" scoped>
button{
margin: 0 auto;
margin-top: 1rem;
}
</style>