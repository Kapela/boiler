
routes = (app) ->
  app.get '/login', (req, res) ->
    res.render "#{__dirname}/../views/login/index",
      title: 'Login'
      stylesheet: 'login'

module.exports = routes
