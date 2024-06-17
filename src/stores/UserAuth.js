import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios';

const domainName = 'http://localhost:8000/api/v1'
export const userAuth = defineStore({
  id: 'userAuth',
  state: () => ({ 
    isUserAuth: false
  }),

  actions: {

    async checkIfUserAuth() {
        try {
            const response = await axios.get(domainName + '/check-user-auth');
            console.log(response.data)
            return response.data;
        } catch (error) {
            return false; 
        }
    },

    async getUserAllStates() {
      try {
        const response = await axios.get(domainName + '/get-user-states');
        return response.data;
      } catch (error) {
          return false; 
      }
    },

    async checkIfUserIsAdmin() {
      // try {
      //     const response = await axios.get(domainName + '/check-user-auth');
      //     console.log(response.data)
      //     return response.data;
      // } catch (error) {
      //     return false; 
      // }
  }

  }
});

