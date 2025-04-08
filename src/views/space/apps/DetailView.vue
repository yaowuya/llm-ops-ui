<script setup lang="ts">
</script>

<template>
  <!-- 最外层容器，高度撑满整个浏览器屏幕 -->
  <div class="min-h-screen">
    <!--    顶部导航-->
    <header class="flex items-center h-[74px] bg-gray-100 border-b border-gray-200 px-4">
      顶部导航
    </header>
    <!--    底部内容区-->
    <div class="flex flex-row h-[calc(100vh-74px)]">
      <!--      左侧的编排-->
      <div class="w-2/3 bg-gray-50 h-full">
        左侧的编排
      </div>
      <!--      右侧调试与预览-->
      <div class="flex flex-col w-1/3 bg-white h-full">
        右侧调试与预览
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
