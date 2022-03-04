import {computed, reactive} from 'vue'
import {useField} from './field'
// {
//   email: {
//     value: '',
//     validators: {required}
//   },
//   password: {
//     value: '',
//     validators: {required, minLength: minLength(8)}
//   }
// }
export function useForm(init = {}) {
  const form = reactive({})

  const validKey = 'valid'

  for (const [key, value] of Object.entries(init)) {

    // {value: '', validators: {required} }
    form[key] = useField(value)

  }

  const withoutValid = k => k !== validKey
  console.log('before computed:',form)
  form[validKey] = computed(() => Object.keys(form).filter(withoutValid).every(k => form[k].valid))
  console.log('final form:',form)
  return form
}

