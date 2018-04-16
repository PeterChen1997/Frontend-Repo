const rubCookies = (function (document) {
  let _autoToJson = true
  let _autoDecode = true
  let _autoEncode = true
  
  let _cookieObjArr

  function _syncCookie() {
    _cookieObjArr = _splitCookies(document.cookie)
  }

  function _splitCookies(cookie) {
    return cookie.split(/;\s*/)
      .map(_autoDecode ? _decode : (part) => part)
      .map(part => part.split("="))
      .reduce((parts, part) => {
        if (!parts[part[0]] && part[0]) {
          parts[part[0]] = part.splice(1).join("=")
        }
        return parts
      }, {})
  }

  function _decode(val) {
    console.log(val)
    return decodeURIComponent(val)
  }

  function _encode(val) {
    return encodeURIComponent(val)
  }

  return {
    getAll: function() {
      _syncCookie()
      return _cookieObjArr
    },

    getItem: function (key) {
      _syncCookie()
      return _autoToJson ? JSON.parse(_cookieObjArr[key]) : _cookieObjArr[key]
    },

    setItem: function (data) {
      for(let key in data) {
        let val = data[key]
        let toJson = _autoToJson ? JSON.stringify(val) : val
        let encodeData = _autoEncode ? _encode(toJson) : toJson
        let res = _encode(key) + '=' + encodeData

        document.cookie = res
      }
      return 'set success'
    },

    clear: function () {
      _syncCookie()
      for(let part in _cookieObjArr) {
        document.cookie = part + '=0;expires=' + new Date(0).toUTCString()
      }
      return 'clear success'
    }
  }

})(document)

// 挂载
if (typeof window === "object" && typeof window.document === "object") {
  window.rubCookies = window._c = rubCookies
}