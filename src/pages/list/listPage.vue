<template>
  <div>
    <ul>
      <li class="point" @click="goto('starrySky')">利用scss实现星空效果</li>
      <li class="point" @click="goto('cardMagic')">纸牌魔术</li>
      <li class="point" @click="goto('forOfObj')">for of 遍历对象</li>

    </ul>
  </div>
</template>

<script>
export default {
    name: "listPage",
    methods: {
    goto(path) {
      this.$router.push(`/${path}`)
    }
  },
};
</script>

<style lang="scss" scoped>
.point {
  cursor: pointer;
}
</style>
