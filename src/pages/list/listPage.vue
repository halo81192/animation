<template>
  <div>
    <ul>
      <li class="point" @click="goto('starrySky')">利用scss实现星空效果</li>
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
