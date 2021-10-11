// 接收从 content script 发送过来的消息
// content script 在每打开一个标签页都会向此处发送消息
chrome.runtime.onMessage.addListener((req, sender, res) => {
  console.log(req)
  res({res:"woshi contentzhi"}

  )

});