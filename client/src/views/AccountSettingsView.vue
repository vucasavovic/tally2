<template>
    <div class=" view settings-view">

        <Title :tier="1" size="xl" text="Settings" class="view-title"/>
       
        <form class="settings-form">
           
            <div class="body">

                <div class="group company-info">
                    <Title :tier="2" size="m" text="Your company"/>
                    <Input label="Company name" />
                    <Input label="Company address" />
                </div>

                <div class="group currency">
                    <Title :tier="2" size="m" text="Currency"/>
                    <DropdownInput v-if="store.currencyTypes" v-model="formData.currency" :options="store.currencyTypes" label="Currency" />
                </div>

                <div class="group payment-methods">
                    <Title :tier="2" size="m" text="Bank accounts"/>
 
                    <div v-if="store.paymentMethods" class="list">
                        <div v-for="method in store.paymentMethods" :key="method.id" class="method">
                            <span>{{ method.name }}</span>
                            <span>{{ method.account_num }}</span>
                            <TextButton @click="handleDeletePaymentMethod(method.account_num)" text="Delete"/>
                        </div>
                    </div>
  
                    <div >
                        <Input label="Institution name" v-model="paymentMethodData.name"/>
                        <Input label="Account num" v-model="paymentMethodData.account_num"/>
                        <Input label="Brief description" v-model="paymentMethodData.description"/>
                    </div>

                    <Button @click="handleAddPaymentMethod" size="small" text="Add +"/>
                </div>

                <Button text="Save"/>

            </div>
        
        </form>
    </div>
</template>

<script setup>
import {getPaymentMethods,deletePaymentMethod,addPaymentMethod} from '@/services/api'
import {useMainStore} from '@/stores/mainStore'
import { ref,reactive } from 'vue';

import Title from '@/components/Title.vue' 
import Input from '@/components/forms/Input.vue' 
import TextareaInput from '@/components/forms/TextareaInput.vue' 
import Button from '@/components/Button.vue'
import TextButton from '@/components/TextButton.vue'  
import DropdownInput from '@/components/forms/DropdownInput.vue' 


const store = useMainStore();

const paymentMethodData = reactive({
    name:'',
    account_num:'',
    description:''
})

const formData = ref({
    currency:store.currency,
})

const handleAddPaymentMethod = async function(){
    if(paymentMethodData.name!='' || paymentMethodData.account_num!=''){
        const res = await addPaymentMethod(paymentMethodData)
        if(res.status.error){
            console.log(res.status.message)
        }
        else{
            store.paymentMethods = await getPaymentMethods();
            paymentMethodData.name=''
            paymentMethodData.account_num=''
            paymentMethodData.description=''
        }
    }else{
        return
    }
}

const handleDeletePaymentMethod = async function(accountNum){
    const success = await deletePaymentMethod(accountNum);
    if(success){
        store.paymentMethods = await getPaymentMethods();
    }
}

</script>

<style lang="scss" scoped>
 .settings-form{
    height: fit-content;
    >.body{
        display: flex;
        flex-direction: column;
        gap: 4rem;
    }
 }


.payment-methods{
    max-width: 500px;
    >.split{
        display: flex;
        gap: 4rem;
        >*{
            flex: 1;
        }
    }
  
}

.company-info{
    max-width: 500px;
}
.currency{
    max-width: 300px;
}
 
.list{

    >:nth-child(n+2){
        margin-top: 0.5rem;
    }
 
    >.method{
        padding: 12px;
        background-color: rgb(238, 238, 238);
        display: grid;
        grid-template-columns: 180px 1fr auto;
        >:last-child{
            justify-self: end;
        }
    }
}
</style>