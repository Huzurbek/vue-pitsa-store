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
    <!--    FORM CONTAINER-->
    <form @submit.prevent="submit">
      <div class="client-info">
        <div class="client-info-box">
          <div class="input-label">Имя*</div>
          <Input placeholder="Алексей" class="input-box" v-model="form.username.value" @blur="form.username.blur"
                 :class="{invalid: !form.username.valid && form.username.touched}"/>
        </div>
        <div class="client-info-box">
          <div class="input-label">Номер телефона*</div>
          <Input placeholder="+7" class="input-box" v-model="form.number.value" @blur="form.number.blur"
                 :class="{invalid: !form.number.valid && form.number.touched}"/>
        </div>
        <div class="client-info-box">
          <div class="input-label">Почта</div>
          <Input placeholder="mail@gmail.com" class="input-box" v-model="form.email.value" @blur="form.email.blur"
                 :class="{invalid: !form.email.valid && form.email.touched}"/>
        </div>
      </div>

      <div class="diveder-line"></div>
      <!--Delivery Section with Form    -->
      <div class="delivery-section">
        <div class="delivery-header">
          <div>Доставка</div>
          <!--Radio Input Component-->
          <p>Delivery type is : {{ deliveryType }}</p>
          <RadioInput :radio-object="deliveryOptions" v-model="deliveryType" style="max-width: 350px"/>
        </div>
        <p>Result: {{ form }}</p>
        <!--Delivery Form-->
        <div class="delivery-form" v-if="deliveryType == 'delivery'">
          <div style="margin-bottom: 16px">
            <div class="input-label">Улица*</div>
            <Input placeholder="Пушкина" v-model="form.street.value" @blur="form.street.blur"
                   :class="{invalid: !form.street.valid && form.street.touched}"/>
          </div>
          <div style="display: flex; align-items: center; justify-content: space-between">
            <div class="dv-form-group">
              <div class="input-label">Дом</div>
              <Input placeholder="1а" v-model="form.home.value" @blur="form.home.blur"
                     :class="{invalid: !form.home.valid && form.home.touched}"/>
            </div>
            <div class="dv-form-group">
              <div class="input-label">Подъезд</div>
              <Input placeholder="1" v-model="form.entrance.value" @blur="form.entrance.blur"
                     :class="{invalid: !form.entrance.valid && form.entrance.touched}"/>
            </div>
            <div class="dv-form-group">
              <div class="input-label">Этаж</div>
              <Input placeholder="2" v-model="form.ground.value" @blur="form.ground.blur"
                     :class="{invalid: !form.ground.valid && form.ground.touched}"/>
            </div>
            <div class="dv-form-group">
              <div class="input-label">Квартира</div>
              <Input placeholder="3" v-model="form.appartment.value" @blur="form.appartment.blur"
                     :class="{invalid: !form.appartment.valid && form.appartment.touched}"/>
            </div>
            <div class="dv-form-group">
              <div class="input-label">Домофон</div>
              <Input placeholder="0000" v-model="form.intercom.value" @blur="form.intercom.blur"
                     :class="{invalid: !form.intercom.valid && form.intercom.touched}"/>
            </div>
          </div>
        </div>


        <!--      Pickup Form-->
        <div class="pickup-form" v-if="deliveryType == 'pickup'">
          <div class="input-label">Ресторан*</div>
          <Input placeholder="Выберите ресторан" right-icon="ArrowDown" v-model="form.restaurant.value" :icon-width="16"
                 :icon-height="10"/>
        </div>
        <!--Order Time part        -->
        <div class="order-time-title">Когда выполнить заказ?</div>
        <div class="order-time-box">
          <CycleRadioInput :cycle-radio-object="deliveryTimeOptions" v-model="form.selectedTime.value"/>
          <div v-if="form.selectedTime.value==='normal'" style="display: flex">
            <Input placeholder="Дата" style="max-width: 160px; margin-right: 16px" right-icon="Date" :icon-width="16"
                   :icon-height="16"/>
            <Input placeholder="Время" style="max-width: 160px" right-icon="ArrowDown" :icon-width="16"
                   :icon-height="10"/>
          </div>
        </div>
        <div class="diveder-line"></div>
        <!--Payment Part-->
        <div class="section-title">Оплата</div>
        <CycleRadioInput :cycle-radio-object="paymentOptions" v-model="form.selectedPayment.value"
                         style="margin-top: 16px"/>
        <div class="diveder-line"></div>
        <!--    Changes Part  -->
        <div class="section-title">Сдача</div>
        <div class="order-change-box">
          <CycleRadioInput :cycle-radio-object="changeOptions" v-model="form.selectedChange.value"/>
          <div v-if="form.selectedChange.value==='withChange'" style="display: flex">
            <Input placeholder="0" style="max-width: 160px" right-icon="Ruble" :icon-width="10" :icon-height="12"/>
          </div>
        </div>
        <div class="diveder-line"></div>
        <!--    Comments Part  -->
        <div class="section-title">Комментарий</div>
        <textarea v-model="form.comment.value" class="comment-form" placeholder="Есть уточнения?"></textarea>
        <!--        <CheckoutOrder :total-sum="checkoutTotalSum" @clickComponent="helloMe" style="margin-bottom: 48px"/>-->
      </div>
      <!--      :disabled="!form.valid"-->
      <button class="btn primary" :disabled="!form.valid" type="submit">Submit</button>
    </form>

  </div>
