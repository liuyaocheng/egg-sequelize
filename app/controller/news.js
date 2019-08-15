'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async info() {
    const ctx = this.ctx;
    ctx.helper.success(ctx, await ctx.model.News.findAll({}));
  }
  async create() {
    const ctx = this.ctx
    const _new = ctx.request.body
    if (_new.title && _new.content && _new.uid) {
      ctx.helper.success(ctx, await ctx.model.News.create(_new));
    } else {
      ctx.helper.success(ctx, '错误');
    }
  }
  async findOne() {
    const ctx = this.ctx
    ctx.helper.success(ctx, await ctx.model.News.findByPk(ctx.params.id));
  }
  async findAllByUid() {
    const ctx = this.ctx
    ctx.helper.success(ctx, await ctx.model.News.findAll({ where: {uid: ctx.params.id} }));
  }
}

module.exports = NewsController;
