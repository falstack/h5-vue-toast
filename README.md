# h5-vue-toast

```sh
yarn add h5-vue-toast
// or
npm i h5-vue-toast
```

```javascript
// client-entry.js
import Toast from 'h5-vue-toast'

Vue.prototype.$toast = new Toast()
/**
* options<Object>：
* - duration<Number>：toast 持续的时间（loading 是一直存在），默认 1500（ms）
* - timeout<Number>：then 调用的间隔时间（loading 没有 then），默认 1500（ms）
*/

this.$toast.info('string').then()

this.$toast.error('string').then()

this.$toast.success('string').then()

this.$toast.loading('string')

this.$toast.stop()
```
