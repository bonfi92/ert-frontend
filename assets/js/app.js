!function(){var e={717:function(){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}var t=function(t,n){var r=new Event("outOfCanvas"),s=document.querySelector("#"+t+" > .particles-js-canvas-el"),o=0;this.pJS={canvas:{el:s,w:s.offsetWidth,h:s.offsetHeight},particles:{number:{value:400,density:{enable:!0,value_area:800}},color:{value:"#fff"},shape:{type:"circle",stroke:{width:0,color:"#ff0000"},polygon:{nb_sides:5},image:{src:"",width:100,height:100}},opacity:{value:1,random:!1,anim:{enable:!1,speed:2,opacity_min:0,sync:!1}},size:{value:20,random:!1,anim:{enable:!1,speed:20,size_min:0,sync:!1}},line_linked:{enable:!0,distance:100,color:"#fff",opacity:1,width:1},move:{enable:!0,speed:2,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:3e3,rotateY:3e3}},array:[]},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:100,line_linked:{opacity:1}},bubble:{distance:200,size:80,duration:.4},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}},mouse:{}},retina_detect:!1,fn:{interact:{},modes:{},vendors:{}},tmp:{}};var c=this.pJS;n&&Object.deepExtend(c,n),c.tmp.obj={size_value:c.particles.size.value,size_anim_speed:c.particles.size.anim.speed,move_speed:c.particles.move.speed,line_linked_distance:c.particles.line_linked.distance,line_linked_width:c.particles.line_linked.width,mode_grab_distance:c.interactivity.modes.grab.distance,mode_bubble_distance:c.interactivity.modes.bubble.distance,mode_bubble_size:c.interactivity.modes.bubble.size,mode_repulse_distance:c.interactivity.modes.repulse.distance},c.fn.retinaInit=function(){c.retina_detect&&window.devicePixelRatio>1?(c.canvas.pxratio=window.devicePixelRatio,c.tmp.retina=!0):(c.canvas.pxratio=1,c.tmp.retina=!1),c.canvas.w=c.canvas.el.offsetWidth*c.canvas.pxratio,c.canvas.h=c.canvas.el.offsetHeight*c.canvas.pxratio,c.particles.size.value=c.tmp.obj.size_value*c.canvas.pxratio,c.particles.size.anim.speed=c.tmp.obj.size_anim_speed*c.canvas.pxratio,c.particles.move.speed=c.tmp.obj.move_speed*c.canvas.pxratio,c.particles.line_linked.distance=c.tmp.obj.line_linked_distance*c.canvas.pxratio,c.interactivity.modes.grab.distance=c.tmp.obj.mode_grab_distance*c.canvas.pxratio,c.interactivity.modes.bubble.distance=c.tmp.obj.mode_bubble_distance*c.canvas.pxratio,c.particles.line_linked.width=c.tmp.obj.line_linked_width*c.canvas.pxratio,c.interactivity.modes.bubble.size=c.tmp.obj.mode_bubble_size*c.canvas.pxratio,c.interactivity.modes.repulse.distance=c.tmp.obj.mode_repulse_distance*c.canvas.pxratio},c.fn.canvasInit=function(){c.canvas.ctx=c.canvas.el.getContext("2d")},c.fn.canvasSize=function(){c.canvas.el.width=c.canvas.w,c.canvas.el.height=c.canvas.h,c&&c.interactivity.events.resize&&window.addEventListener("resize",(function(){c.canvas.w=c.canvas.el.offsetWidth,c.canvas.h=c.canvas.el.offsetHeight,c.tmp.retina&&(c.canvas.w*=c.canvas.pxratio,c.canvas.h*=c.canvas.pxratio),c.canvas.el.width=c.canvas.w,c.canvas.el.height=c.canvas.h,c.particles.move.enable||(c.fn.particlesEmpty(),c.fn.particlesCreate(),c.fn.particlesDraw(),c.fn.vendors.densityAutoParticles()),c.fn.vendors.densityAutoParticles()}))},c.fn.canvasPaint=function(){c.canvas.ctx.fillRect(0,0,c.canvas.w,c.canvas.h)},c.fn.canvasClear=function(){c.canvas.ctx.clearRect(0,0,c.canvas.w,c.canvas.h)},c.fn.particle=function(t,i,n){if(this.id=o++,this.radius=(c.particles.size.random?Math.random():1)*c.particles.size.value,c.particles.size.anim.enable&&(this.size_status=!1,this.vs=c.particles.size.anim.speed/100,c.particles.size.anim.sync||(this.vs=this.vs*Math.random())),this.x=n?n.x:Math.random()*c.canvas.w,this.y=n?n.y:Math.random()*c.canvas.h,this.x>c.canvas.w-2*this.radius?this.x=this.x-this.radius:this.x<2*this.radius&&(this.x=this.x+this.radius),this.y>c.canvas.h-2*this.radius?this.y=this.y-this.radius:this.y<2*this.radius&&(this.y=this.y+this.radius),c.particles.move.bounce&&c.fn.vendors.checkOverlap(this,n),this.color={},"object"==e(t.value))if(t.value instanceof Array){var r=t.value[Math.floor(Math.random()*c.particles.color.value.length)];this.color.rgb=a(r)}else null!=t.value.r&&null!=t.value.g&&null!=t.value.b&&(this.color.rgb={r:t.value.r,g:t.value.g,b:t.value.b}),null!=t.value.h&&null!=t.value.s&&null!=t.value.l&&(this.color.hsl={h:t.value.h,s:t.value.s,l:t.value.l});else"random"==t.value?this.color.rgb={r:Math.floor(256*Math.random())+0,g:Math.floor(256*Math.random())+0,b:Math.floor(256*Math.random())+0}:"string"==typeof t.value&&(this.color=t,this.color.rgb=a(this.color.value));this.opacity=(c.particles.opacity.random?Math.random():1)*c.particles.opacity.value,c.particles.opacity.anim.enable&&(this.opacity_status=!1,this.vo=c.particles.opacity.anim.speed/100,c.particles.opacity.anim.sync||(this.vo=this.vo*Math.random()));var s={};switch(c.particles.move.direction){case"top":s={x:0,y:-1};break;case"top-right":s={x:.5,y:-.5};break;case"right":s={x:1,y:-0};break;case"bottom-right":s={x:.5,y:.5};break;case"bottom":s={x:0,y:1};break;case"bottom-left":s={x:-.5,y:1};break;case"left":s={x:-1,y:0};break;case"top-left":s={x:-.5,y:-.5};break;default:s={x:0,y:0}}c.particles.move.straight?(this.vx=s.x,this.vy=s.y,c.particles.move.random&&(this.vx=this.vx*Math.random(),this.vy=this.vy*Math.random())):(this.vx=s.x+Math.random()-.5,this.vy=s.y+Math.random()-.5),this.vx_i=this.vx,this.vy_i=this.vy;var l=c.particles.shape.type;if("object"==e(l)){if(l instanceof Array){var u=l[Math.floor(Math.random()*l.length)];this.shape=u}}else this.shape=l;if("image"==this.shape){var d=c.particles.shape;this.img={src:d.image.src,ratio:d.image.width/d.image.height},this.img.ratio||(this.img.ratio=1),"svg"==c.tmp.img_type&&null!=c.tmp.source_svg&&(c.fn.vendors.createSvgImg(this),c.tmp.pushing&&(this.img.loaded=!1))}},c.fn.particle.prototype.draw=function(){var e=this;if(null!=e.radius_bubble)var t=e.radius_bubble;else t=e.radius;if(null!=e.opacity_bubble)var a=e.opacity_bubble;else a=e.opacity;if(e.color.rgb)var i="rgba("+e.color.rgb.r+","+e.color.rgb.g+","+e.color.rgb.b+","+a+")";else i="hsla("+e.color.hsl.h+","+e.color.hsl.s+"%,"+e.color.hsl.l+"%,"+a+")";switch(c.canvas.ctx.fillStyle=i,c.canvas.ctx.beginPath(),e.shape){case"circle":c.canvas.ctx.arc(e.x,e.y,t,0,2*Math.PI,!1);break;case"edge":c.canvas.ctx.rect(e.x-t,e.y-t,2*t,2*t);break;case"triangle":c.fn.vendors.drawShape(c.canvas.ctx,e.x-t,e.y+t/1.66,2*t,3,2);break;case"polygon":c.fn.vendors.drawShape(c.canvas.ctx,e.x-t/(c.particles.shape.polygon.nb_sides/3.5),e.y-t/.76,2.66*t/(c.particles.shape.polygon.nb_sides/3),c.particles.shape.polygon.nb_sides,1);break;case"star":c.fn.vendors.drawShape(c.canvas.ctx,e.x-2*t/(c.particles.shape.polygon.nb_sides/4),e.y-t/1.52,2*t*2.66/(c.particles.shape.polygon.nb_sides/3),c.particles.shape.polygon.nb_sides,2);break;case"image":if("svg"==c.tmp.img_type)var n=e.img.obj;else n=c.tmp.img_obj;n&&c.canvas.ctx.drawImage(n,e.x-t,e.y-t,2*t,2*t/e.img.ratio)}c.canvas.ctx.closePath(),c.particles.shape.stroke.width>0&&(c.canvas.ctx.strokeStyle=c.particles.shape.stroke.color,c.canvas.ctx.lineWidth=c.particles.shape.stroke.width,c.canvas.ctx.stroke()),c.canvas.ctx.fill()},c.fn.particlesCreate=function(){for(var e=0;e<c.particles.number.value;e++)c.particles.array.push(new c.fn.particle(c.particles.color,c.particles.opacity.value))},c.fn.particlesUpdate=function(){for(var e=0;e<c.particles.array.length;e++){var t=c.particles.array[e];if(c.particles.move.enable){var a=c.particles.move.speed/2;t.x+=t.vx*a,t.y+=t.vy*a}if(c.particles.opacity.anim.enable&&(1==t.opacity_status?(t.opacity>=c.particles.opacity.value&&(t.opacity_status=!1),t.opacity+=t.vo):(t.opacity<=c.particles.opacity.anim.opacity_min&&(t.opacity_status=!0),t.opacity-=t.vo),t.opacity<0&&(t.opacity=0)),c.particles.size.anim.enable&&(1==t.size_status?(t.radius>=c.particles.size.value&&(t.size_status=!1),t.radius+=t.vs):(t.radius<=c.particles.size.anim.size_min&&(t.size_status=!0),t.radius-=t.vs),t.radius<0&&(t.radius=0)),"bounce"==c.particles.move.out_mode)var n={x_left:t.radius,x_right:c.canvas.w,y_top:t.radius,y_bottom:c.canvas.h};else n={x_left:-t.radius,x_right:c.canvas.w+t.radius,y_top:-t.radius,y_bottom:c.canvas.h+t.radius};if(t.x-t.radius>c.canvas.w?(t.x=n.x_left,t.y=Math.random()*c.canvas.h):t.x+t.radius<0&&(t.x=n.x_right,t.y=Math.random()*c.canvas.h),t.y-t.radius>c.canvas.h?(t.y=n.y_top,t.x=Math.random()*c.canvas.w):t.y+t.radius<0&&(t.y=n.y_bottom,t.x=Math.random()*c.canvas.w),"bounce"===c.particles.move.out_mode&&((t.x+t.radius>c.canvas.w||t.x-t.radius<0)&&(t.vx=-t.vx),(t.y+t.radius>c.canvas.h||t.y-t.radius<0)&&(t.vy=-t.vy)),i("grab",c.interactivity.events.onhover.mode)&&c.fn.modes.grabParticle(t),(i("bubble",c.interactivity.events.onhover.mode)||i("bubble",c.interactivity.events.onclick.mode))&&c.fn.modes.bubbleParticle(t),(i("repulse",c.interactivity.events.onhover.mode)||i("repulse",c.interactivity.events.onclick.mode))&&c.fn.modes.repulseParticle(t),c.particles.line_linked.enable||c.particles.move.attract.enable)for(var r=e+1;r<c.particles.array.length;r++){var s=c.particles.array[r];c.particles.line_linked.enable&&c.fn.interact.linkParticles(t,s),c.particles.move.attract.enable&&c.fn.interact.attractParticles(t,s),c.particles.move.bounce&&c.fn.interact.bounceParticles(t,s)}}},c.fn.particlesDraw=function(){c.canvas.ctx.clearRect(0,0,c.canvas.w,c.canvas.h),c.fn.particlesUpdate();for(var e=0;e<c.particles.array.length;e++)c.particles.array[e].draw()},c.fn.particlesEmpty=function(){c.particles.array=[]},c.fn.particlesRefresh=function(){cancelRequestAnimFrame(c.fn.checkAnimFrame),cancelRequestAnimFrame(c.fn.drawAnimFrame),c.tmp.source_svg=void 0,c.tmp.img_obj=void 0,c.tmp.count_svg=0,c.fn.particlesEmpty(),c.fn.canvasClear(),c.fn.vendors.start()},c.fn.interact.linkParticles=function(e,t){var a=e.x-t.x,i=e.y-t.y,n=Math.sqrt(a*a+i*i);if(n<=c.particles.line_linked.distance){var r=c.particles.line_linked.opacity-n/(1/c.particles.line_linked.opacity)/c.particles.line_linked.distance;if(r>0){var s=c.particles.line_linked.color_rgb_line;c.canvas.ctx.strokeStyle="rgba("+s.r+","+s.g+","+s.b+","+r+")",c.canvas.ctx.lineWidth=c.particles.line_linked.width,c.canvas.ctx.beginPath(),c.canvas.ctx.moveTo(e.x,e.y),c.canvas.ctx.lineTo(t.x,t.y),c.canvas.ctx.stroke(),c.canvas.ctx.closePath()}}},c.fn.interact.attractParticles=function(e,t){var a=e.x-t.x,i=e.y-t.y;if(Math.sqrt(a*a+i*i)<=c.particles.line_linked.distance){var n=a/(1e3*c.particles.move.attract.rotateX),r=i/(1e3*c.particles.move.attract.rotateY);e.vx-=n,e.vy-=r,t.vx+=n,t.vy+=r}},c.fn.interact.bounceParticles=function(e,t){var a=e.x-t.x,i=e.y-t.y;Math.sqrt(a*a+i*i)<=e.radius+t.radius&&(e.vx=-e.vx,e.vy=-e.vy,t.vx=-t.vx,t.vy=-t.vy)},c.fn.modes.pushParticles=function(e,t){c.tmp.pushing=!0;for(var a=0;a<e;a++)c.particles.array.push(new c.fn.particle(c.particles.color,c.particles.opacity.value,{x:t?t.pos_x:Math.random()*c.canvas.w,y:t?t.pos_y:Math.random()*c.canvas.h})),a==e-1&&(c.particles.move.enable||c.fn.particlesDraw(),c.tmp.pushing=!1)},c.fn.modes.removeParticles=function(e){c.particles.array.splice(0,e),c.particles.move.enable||c.fn.particlesDraw(),window.dispatchEvent(r)},c.fn.modes.bubbleParticle=function(e){if(c.interactivity.events.onhover.enable&&i("bubble",c.interactivity.events.onhover.mode)){var t=function(){e.opacity_bubble=e.opacity,e.radius_bubble=e.radius},a=e.x-c.interactivity.mouse.pos_x,n=e.y-c.interactivity.mouse.pos_y,r=1-(d=Math.sqrt(a*a+n*n))/c.interactivity.modes.bubble.distance;if(d<=c.interactivity.modes.bubble.distance){if(r>=0&&"mousemove"==c.interactivity.status){if(c.interactivity.modes.bubble.size!=c.particles.size.value)if(c.interactivity.modes.bubble.size>c.particles.size.value)(o=e.radius+c.interactivity.modes.bubble.size*r)>=0&&(e.radius_bubble=o);else{var s=e.radius-c.interactivity.modes.bubble.size,o=e.radius-s*r;e.radius_bubble=o>0?o:0}var l;c.interactivity.modes.bubble.opacity!=c.particles.opacity.value&&(c.interactivity.modes.bubble.opacity>c.particles.opacity.value?(l=c.interactivity.modes.bubble.opacity*r)>e.opacity&&l<=c.interactivity.modes.bubble.opacity&&(e.opacity_bubble=l):(l=e.opacity-(c.particles.opacity.value-c.interactivity.modes.bubble.opacity)*r)<e.opacity&&l>=c.interactivity.modes.bubble.opacity&&(e.opacity_bubble=l))}}else t();"mouseleave"==c.interactivity.status&&t()}else if(c.interactivity.events.onclick.enable&&i("bubble",c.interactivity.events.onclick.mode)){var u=function(t,a,i,n,r){if(t!=a)if(c.tmp.bubble_duration_end)null!=i&&(o=t+(t-(n-v*(n-t)/c.interactivity.modes.bubble.duration)),"size"==r&&(e.radius_bubble=o),"opacity"==r&&(e.opacity_bubble=o));else if(d<=c.interactivity.modes.bubble.distance){if(null!=i)var s=i;else s=n;if(s!=t){var o=n-v*(n-t)/c.interactivity.modes.bubble.duration;"size"==r&&(e.radius_bubble=o),"opacity"==r&&(e.opacity_bubble=o)}}else"size"==r&&(e.radius_bubble=void 0),"opacity"==r&&(e.opacity_bubble=void 0)};if(c.tmp.bubble_clicking){a=e.x-c.interactivity.mouse.click_pos_x,n=e.y-c.interactivity.mouse.click_pos_y;var d=Math.sqrt(a*a+n*n),v=((new Date).getTime()-c.interactivity.mouse.click_time)/1e3;v>c.interactivity.modes.bubble.duration&&(c.tmp.bubble_duration_end=!0),v>2*c.interactivity.modes.bubble.duration&&(c.tmp.bubble_clicking=!1,c.tmp.bubble_duration_end=!1)}c.tmp.bubble_clicking&&(u(c.interactivity.modes.bubble.size,c.particles.size.value,e.radius_bubble,e.radius,"size"),u(c.interactivity.modes.bubble.opacity,c.particles.opacity.value,e.opacity_bubble,e.opacity,"opacity"))}},c.fn.modes.repulseParticle=function(e){if(c.interactivity.events.onhover.enable&&i("repulse",c.interactivity.events.onhover.mode)&&"mousemove"==c.interactivity.status){var t=e.x-c.interactivity.mouse.pos_x,a=e.y-c.interactivity.mouse.pos_y,n=Math.sqrt(t*t+a*a),s={x:t/n,y:a/n},o=c.interactivity.modes.repulse.distance,l=(f=1/o*(-1*Math.pow(n/o,2)+1)*o*100,Math.min(Math.max(f,0),50)),u={x:e.x+s.x*l,y:e.y+s.y*l};if("bounce"==c.particles.move.out_mode)u.x-e.radius>0&&u.x+e.radius<c.canvas.w&&(e.x=u.x),u.y-e.radius>0&&u.y+e.radius<c.canvas.h&&(e.y=u.y);else if(e.x=u.x,e.y=u.y,!(u.x+e.radius>0&&u.x-e.radius<c.canvas.w&&u.y+e.radius>0&&u.y-e.radius<c.canvas.h)){var d=c.particles.array.findIndex((function(t){return t.id===e.id}));c.particles.array.splice(d,1),window.dispatchEvent(r)}}else if(c.interactivity.events.onclick.enable&&i("repulse",c.interactivity.events.onclick.mode))if(c.tmp.repulse_finish||(c.tmp.repulse_count++,c.tmp.repulse_count==c.particles.array.length&&(c.tmp.repulse_finish=!0)),c.tmp.repulse_clicking){o=Math.pow(c.interactivity.modes.repulse.distance/6,3);var v=c.interactivity.mouse.click_pos_x-e.x,m=c.interactivity.mouse.click_pos_y-e.y,p=v*v+m*m,y=-o/p*1;p<=o&&function(){var t=Math.atan2(m,v);if(e.vx=y*Math.cos(t),e.vy=y*Math.sin(t),"bounce"==c.particles.move.out_mode){var a={x:e.x+e.vx,y:e.y+e.vy};(a.x+e.radius>c.canvas.w||a.x-e.radius<0)&&(e.vx=-e.vx),(a.y+e.radius>c.canvas.h||a.y-e.radius<0)&&(e.vy=-e.vy)}}()}else 0==c.tmp.repulse_clicking&&(e.vx=e.vx_i,e.vy=e.vy_i);var f},c.fn.modes.grabParticle=function(e){if(c.interactivity.events.onhover.enable&&"mousemove"==c.interactivity.status){var t=e.x-c.interactivity.mouse.pos_x,a=e.y-c.interactivity.mouse.pos_y,i=Math.sqrt(t*t+a*a);if(i<=c.interactivity.modes.grab.distance){var n=c.interactivity.modes.grab.line_linked.opacity-i/(1/c.interactivity.modes.grab.line_linked.opacity)/c.interactivity.modes.grab.distance;if(n>0){var r=c.particles.line_linked.color_rgb_line;c.canvas.ctx.strokeStyle="rgba("+r.r+","+r.g+","+r.b+","+n+")",c.canvas.ctx.lineWidth=c.particles.line_linked.width,c.canvas.ctx.beginPath(),c.canvas.ctx.moveTo(e.x,e.y),c.canvas.ctx.lineTo(c.interactivity.mouse.pos_x,c.interactivity.mouse.pos_y),c.canvas.ctx.stroke(),c.canvas.ctx.closePath()}}}},c.fn.vendors.eventsListeners=function(){"window"==c.interactivity.detect_on?c.interactivity.el=window:c.interactivity.el=c.canvas.el,(c.interactivity.events.onhover.enable||c.interactivity.events.onclick.enable)&&(c.interactivity.el.addEventListener("mousemove",(function(e){if(c.interactivity.el==window)var t=e.clientX,a=e.clientY;else t=e.offsetX||e.clientX,a=e.offsetY||e.clientY;c.interactivity.mouse.pos_x=t,c.interactivity.mouse.pos_y=a,c.tmp.retina&&(c.interactivity.mouse.pos_x*=c.canvas.pxratio,c.interactivity.mouse.pos_y*=c.canvas.pxratio),c.interactivity.status="mousemove"})),c.interactivity.el.addEventListener("mouseleave",(function(e){c.interactivity.mouse.pos_x=null,c.interactivity.mouse.pos_y=null,c.interactivity.status="mouseleave"}))),c.interactivity.events.onclick.enable&&c.interactivity.el.addEventListener("click",(function(){if(c.interactivity.mouse.click_pos_x=c.interactivity.mouse.pos_x,c.interactivity.mouse.click_pos_y=c.interactivity.mouse.pos_y,c.interactivity.mouse.click_time=(new Date).getTime(),c.interactivity.events.onclick.enable)switch(c.interactivity.events.onclick.mode){case"push":c.particles.move.enable||1==c.interactivity.modes.push.particles_nb?c.fn.modes.pushParticles(c.interactivity.modes.push.particles_nb,c.interactivity.mouse):c.interactivity.modes.push.particles_nb>1&&c.fn.modes.pushParticles(c.interactivity.modes.push.particles_nb);break;case"remove":c.fn.modes.removeParticles(c.interactivity.modes.remove.particles_nb);break;case"bubble":c.tmp.bubble_clicking=!0;break;case"repulse":c.tmp.repulse_clicking=!0,c.tmp.repulse_count=0,c.tmp.repulse_finish=!1,setTimeout((function(){c.tmp.repulse_clicking=!1}),1e3*c.interactivity.modes.repulse.duration)}}))},c.fn.vendors.densityAutoParticles=function(){if(c.particles.number.density.enable){var e=c.canvas.el.width*c.canvas.el.height/1e3;c.tmp.retina&&(e/=2*c.canvas.pxratio);var t=e*c.particles.number.value/c.particles.number.density.value_area,a=c.particles.array.length-t;a<0?c.fn.modes.pushParticles(Math.abs(a)):c.fn.modes.removeParticles(a)}},c.fn.vendors.checkOverlap=function(e,t){for(var a=0;a<c.particles.array.length;a++){var i=c.particles.array[a],n=e.x-i.x,r=e.y-i.y;Math.sqrt(n*n+r*r)<=e.radius+i.radius&&(e.x=t?t.x:Math.random()*c.canvas.w,e.y=t?t.y:Math.random()*c.canvas.h,c.fn.vendors.checkOverlap(e))}},c.fn.vendors.createSvgImg=function(e){c.tmp.count_svg||(c.tmp.count_svg=0);var t=(Array.isArray(c.tmp.source_svg)?c.tmp.source_svg[Math.floor(Math.random()*c.tmp.source_svg.length)]:c.tmp.source_svg).replace(/#([0-9A-F]{3,6})/gi,(function(t,a,i,n){if(e.color.rgb)var r="rgba("+e.color.rgb.r+","+e.color.rgb.g+","+e.color.rgb.b+","+e.opacity+")";else r="hsla("+e.color.hsl.h+","+e.color.hsl.s+"%,"+e.color.hsl.l+"%,"+e.opacity+")";return r})),a=new Blob([t],{type:"image/svg+xml;charset=utf-8"}),i=window.URL||window.webkitURL||window,n=i.createObjectURL(a),r=new Image;r.addEventListener("load",(function(){e.img.obj=r,e.img.loaded=!0,i.revokeObjectURL(n),c.tmp.count_svg++})),r.src=n},c.fn.vendors.destroypJS=function(){cancelAnimationFrame(c.fn.drawAnimFrame),s.remove(),pJSDom=[]},c.fn.vendors.drawShape=function(e,t,a,i,n,r){var s=n*r,o=n/r,c=180*(o-2)/o,l=Math.PI-Math.PI*c/180;e.save(),e.beginPath(),e.translate(t,a),e.moveTo(0,0);for(var u=0;u<s;u++)e.lineTo(i,0),e.translate(i,0),e.rotate(l);e.fill(),e.restore()},c.fn.vendors.exportImg=function(){window.open(c.canvas.el.toDataURL("image/png"),"_blank")},c.fn.vendors.loadImg=function(e){if(c.tmp.img_error=void 0,""!=c.particles.shape.image.src)if("svg"==e){var t=c.particles.shape.image.src;if(Array.isArray(t)){c.tmp.source_svg=[];var a=[];t.forEach((function(e){a.push(fetch(e))})),Promise.all(a).then((function(e){e.forEach((function(t,a){t.text().then((function(t){c.tmp.source_svg.push(t),a===e.length-1&&c.fn.vendors.checkBeforeDraw()}))}))}))}else{var i=new XMLHttpRequest;i.open("GET",t),i.onreadystatechange=function(e){4==i.readyState&&(200==i.status?(c.tmp.source_svg=e.currentTarget.response,c.fn.vendors.checkBeforeDraw()):(console.log("Error pJS - Image not found"),c.tmp.img_error=!0))},i.send()}}else{var n=new Image;n.addEventListener("load",(function(){c.tmp.img_obj=n,c.fn.vendors.checkBeforeDraw()})),n.src=c.particles.shape.image.src}else console.log("Error pJS - No image.src"),c.tmp.img_error=!0},c.fn.vendors.draw=function(){"image"==c.particles.shape.type?"svg"==c.tmp.img_type?c.tmp.count_svg>=c.particles.number.value?(s.style.visibility="",c.fn.particlesDraw(),c.particles.move.enable?c.fn.drawAnimFrame=requestAnimFrame(c.fn.vendors.draw):cancelRequestAnimFrame(c.fn.drawAnimFrame)):(s.style.visibility="hidden",c.tmp.img_error||(c.fn.drawAnimFrame=requestAnimFrame(c.fn.vendors.draw))):null!=c.tmp.img_obj?(c.fn.particlesDraw(),c.particles.move.enable?c.fn.drawAnimFrame=requestAnimFrame(c.fn.vendors.draw):cancelRequestAnimFrame(c.fn.drawAnimFrame)):c.tmp.img_error||(c.fn.drawAnimFrame=requestAnimFrame(c.fn.vendors.draw)):(c.fn.particlesDraw(),c.particles.move.enable?c.fn.drawAnimFrame=requestAnimFrame(c.fn.vendors.draw):cancelRequestAnimFrame(c.fn.drawAnimFrame))},c.fn.vendors.checkBeforeDraw=function(){"image"==c.particles.shape.type?"svg"==c.tmp.img_type&&null==c.tmp.source_svg?c.tmp.checkAnimFrame=requestAnimFrame(check):(cancelRequestAnimFrame(c.tmp.checkAnimFrame),c.tmp.img_error||(c.fn.vendors.init(),c.fn.vendors.draw())):(c.fn.vendors.init(),c.fn.vendors.draw())},c.fn.vendors.init=function(){c.fn.retinaInit(),c.fn.canvasInit(),c.fn.canvasSize(),c.fn.canvasPaint(),c.fn.particlesCreate(),c.fn.vendors.densityAutoParticles(),c.particles.line_linked.color_rgb_line=a(c.particles.line_linked.color)},c.fn.vendors.start=function(){if(i("image",c.particles.shape.type)){var e=c.particles.shape.image.src;Array.isArray(e)&&(e=e[0]),c.tmp.img_type=e.substr(e.length-3),c.fn.vendors.loadImg(c.tmp.img_type)}else c.fn.vendors.checkBeforeDraw()},c.fn.vendors.eventsListeners(),c.fn.vendors.start()};function a(e){e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(e,t,a,i){return t+t+a+a+i+i}));var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}function i(e,t){return t.indexOf(e)>-1}Object.deepExtend=function(e,t){for(var a in t)t[a]&&t[a].constructor&&t[a].constructor===Object?(e[a]=e[a]||{},arguments.callee(e[a],t[a])):e[a]=t[a];return e},window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},window.cancelRequestAnimFrame=window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout,window.pJSDom=[],window.particlesJS=function(e,a){"string"!=typeof e&&(a=e,e="particles-js"),e||(e="particles-js");var i=document.getElementById(e),n="particles-js-canvas-el",r=i.getElementsByClassName(n);if(r.length)for(;r.length>0;)i.removeChild(r[0]);var s=document.createElement("canvas");s.className=n,s.style.width="100%",s.style.height="100%",null!=document.getElementById(e).appendChild(s)&&pJSDom.push(new t(e,a))},window.particlesJS.load=function(e,t,a){window.particlesJS(e,t),a&&a()}}},t={};function a(i){var n=t[i];if(void 0!==n)return n.exports;var r=t[i]={exports:{}};return e[i](r,r.exports,a),r.exports}!function(){"use strict";var e,t="home__list--collections",i="home__list--products",n="home__list--years",r="home__list--descriptions",s="home__list--specifics",o="home__collection-image",c="home__product-image",l="home__product-simple-image",u="visible",d="active",v="footer--random-image",m="footer--visible-detail-news",p="footer--visible-detail-weather",y="Europe/Rome",f=document.querySelectorAll(".".concat(t," li")),h=document.querySelectorAll(".".concat(i," li")),b=document.querySelectorAll(".".concat(r," li")),_=document.querySelector(".footer"),g=document.querySelector(".footer__hour"),w=document.querySelector(".footer__minute"),x=document.querySelector(".footer__option--date"),k=document.querySelector(".footer__gallery-link"),S=document.querySelector(".footer__icon--sheep"),q=document.querySelector(".footer__icon--news"),E=document.querySelector(".footer__random-image img"),L=document.querySelector(".footer__random-image figcaption"),M=document.querySelector(".footer__option--temperature"),A=document.querySelector(".footer__detail-text--weather"),z=document.querySelector(".footer__detail-text--news"),P=document.querySelector(".news-string"),F=document.querySelector(".slideshow"),T=document.querySelector(".gallery-header__name--mobile"),j=document.querySelector(".gallery-header__name--desktop"),I=document.querySelector(".gallery__description"),R=document.querySelector(".gallery-header__prev-btn"),C=document.querySelector(".gallery-header__next-btn"),D="sheep-game";function H(e,t){var a="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=function(e,t){if(e){if("string"==typeof e)return O(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?O(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var i=0,n=function(){};return{s:n,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s=!0,o=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return s=e.done,e},e:function(e){o=!0,r=e},f:function(){try{s||null==a.return||a.return()}finally{if(o)throw r}}}}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,i=new Array(t);a<t;a++)i[a]=e[a];return i}var B=function(e,t,a){if(e)if(void 0!==e.length){var i,n=H(e);try{for(n.s();!(i=n.n()).done;)i.value.classList.remove(a)}catch(e){n.e(e)}finally{n.f()}}else e.classList.remove(a);if(t)if(void 0!==t.length){var r,s=H(t);try{for(s.s();!(r=s.n()).done;)r.value.classList.add(a)}catch(e){s.e(e)}finally{s.f()}}else t.classList.add(a)},J=function(e){B(document.querySelector(".".concat(o,".").concat(u)),document.querySelector(".".concat(o,'[data-collection="').concat(e,'"]')),u)},U=function(e){B(document.querySelector(".".concat(c,".").concat(u)),document.querySelector(".".concat(c,'[data-product="').concat(e,'"]')),u)},X=function(e){B(document.querySelector(".".concat(l,".").concat(u)),document.querySelector(".".concat(l,'[data-product="').concat(e,'"]')),u)},Y=function(t){e=t,B(document.querySelector(".".concat(i," li.").concat(d)),document.querySelector(".".concat(i,' li[data-product="').concat(t,'"]')),d)},W=function(){return e},G=function(e,t){return new Date(("string"==typeof e?new Date(e):e).toLocaleString("en-US",{timeZone:t}))},N=function(e){return("0"+e).slice(-2)};var $,Z,K=function(){function e(t,a,i){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.slider=t,this.onInit=a,this.onMove=i,this.slides=this.slider.querySelector(".slideshow__slides"),this.prevButton=this.slider.querySelector(".slideshow__prev"),this.nextButton=this.slider.querySelector(".slideshow__next"),this.startSlider(),this.prevButton.addEventListener("click",(function(){return n.move("back")})),this.nextButton.addEventListener("click",(function(){return n.move()}))}var t;return(t=[{key:"startSlider",value:function(){this.current=this.slider.querySelector(".current")||this.slides.firstElementChild,this.prev=this.current.previousElementSibling||this.slides.lastElementChild,this.next=this.current.nextElementSibling||this.slides.firstElementChild,this.applyClasses(),this.onInit(this.current)}},{key:"applyClasses",value:function(){this.current.classList.add("current"),this.prev.classList.add("prev"),this.next.classList.add("next")}},{key:"move",value:function(e){var t,a,i,n=["prev","current","next"];if((t=this.prev.classList).remove.apply(t,n),(a=this.current.classList).remove.apply(a,n),(i=this.next.classList).remove.apply(i,n),"back"===e){var r=[this.prev.previousElementSibling||this.slides.lastElementChild,this.prev,this.current];this.prev=r[0],this.current=r[1],this.next=r[2]}else{var s=[this.current,this.next,this.next.nextElementSibling||this.slides.firstElementChild];this.prev=s[0],this.current=s[1],this.next=s[2]}this.applyClasses(),this.onMove(this.current)}}])&&function(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}(e.prototype,t),e}(),Q=(a(717),{particles:{number:{value:1,density:{enable:!1,value_area:800}},color:{value:"#000000"},shape:{type:"image",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:["".concat(window.TEMPLATE_URL||"","/assets/img/sheep-1.svg"),"".concat(window.TEMPLATE_URL||"","/assets/img/sheep-2.svg"),"".concat(window.TEMPLATE_URL||"","/assets/img/sheep-3.svg"),"".concat(window.TEMPLATE_URL||"","/assets/img/sheep-4.svg")],width:10,height:10}},opacity:{value:1,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:20,random:!1,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!1,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:.5,direction:"none",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!0,mode:"remove"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:300,duration:.4},push:{particles_nb:4},remove:{particles_nb:50}}},retina_detect:!0}),V=new Event("sheepGameFinished"),ee=new Event("sheepGameStarted");window.addEventListener("outOfCanvas",(function(){$.particles.array.length||(document.body.classList.remove(D),clearInterval(Z),$.fn.vendors.destroypJS(),document.dispatchEvent(V))}));var te=function(){document.dispatchEvent(ee),window.particlesJS.load("sheep-game-space",Q,(function(){$=window.pJSDom[0].pJS,Z=setInterval((function(){$.particles.array.length<50?$.particles.array.push(new $.fn.particle($.particles.color,$.particles.opacity.value)):clearInterval(Z)}),5e3),document.body.classList.add(D)}))};function ae(e,t){var a="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=function(e,t){if(e){if("string"==typeof e)return ie(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?ie(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var i=0,n=function(){};return{s:n,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s=!0,o=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return s=e.done,e},e:function(e){o=!0,r=e},f:function(){try{s||null==a.return||a.return()}finally{if(o)throw r}}}}function ie(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,i=new Array(t);a<t;a++)i[a]=e[a];return i}var ne,re,se=P.innerHTML.split("#_#"),oe=function(e){var a=e.target.dataset.collection;!function(e){B(document.querySelector(".".concat(t," li.").concat(d)),document.querySelector(".".concat(t,' li[data-collection="').concat(e,'"]')),d)}(a),function(e){B(document.querySelectorAll(".".concat(i," li.").concat(u)),document.querySelectorAll(".".concat(i,' li[data-collection="').concat(e,'"]')),u)}(a),function(e){B(document.querySelector(".".concat(n," li.").concat(u)),document.querySelector(".".concat(n,' li[data-collection="').concat(e,'"]')),u)}(a),function(e){var t=k.href.split("/");t.splice(t.length-2,1,e),k.href=t.join("/")}(a),Y(),U()},ce=function(e){var t=e.target.dataset.collection;J(t),U()},le=function(){J();var e=W();e?U(e):U()},ue=function(e){var t=e.target.dataset.product;Y(t),function(e){B(document.querySelector(".".concat(r," li.").concat(u)),e?document.querySelector(".".concat(r,' li[data-product="').concat(e,'"]')):null,u)}(t),function(e){B(document.querySelector(".".concat(s," li.").concat(u)),e?document.querySelector(".".concat(s,' li[data-product="').concat(e,'"]')):null,u)}(t)},de=function(e){var t=e.target.dataset.product;U(t)},ve=function(){var e=W();e?U(e):U()},me=function(e){var t=e.target.dataset.product;X(t)},pe=function(){X()},ye=function(){var e=new Date,t=G(e,y);g.innerHTML=N(t.getHours()),w.innerHTML=N(t.getMinutes())},fe=ae(f);try{for(fe.s();!(re=fe.n()).done;){var he=re.value;he.addEventListener("click",oe),he.addEventListener("mouseover",ce),he.addEventListener("mouseleave",le)}}catch(e){fe.e(e)}finally{fe.f()}var be,_e=ae(h);try{for(_e.s();!(be=_e.n()).done;){var ge=be.value;ge.addEventListener("click",ue),ge.addEventListener("mouseover",de),ge.addEventListener("mouseleave",ve)}}catch(e){_e.e(e)}finally{_e.f()}var we,xe,ke,Se,qe,Ee=ae(b);try{for(Ee.s();!(we=Ee.n()).done;){var Le=we.value;Le.addEventListener("mouseover",me),Le.addEventListener("mouseleave",pe)}}catch(e){Ee.e(e)}finally{Ee.f()}if(xe=new Date,ke=G(xe,y),x.innerHTML=N(ke.getDate())+"."+N(ke.getMonth()+1)+"."+ke.getFullYear(),ye(),setInterval(ye,2500),S.addEventListener("mouseover",(function(){if(ne){var e=ne[Math.floor(Math.random()*ne.length)],t=e.url,a=e.alt,i=e.caption;E.src=t,E.alt=a,L.innerHTML=i,L.style.display=i?"":"none",_.classList.add(v)}})),S.addEventListener("mouseleave",(function(){_.classList.remove(v),E.src="",E.alt=""})),q.addEventListener("mouseover",(function(){se&&(z.innerHTML=se[Math.floor(Math.random()*se.length)],_.classList.add(m))})),q.addEventListener("mouseleave",(function(){_.classList.remove(m)})),M.addEventListener("mouseover",(function(){_.classList.add(p)})),M.addEventListener("mouseleave",(function(){_.classList.remove(p)})),Se=function(e){var t=e.getElementsByTagName("item")[0];if(t){var a=t.getElementsByTagName("description")[0].innerHTML,i=a.split(" ")[1];!function(e,t){M.innerHTML=t,A.innerHTML=e}(a,i)}},fetch("https://weather-broker-cdn.api.bbci.co.uk/en/observation/rss/3173435").then((function(e){return e.text()})).then((function(e){return(new window.DOMParser).parseFromString(e,"text/xml")})).then((function(e){return Se(e)})).catch((function(e){console.error(e)})),fetch("/2023/wp-json/acf/v3/pages/28/random_images").then((function(e){return e.json()})).then((function(e){return ne=e.random_images})).catch((function(){throw Error("Error on fetching random images")})),F){var Me=function(e){var t=e.dataset,a=t.name,i=t.description;j.innerHTML=a,T.innerHTML=a,I.innerHTML=i},Ae=new K(F,Me,Me);R.addEventListener("click",(function(){Ae.move("back")})),C.addEventListener("click",(function(){Ae.move()})),T.addEventListener("click",(function(){var e=!!I.style.display,t=document.querySelector(".slideshow__slide.current img");e?(I.style.display="",t.style.opacity="",F.style.pointerEvents=""):(I.style.display="initial",t.style.opacity=".5",F.style.pointerEvents="none")}))}var ze=!1,Pe=function(){qe=setTimeout(te,3e3)},Fe=function(){clearTimeout(qe),ze||Pe()};document.addEventListener("mousemove",Fe),document.addEventListener("click",Fe),document.addEventListener("sheepGameStarted",(function(){return ze=!0})),document.addEventListener("sheepGameFinished",(function(){return ze=!1})),Pe()}()}();