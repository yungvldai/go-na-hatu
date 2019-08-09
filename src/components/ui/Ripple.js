var Ripple = {
  bind: function(el, binding)
  {
    var props = {
      event: 'mousedown',
      transition: 600
    };
    setProps(Object.keys(binding.modifiers), props);
    el.addEventListener(props.event, event => rippler(event, el));
    var bg = binding.value || Ripple.color || 'rgba(0, 0, 0, 0.35)';
    var zIndex = Ripple.zIndex || '9999';

    function rippler(event, el)
    {
      var target = el;
      var targetBorder = parseInt((getComputedStyle(target).borderWidth).replace('px', ''));
      var rect = target.getBoundingClientRect(),
        left = rect.left,
        top = rect.top,
        width = target.offsetWidth,
        height = target.offsetHeight,
        dx = event.clientX - left,
        dy = event.clientY - top,
        maxX = Math.max(dx, width - dx),
        maxY = Math.max(dy, height - dy),
        style = window.getComputedStyle(target),
        radius = Math.sqrt((maxX * maxX) + (maxY * maxY)),
        border = (targetBorder > 0) ? targetBorder : 0;
      var ripple = document.createElement("div"),
        rippleContainer = document.createElement("div");
      rippleContainer.className = 'ripple-container';
      ripple.className = 'ripple';
      ripple.style.marginTop = '0px';
      ripple.style.marginLeft = '0px';
      ripple.style.width = '1px';
      ripple.style.height = '1px';
      ripple.style.transition = 'all ' + props.transition + 'ms cubic-bezier(0.4, 0, 0.2, 1)';
      ripple.style.borderRadius = '50%';
      ripple.style.pointerEvents = 'none';
      ripple.style.position = 'relative';
      ripple.style.zIndex = zIndex;
      ripple.style.backgroundColor = bg;
      rippleContainer.style.position = 'absolute';
      rippleContainer.style.left = 0 - border + 'px';
      rippleContainer.style.top = 0 - border + 'px';
      rippleContainer.style.height = '0';
      rippleContainer.style.width = '0';
      rippleContainer.style.pointerEvents = 'none';
      rippleContainer.style.overflow = 'hidden';
      rippleContainer.appendChild(ripple);
      target.appendChild(rippleContainer);
      ripple.style.marginLeft = dx + "px";
      ripple.style.marginTop = dy + "px";
      rippleContainer.style.width = width + "px";
      rippleContainer.style.height = height + "px";
      rippleContainer.style.borderTopLeftRadius = style.borderTopLeftRadius;
      rippleContainer.style.borderTopRightRadius = style.borderTopRightRadius;
      rippleContainer.style.borderBottomLeftRadius = style.borderBottomLeftRadius;
      rippleContainer.style.borderBottomRightRadius = style.borderBottomRightRadius;
      rippleContainer.style.direction = 'ltr';
      setTimeout(function()
      {
        ripple.style.width = radius * 2 + "px";
        ripple.style.height = radius * 2 + "px";
        ripple.style.marginLeft = dx - radius + "px";
        ripple.style.marginTop = dy - radius + "px";
      }, 0);

      function clearRipple()
      {
        setTimeout(function()
        {
          ripple.style.backgroundColor = "rgba(0, 0, 0, 0)";
        }, 250);
        setTimeout(function()
        {
          rippleContainer.parentNode.removeChild(rippleContainer);
        }, 850);
        el.removeEventListener('mouseup', clearRipple, false);
      }
      if (event.type === 'mousedown')
      {
        el.addEventListener('mouseup', clearRipple, false);
      }
      else
      {
        clearRipple();
      }
    }
  }
};

function setProps(modifiers, props)
{
  modifiers.forEach(function(item)
  {
    if (isNaN(Number(item)))
      props.event = item;
    else
      props.transition = item;
  });
}

export default Ripple;
