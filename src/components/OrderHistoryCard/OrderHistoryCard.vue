<template>
  <div class="order-history-card">
    <div class="order-card-header">
      <div style="border-left: 4px solid red; box-sizing: border-box; padding-left: 16px">
        <div class="header-title">Заказ</div>
        <div class="header-body">№130312 22.06.21</div>
      </div>
      <div>
        <div class="header-title">Сумма заказа</div>
        <div class="header-body">399 ₽</div>
      </div>
      <div>
        <div class="header-title">Статус</div>
        <div class="header-body">Обрабатывается</div>
      </div>
      <div>
        <div class="header-title">Оплачено</div>
        <div class="header-body">Картой</div>
      </div>
      <div style="display: flex; align-items: center">
        <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 8.64986C16 8.45805 15.9289 8.26605 15.7869 8.11962L8.5142 0.619697C8.23002 0.326638 7.76984 0.326638 7.48584 0.619697L0.213135 8.11962C-0.0710456 8.41268 -0.0710456 8.88724 0.213135 9.18011C0.497316 9.47298 0.957497 9.47317 1.2415 9.18011L8.00002 2.21043L14.7585 9.18011C15.0427 9.47317 15.5029 9.47317 15.7869 9.18011C15.9289 9.03367 16 8.84167 16 8.64986Z" fill="#FF7010"/>
        </svg>
      </div>
    </div>
    <div style="background: #F0F0F0; height: 2px; margin-top: 16px"></div>
    <div class="order-history-card-content">
      <div>ул. Львовская 48/2, офис 301, 2 этаж, домофон 4801#</div>
      <div>
        <img src="@/assets/chicken-sweet.png" alt="Pizza Picture">
        <img src="@/assets/chicken-sweet.png" alt="Pizza Picture">
        <img src="@/assets/chicken-sweet.png" alt="Pizza Picture">
      </div>
    </div>
    <div style="background: #F0F0F0; height: 2px;"></div>
    <div v-for="n in 3" :key="n" class="pro-history-details">
      <div style="display: flex; align-items: center">
        <img src="@/assets/chicken-sweet.png" alt="Pizza Picture" style="margin-right: 16px">
        <div class="pro-details-name">Пепперони по-деревенски</div>
      </div>
      <div class="pro-details-size">Традиционное тесто, 23 см</div>
      <div class="pro-details-amount">1 товар</div>
      <div class="pro-details-price">399 ₽</div>
    </div>
    <div style="background: #F0F0F0; height: 2px;"></div>
    <div class="order-history-footer">
      <div class="order-history-footer-btn">
        Повторить заказ
      </div>
    </div>
  </div>
</template>

<script>
export default {

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
//height: 365px

.order-card-header
  display: flex
  justify-content: space-between
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
.pro-history-details
  display: flex
  align-items: center
  justify-content: space-between
  box-sizing: border-box
  padding: 12px 0

.pro-details-name, .pro-details-size
  font-family: 'Inter'
  color: #191919
.pro-details-name
  font-weight: 600
  font-size: 16px
  line-height: 20px

.pro-details-size
  font-weight: 400
  font-size: 14px
  line-height: 18px
.pro-details-amount
  background: #FFEEE2
  border-radius: 6px
  padding: 10px 20px
  font-family: 'Inter'
  font-style: normal
  font-weight: 600
  font-size: 16px
  line-height: 20px
  display: flex
  align-items: center
  text-align: center
  color: #FF7010
.pro-details-price
  font-family: 'Inter'
  font-weight: 600
  font-size: 16px
  line-height: 20px
  color: #FF7010


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
</style>