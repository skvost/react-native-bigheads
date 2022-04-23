
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./react-native-bigheads.cjs.production.min.js')
} else {
  module.exports = require('./react-native-bigheads.cjs.development.js')
}
