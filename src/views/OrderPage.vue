<template>
  <div class="order-container">
    <div class="order-topic">Ваш заказ</div>
    <OrderedCard
        v-for="(item,index) in checkoutProducts"
        :key="index"
        large
        :item="checkoutProducts[index]"
        @increment="increment"
        @decrement="decrement"
        style="margin-bottom: 16px"/>

    <div class="sum-container">
      <Input placeholder="Промокод" input-btn style="max-width:320px"/>
      <div class="sum-text">Итого: {{ checkoutTotalSum }} ₽</div>
    </div>

    <div class="section-title">Добавить к заказу?</div>
<!--Slider Component    -->
    <Slider :items="items"/>

    <div class="section-title">Соусы</div>
<!--Slider Component    -->
    <Slider :items="sous"/>

    <div class="section-title">О вас</div>
    <div class="client-info">
      <div class="client-info-box">
        <div class="input-label">Имя*</div>
        <Input placeholder="Алексей" class="input-box"/>
      </div>
      <div class="client-info-box">
        <div class="input-label">Номер телефона*</div>
        <Input placeholder="+7" class="input-box"/>
      </div>
      <div class="client-info-box">
        <div class="input-label">Почта</div>
        <Input placeholder="mail@gmail.com" class="input-box"/>
      </div>
    </div>

    <div class="diveder-line" style="height: 1px; background: red; width: 100%"></div>
<!--Delivery Section with Form    -->
    <div class="delivery-section">
      <div class="delivery-header">
        <div>Доставка</div>
<!--Radio Input Component-->
        <RadioInput :radio-object="radioObject" />
      </div>

      <div class="delivery-form" v-if="deliveryType==='delivery'" style="background: aquamarine; height: 200px">
        <h3>Delivery Type</h3>
      </div>
      <div class="pickup-form" v-if="deliveryType==='pickup'" style="background: #f2ff7f; height: 200px">
        <h3>Pickup Type</h3>
      </div>


    </div>

  </div>
</template>

<script>
import OrderedCard from "@/components/OrderedCard/OrderedCard";
import Input from "@/components/Input/Input";

