<template>
  <div class="order-done-box">
    <div class="done-center">
      <div class="image">
        <img src="@/assets/orderDone.png" alt="Pizza">
      </div>
      <div class="title">
        Заказ № <span style="color: #A5A5A5">{{code}}</span> принят
      </div>
      <div class="response-text">
        Спасибо за заказ!<br>
        Примерное время доставки 45 минут. Статус отследить можно нажав на кнопку ниже
      </div>
      <Button text="Отследить заказ" style="width: 196px"/>
    </div>

  </div>
</template>

<script>
import Button from "@/components/Button/Button";
export default {
  components:{Button},
  data(){
    return {
      code: 'noCode'
    }
  },
  mounted() {
    this.code = this.$route.params.orderCode
  }
}
</script>

<style scoped lang="sass">
.order-done-box
  display: flex
  justify-content: center
  align-items: center
  padding-top: 183px
.done-center
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
img
  width: 220px
  height: 125px
.image
  width: 220px
  height: 125px
.title
  font-family: Inter
  font-weight: 600
  font-size: 24px
  line-height: 32px
  color: #191919
  margin: 48px 0 16px 0

.response-text
  max-width: 380px
  font-family: SF Pro Text
  font-weight: normal
  font-size: 16px
  line-height: 22px
  text-align: center
  color: #191919
  margin-bottom: 24px
</style>