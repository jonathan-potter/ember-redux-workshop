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
