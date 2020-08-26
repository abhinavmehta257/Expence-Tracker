<template id="">
  <div id="app"  >
    <!--  <button class="btn btn-outline-info ViewProfile-btn" ><router-link to='/dashboard' class="link">View profile</router-link></button>-->
      <button class="btn btn-outline-danger btn-sm signOut-btn" @click='signOut'>SIGN OUT</button>
    <div  style="margin:auto" class="add-transaction col-sm-6 ">
    <div>
      <h3>Expance Tracker</h3>
      <h4>Your Balance </h4>
      <h3>{{balance}}</h3>
      <div class="card">
        <table align='center' class="table table-borderless ">
        <tr>
          <th style='padding:4px 0 0 0'><h4>Income</h4></th>
          <th style='padding:4px 0 0 0'><h4>Expance</h4></th>
        </tr>
        <tr>
          <td style='padding:4px 0 0 0; color:green'>{{totalIncome}}</td>
          <td style='padding:4px 0 0 0; color:red'>{{totalExpance}}</td>
        </tr>
        </table>
      </div>
        <div class="pt-4" >
          <h4>History</h4>
          <hr>
          <div v-for='transaction in transactions'>
            <transactions

            :transaction=transaction
            />
          </div>
        </div>
        <br>
        <h5>Add new Transaction</h5>
        <hr>
        <h5>Transaction Detail</h5>
        <input type="text" class="form-control" v-model='transac.Id' placeholder="Enter transaction Detail">
        <br>
        <h5>Amount</h5>
        <p>(-ve Expance | +ve Income)</p>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">$</span>
          </div>
          <input type="text" class="form-control"  v-model='transac.Amount' aria-label="Amount (to the nearest dollar)">
          <div class="input-group-append">
            <span class="input-group-text">.00</span>
          </div>
        </div>
      <!--  <input type="number" class="form-control" v-model='transac.Amount' placeholder="Amount"> -->
      </div>
      <br>
      <button class="btn btn-outline-success" v-if='transac.Amount.length !=0 && transac.Id.length !=0' name="button" @click='addTransaction'>Add new transaction</button>
    </div>
  </div>

</template>

<script type="text/javascript">
import transactions from './transaction.vue'
import {firebaseApp, firebasedatabase} from '../firebaseApp.js'
  export default{
    data(){
      return{
        totalExpance:0,
        totalIncome:0,
        transac:{
        Id:'',
        Amount:''
      },
        transactions:[],
        balance:0
      }
    },
    methods:{
      addTransaction(){
        let {Id ,Amount} = this.transac
        this.transactions.push({
          Id,
          Amount
        })
        if(this.transac.Amount < 0){
        this.totalExpance += parseInt(this.transac.Amount)
      }else {
        this.totalIncome += parseInt(this.transac.Amount)
      }
      this.save();


    },save(){
      let userId = this.$store.state.user.uid
      let Balance = parseInt(this.totalIncome)+parseInt(this.totalExpance)
      firebasedatabase.ref('users/'+userId+'/record').set({

            totalExpance: this.totalExpance,
            totalIncome: this.totalIncome,
            balance: Balance,
            transactions: this.transactions
        },function(error){
          console.log(error)
        });
    },
    signOut(){

      this.$store.dispatch('signOut')
      firebaseApp.auth().signOut()
    }
    },
    components:{
      transactions
    },
    created(){
      var starCountRef = firebasedatabase.ref('users/'+this.$store.state.user.uid+"/record");
        starCountRef.on('value',snap => {
          let record = snap.val()
          if(record){this.totalIncome = record.totalIncome;
          this.totalExpance = record.totalExpance;
          this.balance = record.balance;
          this.transactions = record.transactions;
          console.log(record);}
          });

},
    updated(){
      this.balance = parseInt(this.totalIncome)+parseInt(this.totalExpance)
    }
  }

  </script>
