<template>
  <div class="order-container" id="orderId">
    <div class="order-topic">Ваш заказ</div>
<!--    Notification-->
    <p v-if="!basketProducts.length" style="color: red">Вы пока ничего не выбрали.</p>
        <OrderedCard
          v-for="(item,index) in basketProducts"
          :key="index"
          large
          :item="basketProducts[index]"
          @increment="increment"
          @decrement="decrement"
          style="margin-bottom: 16px"/>

      <!--    Notification-->
    <p v-if="basketTotalSum < 500 && basketProducts.length >=1" style="color: red">Чтобы сделать заказ, выберите товары на общую сумму не менее 500 ₽.</p>
    <div v-if="basketTotalSum > 500 && basketProducts.length >=1">
      <div class="sum-container">
        <Input placeholder="Промокод" input-btn style="max-width:320px"/>
        <div class="sum-text">Итого: {{ basketTotalSum }} ₽</div>
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
      <form>
        <div class="client-info">
          <div class="client-info-box">
            <div class="input-label">Имя*</div>
            <Input placeholder="Алексей" class="input-box" v-model="form.username.value" @blur="form.username.blur"
                   :class="{invalid: !form.username.valid && form.username.touched}"/>
            <small
                style="color: red"
                v-if="form.username.touched && form.username.errors.required">Username field is required</small>
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
            <RadioInput :radio-object="deliveryOptions" v-model="deliveryType" style="max-width: 350px"/>
          </div>
          <!--Delivery Form-->
          <div class="delivery-form" v-if="deliveryType === 'delivery'">
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
          <div class="pickup-form" v-if="deliveryType === 'pickup'">
            <div class="input-label">Ресторан*</div>
            <v-select
                class="style-chooser"
                placeholder="Выберите ресторан"
                :options="restaurants"
                label="label"
                v-model="form.restaurant.value"
                :reduce="el => el.value"
            />
          </div>
          <!--Order Time part        -->
          <div class="order-time-title">Когда выполнить заказ?</div>
          <p>day is: {{date}}</p>
          <div class="order-time-box">
            <CycleRadioInput :cycle-radio-object="deliveryTimeOptions" v-model="form.selectedTime.value"/>
            <div v-if="form.selectedTime.value==='normal'" style="display: flex">
              <Datepicker v-model="date" class="meniki" placeholder="Дата" style="width: 300px;"></Datepicker>
            </div>
          </div>
          <div class="diveder-line"></div>
          <!--Payment Part-->
          <div class="section-title">Оплата</div>
          <CycleRadioInput :cycle-radio-object="paymentOptions" v-model="payment"
                           style="margin-top: 16px"/>
          <div class="diveder-line"></div>
          <!--    Changes Part  -->
          <div v-if="payment === 'cash'">
            <div class="section-title">Сдача</div>
            <div class="order-change-box">
              <CycleRadioInput :cycle-radio-object="changeOptions" v-model="form.selectedChange.value"/>
              <div v-if="form.selectedChange.value==='withChange'" style="display: flex">
                <Input placeholder="0" style="max-width: 160px" right-icon="Ruble" :icon-width="10" :icon-height="12"/>
              </div>
            </div>
            <div class="diveder-line"></div>
          </div>
          <!--    Comments Part  -->
          <div class="section-title">Комментарий</div>
          <textarea v-model="form.comment.value" class="comment-form" placeholder="Есть уточнения?"></textarea>
          <CheckoutOrder
              :total-sum="basketTotalSum"
              @clickComponent="submit"
              :disability="(form.valid && basketProducts.length>=1)"
              style="margin-bottom: 48px"/>
        </div>
        <!--      <button class="btn primary" :disabled="!form.valid" type="submit">Submit</button>-->
      </form>
<!--      <p>Error info: {{error}}</p>-->
    </div>

  </div>
</template>

<script>
import OrderedCard from "@/components/OrderedCard/OrderedCard";
import Input from "@/components/Input/Input";
import Slider from "@/components/Slider/Slider";
import RadioInput from "@/components/RadioInput/RadioInput";
import CycleRadioInput from "@/components/CycleRadioInput/CycleRadioInput";
import CheckoutOrder from "@/components/CheckoutOrder/CheckoutOrder";
import vSelect from "vue-select";
// import IDGenerator from "@/helpers/uniqueId.js";

import {mapGetters, mapState} from 'vuex'
import {ref, watch, onErrorCaptured} from 'vue'
import {useForm} from "@/composables/form";
import { useStore } from 'vuex'
// import { useRouter } from 'vue-router'

const required = val => !!val
// const minLength = num => val => val.length >= num
export default {
  setup() {
    const store = useStore()
    // const router = useRouter()
    const submitted = ref(false)
    const deliveryType = ref('pickup')
    const payment = ref('applePay')


    const error = ref()

    const mainFormData = {
      username: {
        value: '',
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
      comment: {
        value: 'There are some comments ..............',
        validators: {required}
      },
    }
    const firstFormData = {
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
    const secondFormData = {
      restaurant: {
        value: null,
        validators: {required}
      },
    }

    const change = {
      selectedChange: {
        value: 'noChange',
        validators: {required}
      },
    }
    const form = ref({})

    const loadData = () => {
      let data= {...mainFormData,selectedPayment:{
        value:payment.value,
          validators:{required}
        }}

      if (payment.value === 'cash'){
        data={...data,...change}
      }

      form.value = useForm(deliveryType.value === 'pickup' ? {...data
        , ...secondFormData} : {...data, ...firstFormData})
      console.log('Data info before submitting', form)
    }
    watch(deliveryType, () => {
      loadData()
    })
    watch(payment, () => {
      loadData()
    })

    function submit() {


      if(form.value.valid && store.state.basketProducts.length>=1) {
        let payload = {selectedProduct: store.state.basketProducts}
        for (const [key, value] of Object.entries(form.value)) {
          console.log(value.value)
          payload[key] = value.value
        }
        // console.log('Forma tuldi',payload)
        store.commit("fillForm", payload)
        store.commit('removeBasketProducts')
        loadData()
        // router.push({ name: 'OrderDone', params: { orderCode: IDGenerator.uniqueId() }, hash: '#orderDone' })
      }else {
        console.log('valid is false')
      }
      submitted.value = true
    }
    loadData()
    function increment(val) {
      store.commit("incBasketProQuantity", val)
    }
    function decrement(val) {
      store.commit("decBasketProQuantity", val)
    }
    onErrorCaptured(e => {
      error.value = e.message
    })

    return {
      form,
      submit,
      submitted,
      error,
      deliveryType,
      increment,
      decrement,
      payment
    }
  },
  components: {
    Slider,
    OrderedCard,
    Input,
    RadioInput,
    CycleRadioInput,
    CheckoutOrder,
    "v-select": vSelect,
  },
  data() {
    return {
      date: null,
      restaurants: [
        {label: 'Uzbek Pizza Cafe',value: 'uzbcafe', id: '1'},
        {label: 'Simple Pizza Cafe',value: 'simplecafe', id: '23333'},
        {label: 'American Pizza Cafe',value: 'americafe', id: '3'},
      ],
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
      basketProducts: state => state.basketProducts
    }),
    ...mapGetters({
      basketTotalSum: 'basketTotalSum'
    }),


  },

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



.meniki, .dp__main, .dp__theme_light
  border-radius: 10px
  border: 1px solid red
  height: 48px
  display: flex
  align-items: center
  justify-content: center

input, .dp__pointer, .dp__input, .dp__input_icon_pad
  height: 48px
  border: 1px solid red
</style>
