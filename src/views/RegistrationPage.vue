<template>
  <div class="registration-container">
    <form class="card">
      <h1>Auth</h1>

<!--      <h3 v-if="error">{{error}}</h3>-->
<p>{{form}}</p>
      <div class="form-control" >
        <label for="email">Email</label>
        <input type="email" id="email" v-model="form.email.value"><br>
        <small>Email field is required</small>
      </div>

      <div class="form-control" >
        <label for="password">Password</label>
        <input type="password" id="password" v-model="form.email.value"> <br>
        <small >Password field is required</small>
      </div>

      <button class="btn" type="submit" >Submit</button>
    </form>
  </div>
</template>

<script>
import {ref} from 'vue'
// import UsersList from './components/UsersList'
import {useForm} from '@/use/form'



const required = val => !!val
const minLength = num => val => val.length >= num
export default {

  setup() {

    const submitted = ref(false)
    const error = ref()

    const form = useForm({
                                email: {
                                  value: 'Mahmud',
                                  validators: {required}
                                },
                                password: {
                                  value: '',
                                  validators: {required, minLength: minLength(8)}
                                }
                           })

    function submit() {
      console.log('Email:', form.email.value)
      console.log('Password:', form.password.value)
      submitted.value = true
    }

    // onErrorCaptured(e => {
    //   error.value = e.message
    // })

    return {form, submit, submitted, error}
  },
  components: {
    // UsersList
  }
}
</script>

<style scoped lang="sass">
.registration-container
  padding: 100px 0
  background: #A5A5A5
  display: flex
  justify-content: center
  align-items: center
.card
  width: 100%
  height: 500px
  padding: 20px
  box-sizing: border-box
  background: #FFFFFF
  border: 1px solid cadetblue
  border-radius: 5px
label
  width: 200px
  margin-right: 10px
.btn
  margin-top: 20px
</style>