<template>
  <div id="app">
    <el-row>
      <el-button type="primary">主要按钮</el-button>
    </el-row>
  </div>
</template>

<script>
  export default {
    mounted(){
    let params = {
      name:'22222'
    }
     this.sendMessageToContentScript(params).then((res)=>{
       console.log(res)
     })
      // this.$router.push("/")
    },
    methods:{
      // 向网站发送消息（content）  
      // params  当前操作参数
      // res  返回结果 
      sendMessageToContentScript(params) {
        return new Promise((resolve) => {
          chrome.tabs.query({
            active: true,
            currentWindow: true
          }, tabs => {
            chrome.tabs.sendMessage(tabs[0].id, params, res => {
              console.log('popup 接收消息', res)
              resolve(res);
            });
          });
        
        })
      }
    }
  }

</script>

// export function sendMessageToContentScript(params) {
//   return new Promise((resolve) => {
//     chrome.tabs.query({
//       active: true,
//       currentWindow: true
//     }, tabs => {
//       chrome.tabs.sendMessage(tabs[0].id, params, res => {
//         console.log('popup 接收消息', res)
//         resolve(res);
//       });
//     });
//   });
// }
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 600px;
  height: 300px;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
