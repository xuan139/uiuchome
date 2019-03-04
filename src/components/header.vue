<template>  
  <div class="header">
    <div class="header-title">
      <div class="warp">
        <div class="contact">
          <span v-if="contact.hotLine">
            <Icon type="ios-call" color="#FF9933"/>
            HotLine: {{contact.hotLine.name}}
          </span>
          <span v-if="contact.Email">
            <Icon type="md-mail" color="#FF9933"/>
            {{contact.Email.name}}
          </span>
        </div>
        <div class="follow-us">
          Follow Us:&nbsp;&nbsp;&nbsp;
          <Icon type="logo-facebook" />
          <Icon type="logo-youtube" />
          <Icon type="logo-twitter" />
          <Icon type="logo-googleplus" />
        </div>
      </div>
    </div>
    <div class="header-nav">
      <div class="warp">
        <img src="/images/web-logo.png" alt="" srcset="">
        <div class="nav-list">
          <ul>
            <li v-for="(item, index) in nav" 
              @mouseover="enterList(item.children, index)"
              @mouseleave="leaveList(item.children, index)"
              :key="index">
              <div>
                <a :href="item.link">{{item.name}}</a><Icon type="ios-arrow-down" v-show="item.children.length !=0"/>
              </div>
              <div class="drop-list" v-show="index === showDrop">
                <ul>
                  <li v-for="(i,k) in item.children">
                    <a :href="i.link">{{i.name}}</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'header',
      showDrop: -1,
      contact: {},
      nav: [],
    }
  },
  created() {
    let vm = this;
    this.$http.get(`/json/mock.json`)
      .then(res=>{
        vm.nav = res.data.headerNav
        vm.contact = res.data.headerContact
      })
      .catch(err=>{
        console.error(err)
      })
  },
  methods: {
    enterList(list, index){
      if (list.length === 0) {
        this.showDrop = -1;
        return
      }
      this.showDrop = index
    },
    leaveList(list, index){
      this.showDrop = -1;
    },
  },  
}
</script>

<style lang="less" scoped>
@import './css/index.less';
.header{
  font-size: 12px;
  color: #333333;
  background-color: #ffffff;
  width: 100%;
  height: 160px;
  .header-title{
    width: 100%;
    height: 60px;
    position: fixed;
    top: 0;
    background-color: #1a263a;
    z-index: 11;
    .warp{
      width: 1200px;
      height: 100%;
      margin: 0 auto;
      .contact{
        color: #fff;
        float: left;
        font-size: 16px;
        line-height: 60px;
        &>span{
          cursor: pointer;
          margin-right: 10px;
          &>i{
            margin-right: 10px;
          }
        }
      }
      .follow-us{
        float: right;
        color: #fff;
        font-size: 16px;
        line-height: 60px;
        &>i{
          margin: 0 6px;
        }
      }
    }
  }
  .header-nav{
    width: 100%;
    height: 100px;
    position: relative;
    padding-top: 60px;
    background-color: #ffffff;
    .warp{
      width: 1200px;
      height: 100%;
      margin: 0 auto;
      &>img{
        display: block;
        float: left;
        margin-top: 14px;
      }
      .nav-list{
        float: right;
        width: auto;
        height: 100px;
        line-height: 100px;
        font-size: 16px;
        ul{
          li{
            list-style: none;
            float: left;
            cursor: pointer;
            margin: 0 10px;
            line-height: 100px;
            z-index: 2;
            position: relative;
            font-weight: 600;
            a{
              color: #333333;
            }
            .drop-list{
              display: block;
              z-index: 3;
              position: absolute;
              min-width: 120px;
              padding: 10px;
              top: 70px;
              left: 0px;
              background-color: #ffffff;
              border-radius: 4px;
              border: 1px solid #eeeeee;
              ul>li{
                list-style: none;
                color: #333333;
                height: 36px;
                line-height: 36px;
                a{
                  color: #333333;
                }
              }
              ul>li:hover{
                color: #1a263a;
              }
            }
          }
        }
      }
    }
  }
}
</style>
