function draw(t){function n(){var n=$this.width();return getRandomInt(145,a-t-n)}function i(){var n=$this.height();return getRandomInt(t,e-t-2*n)}function o(t){$.each($("nav a").not(t),function(){if(overlaps(t,$(this)))return t.css({left:n(),top:i()}),o(t),!1})}var a=$(window).width(),e=$(window).height();$.each($("nav a"),function(){$this=$(this),$this.css({left:n(),top:i()}),o($this)}),$(window).resize(function(){$.each($("nav a"),function(){var n=$(this);if(a=$(window).width(),e=$(window).height(),n.position().left+n.width()>a){var i=a-t-n.width();n.animate({left:i},100,function(){o(n)}),o(n)}if(n.position().top+n.height()>e){var r=e-t-n.height();n.animate({top:r},100,function(){o(n)}),o(n)}})})}function getRandomInt(t,n){return t=Math.ceil(t),n=Math.floor(n),Math.floor(Math.random()*(n-t+1))+t}$(document).ready(function(){draw(50)});var overlaps=function(){function t(t){var n,i,o,a=$(t);return n=a.position(),i=a.width(),o=a.height(),[[n.left,n.left+i],[n.top,n.top+o]]}function n(t,n){var i,o;return i=t[0]<n[0]?t:n,o=t[0]<n[0]?n:t,i[1]>o[0]||i[0]===o[0]}return function(i,o){var a=t(i),e=t(o);return n(a[0],e[0])&&n(a[1],e[1])}}();