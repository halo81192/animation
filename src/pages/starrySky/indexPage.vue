<template>
  <div class="starrySky">
    <div class="layer1"></div>
    <div class="layer2"></div>
    <div class="layer3"></div>
    <div class="title">scss 星空</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@function getShadows($n) {
  $shadows: "#{random(100)}vw #{random(100)}vh #fff";
  @for $i from 2 through $n {
    $shadows: "#{$shadows},#{random(100)}vw #{random(100)}vh #fff";
  }
  @return unquote($shadows);
}

@keyframes moveUp {
  100% {
    transform: translateY(-100vh);
  }
}
.starrySky {
  height: 100%;
  position: relative;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  overflow: hidden;
}
.title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  color: gray;
}
$count: 1000;
$duration: 400s;
@for $i from 1 through 3 {
  $count: floor($count / 2);
  $duration: floor($duration / 2);
  .layer#{$i} {
    $size: #{$i}px;
    position: fixed;
    top: 0;
    left: 0;
    width: $size;
    height: $size;
    background: #fff;
    border-radius: 50%;
    box-shadow: getShadows($count);
    animation: moveUp $duration linear infinite;
    &::after {
      content: "";
      position: fixed;
      left: 0;
      top: 100vh;
      width: $size;
      height: $size;
      border-radius: inherit;
      box-shadow: inherit;
    }
  }
}
</style>
