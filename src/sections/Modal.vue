<template>
  <h2>Modal Example</h2>

<!--  &lt;!&ndash; Trigger/Open The Modal &ndash;&gt;-->
<!--  <button @click="modal=true">Open Modal</button>-->

  <!-- The Modal -->
  <div class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <div class="image">
        <img src="@/assets/bigPizza.png" alt="Pizza Picture">
      </div>

      <div class="description" style="flex: 1; max-width: 480px" >

        <!--              <Iconca name="Mashroom" color="#FF7010" :width="105" :height="105"/>-->
        <!--              <Iconca name="Onion" color="#FF7010" :width="28" :height="40"/>-->
        <!--              <Iconca name="BellPapper" color="#FF7010" :width="35" :height="41"/>-->
        <!--              <Iconca name="SousInsideWhite" color="#FF7010" :width="41" :height="27"/>-->
        <!--              <Iconca name="Cucumber" color="#A5A5A5" :width="40" :height="40"/>-->
        <div class="pizza-name">
          <Iconca name="smallSale" color="#E23535" :width="18" :height="24" style="margin-right: 11px"/>
          {{ selectedPizza.name }}
        </div>
<!--Toppings-->
        <div class="toppings">
          <div class="blog" v-for="(item, index) in toppings" :key="index">
            <div class="icon-box">
              <Iconca :name="item.icon" color="#FF7010" :width="item.width" :height="item.height"/>
            </div>
            <div class="blog-title">{{ item.toppingName }}</div>
          </div>
        </div>
<!--    Crust Part    -->
        <div class="crust">
          <Button text="Традиционное" class="btn-style"/>
          <Button text="Тонкое" :active="false" class="btn-style"/>
        </div>
<!--        Pizza Size-->
        <div class="size">
          <Button text="20 см" class="btn-style"/>
          <Button text="28 см" :active="false" class="btn-style"/>
          <Button text="33 см" :active="false" class="btn-style"/>
        </div>
<!--Adding Toppings to Pizza-->
        <div class="adding-title">Добавьте в пиццу</div>
        <div class="toppings">
          <div class="blog" v-for="(item, index) in toppingProducts" :key="index">
            <div class="icon-box">
              <Iconca :name="item.icon" color="#FF7010" :width="item.width" :height="item.height"/>
            </div>
            <div class="blog-title">{{ item.toppingName }}</div>
            <div class="topping-price">{{item.price}} ₽</div>
          </div>
        </div>
<!--     Footer Part   -->
        <div class="modal-footer">
          <div class="total-sum" style="display: flex; align-items: center">
            <div class="sum">Итого: 379 ₽</div>
            <div class="gramm">400 г</div>
          </div>
          <Button text="Добавить" style="height: 48px"/>
        </div>




<!--        <span class="close" style="font-weight: bold; font-size: 30px">&times;</span>-->
      </div>
      <div class="close-btn">
        <Iconca @click="closeModal" name="Close" color="white" :width="32" :height="32"/>
      </div>
    </div>
  </div>
</template>

<script>
import Iconca from "@/components/Iconca/Iconca";
import Button from "@/components/Button/Button";
export default {
  components:{
    Iconca,
    Button
  },
  props: {
    selectedPizza:{
      type: Object,
      default:()=>{}
    }
  },
  data(){
    return {
      // modal: true,
      toppingProducts: [
        {
          icon: 'MozarellaCheese',
          width: 41,
          height: 35,
          toppingName: 'Моцарелла',
          price: 59
        },
        {
          icon: 'Mashroom',
          width: 105,
          height: 105,
          toppingName: 'Шампиньоны',
          price: 59
        },
        {
          icon: 'Onion',
          width: 28,
          height: 40,
          toppingName: 'Красный лук',
          price: 59
        },
        {
          icon: 'BellPapper',
          width: 35,
          height: 41,
          toppingName: 'Сладкий перец',
          price: 59
        }
      ],
      toppings: [
        {
          icon: 'MozarellaCheese',
          width: 41,
          height: 35,
          toppingName: 'Моцарелла'
        },
        {
          icon: 'Cucumber',
          width: 40,
          height: 40,
          toppingName: 'Огурцы маринованные'
        },
        {
          icon: 'Cucumber',
          width: 40,
          height: 40,
          toppingName: 'Пепперони'
        },
        {
          icon: 'SousInsideWhite',
          width: 41,
          height: 27,
          toppingName: 'Томатный соус'
        }
      ]
    }
  },
  methods:{
  closeModal(){
    this.$emit('close')
  }
  }
}
</script>

<style scoped lang="sass">
.modal
  //position: fixed /* Stay in place */
  //z-index: 1 /* Sit on top */
  //padding-top: 100px /* Location of the box */
  overflow: auto /* Enable scroll if needed */
  position: fixed
  width: 100%
  height: 100%
  left: 0
  top: 0
  background: rgba(25, 25, 25, 0.4)
  backdrop-filter: blur(32px)


/* Modal Content */
.modal-content
  position: absolute
  width: 1070px
  height: 680px
  left: 20px
  top: 20px
  //left: 305px
  //top: 132px
  background: #eadbe0
  border-radius: 24px
  padding: 32px 20px 0 60px
  box-sizing: border-box
  display: flex
  justify-content: space-between

  //margin: auto
  //padding: 20px
  //border: 1px solid #888
  //width: 80%
img
  width: 450px
  height: 450px

.pizza-name
  font-family: Inter
  font-weight: 600
  font-size: 20px
  line-height: 28px
  color: #191919
  display: flex
  align-items: center
  margin-bottom: 16px

.toppings
  display: flex
  justify-content: space-between
  box-sizing: border-box
  margin-bottom: 24px

.blog
  width: 105px
  box-sizing: border-box

.icon-box
  width: 105px
  height: 105px
  box-sizing: border-box
  background: #FFFFFF
  border: 1px solid #F0F0F0
  border-radius: 12px
  display: flex
  justify-content: center
  align-items: center
  margin-bottom: 8px

.blog-title
  margin-bottom: 4px
.blog-title, .topping-price
  white-space: pre-wrap
  font-family: Inter
  font-weight: normal
  font-size: 14px
  line-height: 18px
  color: #191919
  //display: flex;
  //align-items: center;
  text-align: center
.topping-price
  font-weight: 600
  color: #FF7010

  //Adding toppings to pizza
.adding-title
  font-family: Inte
  font-weight: 600
  font-size: 16px
  line-height: 20px
  color: #191919
  margin-top: 8px
  margin-bottom: 16px
//display: flex;
//align-items: center;

//Crust Part
.crust, .size
  background: #FFFFFF
  border: 1px solid #F0F0F0
  box-sizing: border-box
  border-radius: 6px
  margin-bottom: 16px
  display: flex
  align-items: center

.btn-style
  flex: 1
  height: 48px

//Footer Part
.modal-footer
  display: flex
  justify-content: space-between

.sum
  font-family: Inter
  font-weight: 600
  font-size: 20px
  line-height: 28px
  color: #FF7010
  margin-right: 12px
//display: flex
//align-items: center
.gramm
  font-family: Inter
  font-weight: normal
  font-size: 14px
  line-height: 18px
  color: #A5A5A5
.close-btn
  position: absolute
  right: -62px
  top: 0
  cursor: pointer
</style>