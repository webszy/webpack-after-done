module.exports = class done {
  constructor(arg) {
    //如果arg是数组的话
    if(arg&&arg.length>0){
      //TODO:将数组内元素promisify
      this.funcList = arg.filter(e=>typeof e === 'function')
    } else {
      this.funcList = []
      // if(arg.zip){

      // }
    }


  }
  apply(compiler) {
    console.log('compiler: ', compiler);
    compiler.hooks.done.tap('done',() => {
      console.log('compiler done')
      if(this.funcList){
        //TODO: async await
        for(let i =0;i<this.funcList.length;i++){
          console.log(`function ${i} has running`)
          try {
            this.funcList[i]()
          } catch (error) {
            console.log('error: ', error);
          }
          
        }
      }
    })
  }
}
