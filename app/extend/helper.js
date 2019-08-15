'use strict';
/**
 * 成功返回体
 */
exports.success = (ctx, res = null, message = '请求成功') => {
    ctx.body = {
        time:new Date(),
        code: 200,
        data: res,
        message
    };
    ctx.status = 200;
};
/**
 * 失败返回体
 */
exports.fuil = (ctx, res = null, message = '请求失败') => {
    ctx.body = {
        time:new Date(),
        code: 200,
        data: res,
        message
    };
    ctx.status = 200;
};
