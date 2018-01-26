# redux-workshop

* `npm install -g ember-cli`
* `ember new ember-redux-workshop`
* `npm remove -g ember-cli`
* `yarn start`
* open [http://localhost:4200/](http://localhost:4200/) to verify things are working
* remove `welcome-page` component from `application.hbs`

# Make a super simple counter with component state

* `yarn ember g component counter-thing`
* `application.hbs`
```hbs
{{counter-thing}}
```
* `counter-thing.js`
```js
import Component from '@ember/component';

export default Component.extend({
  value: 0,
  actions: {
    countUp() {
      this.set('value', this.get('value') + 1)
    },
    countDown() {
      this.set('value', this.get('value') - 1)
    }
  }
});
```
* `counter-thing.hbs`
```hbs
<div>{{value}}</div>
<button type="button" name="button" {{action "countUp"}}>+</button>
<button type="button" name="button" {{action "countDown"}}>-</button>
```

# Move the state to the application controller

# Reduxify

* `yarn ember install ember-redux`
