import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useRoute, useRouter } from 'vue-router'

export const useDomainName = defineStore({
  id: 'domainName',
  state: () => ({ 
    domaineName: 'http://localhost:8000/api/v1'
  }),

  actions: {
   
    
  }

  
});

