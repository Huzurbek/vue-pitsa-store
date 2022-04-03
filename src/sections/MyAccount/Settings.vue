<template>
  <div class="personal-data-box">
    <div class="personal-data-header" style="margin-bottom: 16px">
      <div v-if="userInfoEdited" class="header-title">Личные данные</div>
      <div v-if="!userInfoEdited" class="header-title">Изменение личных данных</div>
      <EditButton v-if="userInfoEdited" @click="editUserInfo"/>
    </div>
<!--User Details Box    -->
    <div v-if="userInfoEdited" class="user-details" style="display: flex">
      <div class="column">
        <div class="user-title">Имя*</div>
        <div class="user-body">Вадим</div>
      </div>
      <div class="column">
        <div class="user-title">Номер телефона*</div>
        <div class="user-body">+7 (926) 223-10-11</div>
      </div>
      <div class="column">
        <div class="user-title">Почта</div>
        <div class="user-body">mail@gmail.com</div>
      </div>
      <div class="column">
        <div class="user-title">Дата рождения</div>
        <div class="user-body">13.02.1996</div>
      </div>
    </div>
    <div v-if="!userInfoEdited" >
      <div class="my-grid">
        <div >
          <div class="user-title">Имя*</div>
          <Input placeholder="Вадим"/>
        </div>
        <div >
          <div class="user-title">Номер телефона*</div>
          <Input placeholder="+7 (926) 223-10-11" />
        </div>
        <div  >
          <div class="user-title">Почта</div>
          <Input placeholder="mail@gmail.com" />
        </div>
        <div >
          <div class="user-title">Дата рождения</div>
          <Input placeholder="13.02.1996" />
        </div>
      </div>
      <Button text="Сохранить изменения" @click="userInfoEdited = true" style="width: 246px"/>
    </div>
  </div>
  <!--Password Box    -->
  <div class="password-box">
   <div class="password-header">
     <div v-if="userPasswordEdited" class="password-title">Пароль</div>
     <div v-if="!userPasswordEdited" class="password-title">Изменить пароль</div>
     <EditButton v-if="userPasswordEdited" @click="userPasswordEdited = !userPasswordEdited"/>
   </div>
    <div v-if="!userPasswordEdited" style="margin-top: 16px">
      <div class="my-grid">
        <div >
          <div class="user-title">Старый пароль*</div>
          <Input placeholder="********"/>
        </div>
        <div >
          <div class="user-title">Новый пароль*</div>
          <Input placeholder="********" />
        </div>
        <div  >
          <div class="user-title">Подтвердите пароль*</div>
          <Input placeholder="********" />
        </div>
      </div>
      <Button text="Сохранить изменения" @click="userPasswordEdited = true" style="width: 246px"/>
    </div>
  </div>
<!--  Subscription Box-->
  <div class="subscription-box">
    <div class="subscription-title" style="margin-bottom: 16px">Подписки</div>
    <div class="subs-body">Получать предложения и акции</div>
  </div>
</template>

<script>
import EditButton from "@/sections/MyAccount/EditButton";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
export default {
  components:{EditButton, Input, Button},
  data(){
    return {
      userInfoEdited: true,
      userPasswordEdited: true
    }
  },
  methods: {
    editUserInfo(){
      this.userInfoEdited = !this.userInfoEdited
      console.log("Edit user info...")
    },
    editUserPassword(){
      console.log("edit password..")
    }
  }
}
</script>

<style scoped lang="sass">
.personal-data-box, .password-box, .subscription-box
  background: #FFFFFF
  outline: 1px solid #F0F0F0
  box-sizing: border-box
  border-radius: 12px
  padding: 24px 32px
  margin-bottom: 20px

.personal-data-header, .password-header
  display: flex
  justify-content: space-between

.header-title, .password-title, .subscription-title
  font-family: 'Inter'
  font-weight: 600
  font-size: 24px
  line-height: 32px
  display: flex
  align-items: center
  color: #191919
.column
  margin-right: 32px
.user-title
  font-family: 'Inter'
  font-weight: 400
  font-size: 14px
  line-height: 18px
  color: #A5A5A5
  margin-bottom: 4px
.user-body, .subs-body
  font-family: 'SF Pro Text'
  font-weight: 400
  font-size: 16px
  line-height: 22px
  color: #191919
.my-grid
  display: grid
  grid-template-columns: repeat(3,1fr)
  grid-column-gap: 24px
  grid-row-gap: 16px
  margin-bottom: 16px
</style>