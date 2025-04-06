<script setup lang="ts">
import { post } from '@/utils/request.ts'

async function debug() {
  const response = await post('/app/b31bb8e6-0821-47cd-aa58-3c8e2711d44c/debug', {
    body: { query: '请问你是谁？' }
  })
  console.log(response)
}
</script>

<template>
  <p>这是详情页</p>
  <a-button type="primary" @click="debug">发起请求</a-button>
</template>

<style scoped>

</style>
