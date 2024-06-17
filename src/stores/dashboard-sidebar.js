import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useRoute, useRouter } from 'vue-router'
export const useDashboardSideBarToggle = defineStore({
  id: 'toggleDashboardSideBar',
  state: () => ({ 
    toggleValue: ref(false)
  }),

  actions: {
    setToggle() {
        this.toggleValue = !this.toggleValue;
        document.getElementById('slideover-container').classList.toggle('invisible');
        document.getElementById('slideover-bg').classList.toggle('opacity-0');
        document.getElementById('slideover-bg').classList.toggle('opacity-50');
        document.getElementById('slideover').classList.toggle('translate-x-96');
        
      },
    
  }

  
});

