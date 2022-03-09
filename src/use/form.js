import {computed, reactive} from 'vue'
import {useField} from './field'

export function useForm(init = {}) {
  const form = reactive({})

  const validKey = 'valid'

  for (const [key, value] of Object.entries(init)) {
    // {value: '', validators: {required} }
    form[key] = useField(value)
  }

  const withoutValid = k => k !== validKey

  form[validKey] = computed(() => Object.keys(form).filter(withoutValid).every(k => form[k].valid))
  console.log('before form ',form[validKey])
  console.log('Final result from useForm:',form)
  return form
}

