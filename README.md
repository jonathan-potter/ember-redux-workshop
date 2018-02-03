# redux-workshop

* `npm install -g ember-cli`
* `ember new ember-redux-workshop`
* `npm remove -g ember-cli`
* `yarn start`
* open [http://localhost:4200/](http://localhost:4200/) to verify things are working
* remove `welcome-page` component from `application.hbs`

# Make a super simple counter with component state

The first thing we're going to do is make a super simple component with state and actions

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

# Move the state to the application controller and use fancy closure actions

now we're going to move the state from the component up to the application controller so we can have more sharable state! Of course we know that this way of doing things still has the problem that sometimes state must be passed through multiple component layers. This is everyones favorite activity... wiring!

* `yarn ember g controller application`
* `controllers/application.js`
```js
import Controller from '@ember/controller';

export default Controller.extend({
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
* `application.hbs`
```hbs
{{counter-thing value=value countUp=(action "countUp") countDown=(action "countDown")}}
```
* `counter-thing.js`
```js
import Component from '@ember/component';

export default Component.extend({
});
```
* `counter-thing.hbs`
```hbs
<div>{{value}}</div>
<button type="button" name="button" {{action (action countUp)}}>+</button>
<button type="button" name="button" {{action (action countDown)}}>-</button>
```

# Reduxify

Finally, we're going to pull the state and actions out of the components and controllers entirely and place them into redux store and redux actions. This means that the state and actions will be accessible in any component where they might be necessary without ANY wiring :)

* `yarn ember install ember-redux`
* `mkdir app/actions`
* `touch app/actions/index.js`
* `mkdir app/reducers`
* `touch app/reducers/index.js`
* `touch app/reducers/counter-value.js`
* `counter-value.js`
```js
export default function counterValue(state = 0, action) {
    switch (action.type) {
        case 'COUNT_UP': {
            return state + 1;
        }
        case 'COUNT_DOWN': {
            return state - 1;
        }
        default: {
            return state;
        }
    }
}
```
* `reducers/index.js`
```js
import { combineReducers } from 'redux';
import counterValue from './counter-value';

export default combineReducers({
    counterValue
});
```
* `actions/index.js`
```js
export const countUp = () => (dispatch, getState) => {
    dispatch({
        type: 'COUNT_UP'
    });
};

export const countDown = () => (dispatch, getState) => {
    dispatch({
        type: 'COUNT_DOWN'
    });
};
```
* `controllers/application.js`
```js
import Controller from '@ember/controller';

export default Controller.extend({
});
```
* `application.hbs`
```hbs
{{counter-thing}}
```
* `counter-thing.js`
```js
import Component from '@ember/component';
import { connect } from 'ember-redux';
import { countUp, countDown } from '../actions';

const stateToComputed = (state) => ({
    counterValue: state.counterValue
});

const dispatchToActions = {
    countUp,
    countDown
};

export default connect(stateToComputed, dispatchToActions)(Component.extend({}));
```
* `counter-thing.hbs`
```hbs
<div>{{counterValue}}</div>
<button type="button" name="button" {{action "countUp"}}>+</button>
<button type="button" name="button" {{action "countDown"}}>-</button>
```
# Exercise

Add a new component called `floater-thing`. `floater-thing` should be a 100px by 100px div in the middle of the page which uses `counterValue` from the `redux` `state` as an added pixel offset from center in the `y` direction. Additionally, clicking on the `floater-thing` div should reset the counter.

* make a new component called `floater-thing`
* use `counterValue` state
* create a new action that will reset your `counterValue`
* modify your reducers as necessary
