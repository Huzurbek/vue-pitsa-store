<template>
  <div class="checkout-order">
    <div class="total-sum">Итого: {{ totalSum }} ₽</div>
    <Button class="submit-btn" text="Оформить заказ" @click="clickBtn" :class="{'myDisabled':!totalSum}" />
  </div>
</template>

<script>
import Button from "@/components/Button/Button";
export default {
  components:{ Button },
  props:{
    totalSum: {
      type: Number,
      default:()=>0
    }
  },
  methods:{
    clickBtn(){
      this.$emit('clickComponent')
    }
  }
}
</script>

<style scoped lang="sass">
.checkout-order
  display: flex
  justify-content: space-between
  align-items: center
  padding: 12px 20px
  box-sizing: border-box
  border-top: 1px solid #F0F0F0

.total-sum
  font-family: Inter
  font-weight: 600
  font-size: 20px
  line-height: 28px
  color: #FF7010

.myDisabled
  pointer-events: none
  cursor: not-allowed
  user-select: none
  opacity: 0.65
  filter: alpha(opacity=65)
  -webkit-box-shadow: none
  box-shadow: none
</style>