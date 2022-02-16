<template>
  <div class="navigation-container">
<!--    Navigation Top part-->
    <div class="top-nav-style" v-if="!isLoged">
      <div class="menu">
        <Iconca name="Location" color="#FF7010" :width="14" :height="20" style="margin-right: 11.5px"/>
        <ul>
          <li class="other-btn">Москва<Iconca name="ArrowDown" color="#191919" :width="12" :height="8" style="margin-left: 8px"/></li>
          <li>Проверить адрес</li>
          <li>Среднее время доставки*: <span style="font-weight: 600">00:24:19</span></li>
        </ul>
      </div>
      <div class="login-menu">
        <div class="store-time">Время работы: с 11:00 до 23:00</div>
        <Iconca name="Profile" color="#FF7010" :width="18" :height="20" style="margin-right: 9px"/>
        <div class="login-btn">Войти в аккаунт</div>
      </div>
    </div>
    <div class="devider" v-if="isLoged"></div>
<!--    Navigation Body Part-->
    <div class="navbar">
      <div style="display: flex">
        <div class="logo">
          <img src="@/assets/pitsa-logo.png" alt="Logo" style="margin-right: 12px">
          <div class="logo-title">
            Куда пицца
          </div>
        </div>
        <div class="nav-list" v-if="!isLoged">
          <ul>
            <li v-for="item in listItems" :key="item.title">
              {{ item.title }}
            </li>
            <li class="other-btn">Другое<Iconca name="ArrowDown" color="#191919" :width="12" :height="8" style="margin-left: 8px"/></li>
          </ul>
        </div>
      </div>
      <!--    Basket Button component-->
      <Button fit :text="`${basketTotalSum} ₽`" left-icon="Basket" :icon-width="24" :icon-height="22" @click.prevent="openModel" style="height: 40px"/>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button/Button";
import Iconca from "@/components/Iconca/Iconca";
import { mapState, mapGetters } from 'vuex';

export default {
  name:"NavigationSection",
  components:{
    Button,
    Iconca
  },
  data(){
    return {
      isLoged: false,
      listItems: [
        {
          title: "Акции"
        },
        {
          title: "Пицца"
        },
        {
          title: "Суши"
        },
        {
          title: "Напитки"
        },
        {
          title: "Закуски"
        },
        {
          title: "Комбо"
        },
        {
          title: "Десерты"
        },
        {
          title: "Соусы"
        },
      ]
    }
  },
  computed: {
    ...mapState({
      // basket: state => state.basket
    }),
    ...mapGetters({
      basketTotalSum: 'basketTotalSum'
    })
  },
  methods: {
    openModel(){
      this.$emit('openModel')
    }
  }
}
</script>

<style src="./NavigationSection.sass" lang="sass" scoped/>