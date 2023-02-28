<template>
    <div class="side-bar">
        <span>
            <div class="brand">
                <img  src="/images/tally-logo-vertical.svg" alt="Tally logo icon">
            </div>
        </span>
 

        <span  class="nav">
            <img @click="router.push('/dashboard')"  class="invert" src="/images/icons/home.svg" alt="Dashboard icon">
            <img v-if="route.name!='invoice-new' || route.name!='invoice-edit' " @click="router.push('/invoice/new')" class="invert" src="/images/icons/paper.svg" alt="New invoice icon">
            <img @click="router.push('/settings')" class="invert" src="/images/icons/avatar.svg" alt="New invoice icon">
        </span>

        <span>
           <p class="white-text"  @click="router.push('/')">Logout</p>
        </span>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();
</script>

<style lang="scss" scoped>

.brand{
    >img{
        width: 100%;
    }
}
.side-bar{
    position: sticky;
    top: 0;
    background-color: $purple;
    width: 80px;
    height: 100vh;
     
    display: flex;
    align-items: center;
    flex-direction: column;

    padding: 2rem 1rem;
 
    >*{
        flex: 1;
        display: flex;
    }
    >:last-child{
        align-items: flex-end;
    }
    >:nth-child(2){
        align-items: center;
    }
}

.invert{
    filter: invert(1);
}

.nav{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    >*{
        cursor: pointer;
    }
}
</style>