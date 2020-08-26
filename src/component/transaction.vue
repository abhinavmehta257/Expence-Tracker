<template id="">
  <div class="">
    <div id='transaction'>

      <table class="table table-borderless bg-white">
        <tr>
          <td id='Ids'>{{transaction.Id.toUpperCase()}}</td>
          <td id='amount' > ${{transaction.Amount}}
            <td id='type' v-if='transaction.Amount < 0' style="background:red; width: 1px"></td>
            <td id='type' v-if='transaction.Amount > 0' style="background:green; width: 1px"></td>
        </td>

        </tr>

      </table>

    </div>
  </div>
</template>

<script type="text/javascript">
  export default{
    props:['transaction'],
    created(){


    }
  }

</script>
