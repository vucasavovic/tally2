<template>
    <div class=" view settings-view">
        <form class="settings" action="">
            <div class="title">
                <h1>Account settings</h1>
            </div>
            <div class="body">
                <div class="group">
                    <h3>Company info</h3>
                    <Input label="Company name" />
                    <Input label="Company address" />
                </div>

                <div class="group">
                    <h3>Invoice options</h3>
                    <DropdownInput v-model="formData.currency" :options="store.currencyTypes" label="Currency" />
                  
                </div>

                <div class="group payment-methods">
                    <h3>Payment methods</h3>
  
                    <div>
                        <Input label="Institution" />
                        <Input label="Account num" />
                        <Input label="Description" />
                    </div>

                    <Button text="Add +"/>
                </div>

                <Button text="Save"/>

            </div>
        
        </form>
    </div>
</template>

<script setup>
import Input from '@/components/forms/Input.vue' 
import Button from '@/components/Button.vue' 
import DropdownInput from '@/components/forms/DropdownInput.vue' 
import {useMainStore} from '@/stores/mainStore'
import { ref } from 'vue';

const store = useMainStore();

const formData = ref({
    currency:store.currency,
})

</script>

<style lang="scss" scoped>
.settings{
    padding: 4rem;
    border: $line-02;
 
}

.body{
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

.payment-methods{
    >.split{
        display: flex;
        gap: 4rem;
        >*{
            flex: 1;
        }
    }
  
}
</style>