import compose = require('koa-compose')
import body = require('./body')
import cross = require('./cross')
import serve = require('./static')
export = compose([body, cross, serve])
