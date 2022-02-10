<template>
  <div class="footer-container">
    <div class="inside">
      <div class="logo-box" style="display: flex; flex-direction: column; justify-content: space-between">
        <div class="header" style="display: flex; align-items: center">
          <img src="@/assets/pitsa-logo.png" alt="Logo" style="margin-right: 14px">
          <span>Куда пицца</span>
        </div>
       <div class="Copyright">
         © Copyright 2021 — Куда Пицца
       </div>
       </div>


      <div class="about-box">
        <div class="title">Куда пицца</div>
        <ul>
          <li>О компании</li>
          <li>Пользовательское соглашение</li>
          <li>Условия гарантии</li>
        </ul>
      </div>
      <div class="help-box">
        <div class="title">Помощь</div>
        <ul>
          <li>Ресторан</li>
          <li>Контакты</li>
          <li>Поддержка</li>
          <li>Отследить заказ</li>
        </ul>
      </div>
      <div class="contact-box ">
        <div class="title">Контакты</div>
        <ul>
          <li><Iconca name="Phone" color="#FF7010" :width="20" :height="20" style="margin-right: 12px"/>+7 (926) 223-10-11</li>
          <li><Iconca name="Location" color="#FF7010" :width="14" :height="20" style="margin-right: 15px"/>Москва, ул. Юных Ленинцев, д.99</li>
          <li>
            <span class="fb" style="margin-right: 24px"><Iconca name="Facebook" color="#FF7010" :width="20" :height="20" style="margin-right: 12px"/>Facebok</span>
            <span class="ins"><Iconca name="Instagram" color="#FF7010" :width="20" :height="20" style="margin-right: 12px"/>Instagram</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Iconca from "@/components/Iconca/Iconca";
export default {
  components:{
    Iconca
  }
}
</script>

<style src="./FooterSection.sass" lang="sass" scoped/>