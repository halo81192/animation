<template>
  <div>
    <img
      ref="card"
      @mousedown="onmouseDown"
      @mouseup="onmouseUp"
      @mousemove="onmouseMove"
      class="card"
      src="../../assets/card.png"
      alt=""
    />
  </div>
</template>

<script>
export default {
  name: "cardMagic",
  data() {
    return {
      position: {
        x: 0,
        y: 0,
        offsetLeft: 0,
        offsetTop: 0,
        isMove: false,
      },
    };
  },
  methods: {
    onmouseDown(e) {
      this.position.offsetLeft = e.offsetX;
      this.position.offsetTop = e.offsetY;
      this.position.isMove = true;
      //   let x = e.pageX - this.$refs.card.offsetLeft;
      //   let y = e.pageY - this.$refs.card.offsetTop;
      //   const cx = e.pageX - x;
      //   const cy = e.pageY - y;
      //   this.$refs.card.style.left = cx + "px";
      //   this.$refs.card.style.top = cy + "px";
      //   window.onmousemove = (e1) => {

      //   };
      //   window.onmouseup = () => {
      //     console.log(1111);
      //     window.onmousemove = null;
      //     window.onmouseup = null;
      //   };
    },
    onmouseMove(e) {
      if (!this.position.isMove) {
        return false;
      }
      const cx = e.pageX - this.position.offsetLeft;
      const cy = e.pageY - this.position.offsetTop;
      this.$refs.card.style.left = cx + "px";
      this.$refs.card.style.top = cy + "px";
    },
    onmouseUp() {
      this.position.isMove = false;
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  position: absolute;
  top: 0;
  left: 0;
  width: 500px;
  height: auto;
}
</style>
