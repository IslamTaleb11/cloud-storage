<script setup>
import Header from '@/components/home/Header.vue';
import Hero from '@/components/home/Hero.vue';
import Footer from '@/components/home/Footer.vue';
import { useSideBarToggle } from '@/stores/toggle';
import axios from 'axios';
import { onMounted, ref } from 'vue';

const toggleState = useSideBarToggle();
const user = ref('');


</script>

<template>
    <Header />
    <Hero />
    <Footer />


</template>
