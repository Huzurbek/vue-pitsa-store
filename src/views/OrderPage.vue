<template>
  <div class="container">
    <div class="order-topic">Ваш заказ</div>

    <YourOrderBox v-for="(item,index) in basketProducts" :key="index" :item="basketProducts[index]" style="margin-bottom: 16px"/>

    <div class="sum-container">
      <Input placeholder="Промокод" input-btn style="max-width:320px"/>
      <div class="sum-text">Итого: 2 379 ₽</div>
    </div>

    <div class="order-title">Добавить к заказу?</div>
    <Slider :items="items"/>

    <div class="order-title">Соусы</div>
    <Slider :items="sous"/>

    <div class="order-title">О вас</div>
    <div class="client-info">
      <div class="name">
        <div class="input-label">Имя*</div>
        <Input placeholder="Алексей" style="max-width: 270px"/>
      </div>
      <div class="number">
        <div class="input-label">Номер телефона*</div>
        <Input placeholder="+7" style="max-width: 270px"/>
      </div>
      <div class="email">
        <div class="input-label">Почта</div>
        <Input placeholder="mail@gmail.com" style="max-width: 270px"/>
      </div>
    </div>

  </div>
</template>

<script>
import YourOrderBox from "@/components/OrderedCard/OrderedCard";
import Input from "@/components/Input/Input";

import Slider from "@/components/Slider/Slider";
import { mapState } from 'vuex'
export default {
  components: {
    Slider,
    YourOrderBox,
    Input
  },
  data(){
    return {

      items: [
        {
          image: 'order1.png',
          text: 'Картофель из печи',
          portion: 95,
          price: 179
        },
        {
          image: 'order2.png',
          text: 'Филадельфия крем-брюле',
          portion: 95,
          price: 179
        },
        {
          image: 'order3.png',
          text: 'Супер Филадельфия',
          portion: 95,
          price: 179
        },
        {
          image: 'order4.png',
          text: 'Тигр мама',
          portion: 95,
          price: 179
        },
        {
          image: 'order1.png',
          text: 'Картофель из печи',
          portion: 95,
          price: 179
        },
        {
          image: 'order2.png',
          text: 'Филадельфия крем-брюле',
          portion: 95,
          price: 179
        },
      ],
      sous: [
        {
          image: 'sous1.png',
          text: 'Сырный соус',
          price: 39
        },
        {
          image: 'sous2.png',
          text: 'Барбфекю',
          price: 39
        },
        {
          image: 'sous3.png',
          text: 'Ранч',
          price: 39
        },
        {
          image: 'sous4.png',
          text: 'Сгущёнка',
          price: 39
        },
        {
          image: 'sous2.png',
          text: 'Барбфекю',
          price: 39
        },
        {
          image: 'sous1.png',
          text: 'Сырный соус',
          price: 39
        }
      ],

    }
  },
  computed: {
    ...mapState({
      basketProducts: state => state.basketProducts
    })
  }

}
</script>

<style scoped lang="sass">

.container
  position: relative
  //border: 1px solid red
  border-bottom: none
  max-width: 990px
  margin:  0 auto
  padding: 0 70px 0 70px
  box-sizing: border-box


.order-topic, .order-title
  font-family: Inter
  font-weight: 600
  color: #191919

.order-topic
  font-size: 40px
  line-height: 48px
  margin-bottom: 24px

.order-title
  font-size: 24px
  line-height: 32px
  margin: 30px 0 24px 0

.sum-container
  display: flex
  justify-content: space-between
  align-items: center
  background: #FFFFFF
  border: 1px solid #F0F0F0
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
  width: 850px
  background: #e7ccb9
  display: flex
  justify-content: space-between
.input-label
  font-family: Inter
  font-weight: normal
  font-size: 14px
  line-height: 18px
  display: flex
  align-items: center
  color: #A5A5A5
  margin-bottom: 8px

</style>
