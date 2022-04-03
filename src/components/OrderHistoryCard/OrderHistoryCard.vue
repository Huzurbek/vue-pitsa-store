<template>
  <div class="order-history-card">
<!--Order Card Header Part Starting    -->
    <div class="order-card-header">
      <div
          style="box-sizing: border-box; padding-left: 16px"
          :style= "styles[item.orderStatus.value]"
      >
        <div class="header-title">Заказ</div>
        <div class="header-body"
             :style="{color:item.orderStatus.value === 'cancel'?'#A5A5A5':'#191919'}"
        >{{item.orderNumber}} {{item.orderDay}}</div>
      </div>
      <div>
        <div class="header-title">Сумма заказа</div>
        <div class="header-body" :style="{color:item.orderStatus.value === 'cancel'?'#A5A5A5':'#191919'}">
          {{ item.orderSum }} ₽
        </div>
      </div>
      <div>
        <div class="header-title">Статус</div>
        <div class="header-body">{{item.orderStatus.label}}</div>
      </div>
      <div>
        <div class="header-title">Оплачено</div>
        <div class="header-body" :style="{color:item.orderStatus.value === 'cancel'?'#A5A5A5':'#191919'}">
          {{item.orderPaymentType}}
        </div>
      </div>
      <div
          @click="isOpen = !isOpen"
          style="display: flex; align-items: center; cursor: pointer">
        <svg v-if="!isOpen" width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 1.35014C16 1.54195 15.9289 1.73395 15.7869 1.88038L8.5142 9.3803C8.23002 9.67336 7.76984 9.67336 7.48584 9.3803L0.213135 1.88038C-0.0710456 1.58732 -0.0710456 1.11276 0.213135 0.819893C0.497316 0.52702 0.957497 0.526833 1.2415 0.819893L8.00002 7.78957L14.7585 0.819892C15.0427 0.526833 15.5029 0.526833 15.7869 0.819892C15.9289 0.966328 16 1.15833 16 1.35014Z" fill="#FF7010"/>
        </svg>
        <svg v-else width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 8.64986C16 8.45805 15.9289 8.26605 15.7869 8.11962L8.5142 0.619697C8.23002 0.326638 7.76984 0.326638 7.48584 0.619697L0.213135 8.11962C-0.0710456 8.41268 -0.0710456 8.88724 0.213135 9.18011C0.497316 9.47298 0.957497 9.47317 1.2415 9.18011L8.00002 2.21043L14.7585 9.18011C15.0427 9.47317 15.5029 9.47317 15.7869 9.18011C15.9289 9.03367 16 8.84167 16 8.64986Z" fill="#FF7010"/>
        </svg>
      </div>
    </div>
    <div class="divider-line"></div>
    <div class="order-history-card-content">
      <div>{{item.orderFullAddress}}</div>
      <div style="display: flex">
        <div v-for="product in item.products" :key="product.id">
          <img v-if="item.orderStatus.value === 'cancel'" src="@/assets/disabledImg.png" alt="Pizza Picture">
          <img v-else :src="require(`@/assets/${product.image}`)" alt="Pizza Picture">
        </div>
      </div>
    </div>
    <div class="divider-line"></div>
<!--Collapse Transition Starting    -->
    <collapse-transition :duration="500">
      <div v-show="isOpen">
        <div
            v-for="product in item.products"
            :key="product.id"
            class="collapse-card">
          <div style="display: flex; align-items: center; width:40% ">
            <img :src="require(`@/assets/${product.image}`)" alt="Pizza Picture" style="margin-right: 16px">
            <div class="collapse-product-name" >{{ product.name }}dfsdsfsdfs</div>
          </div>
          <div style="flex:1" class="collapse-product-size" >{{ product.crust }} тесто, {{ product.size }} см</div>
          <div class="collapse-product-amount-btn">1 товар</div>
          <div style="margin-right: 0;" class="collapse-product-price">{{ product.price }} ₽</div>
        </div>
        <div class="divider-line"></div>
      </div>
    </collapse-transition>
<!--Card Footer Part Starting    -->
    <div class="order-history-footer">
      <div class="order-history-footer-btn">
        Повторить заказ
      </div>
    </div>
  </div>
</template>

<script>
import CollapseTransition from '@ivanv/vue-collapse-transition/src/CollapseTransition.vue'
export default {
  components: {
    CollapseTransition,
  },
  data() {
    return {
      isOpen: false, // closed by default
      styles:{
        inProgress:{
          borderLeft:'4px solid #E23535'
        },
        onTheWay:{
          borderLeft:'4px solid #FF7010'
        },
        progressDone:{
          borderLeft:'4px solid #24D17E'
        },
        cancel:{
          borderLeft:'4px solid #A5A5A5'
        }
      }
    }
  },
  props: {
    item:{
      type: Object,
      default:()=>{}
    }
  },
}
</script>

<style scoped lang="sass">
//Order History card style
.order-history-card
  background: #FFFFFF
  border: 1px solid #F0F0F0
  box-sizing: border-box
  border-radius: 12px
  padding: 16px 20px

.order-card-header
  display: flex
  justify-content: space-between
  margin-bottom: 16px

.header-title
  font-family: Inter
  font-weight: 400
  font-size: 14px
  line-height: 18px
  color: #A5A5A5
  margin-bottom: 4px

.header-body
  font-family: "SF Pro Text"
  font-weight: 400
  font-size: 16px
  line-height: 22px
  color: #191919
.order-history-card-content
  display: flex
  align-items: center
  justify-content: space-between
  box-sizing: border-box
  margin: 12px 0
img
  width: 40px
  height: 40px

.divider-line
  background: #F0F0F0
  height: 2px
//Collapse Card Style----------------------
.collapse-card
  display: flex
  align-items: center
  box-sizing: border-box
  padding: 12px 0
  & >div
    margin-right: 16px

.collapse-product-name, .collapse-product-size
  font-family: 'Inter'
  color: #191919

.collapse-product-name
  font-weight: 600
  font-size: 16px
  line-height: 20px
  overflow: hidden //toshib chiqib ketishni ko'rinmas qilib qo'yamiz
  text-overflow: ellipsis //toshib ketganda avtomatik word-break qilayabdi uni o'chirish kerak'
  white-space: nowrap //mana shunday qiib okochiriladi

.collapse-product-size
  font-weight: 400
  font-size: 14px
  line-height: 18px

.collapse-product-amount-btn, .collapse-product-price
  font-family: 'Inter'
  font-weight: 600
  font-size: 16px
  color: #FF7010

.collapse-product-amount-btn
  background: #FFEEE2
  border-radius: 6px
  padding: 10px 20px
  line-height: 20px
  display: flex
  align-items: center
  text-align: center
  margin-right: 50px !important
  cursor: pointer
.collapse-product-amount-btn:hover
  background: #FF7010
  color: #FFFFFF

.collapse-product-price
  line-height: 20px

//Order History Card Footer Part Style
.order-history-footer
  display: flex
  align-items: center
  justify-content: center
  box-sizing: border-box
  padding-top: 16px
.order-history-footer-btn
  font-family: 'SF Pro Text'
  font-weight: 400
  font-size: 16px
  line-height: 22px
  display: flex
  align-items: center
  text-align: center
  color: #FF7010
  cursor: pointer
.order-history-footer-btn:hover
  color: #b14402
</style>