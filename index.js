module.exports = class done {
  constructor(funcList) {
    if(funcList&&funcList.length>0){
      this.funcList = funcList.filter(e=>typeof e === 'function')
    } else {
      this.funcList = null
    }
  }
  apply(compiler) {
    compiler.hooks.done.tap('done',() => {
      console.log('compiler done')
      if(this.funcList){
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
