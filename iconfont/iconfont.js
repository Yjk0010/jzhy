;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-zuo-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M368.416 511.968c-0.992 13.184 3.264 26.656 13.312 36.928l192.128 192.416c18.688 18.592 48.896 18.624 67.68 0 18.688-18.656 18.592-48.992 0.128-67.648l-161.792-161.728 161.824-161.6c18.496-18.752 18.784-48.832 0.064-67.584-18.88-18.688-48.992-18.624-67.744 0l-192.288 192.16C371.584 485.088 367.392 498.56 368.416 511.968L368.416 511.968zM550.624 512.224"  ></path>' +
    '' +
    '<path d="M512 65.088c246.4 0 446.88 200.512 446.88 446.912S758.432 958.912 512 958.912c-246.432 0-446.944-200.512-446.944-446.912S265.568 65.088 512 65.088zM512 885.76c206.08 0 373.76-167.648 373.76-373.76S718.112 138.24 512 138.24 138.24 305.92 138.24 512 305.92 885.76 512 885.76z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-you" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M515.134899 63.105247c-248.311389 0-449.623347 201.311958-449.623347 449.610044s201.311958 449.611068 449.623347 449.611068c248.28376 0 449.596741-201.314005 449.596741-449.611068S763.418658 63.105247 515.134899 63.105247zM515.134899 878.023324c-201.760167 0-365.321336-163.56117-365.321336-365.308033 0-201.744817 163.56117-365.30701 365.321336-365.30701 201.733561 0 365.29473 163.56117 365.29473 365.30701C880.429629 714.462155 716.868459 878.023324 515.134899 878.023324z"  ></path>' +
    '' +
    '<path d="M377.023354 683.730223l79.482239 79.467913 250.498194-250.483868L456.50457 262.2304l-79.482239 79.45461 171.015955 171.030281L377.023354 683.730223z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xia" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M150.493623 150.418286A506.148571 506.148571 0 0 0 0.002194 512c0 136.301714 53.138286 265.581714 149.869715 362.24 199.789714 199.68 524.470857 199.68 724.260571 0A508.562286 508.562286 0 0 0 1024.002194 512c0-136.96-53.138286-265.581714-149.869714-362.24C778.095909 53.101714 649.36448 0 512.367909 0c-137.069714 0-265.142857 53.101714-361.837715 150.418286zM802.415909 222.72a406.930286 406.930286 0 0 1 119.771428 289.938286 409.6 409.6 0 0 1-119.771428 289.901714c-160.109714 160-420.096 160-579.547429 0C145.373623 724.48 102.475337 621.458286 102.475337 512a409.6 409.6 0 0 1 119.734857-289.938286C299.083337 144.64 402.799909 102.4 512.367909 102.4c109.494857 0 212.589714 42.861714 290.084571 120.32zM271.545051 399.36a51.346286 51.346286 0 0 0 0 72.338286l204.909715 204.8c4.498286 4.461714 9.618286 7.68 15.36 10.24 0.658286 0 0.658286 0.621714 1.28 0.621714 1.938286 0.621714 4.498286 1.28 7.058285 1.901714 0.658286 0 1.938286 0.658286 2.56 0.658286 6.4 1.28 13.458286 1.28 19.858286 0 0.621714 0 1.901714-0.658286 2.56-0.658286 2.56-0.621714 4.498286-1.28 7.058286-1.901714 0.621714 0 0.621714-0.621714 1.28-0.621714 5.741714-2.56 10.861714-5.778286 15.36-10.24l204.909714-204.8c10.24-10.24 14.738286-23.04 14.738286-36.498286s-5.12-26.221714-14.738286-36.461714a51.419429 51.419429 0 0 0-72.338286 0l-169.069714 168.96-168.448-168.338286a50.285714 50.285714 0 0 0-72.338286 0z" fill="#4B4B4B" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)