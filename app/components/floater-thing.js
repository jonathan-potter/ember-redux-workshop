import Component from '@ember/component';
import { connect } from 'ember-redux';
import { resetCounter } from '../actions';

const stateToComputed = (state) => ({
    counterValue: state.counterValue
});

const dispatchToActions = {
    resetCounter
};

export default connect(stateToComputed, dispatchToActions)(Component.extend({}));
