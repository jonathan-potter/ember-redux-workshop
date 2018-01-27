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
