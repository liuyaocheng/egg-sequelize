'use strict';
module.exports = app => {
  const {router,controller}=app
  router.get('/', controller.user.render);
  router.get('/user', controller.user.info);
  router.get('/user/:id', controller.user.update);
  router.post('/user', controller.user.create);
  router.get('/news', controller.news.info);
  router.get('/news/:id', controller.news.findOne);
  router.get('/news/uid/:id', controller.news.findAllByUid);
  router.post('/news', controller.news.create);
};
