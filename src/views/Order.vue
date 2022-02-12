<template>
  <div class="container">
    <div class="order-topic">Ваш заказ</div>
    <YourOrderBox v-for="(item,index) in orderBoxProduct" :key="index" :items="orderBoxProduct[index]" style="margin-bottom: 16px"/>


    <div class="order-title">Добавить к заказу?</div>
    <Slider :items="items"/>

    <div class="order-title">Соусы</div>
    <Slider :items="sous"/>

    <div class="order-title">О вас</div>

  </div>
</template>

<script>
import YourOrderBox from "@/components/YourOrderBox/YourOrderBox";
import Slider from "@/components/Slider/Slider";
export default {
  components: {
    Slider,
    YourOrderBox
  },
  data(){
    return {
      orderBoxProduct:[
        {
          image: 'easy-peasy.png',
          name: 'Пепперони по-деревенски',
          size: 'Традиционное тесто, 23 см',
          price: 399
        },
        {
          image: 'four-season.png',
          name: 'Пепперони ',
          size: 'Традиционное тесто, 23 см',
          price: 399
        },
        {
          image: 'easy-peasy.png',
          name: 'Пепперони по-деревенски',
          size: 'Традиционное тесто, 23 см',
          price: 399
        }
      ],
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


</style>
