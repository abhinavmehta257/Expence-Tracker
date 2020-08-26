<template id="">
  <div class="signup-form">
    <div class="font-inline">
      <h3>Sign UP</h3>
      <br>
      <div class="form-group">
        <input id="email" type="text" placeholder="Email"class="form-control" v-model='email'>
        <br>
        <input id="password" type="password" placeholder="Password" class="form-control" v-model ='password'>
        <br>
        <input id="repassword" type="password" placeholder="Confirm Password" class="form-control" v-model ='repassword'>
        <br>
        <button class="btn btn-outline-primary pl-5 pr-5" @click='signUp'>Sign Up</button>
      </div>
        <br>
        <br>
        <p>{{error.message}}</p>
    </div>
        <router-link to="/signin">Alredy a User? Sign In</router-link>
  </div>

</template>


<script type="text/javascript">
  import {firebaseApp} from '../firebaseApp'
  export default{
    data(){
      return{
        email:'',
        password:'',
        repassword:'',
        error:{
          message:''
        }
      }
    },
    methods:{
      signUp(){
        if($('#password').val() === $('#repassword').val()){
          firebaseApp.auth().createUserWithEmailAndPassword(this.email, this.password)
          .catch(error =>{
            this.error = error
          })
        }else{
        alert('Re-Entered password does\'t match')
        $('#password').attr('type','text');
        $('#repassword').attr('type','text');
        }

      }
    }
  }
</script>
