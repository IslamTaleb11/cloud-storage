<script setup>
import axios from 'axios';
import { onMounted } from 'vue';
import { useRoute, RouterLink, useRouter } from 'vue-router';
import Header from '@/components/home/Header.vue';
import Footer from '@/components/home/Footer.vue';
import Sidebar from '@/components/home/Sidebar.vue';

const domainName = 'http://localhost:8000/api/v1';
const route = useRoute();
onMounted( async ()=>{
    const id = route.params.id;
    const hash = route.params.hash;
    
    await axios.get(domainName+`/verify-email/${id}/${hash}`).then((response)=> {
        console.log(response)
    })
})
</script>


<template>
    <Header />

    <Sidebar />

    <Footer />
</template>