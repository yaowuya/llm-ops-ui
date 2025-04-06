import { defineStore } from 'pinia'
import { ref } from 'vue'

const initAccount = {
  name: '慕小课',
  email: 'imooc@163.com',
  avatar: ''
}

export const useAccountStore = defineStore('account', () => {
  const account = ref({ ...initAccount })

  function update(params: any) {
    Object.assign(account.value, params)
  }

  function clear() {
    account.value = { ...initAccount }
  }

  return { account, update, clear }
})
