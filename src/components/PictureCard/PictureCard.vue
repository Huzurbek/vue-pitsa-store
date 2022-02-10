<template>
  <div class="card">
    <img :src="require(`@/assets/${items.image}`)" alt="Pizza Picture">
    <div class="text-style">
      {{ items.text }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'PitsaPictureCard',
  props: {
    items: Object
  }
}
</script>

<style src="./PictureCard.sass" lang="sass" scoped />
