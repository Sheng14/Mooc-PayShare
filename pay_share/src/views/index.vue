<template>
  <div class="index">
    <img src="./../assets/img/header.png" class="header" alt="">
    <div class="nickname"></div>
    <div class="btn-group">
      <button class="btn">分享</button>
      <button class="btn btn-primary">充值</button>
      <button class="btn">活动详情</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style>
  .index{
    background-color:#FFC93A;
    height:100vh;
  }
  .btn-group{
    padding-top:.34rem;
    text-align:center;
  }
  .nickname{
    position:absolute;
    top:6rem;
    left: 50%;
    transform: 
    translateX(-50%);
    font-size:18px;
  }
</style>