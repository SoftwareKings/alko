import test from 'ava'
import Actions, { reducer, INITIAL_STATE } from '../../App/Redux/LocationRedux'

test('attempt', t => {
  const state = reducer(INITIAL_STATE, Actions.locationRequest('data'))

  t.true(state.fetching)
})

test('success', t => {
  const state = reducer(INITIAL_STATE, Actions.locationSuccess('hi'))

  t.is(state.payload, 'hi')
})

test('failure', t => {
  const state = reducer(INITIAL_STATE, Actions.locationFailure(99))

  t.false(state.fetching)
  t.true(state.error)
})
