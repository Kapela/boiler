helpers = (app) ->
  app.dynamicHelpers =
    userGreeting: (req, res) ->
      "Howdy, #{req.session.currentUser}!"
    currentPath: (req, res) ->
      req.path

module.exports = helpers
