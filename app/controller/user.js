'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async render() {
    const ctx = this.ctx;
    ctx.helper.success(ctx, 'sadsa');
  }
  async info() {
    const ctx = this.ctx;
    let _all = await ctx.model.User.findAll({});
    ctx.helper.success(ctx,_all)
  }
  async create() {
    const ctx = this.ctx;
    console.log(ctx.request.body);
    ctx.helper.success(ctx,await ctx.model.User.create(ctx.request.body))
  }
  async update() {
    const ctx = this.ctx;
    const id = ctx.params.id
    const user = await ctx.model.User.findByPk(id);
    if (!user) {
      ctx.status = 404;
      return;
    }
    const { name, age } = ctx.request.body;
    if (name && age) {
      await user.update({ name, age });
      ctx.helper.success(ctx, user)
    } else {
      ctx.helper.success(ctx, '请输入名字和年龄')

    }
  }
}

module.exports = UserController;
