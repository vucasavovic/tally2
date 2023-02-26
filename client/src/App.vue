<template>
    <main class="template-split">
      <SideBar v-if="route.meta.showSideBar"/>
      <RouterView />
    </main>
</template>

<script setup>
 import SideBar from '@/components/SideBar.vue' 
import { ref } from 'vue';
 import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router'
 

 const route = useRoute();
 

</script>

<style lang="scss" scoped>
.template-split{
    display: flex;
    align-items: stretch;
}
</style>
