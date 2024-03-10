export default function collectlink(files){
  return new Promise(function(resolve,rejext){
       let file = files
       let reader = new FileReader()
       reader.readAsText(file,'utf-8')
       reader.onload = function () {
              let dataStr =reader.result;
              const dataStr1 = dataStr.replace('a','A')
              const regA = /(<A(.*?)>)(.|\n)*?(<\/A>)/g
              const regB =/(?<=((<[a-zA-Z-]+?){0,1}>))([\s\S]+)(?=([\s]{0,1}<\/[a-zA-Z-]+(>{0,1})))/g
              const regC =/(?<=<a [^>]*href=['"])[^'"]*/gi
              const dataStr2 = dataStr1.match(regA)
              const arr =[]
              dataStr2.forEach(item =>{
              const content = item.match(regB)
              const url = item.match(regC)
              arr.push({content:content[0],url:url[0]})
              })
               resolve(arr)
            }} 
  )
          
          
          
          }
 
