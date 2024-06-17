import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/home/HomeView.vue';
import LoginView from '@/views/home/LoginView.vue';
import SignupView from '@/views/home/SignupView.vue';
import { useRouter } from 'vue-router'; 
import { useSideBarToggle } from '@/stores/toggle';
import AboutUs from '@/views/home/About-us.vue';
import Contact from '@/views/home/Contact.vue';
import Plans from '@/views/home/Plans.vue';
import ForgetPassword from '@/views/home/Forget-password.vue';
import PasswordRest from '@/views/home/Password-reset.vue';
import MustVerifyEmail from '@/views/home/Must-verifyEmail.vue'
import { userAuth } from '@/stores/UserAuth';
import EmailVerified from '@/views/home/Email-verified.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/login',
      component: LoginView,
    },
    {
      path: '/signup',
      component: SignupView,
    },
    {
      path: '/about-us',
      component: AboutUs
    },
    {
      path: '/contact',
      component: Contact
    },
    {
      path: '/plans',
      component: Plans
    },
    
    {
      path: '/forgot-password',
      component: ForgetPassword,
    },
    
  ]
});



router.beforeEach((to, from, next) => {
  
  const toggleState = useSideBarToggle();
  toggleState.toggleValue = false;
  next(); 
});

export default router;
