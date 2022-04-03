<template>
  <div class="account-container">
    <div class="header">
      <div class="title">Мой аккаунт</div>
        <!--Radio Input Component-->
        <RadioInput :radio-object="accountOptions" v-model="accountType" style="max-width: 350px"/>
    </div>
    <div v-if="accountType === 'order-history'">
      <!--Order History Card Component    -->
      <OrderHistoryCard
          v-for="(product, index) in orderedLists"
          :key="product.id"
          :item="orderedLists[index]"
          style="margin-bottom: 20px"
      />
      <!--Pagination It's temporary -->
      <div class="footer-pagination">
        <div class="pag-box" style="background: #FF7010">
          <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.84826 17.7272C8.64677 17.7272 8.44507 17.6497 8.29124 17.4948L0.412536 9.56093C0.104676 9.25091 0.104676 8.74889 0.412536 8.43908L8.29124 0.505217C8.5991 0.195201 9.09763 0.195201 9.40529 0.505217C9.71295 0.815232 9.71315 1.31725 9.40529 1.62706L2.08361 9L9.40529 16.3729C9.71315 16.683 9.71315 17.185 9.40529 17.4948C9.25146 17.6497 9.04976 17.7272 8.84826 17.7272Z" fill="white"/>
          </svg>
        </div>
        <div class="pag-box">1</div>
        <div class="pag-box">2</div>
        <div class="pag-box">105</div>
        <div class="pag-box" style="background: #FF7010">
          <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.15174 17.7272C1.35323 17.7272 1.55493 17.6497 1.70876 17.4948L9.58746 9.56093C9.89532 9.25091 9.89532 8.74889 9.58746 8.43908L1.70876 0.505217C1.4009 0.195201 0.902374 0.195201 0.594711 0.505217C0.287047 0.815232 0.286851 1.31725 0.594711 1.62706L7.91639 9L0.594711 16.3729C0.286851 16.683 0.286851 17.185 0.594711 17.4948C0.748543 17.6497 0.950238 17.7272 1.15174 17.7272Z" fill="white"/>
          </svg>
        </div>
      </div>
    </div>
<!--Settings Part    -->
    <div v-if="accountType === 'settings'">
      <Settings/>
    </div>

  </div>
</template>

<script>
import RadioInput from "@/components/RadioInput/RadioInput";
import OrderHistoryCard from "@/components/OrderHistoryCard/OrderHistoryCard";
import Settings from "@/sections/MyAccount/Settings";
export default {
  components:{
    RadioInput,
    OrderHistoryCard,
    Settings
  },
  data(){
    return{
      accountType: 'settings',
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
      orderedLists: [
        {
          id:1,
          orderNumber: '№130312',
          orderDay: '22.06.21',
          orderSum: 399,
          orderStatus:{
            label:'Обрабатывается',
            value: 'inProgress'
          },
          orderPaymentType: 'Картой',
          orderFullAddress: 'ул. Львовская 48/2, офис 301, 2 этаж, домофон 4801#',
          products:[
            {
              id: 1,
              image: 'chicken-sweet.png',
              name: 'Чикен Сладкий Чили',
              description: 'Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...',
              crust: 'Традиционное',
              size: 20,
              price: 399,
              startingPrice: true,
              status: 'NEW',
              quantity: 1,
            },
            {
              id: 2,
              image: 'easy-peasy.png',
              name: 'EASY PEASY огуречный расколбас',
              description: 'Курица, Лук, Перец Халапеньо...',
              crust: 'Тонкое',
              size: 28,
              price: 280,
              startingPrice: true,
              status: 'ХИТ',
              quantity: 1,
            },
            {
              id: 3,
              image: 'easy-peasy-checken.png',
              name: 'EASY PEASY чикен а-ля хрен',
              description: 'Курица, Лук, Соус Карбонара,...',
              crust: 'Традиционное',
              size: 20,
              price: 399,
              startingPrice: true,
              status: '',
              quantity: 1,
            },
          ]
        },
        {
          id:2,
          orderNumber: '№230312',
          orderDay: '22.06.21',
          orderSum: 459,
          orderStatus:{
            label:'Едет к вам (в 15:13)',
            value: 'onTheWay'
          },
          orderPaymentType: 'Картой',
          orderFullAddress: 'ул. Львовская 48/2, офис 301, 2 этаж, домофон 4801#',
          products:[
            {
              id: 1,
              image: 'chicken-sweet.png',
              name: 'Чикен Сладкий Чили',
              description: 'Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...',
              crust: 'Традиционное',
              size: 20,
              price: 399,
              startingPrice: true,
              status: 'NEW',
              quantity: 1,
            },
            {
              id: 2,
              image: 'easy-peasy.png',
              name: 'EASY PEASY огуречный расколбас',
              description: 'Курица, Лук, Перец Халапеньо...',
              crust: 'Тонкое',
              size: 28,
              price: 280,
              startingPrice: true,
              status: 'ХИТ',
              quantity: 1,
            },

          ]
        },
        {
          id:3,
          orderNumber: '№130312',
          orderDay: '22.06.21',
          orderSum: 229,
          orderStatus:{
            label:'Выполнен',
            value: 'progressDone'
          },
          orderPaymentType: 'Картой',
          orderFullAddress: 'ул. Львовская 48/2, офис 301, 2 этаж, домофон 4801#',
          products:[
            {
              id: 1,
              image: 'chicken-sweet.png',
              name: 'Чикен Сладкий Чили',
              description: 'Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...',
              crust: 'Традиционное',
              size: 20,
              price: 399,
              startingPrice: true,
              status: 'NEW',
              quantity: 1,
            },
          ]
        },
        {
          id:4,
          orderNumber: '№130312',
          orderDay: '22.06.21',
          orderSum: 229,
          orderStatus:{
            label:'Отмена',
            value: 'cancel'
          },
          orderPaymentType: 'Картой',
          orderFullAddress: 'ул. Львовская 48/2, офис 301, 2 этаж, домофон 4801#',
          products:[
            {
              id: 1,
              image: 'chicken-sweet.png',
              name: 'Чикен Сладкий Чили',
              description: 'Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...',
              crust: 'Традиционное',
              size: 20,
              price: 399,
              startingPrice: true,
              status: 'NEW',
              quantity: 1,
            },
          ]
        }
      ]
    }
  }
}
</script>

<style scoped lang="sass">
.account-container
  max-width: 850px
  margin:  0 auto
  min-height: 1000px
.header
  display: flex
  justify-content: space-between
  align-items: center
  box-sizing: border-box
  margin: 40px 0 24px 0
.title
  font-family: Inter
  font-weight: 600
  font-size: 40px
  line-height: 48px
  color: #191919



//Footer Pagination
.footer-pagination
  display: flex
  justify-content: center
  margin-bottom: 60px
.pag-box
  display: flex
  align-items: center
  justify-content: center
  width: 48px
  height: 48px
  background: #FFFFFF
  border: 1px solid #F0F0F0
  box-sizing: border-box
  border-radius: 6px
  margin: 0 8px

</style>