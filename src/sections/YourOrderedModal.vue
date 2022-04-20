<template>
  <transition name="slide" tag="div" >
    <div class="trans" v-if="display">
      <div class="aside" >
        <div style="padding: 32px 20px 0 20px">
          <div class="header">
            <span v-if="basketProducts.length">Ваш заказ</span>
            <span v-else>Корзина пуста</span>
            <Iconca @click="close" name="Close" color="#A5A5A5" :width="24" :height="24" style="cursor: pointer"/>
          </div>
<!--OrderedCard Component-->
          <OrderedCard
              v-for="(item,index) in basketProducts"
              :key="index"
              :item="basketProducts[index]"
              @increment="increment"
              @decrement="decrement"
              style="margin-bottom: 20px"/>
        </div>
<!--CheckoutOrder Component-->
        <CheckoutOrder
            v-if="basketProducts.length"
            :total-sum="basketTotalSum"
            @clickComponent="checkoutOrder"
            :disability="basketProducts.length>=1"
            style="padding: 12px 20px"/>
      </div>
    </div>
  </transition>
</template>

<script>
import Iconca from "@/components/Iconca/Iconca";
import OrderedCard from "@/components/OrderedCard/OrderedCard";
import CheckoutOrder from "@/components/CheckoutOrder/CheckoutOrder";
import { mapState, mapGetters } from 'vuex';
export default {
  components: {Iconca, OrderedCard, CheckoutOrder},
  props: {
    display: {
      type: Boolean,
      default: false
    }
  },
  data(){
    return{

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
  methods:{
    clickMe(val){
      console.log("clicked -", val)
    },
    increment(val){
      this.$store.commit("incBasketProQuantity",val)
    },
    decrement(val){
      console.log('decrement ',val)
      this.$store.commit("decBasketProQuantity",val)
    },
    close(){
      this.$emit('close')
    },
    checkoutOrder(){
      this.close()
      this.$router.push({ path: '/order', hash: '#orderId' })
    }
  }
}
</script>
<style scoped lang="sass">
.trans
  overflow: auto /* Enable scroll if needed */
  position: fixed
  z-index: 500
  width: 100%
  height: 100%
  left: 0
  top: 0
  background: rgba(25, 25, 25, 0.4)
  backdrop-filter: blur(32px)

.slide-enter-active
  transition: all .5s ease

.slide-leave-active
  transition: all .5s ease

.slide-enter-from, .slide-leave-to
  transform: translateX(100%)

.aside
  width: 420px
  height: 100vh
  display: flex
  flex-direction: column
  justify-content: space-between
  background: #FFFFFF
  position: fixed
  box-sizing: border-box
  z-index: 100
  top: 0
  right: 0

.header
  font-family: Inter
  font-weight: 600
  font-size: 32px
  line-height: 40px
  color: #191919
  display: flex
  align-items: center
  justify-content: space-between
  margin-bottom: 20px

</style>