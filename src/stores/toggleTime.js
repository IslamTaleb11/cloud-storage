import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useToggleTime = defineStore({
  id: 'toggleTime',
  state: () => ({ 
    checked: ref(false)
  }),

  actions: {
    toggleYear() {
        this.checked = this.checked ? true : false;
    }
      
  }
});
