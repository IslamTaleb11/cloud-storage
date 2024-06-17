import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useRoute, useRouter } from 'vue-router'
export const useSideBarToggle = defineStore({
  id: 'toggle',
  state: () => ({ 
    toggleValue: ref(false)
  }),

  actions: {
    setToggle() {
        this.toggleValue = !this.toggleValue;
        const container = document.getElementById('slideover-container');
        // const bg = document.getElementById('slideover-bg');
        const slideover = document.getElementById('slideover');
      
        if (this.toggleValue) {
          container.classList.remove('invisible');
          // bg.classList.remove('opacity-0');
          // bg.classList.add('opacity-50');
          slideover.classList.remove('translate-x-full');
        } else {
          // bg.classList.remove('opacity-50');
          // bg.classList.add('opacity-0');
          slideover.classList.add('translate-x-full');
          setTimeout(() => {
            container.classList.add('invisible');
          }, 300); 
        }
      },
    
  }

  
});

