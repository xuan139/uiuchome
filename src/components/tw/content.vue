<template>  
  <div class="conent-list">
    <div class="item-list" 
      v-if="newsList.length !== 0" 
      v-for="(news, index) in newsList" 
      :key="index">
      <div class="repeat-title">
        <p><Icon type="md-repeat" />{{news.who_repeat}}</p>
      </div>
      <div class="auth-info">
        <div class="avatar">
          <img :src="news.auth.avatar" alt="" srcset="">
        </div>
        <div class="content">
          <div class="title">
            <span class="name">{{news.auth.name}}</span>
            <Icon type="ios-ribbon" color="#003399"/>
            <span class="time">@{{news.auth.send_time}}</span>
            <Icon type="ios-arrow-down" class="show-text" v-show="textMore" />
            <Icon type="ios-arrow-up" class="show-text" v-show="!textMore" />
          </div>
          <div class="text" v-html="news.content.text">
            <!-- <p>{{news.content.text}}</p> -->
          </div>
          <div class="img" v-if="news.content.img !== ''">
            <img :src="news.content.img" alt="">
          </div>
        </div>
      </div>
      <div class="repeat-bottom">
        <span><Icon type="ios-text-outline" />{{news.content.comment}}</span>
        <span><Icon type="md-repeat" />{{news.content.repeat}}</span>
        <span><Icon type="ios-heart-outline" />{{news.content.like_it}}</span>
        <span><Icon type="md-mail" /></span>
      </div>
    </div>
    <div class="item-noData" v-if="newsList.length == 0">
      暂无数据
    </div>
  </div>
</template>

<script>
export default {
  props: ['selectType'],
  data() {
    return {
      msg: 'content',
      newsList: [],
      textMore: true,
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    getList(){
      let vm = this;
      let keyName = 'type' + vm.selectType
      this.$http.get('/json/article_test.json')
        .then(res=>{
          vm.newsList = res.data.article[keyName] || []
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },
  watch: {
    'selectType':function (val, oldVal) {
      if(val === oldVal){
        return
      } else {
        this.getList()
      }
    }
  },
}
</script>

<style lang="less" scoped>
.conent-list{
  width: 800px;
  .item-list{
    width: 800px;
    background-color: #F4F8FB;
    border-radius: 8px;
    margin: 10px 0;
    padding: 10px 20px;
    color: #777777;
    .repeat-title{
      width: 100%;
      line-height: 30px;
      height: 30px;
      padding-left: 50px;
      font-size: 16px;
    }
    .auth-info{
      position: relative;
      .avatar{
        position:absolute;
        top: 10px;
        left: 0px;
        img{
          border-radius:20px; 
          display: inline-block;
          width: 40px;
          height: 40px;
        }
      }
      .content{
        margin-left: 50px;
        .title{
          .name{
            font-size: 18px;
            font-weight: bold;
            color: #333333;
          }
          i{
            font-size: 18px;
          }
          .time{
            margin-left: 10px;
            font-size: 16px;
            color:#999999;
          }
          .show-text{
            float: right;
          }
        }
        .text{
          font-size: 14px;
          color: #222222;
          p{
            line-height: 24px;
          }
        }
        .img{
          margin: 20px 0 10px 0;
          img{
            display: block;
            width: 500px;
            height: 300px;
          }
        }
      }
    }
    .repeat-bottom{
      width: 100%;
      line-height: 20px;
      height: 20px;
      padding-left: 50px;
      font-size: 16px;
      span{
        margin-left: 10px;
      }
    }
  }
}
</style>

