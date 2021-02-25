<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MIUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;" v-if="username">{{ username }}</a>
          <a href="javascript:;" v-else @click="login">登录</a>
          <a href="javascript:;" v-if="username">我的订单</a>
          <a href="javascript:;" class="my-cart" @click="goToCart"><span class="icon-cart"></span>购物车{{ cartCount }}</a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#index/"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li class="product" v-for="(item, index) in phoneList" :key="index">
                  <a :href="'/#/product/' + item.id" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="item.mainImage" :alt="item.subtitle">
                    </div>
                    <div class="pro-name">{{ item.name }}</div>
                    <div class="pro-price">{{ item.price | currency }}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>RedMi红米</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-3-1.jpg'" alt="">
                    </div>
                    <div class="pro-name">小米11</div>
                    <div class="pro-price">3999</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-3-2.jpg'" alt="">
                    </div>
                    <div class="pro-name">小米11</div>
                    <div class="pro-price">3999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-3-3.png'" alt="">
                    </div>
                    <div class="pro-name">小米11</div>
                    <div class="pro-price">3999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-3-4.jpg'" alt="">
                    </div>
                    <div class="pro-name">小米11</div>
                    <div class="pro-price">3999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-3-5.jpg'" alt="">
                    </div>
                    <div class="pro-name">小米11</div>
                    <div class="pro-price">3999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="'/imgs/nav-img/nav-3-6.png'" alt="">
                    </div>
                    <div class="pro-name">小米11</div>
                    <div class="pro-price">3999元</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword">
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'nav-header',
  data() {
    return {
      phoneList: []
    }
  },
  filters: {
    currency(val) {
      if (!val) return '0.00'
      return val + '元起'
    }
  },
  computed: {
    // username() {
    //   return this.$store.state.username
    // },
    // cartCount() {
    //   return this.$store.state.cartCount
    // },
    ...mapState(['username', 'cartCount'])
  },
  mounted() {
    this.getProductList()
  },
  methods: {
    login() {
      this.$router.push('/login')
    },
    getProductList() {
      this.axios.get('/products', {
        params: {
          categoryId: "100012",
          pageSize: 6
        }
      }).then(response => {
        this.phoneList = response.list
      })
    },
    goToCart() {
      this.$router.push('/cart')
    }
  }
}
</script>

<style lang="scss">
  @import '../assets/scss/base.scss';
  @import '../assets/scss/config.scss';
  @import '../assets/scss/mixin.scss';
  .header {
    .nav-topbar {
      height: 39px;
      line-height: 39px;
      background-color: #333;
      color: #b0b0b0;
      .container {
        @include flex();
        a {
          display: inline-block;
          color: #b0b0b0;
          margin-right: 17px;
        }
        .my-cart {
          width: 110px;
          background-color: #ff6600;
          text-align: center;
          color: #ffffff;
          margin-right: 0;
          .icon-cart {
            @include bgImg(16px,12px,'../../public/imgs/icon-cart-checked.png');
            margin-right: 4px;
          }
        }
      }
    }
    .nav-header {
      .container {
        position: relative;
        height: 112px;
        @include flex();
        .header-menu {
          display: inline-block;
          width: 643px;
          padding-left: 209px;
          .item-menu {
            display: inline-block;
            color: $colorB;
            font-weight: bold;
            font-size: 16px;
            line-height: 112px;
            margin-right: 20px;
            &:hover {
              color: $colorA;
              .children {
                height: 220px;
                opacity: 1;
              }
            }
            span {
              cursor: pointer;
            }
            .children {
              width: 1226px;
              height: 0;
              position: absolute;
              top: 112px;
              left: 0;
              border-top: 1px solid #e5e5e5;
              box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
              z-index: 10;
              opacity: 0;
              overflow: hidden;
              transition: height .5s;
              background-color: #ffffff;
              .product {
                float: left;
                width: 16.6%;
                height: 220px;
                font-size: 12px;
                line-height: 12px;
                text-align: center;
                position: relative;
                a {
                  display: inline-block;
                  
                }
                img {
                  width: auto;
                  height: 110px;
                  margin-top: 26px;
                }
                .pro-img {
                  height: 137px;
                }
                .pro-name {
                  margin-top: 19px;
                  margin-bottom: 8px;
                  color: $colorB;
                  font-weight: bold;
                }
                .pro-price {
                  color: $colorA;
                }
                &:before {
                  width: 1px;
                  height: 100px;
                  content: '';
                  position: absolute;
                  top: 28px;
                  right: 0;
                  border-left: 1px solid $colorF;
                }
                &:last-child:before {
                  border: none;
                }
              }
            }
          }
        }
        .header-search {
          width: 319px;
          .wrapper {
            height: 50px;
            border: 1px solid #e0e0e0;
            display: flex;
            align-items: center;
            input {
              width: 264px;
              height: 50px;
              padding-left: 14px;
              border: none;
              box-sizing: border-box;
              border-right: 1px solid #e0e0e0;
            }
            a {
              @include bgImg(18px,18px,'../../public/imgs/icon-search.png');
              margin-left: 17px;
            }
          }
        }
      }
    }
  }
</style>
