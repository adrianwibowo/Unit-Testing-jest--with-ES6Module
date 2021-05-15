const chunkArray = (arr, len) => {
    const chunkedArr = []
    
    arr.forEach(element => {
       const last = chunkedArr[chunkedArr.length -1]
       console.log("INI ",element, chunkedArr, chunkedArr[chunkedArr.length -1] ,"INI LAST",last)

       if(!last || last.length === len) {
           chunkedArr.push([element])
          
       }
       else {
           console.log(element)
           last.push(element)
         
       }
    });
}


module.exports = chunkArray



