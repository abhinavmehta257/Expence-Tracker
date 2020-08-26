<template id="">
  <div class="signin-form">
    <div class="font-inline">
      <h3>Sign In</h3>
      <br>
      <div class="form-group">
        <input type="email"
        class="form-control email"
        placeholder="Email"
        v-model='email'>
        <br>
        <input type="password" class="form-control pass" placeholder="Password" v-model='password'>
        <br>
        <button class="btn btn-outline-success pl-5 pr-5" @click='signin'>Sign In</button>
      </div>
      <hr>
      <a style='color:white' class="btn btn-block btn-social btn-google"  @click ='signinWithGoogle'>
        <span class="fab fa-google"> </span> Sign In with Google
      </a>
      <a style='color:white'class="btn btn-block btn-social btn-github"  @click ='signinWithGithub'>
        <span class="fab fa-github"> </span> Sign In with Github
      </a>
      <hr>
      <br>
      <br>
      <p>{{error.message}}</p>
    </div>
    <router-link to="/signup">Not a User? Sign Up</router-link>
  </div>

</template>

<script >
  import {firebaseApp} from '../firebaseApp'
 import firebase from 'firebase'
    export default{
      data() {
        return{
        email:'',
        password:'',
        error:{
          message:''
        }

      }
    },
    methods:{
      signin(){
        firebaseApp.auth().signInWithEmailAndPassword(this.email, this.password)
        .catch(error =>{
          this.error = error
        })
      },
      signinWithGoogle(){
        var provider = new firebase.auth.GoogleAuthProvider();
        firebaseApp.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log('userId '+user.providerData)
            // ...
          }).catch(function(error) {
            // Handle Errors here.
          var errorCode = error.code;
          this.error.Message = error.message;
        });
      },
      signinWithGithub(){
        var provider = new firebase.auth.GithubAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a GitHub Access Token. You can use it to access the GitHub API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
      }
    }
    }
</script>
