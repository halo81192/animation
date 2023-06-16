<template>
  <div class="container">
    <div class="box gradient-one">
      <span></span>
      <div class="content">
        <h2>AAAAA</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          labore est iste dicta quo in voluptas, tenetur dolore nulla quas quam
          ad ratione asperiores eius odio. Eos mollitia similique unde.
        </p>
        <a href="#">read more</a>
      </div>
    </div>
    <div class="box gradient-two">
      <span></span>
      <div class="content">
        <h2>AAAAA</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          labore est iste dicta quo in voluptas, tenetur dolore nulla quas quam
          ad ratione asperiores eius odio. Eos mollitia similique unde.
        </p>
        <a href="#">read more</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.gradient-border(@args) {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: @args;
}
.gradient-box(@args) {
  position: relative;
  &::before,
  &::after {
    .gradient-border(@args);
  }
  &::before {
    filter: blur(30px);
  }
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #111;
}

.container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  flex-wrap: wrap;
}

.container .box {
  position: relative;
  width: 320px;
  height: 400px;
  color: #fff;
  background-color: #111;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 30px;
  transition: 0.5s;
}

.container .box:hover {
  transform: translateY(-20px);
}

/* 通过两个伪类来实现渐变 */
/* 这里是为了实现渐变边框 */
// .container .box::after {
//   content: "";
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: linear-gradient(45deg, #ffbc00, #ff0058);
// }

/* 这里是为了实现渐变边框虚化 */
// .container .box::before {
//   content: "";
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: linear-gradient(45deg, #ffbc00, #ff0058);
//   filter: blur(30px);
// }

.container .box span {
  position: absolute;
  top: 6px;
  left: 6px;
  right: 6px;
  bottom: 6px;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 2;
}

/* 使左右两边颜色有一定差距 */
.container .box span::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.1);
}

.container .box .content {
  position: relative;
  z-index: 10;
  padding: 20px 40px;
}

.container .box .content h2,
.container .box .content p {
  color: #fff;
  margin-bottom: 10px;
}

.container .box .content p {
  line-height: 25px;
}

.container .box .content a {
  display: inline-block;
  color: #111;
  background-color: #fff;
  padding: 10px;
  text-decoration: none;
  font-weight: 700;
}
.gradient-one {
  .gradient-box(linear-gradient(45deg, #ffbc00, #ff0058));
}
.gradient-two {
  .gradient-box(linear-gradient(315deg, #03a9f4, #ff0058));
}
</style>
