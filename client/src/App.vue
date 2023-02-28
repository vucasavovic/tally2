<template>
    <main class="template-split">
      <SideBar v-if="route.meta.showSideBar"/>
      <RouterView />
    </main>
</template>

<script setup>
import {getCurrency, getPaymentMethods,getInvoices} from "@/services/api"
import SideBar from '@/components/SideBar.vue' 
import { ref,onMounted } from 'vue';
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router'
import {useMainStore} from '@/stores/mainStore'

const route = useRoute();
const store = useMainStore(); 
 

onMounted(async ()=>{
  store.paymentMethods  = await getPaymentMethods();

  const {status,payload} = await getInvoices();
    store.invoices = payload;


    store.currencyTypes = await getCurrency();
    store.currency = store.currencyTypes[0];
})
 
 
</script>

<style lang="scss" scoped>
.template-split{
    display: flex;
    align-items: stretch;
}
</style>
