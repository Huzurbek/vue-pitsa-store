<template>
  <div>
    <div class="navigation">
      <div class="nav-logo">THE MOVIE DB</div>
     <div class="nav-menu">
       <label for="select">Username</label>
       <select v-model="selected" id="select">
         <option
             v-for="option in options"
             :key="option.value"
             :value="option.value"
             >
           {{option.label}}
         </option>
       </select>
     </div>
    </div>
    <div class="task-content">
      <div class="create-list">
        My Lists
        <div class="add-btn">+</div>
      </div>
      <div class="task-body">
        <div class="task-card"
             v-for="(list, index) in filteredList"
             :key="index"
              >
         <div class="card-body">
           <div class="card-title">{{list.name +index}}</div>
           <div class="card-text">{{list.description}}</div>
         </div>
          <div class="card-footer">
            <button>D</button>
          </div>
        </div>
      </div>
      <div class="task-footer">
        <button class="btn" :disabled="currentPage === 1" @click="changePage(-1)">
          <i style='font-size:24px' class='fas'>&#xf104;</i>
        </button>
        <div class="btn" v-for="n in 10" :key="n">{{n}}</div>

        <button class="btn" :disabled="currentPage === (lists.length/prePage)" @click="changePage(1)">
          <i style='font-size:24px' class='fas'>&#xf105;</i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>

export default {

  data(){
    return {
      selected: '',
      options:[
        {
          value: 'login',
          label: 'Login'
        },
        {
          value: 'logout',
          label: 'Logout'
        }
      ],
      lists: [
        {
          name:'Listname',
          description: 'Description'
        },
        {
          name:'Listname',
          description: 'Description'
        },
        {
          name:'Listname',
          description: 'Description'
        },
        {
          name:'Listname',
          description: 'Description'
        },
        {
          name:'Listname',
          description: 'Description'
        },
        {
          name:'Listname',
          description: 'Description'
        },
        {
          name:'Listname',
          description: 'Description'
        },
        {
          name:'Listname',
          description: 'Description'
        },
        {
          name:'Listname',
          description: 'Description'
        },
        {
          name:'Listname10',
          description: 'Description'
        }
      ],
      currentPage: 1,
      prePage: 5
    }
  },
  computed:{
    filteredList() {
      const star = (this.currentPage - 1) * this.prePage
      const end = this.currentPage * this.prePage
      const result = this.lists.slice(star, end)
      console.log('result is ',result)
      return result
    }
  },
  methods: {
    changePage(num){
      this.currentPage = this.currentPage+num
    }
  }
}
</script>

<style scoped lang="sass">
.navigation
  height: 70px
  padding: 20px
  box-sizing: border-box
  background: darkblue
  display: flex
  justify-content: space-between
  align-items: center
  color: #FFFFFF

.create-list
  font-size: 30px
  font-weight: bold
  padding: 40px
  display: flex
  align-items: center

.add-btn
  font-size: 50px
  font-weight: normal
  margin-left: 10px
  cursor: pointer

.add-btn:hover
  color: red
.task-body
  display: flex
  flex-wrap: wrap
  //justify-content: center
.task-card
  width: 300px
  height: 200px
  border: 1px solid gray
  border-radius: 3px
  box-sizing: border-box
  margin-right: 10px
  margin-bottom: 10px

.card-body
  display: flex
  flex-direction: column
  justify-content: center
  border-bottom: 1px solid gray
  padding: 20px
  box-sizing: border-box

.card-title
  font-weight: bold
  font-size: 25px
  margin-bottom: 20px
.card-footer
  padding: 10px
  display: flex
  justify-content: center

.task-footer
  display: flex
  justify-content: center
.btn
  width: 35px
  height: 35px
  border: 1px solid gray
  border-radius: 3px
  margin: 3px
  box-sizing: border-box
  display: flex
  justify-content: center
  align-items: center
</style>