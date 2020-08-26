<template id="">
<div class=" col-6 edit-profile mt-5">
  <div class="">
    <img id="profile-pic"  src="https://i.pinimg.com/originals/be/ac/96/beac96b8e13d2198fd4bb1d5ef56cdcf.jpg" alt="Profile pic">
    <br>
    <br>
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text">Name</span>
      </div>
      <input type="text" aria-label="First name" default='Null' v-model='name' class="form-control">
    </div>
    <br>
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text">Email</span>
      </div>
        <input type="text" aria-label="First name" default='Null' v-model='email'class="form-control">
      </div>
      <br>
    <button class="btn btn-outline-success"><router-link to='/dashboard' style="text-decoration: none; color: green">Save</router-link></button>
    </div>
    <router-link to='/dashboard' class="link" style='position:absolute; bottom:0px; right:50px'>Skip</router-link>
</div>

</template>


<script type="text/javascript">
  export default{
    data(){
      return {
        name:'',
        email:''
      }
    },methods:{
      saveProfile(){
          let userId = this.$store.state.user.uid
        firebasedatabase.ref('users/'+userId+'/profileDetails').set({
          name:this.name,
          email:this.email
          },function(error){
            console.log(error)
          });
      }
    },
    created(){
      console.log('created');
      this.email = 'NULL'
      this.name = 'NULL'
    }
  }
</script>
