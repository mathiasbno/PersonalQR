var express = require('express');
var router = express.Router();

var userManager = require('../model/userMethods');
var articleManager = require('../model/articleMethods');

/* VALID ROUTES TO API */

//users
router.post('/user', createUser);
router.get('/user/:userId', getUser);
router.get('/user', getAllUsers);
router.put('/user/:userId', setUser);
router.delete('/user/:userId', delUser);

//articles
router.post('/article', createArticle);
router.get('/article/:articleId', getArticle);
router.get('/article', getAllarticles);
router.put('/article/:articleId', setAllarticleparams);
router.delete('/article/:articleId', delArticle);

/* END ROUTES */


//pasamos de tener una respuesta sincrona a una asincrona, por lo que los resultados
//se dan dentro de una funcion con "posibilidad" de error
function createUser(req, res) {
  userManager.createUser(function(err, result){
    res.json(result);
  });
}

function getUser(req, res) {
  var userId = req.param('userId');
  userManager.getUser(userId, function(err, result){
    if(result){
      res.json(result);
    }else{
      next(new Error(new Error(userId + 'as user id does not exist')));
    }
  });
}

function getAllUsers(req, res) {
  userManager.getAllUser(function(err, result){
    res.json(result);
  });
}

function setUser(req, res) {
    var userId = req.param('userId');
    var User={
        username:  req.body.username,
        name:  req.body.name,
        mail: req.body.mail,
        password:  req.body.password,
        bdate: req.body.bdate
        };
   userManager.setUser(userId, User, function(err, result){
        if(result === null){
            next(new Error(new Error(userId+'specified id does not exist')));
        }else{
            res.json(result);
        }
    });
}

function delUser(req, res) {
    var userId = req.param('userId');
    
    userManager.delUser(userId, function(err, result){
        if(result === null){
            next(new Error(new Error(userId+'specified id does not exist')));
        }else{
            res.send('User ' + userId + ' removed.');
        }
    });
}

function createArticle(req, res) {
  artcleManager.createUser(function(err, result){
    res.json(result);
  });
}

function getArticle(req, res) {
  var articleId = req.param('articleId');
  artcleManager.getUser(userId, function(err, result){
    if(result){
      res.json(result);
    }else{
      next(new Error(new Error(articleId + 'as user id does not exist')));
    }
  });
}

function getAllArticles(req, res) {
  artcleManager.getAllUser(function(err, result){
    res.json(result);
  });
}

function setArticle(req, res) {
    var articleId = req.param('articleId');
    var Article={
        title : req.body.titulo,
        content : req.body.contenido,
        tags : req.body.t,
        topics : req.body.topicos,
        date : req.body.fecha
        };
   artcleManager.setUser(articleId, Article, function(err, result){
        if(result === null){
            next(new Error(new Error(articleId+'specified id does not exist')));
        }else{
            res.json(result);
        }
    });
}

function delArticle(req, res) {
    var articleId = req.param('articleId');
    
    artcleManager.delUser(userId, function(err, result){
        if(result === null){
            next(new Error(new Error(articleId+'specified id does not exist')));
        }else{
            res.send('User ' + articleId + ' removed.');
        }
    });
}

module.exports = router;
//OLD_________________________________________*/**/
/*
function setAllarticleparams(req, res) {
  var id_autor = req.body.autor;
  var title = req.body.titulo;
  var content = req.body.contenido;
  var tags = req.body.t;
  var topics = req.body.topicos;
  var date = req.body.fecha;

  var article = userModel.setAllarticle(req.param('articleId'), id_autor, title, content, tags, topics, date);
  res.json(article.toJSON());
}
function delArticle(req, res) {
  userModel.delarticle(req.params.articleId);
  //req.params.userId parametro introducido en la URL
  res.send('Article ' + req.params.articleId + ' removed.');
}

function getArticle(req, res) {
  res.json(userModel.getarticle(req.param('articleId')));
}

function getAllusers(req, res) {
  res.json(userModel.getAlluser());
}

function getAllarticles(req, res) {
  res.json(userModel.getAllarticle());
}
 
 module.exports = router;
 
 */


