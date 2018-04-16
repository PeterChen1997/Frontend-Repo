/**
 * 
 * 
 * @param {any} data 
 * @param {any} opt 
 * @returns 
 */
var cookies = function (data, opt) {

  /**
   * 若obj中不包含defs中的属性，则写入
   * 
   * @param {object || function} obj 
   * @param {object} defs 
   * @returns 
   */
  function defaults(obj, defs) {
    obj = obj || {};
    for (var key in defs) {
      if (obj[key] === undefined) {
        obj[key] = defs[key];
      }
    }
    return obj;
  }

  // 将默认值写入工具函数自身
  defaults(cookies, {
    expires: 365 * 24 * 3600,
    path: '/',
    secure: window.location.protocol === 'https:',

    // Advanced
    nulltoremove: true,
    autojson: true,
    autoencode: true,
    encode: function (val) {
      return encodeURIComponent(val);
    },
    decode: function (val) {
      console.log(decodeURIComponent(val))
      return decodeURIComponent(val);
    },
    fallback: false
  });

  // 将默认设置补充进传入设置
  opt = defaults(opt, cookies);

  /**
   * 接收Date：返回指定Date 的UTC String
   * 接收Number：返回time秒后失效的UTC String
   * @param {Date || any} time 
   * @returns {String} UTC String:"Mon, 16 Apr 2018 06:41:27 GMT"
   */
  function expires(time) {
    var expires = time;
    if (!(expires instanceof Date)) {
      expires = new Date();
      expires.setTime(expires.getTime() + (time * 1000));
    }
    return expires.toUTCString();
  }

  // 接收data内容为string
  if (typeof data === 'string') {
    // 取出对应cookie的value
    var value = document.cookie.split(/;\s*/)
      // 将cookie划分为数组
      .map(opt.autoencode ? opt.decode : function (d) {
        // 遍历解码
        return d;
      })
      .map(function (part) {
        // 进一步划分 数组
        return part.split('=');
      })
      .reduce(function (parts, part) {
        // 转二维数组为对象数组
        // 第一个做key 其他为value
        parts[part[0]] = part.splice(1).join('=');
        return parts;
      }, {})[data];

    // autojson为false 直接返回value
    if (!opt.autojson) return value;

    // 否则进行JSON.parse的解析，获得对象
    var real;
    try {
      real = JSON.parse(value);
    } catch (e) {
      // 出错则不转化
      real = value;
    }
    // fallback？？？
    if (typeof real === 'undefined' && opt.fallback) real = opt.fallback(data, opt);
    // 返回对象real
    return real;
  }

  // 设置传入的cookie data
  for (var key in data) {
    var val = data[key];
    var expired = typeof val === 'undefined' || (opt.nulltoremove && val === null);
    var str = opt.autojson ? JSON.stringify(val) : val; 
    var encoded = opt.autoencode ? opt.encode(str) : str;
    if (expired) encoded = '';
    var res = opt.encode(key) + '=' + encoded +
      (opt.expires ? (';expires=' + expires(expired ? -10000 : opt.expires)) : '') +
      ';path=' + opt.path +
      (opt.domain ? (';domain=' + opt.domain) : '') +
      (opt.secure ? ';secure' : '');
    if (opt.test) opt.test(res);

    // 自动叠加
    document.cookie = res;
  }

  // 进行函数柯里化
  return cookies;
};