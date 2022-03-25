<template>
  <div class="account-container">
    <div class="header">
      <div class="title">Мой аккаунт</div>
        <!--Radio Input Component-->
        <RadioInput :radio-object="accountOptions" v-model="accountType" style="max-width: 350px"/>
    </div>
<!--Order History Card Component    -->
    <OrderHistoryCard v-for="n in 3" :key="n" style="margin-bottom: 20px"/>


  </div>
</template>

<script>
import RadioInput from "@/components/RadioInput/RadioInput";
import OrderHistoryCard from "@/components/OrderHistoryCard/OrderHistoryCard";
export default {
  components:{RadioInput,OrderHistoryCard},
  data(){
    return{
      accountType: 'order-history',
      accountOptions: [
        {
          radioId: 'first',
          value: 'order-history',
          placeholder: 'История заказов'
        },
        {
          radioId: 'second',
          value: 'settings',
          placeholder: 'Настройки'
        },
      ],
    }
  }
}
</script>

<style scoped lang="sass">
.account-container
  max-width: 850px
  margin:  0 auto
  min-height: 1000px
  border: 1px solid red
  background: lightblue
.header
  display: flex
  justify-content: space-between
  align-items: center
  background: #FFFFFF
  box-sizing: border-box
  margin: 40px 0 24px 0
.title
  font-family: Inter
  font-weight: 600
  font-size: 40px
  line-height: 48px
  //display: flex
  //align-items: center
  color: #191919




</style>