<template>
  <div class="pagination-container">
    <div class="card" v-for="post in filteredList" :key="post.id">
      <div class="title">Cart title {{post.id}}</div>
      <div class="text">There are some tex....</div>
      <button class="btn">Read More</button>
    </div>
  </div>
  <div class="btn-wrapper">
    <button class="btn" type="button" :disabled="currentPage === 1" @click="changePage(-1)"> Prev</button>
    <button class="btn" type="button" :disabled="currentPage === 5" @click="changePage(1)">Next</button>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data(){
    return {
      prePage: 20,
      currentPage: 1
    }
  },
  created: function(){
      this.$store.dispatch("getPost");
  },
  computed: {
      ...mapGetters({
        fromVuexPosts: 'getPosts'
      }),
    filteredList() {
      const star = (this.currentPage - 1) * this.prePage
      const end = this.currentPage * this.prePage
      const result = this.fromVuexPosts.slice(star, end)
      return result
    }
  },
  methods:{
    changePage(num) {
      this.currentPage = this.currentPage + num
    }
  },
}
</script>

<style scoped lang="sass">
.pagination-container
  background: #F0F0F0
  display: flex
  flex-wrap: wrap

.card
  width: 200px
  height: 100px
  border: 1px solid blue
  border-radius: 3px
  display: flex
  flex-direction: column
  justify-content: center
  margin: 5px
  box-sizing: border-box

.btn
  margin-top: 10px
  background: #b0b0e7
  width: 100px
  color: white
  box-sizing: border-box
</style>