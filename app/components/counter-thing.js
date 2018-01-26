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
