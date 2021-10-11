# big-learn-framework

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



###  -----------

chrome 分为3个端 
当前网站（content）   当前插件   chrome插件端（background）   

当前插件向 网站发送消息
```
chrome.tabs.sendMessage(tabs[0].id, params, res => {
  console.log('popup 接收消息', res)
  resolve(res);
});
```

content获取网站内容 向chrome插件段发送消息

网站端接收消息
```
chrome.runtime.onMessage.addListener(async ( req , self, res) => {
  console.log(req)
  let data = {
    a:'2222',
    html:jq(".comment").html()
  };
  send(data)
  res(data);
});
```

向chrome插件段发送消息
```
chrome.runtime.sendMessage(params, res => {
    console.log(res)
  });
```


chrome插件端 发送请求记录生成抓取数据
