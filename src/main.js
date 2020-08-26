import Vue from 'vue'
import VueRouter from 'vue-router'
import {firebaseApp} from './firebaseApp'
Vue.use(VueRouter)
import App from './App.vue'
import Dashboard from './component/dashboard.vue'
import Signin from './component/signin.vue'
import Signup from './component/signup.vue'
import EditProfile from './component/editProfile.vue'
import store from './store'

const router = new VueRouter({
  mode:'history',
  routes:[
    {
      path:'/dashboard', component:Dashboard
    },
    {
      path:'/signin', component:Signin
    },
    {
      path:'/signup', component:Signup
    },
    {
      path:'/editProfile', component:EditProfile
    }
  ]
})
firebaseApp.auth().onAuthStateChanged(user => {
  if (user){
    store.dispatch('signIn', user)
  //  router.push('/editProfile')
  router.push('/dashboard')
  }else{
    router.replace('/signin')
  }
})
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
