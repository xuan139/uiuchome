<template>  
  <div>
    <div class="user">
      <div class="avatar">
        <img src="/images/web-logo.png" alt="" srcset="">
        <p>
          University of Illinois at Urbana-Champaign 
          <Icon type="md-checkmark-circle" color="#0066CC" />
        </p>
        <span>@uiuc.edu</span>
      </div>
      <div class="list">
        <ul>
          <li v-for="(name, index) in list" :key="index" @click="handleClick(name.link)">
            <span>{{name.name}}</span>
          </li>
        </ul>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'info',
      list: []
    }
  },
  created() {
    let vm = this
    this.$http.get(`/json/mock.json`)
      .then(res=>{
        vm.list = res.data.userNav
      })
      .catch(err=>{
        console.error(err)
      })
  },
  methods: {
    handleClick(id){
      this.$emit('changeClick', id)
    }
  },
}
</script>

<style lang="less" scoped>
.user{
  width: 190px;
  background-color: #E9EAED;
  border-radius: 8px;
  margin-right: 10px;
  .avatar{
    img{
      display: inline-block;
      margin-top: 20px;
      margin-left: 20px;
    }
    p{
      font-size: 18px;
      font-weight: 500;
      margin: 10px 20px;
      color: #333333;
    }
    span{
      font-size: 14px;
      color: #888888;
      margin-left: 20px;
    }
  }
  .list{
    margin-top: 20px;
    padding-bottom: 20px;
    ul{
      li{
        float: left;
        width: 100%;
        height: 30px;
        line-height: 30px;
        color: #333333;
        text-indent: 2em;
        font-size: 16px;
        font-weight: 500;
        cursor: pointer;
      }
      li:hover{
        span{
          color: #0066CC;
        }
      }
    }
    ul::after{
      content: "";
      display: block;
      height: 0;
      clear: both;
      visibility: hidden;
    }
  }
}
</style>

