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
    <Slider :items="items" style="margin-top: 24px"/>
    <div class="diveder-line" style="margin: 26px 0 3px 0"></div>

    <div class="section-title">Соусы</div>
<!--Slider Component    -->
    <Slider :items="sous" style="margin: 24px 0 30px 0"/>

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

    <div class="diveder-line"></div>
<!--Delivery Section with Form    -->
    <div class="delivery-section">
      <div class="delivery-header">
        <div>Доставка</div>
<!--Radio Input Component-->
        <RadioInput :radio-object="deliveryOptions" @selectType="selectType" />
      </div>
<!--Delivery Form-->
      <div class="delivery-form" v-if="deliveryType==='delivery'" style="background: aquamarine; ">
        <div style="margin-bottom: 16px">
          <div class="input-label">Улица*</div>
          <Input placeholder="Пушкина" />
        </div>
        <div style="display: flex; align-items: center; justify-content: space-between">
          <div class="dv-form-group">
            <div class="input-label">Дом</div>
            <Input placeholder="1а" />
          </div>
          <div class="dv-form-group">
            <div class="input-label">Подъезд</div>
            <Input placeholder="1" />
          </div>
          <div class="dv-form-group">
            <div class="input-label">Этаж</div>
            <Input placeholder="2" />
          </div>
          <div class="dv-form-group">
            <div class="input-label">Квартира</div>
            <Input placeholder="3" />
          </div>
           <div class="dv-form-group">
             <div class="input-label">Домофон</div>
             <Input placeholder="0000" />
           </div>
        </div>
      </div>
<!--      Pickup Form-->
      <div class="pickup-form" v-if="deliveryType==='pickup'" style="background: #f2ff7f;">
          <div class="input-label">Ресторан*</div>
          <Input placeholder="Выберите ресторан" />
      </div>
<!--Order Time part        -->
      <div class="order-time-title">Когда выполнить заказ?</div>
      <div class="order-time-box">
        <CycleRadioInput :cycle-radio-object="deliveryTimeOptions" @selectType="cycleRadioClick" />
        <div v-if="selectedTimeType==='normal'" style="display: flex">
          <Input placeholder="Дата" style="max-width: 160px; margin-right: 16px"/>
          <Input placeholder="Время" style="max-width: 160px"/>
        </div>
      </div>
      <div class="diveder-line"></div>
<!--Payment Part-->
      <div class="section-title">Оплата</div>
      <CycleRadioInput :cycle-radio-object="paymentOptions" style="margin-top: 16px"/>
      <div class="diveder-line"></div>
<!--    Changes Part  -->
      <div class="section-title">Сдача</div>
      <CycleRadioInput :cycle-radio-object="changeOptions" style="margin-top: 16px"/>
      <div class="diveder-line"></div>
<!--    Comments Part  -->
      <div class="section-title">Комментарий</div>


    </div>

  </div>
</template>

<script>
import OrderedCard from "@/components/OrderedCard/OrderedCard";
import Input from "@/components/Input/Input";

import Slider from "@/components/Slider/Slider";
import RadioInput from "@/components/RadioInput/RadioInput";
import CycleRadioInput from "@/components/CycleRadioInput/CycleRadioInput";
import {mapGetters, mapState} from 'vuex'
export default {
  components: {
    Slider,
    OrderedCard,
    Input,
    RadioInput,
    CycleRadioInput
  },
  data(){
    return {
      deliveryType: 'delivery',
      selectedTimeType: 'urgent',

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
      deliveryOptions:[
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
      ],
      deliveryTimeOptions:[
        {
          cycleId: 'time1',
          value: 'urgent',
          placeholder: 'Как можно скорее'
        },
        {
          cycleId: 'time2',
          value: 'normal',
          placeholder: 'По времени'
        },
      ],
      paymentOptions:[
        {
          cycleId: 'payment1',
          value: 'cash',
          placeholder: 'Наличными'
        },
        {
          cycleId: 'payment2',
          value: 'card',
          placeholder: 'Картой'
        },
        {
          cycleId: 'payment3',
          value: 'applePay',
          placeholder: 'Apple Pay'
        },

      ],
      changeOptions:[
        {
          cycleId: 'change1',
          value: 'noChange',
          placeholder: 'Без сдачи'
        },
        {
          cycleId: 'change2',
          value: 'withChange',
          placeholder: 'Сдача с'
        },
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
    },
    selectType(val){
      this.deliveryType = val
    },
    cycleRadioClick(val){
      this.selectedTimeType = val
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
  //margin: 30px 0 24px 0

.sum-container
  display: flex
  justify-content: space-between
  align-items: center
  background: #FFFFFF
  outline: 1px solid #F0F0F0
  box-sizing: border-box
  border-radius: 8px
  padding: 16px 24px
  margin-bottom: 30px
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
  display: flex
  justify-content: space-between
  box-sizing: border-box
  margin-top: 16px

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
  height: 1px
  background: red

//DELIVERY SECTION WITH FORM STYLE
.delivery-header
  display: flex
  align-items: center
  justify-content: space-between
  font-family: Inter
  font-weight: 600
  font-size: 24px
  line-height: 32px
  color: #191919
  margin-bottom: 16px

.dv-form-group
  max-width: 154px

.order-time-title
  font-family: SF Pro Text
  font-style: normal
  font-weight: normal
  font-size: 16px
  line-height: 22px
  display: flex
  align-items: center
  color: #A5A5A5
  margin-top: 16px
.order-time-box
  display: flex
  align-items: center
  margin-top: 8px
  height: 48px
</style>