</template>

<script>
import OrderedCard from "@/components/OrderedCard/OrderedCard";
import Input from "@/components/Input/Input";
import Slider from "@/components/Slider/Slider";
import RadioInput from "@/components/RadioInput/RadioInput";
import CycleRadioInput from "@/components/CycleRadioInput/CycleRadioInput";
// import CheckoutOrder from "@/components/CheckoutOrder/CheckoutOrder";

import {mapGetters, mapState} from 'vuex'


import {ref, watch} from 'vue'
import {useForm} from "@/use/form";
import { useStore } from 'vuex'

const required = val => !!val
// const minLength = num => val => val.length >= num
export default {
  setup() {
    const store = useStore()
    const submitted = ref(false)
    const deliveryType = ref('pickup')
    const error = ref()

    const mainForm = {
      username: {
        value: 'Mahmud',
        validators: {required}
      },
      number: {
        value: '997573814',
        validators: {required}
      },
      email: {
        value: 'mahmud@yahoo.com',
        validators: {required}
      },
      selectedTime: {
        value: 'normal',
        validators: {required}
      },
      selectedPayment: {
        value: 'applePay',
        validators: {required}
      },
      selectedChange: {
        value: 'noChange',
        validators: {required}
      },
      comment: {
        value: 'There are some comments ..............',
        validators: {required}
      },
    }
    const firstForm = {
      street: {
        value: 'kucha',
        validators: {required}
      },
      home: {
        value: '',
        validators: {required}
      },
      entrance: {
        value: 'kirish',
        validators: {required}
      },
      ground: {
        value: 'etash',
        validators: {required}
      },
      appartment: {
        value: 'kvartir',
        validators: {required}
      },
      intercom: {
        value: 'domofon',
        validators: {required}
      },

    }
    const secondForm = {
      restaurant: {
        value: '',
        validators: {required}
      },
    }
    const form = ref({})

    const loadData = () => {
      form.value = useForm(deliveryType.value === 'pickup' ? {...mainForm, ...secondForm} : {...mainForm, ...firstForm})
      console.log("loaded info",form)
    }
    watch(deliveryType, () => {
      loadData()
      // console.log('Current is:', current)
      // console.log('periv is ', previous)
    })

    function submit() {
      console.log('In submit', form.value)
      let demo = {}
      for (const [key, value] of Object.entries(form.value)) {
        // {value: '', validators: {required} }
        demo[key] = value.value
      }

      store.commit("fillForm", demo)
      submitted.value = true
    }
    loadData()
    // onErrorCaptured(e => {
    //   error.value = e.message
    // })

    return {form, submit, submitted, error, deliveryType}
  },
  components: {
    Slider,
    OrderedCard,
    Input,
    RadioInput,
    CycleRadioInput,
    // CheckoutOrder,

  },
  data() {
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
      deliveryOptions: [
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
      deliveryTimeOptions: [
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
      paymentOptions: [
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
      changeOptions: [
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
      ],
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
    increment(val) {
      this.$store.commit("incCheckoutProQuantity", val)
    },
    decrement(val) {
      this.$store.commit("decCheckoutProQuantity", val)
    },

    helloMe() {
      console.log('component working properly')
      this.$router.push('/orderDone')
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
  margin: 0 auto
  padding: 41px 70px 0 70px
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
  background: #F0F0F0

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
  font-weight: normal
  font-size: 16px
  line-height: 22px
  display: flex
  align-items: center
  color: #A5A5A5
  margin-top: 16px

.order-time-box, .order-change-box
  display: flex
  align-items: center
  margin-top: 8px
  height: 48px

.order-change-box
  margin-top: 4px

//Comment Form textarea
.comment-form
  background: #FFFFFF
  border: 1px solid #F0F0F0
  box-sizing: border-box
  border-radius: 6px
  width: 100%
  min-height: 200px
  padding: 13px 16px
  font-family: SF Pro Text
  font-weight: normal
  font-size: 16px
  line-height: 22px
  display: flex
  align-items: center
  color: #A5A5A5
  margin: 16px 0 20px

.comment-form:focus
  width: 100%
  border: none
  outline: none !important

.invalid
  border: 1px solid #e53935
</style>
