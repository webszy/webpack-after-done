# webpack-after-done
my first webpack plugin:webpack-after-done,you will call functions when webpack compile done

> basic use

```javascript
const AfterDone = require('webpack-after-done')
const doneCallbacks = [function one(){},function two(){}]
plugins.push(new AfterDone(doneCallbacks))
```

> optional use

current support auto zip after you compile done,just send `zipify` and `zipFileName`

```javascript
const options = {
  funcList:doneCallbacks,
  zipify:true,
  zipFileName:'dist.zip'
}
plugins.push(new AfterDone(options))
```
