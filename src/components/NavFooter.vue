<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="../../public/imgs/logo-footer.png" alt="">
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="javascript:;">个人主页<span>|</span></a>
      <a href="javascript:;">vue全栈<span>|</span></a>
      <a href="javascript:;">react全栈<span>|</span></a>
      <a href="javascript:;">微信支付</a>
    </div>
    <div class="copyright">Copyright ©2020 <span class="domain">mi.futurefe.com</span> All Rights Reserved.</div>
  </div>
</template>

<script>
export default {
  name: 'nav-footer'
}
</script>

<style lang="scss" scoped>
  @import '../assets/scss/config.scss';
  .footer {
    height: 234px;
    border-top: 4px solid $colorA;
    background-color: $colorB;
    color: $colorD;
    font-size: $fontI;
    text-align: center;
    .footer-logo {
      margin-top: 46px;
      margin-bottom: 31px;
      img {
        width: 53px;
        height: 36px;
        margin-bottom: 13px;
      }
    }
    .footer-link {
      a {
        display: inline-block;
        color: $colorD;
      }
      span {
        margin: 0 10px;
      }
      margin-bottom: 13px
    }
    .copyright {
      .domain {
        color: $colorA;
      }
    }
  }
</style>