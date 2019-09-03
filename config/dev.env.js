'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  LINK_FACEBOOK: '"https://www.facebook.com/profile.php?id=100010629781265"',
  LINK_GITHUB: '"https://github.com/lecastro"',
  LINK_INSTAGRAM: '"https://www.instagram.com/lecastro1993/"',
  LINK_LINKDIN: '"https://www.linkedin.com/in/lucas-castro-2925a3b6/"',
})
