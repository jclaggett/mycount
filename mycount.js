const { Map, List } = require('immutable')

exports.initialState = Map({
  envelopes: Map(),
  transactions: List(),
  operations: List()
})