import Slider from "@/components/Slider/Slider";
import RadioInput from "@/components/RadioInput/RadioInput";
import {mapGetters, mapState} from 'vuex'
export default {
  components: {
    Slider,
    OrderedCard,
    Input,
    RadioInput
  },
  data(){
    return {

      items: [
        {
          id: 1,
          image: 'order1.png',
          name: 'Картофель из печи',
          description: '',
          crust: '',
          size: 0,
          price: 179,
          startingPrice: true,
          status: 'NEW',
          quantity: 1,
          portion: 95,
        },
        {
          id: 2,
          image: 'order2.png',
          name: 'Филадельфия крем-брюле',
          description: '',
          crust: '',
          size: 0,
          price: 179,
          startingPrice: true,
          status: 'NEW',
          quantity: 1,
          portion: 95,
        },
        {
          id: 3,
          image: 'order3.png',
          name: 'Супер Филадельфия',
          description: '',
          crust: '',
          size: 0,
          price: 179,
          startingPrice: true,
          status: 'NEW',
          quantity: 1,
          portion: 95,
        },
        {
          id: 4,
          image: 'order4.png',
          name: 'Тигр мама',
          description: '',
          crust: '',
          size: 0,
          price: 179,
          startingPrice: true,
          status: 'NEW',
          quantity: 1,
          portion: 95,
        },
        {
          id: 5,
          image: 'order1.png',
          name: 'Картофель из печи',
          description: '',
          crust: '',
          size: 0,
          price: 179,
          startingPrice: true,
          status: 'NEW',
          quantity: 1,
          portion: 95,
        },
        {
          id: 6,
          image: 'order2.png',
          name: 'Филадельфия крем-брюле',
          description: '',
          crust: '',
          size: 0,
          price: 179,
          startingPrice: true,
          status: 'NEW',
          quantity: 1,
          portion: 95,
        },
      ],
      sous: [
        {
          id: 1,
          image: 'sous1.png',
          name: 'Сырный соус',
          description: '',
          crust: '',
          size: 0,
          price: 39,
          startingPrice: true,
          status: 'NEW',
          quantity: 1,
          portion: 0,
        },
        {
          id: 2,
          image: 'sous2.png',
          name: 'Барбфекю',
          description: '',
          crust: '',
          size: 0,
          price: 39,
          startingPrice: true,
          status: 'NEW',
          quantity: 1,
          portion: 0,
        },
        {
          id: 3,
          image: 'sous3.png',
          name: 'Ранч',
          description: '',
          crust: '',
          size: 0,
          price: 39,
          startingPrice: true,
          status: 'NEW',
          quantity: 1,
          portion: 0,
        },
        {
          id: 4,
          image: 'sous4.png',
          name: 'Сгущёнка',
          description: '',
          crust: '',
          size: 0,
          price: 39,
          startingPrice: true,
          status: 'NEW',
          quantity: 1,
          portion: 0,
        },
        {
          id: 5,
          image: 'sous2.png',
          name: 'Барбфекю',
          description: '',
          crust: '',
          size: 0,
          price: 39,
          startingPrice: true,
          status: 'NEW',
          quantity: 1,
          portion: 0,
        },
        {
          id: 6,
          image: 'sous1.png',
          name: 'Сырный соус',
          description: '',
          crust: '',
          size: 0,
          price: 39,
          startingPrice: true,
          status: 'NEW',
          quantity: 1,
          portion: 0,
        },

      ],
      deliveryType: 'delivery',
      radioObject:[
        {
          radioId: 'first',
          value: 'delivery',
          placeholder: 'Доставка'
        },
        {
          radioId: 'second',
          value: 'pickup',
          placeholder: 'Самовывоз'
        },
        // {
        //   radioId: 'third',
        //   value: 'mok',
        //   placeholder: 'Mok'
        // },
      ]

    }
  },
  computed: {
    ...mapState({
      checkoutProducts: state => state.checkoutProducts
    }),
    ...mapGetters({
      checkoutTotalSum: 'checkoutTotalSum'
    }),
  },
  methods: {
    increment(val){
      this.$store.commit("incCheckoutProQuantity",val)
    },
    decrement(val){
      this.$store.commit("decCheckoutProQuantity",val)
    }

  }

}
</script>

<style scoped lang="sass">

.order-container
  position: relative
  //border: 1px solid red
  border-bottom: none
  max-width: 990px
  margin:  0 auto
  padding: 0 70px 0 70px
  box-sizing: border-box


.order-topic, .section-title
  font-family: Inter
  font-weight: 600
  color: #191919

.order-topic
  font-size: 40px
  line-height: 48px
  margin-bottom: 24px

.section-title
  font-size: 24px
  line-height: 32px
  margin: 30px 0 24px 0

.sum-container
  display: flex
  justify-content: space-between
  align-items: center
  background: #FFFFFF
  outline: 1px solid #F0F0F0
  box-sizing: border-box
  border-radius: 8px
  padding: 16px 24px
  //height: 80px
.sum-text
  font-family: Inter
  font-weight: 600
  font-size: 20px
  line-height: 28px
  display: flex
  align-items: center
  text-align: right
  color: #FF7010

.client-info
  height: 74px
  background: #e7ccb9
  display: flex
  justify-content: space-between
  box-sizing: border-box

.client-info-box
  max-width: 270px
  flex: 1
.input-label
  font-family: Inter
  font-weight: normal
  font-size: 14px
  line-height: 18px
  display: flex
  align-items: center
  color: #A5A5A5
  margin-bottom: 8px

.diveder-line
  margin: 20px 0
  box-sizing: border-box

//DELIVERY SECTION WITH FORM STYLE
.delivery-header
  display: flex
  align-items: center
  justify-content: space-between
  background: aliceblue
  font-family: Inter
  font-weight: 600
  font-size: 24px
  line-height: 32px
  color: #191919

//display: flex;
//align-items: center;

</style>
