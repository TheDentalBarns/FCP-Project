(function checkBodyAndPaint() {
  if (document.body) {
    var d = document.createElement('div');
    d.id = 'prepaint';
    d.textContent = 'Loading';
    d.style.cssText =
      'position:fixed;top:0;left:0;width:100vw;height:100vh;background:#e8e6e1;color:#333;font-family:system-ui,sans-serif;font-size:1.5rem;display:flex;align-items:center;justify-content:center;z-index:99999;';
    document.body.insertBefore(d, document.body.firstChild);
  } else {
    requestAnimationFrame(checkBodyAndPaint);
  }
})();
