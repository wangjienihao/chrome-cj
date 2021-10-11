import jq from "jquery"
// 消息接收
//req  网站端发送过来的参数  可以通过req 做不同的操作
chrome.runtime.onMessage.addListener(async ( req , self, res) => {
// Popup发送过来的消息
  console.log(req)
  let data = {
    a:'2222',
    html:jq(".comment").html()
  };
  // 
  send(data)

  res(data);
});
//params  从网站获取的结果
function send(params){
  // 向 background 发送消息
  chrome.runtime.sendMessage(params, res => {
    console.log(res)
  });
}

