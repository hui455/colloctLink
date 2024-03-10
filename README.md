#获取html文件中<a>标签的htref和conntent
# Get the href and content of tags in the html file
#写法
# Writing
import collectlink from 'collectlink.js'

  
 collectlink(file).then(function(res){
   console.log(res)
   })
