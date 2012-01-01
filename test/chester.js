function i(g){throw g;}var j=true,l=null,o=false;function r(g){var a=new Float32Array(2);g&&(a[0]=g[0],a[1]=g[1]);return a}HTMLCanvasElement.yb=vec3.create();function z(g,a){var c=HTMLCanvasElement.yb;c[0]=0;c[1]=0;a.x!=void 0&&a.y!=void 0?(c[0]=a.x,c[1]=a.y):(c[0]=a.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,c[1]=a.clientY+document.body.scrollTop+document.documentElement.scrollTop);c[0]-=g.offsetLeft;c[1]=g.height-(c[1]-g.offsetTop);return c}
window.nb=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(g){window.setTimeout(g,1E3/60)};function F(g,a){console.log(WebGLDebugUtils.glEnumToString(g)+" was caused by call to "+a)}window.requestAnimFrame=window.nb;
(function(g){var a={a:function(a,b,d){a[b]=d},b:l,V:o,vb:o,lb:{},Wa:l,I:l,R:l,canvas:l,ea:"3d",d:j,Ma:o,l:{},na:{},W:{},oa:{}};a.eb=Date.now();a.O=0;a.cc=0;a.ra=l;a.Bb="debug-info";a.update=l;a.p={Oa:0,Pa:1,Qa:2};a.q=[];a.S=function(a){var b=this.lb[a],d=this.b;if(a!=this.Wa){console.log("selecting program "+a);this.Wa=a;d.validateProgram(b);d.useProgram(b);for(var e in b.e)d.enableVertexAttribArray(b.e[e])}return b};a.Sb=function(a){this.Gb(document.getElementById(a));this.d&&this.Fb();this.ra=document.getElementById("debug-info");
this.Ba("texture",this.Db);this.mb("texture",this.Eb);this.mb("default",this.Cb)};a.Gb=function(a){try{if(this.canvas=a,this.d&&(this.b=a.getContext("experimental-webgl",{alpha:o,antialias:o}))&&g.WebGLDebugUtils)console.log("installing debug context"),this.b=WebGLDebugUtils.makeDebugContext(this.b,F)}catch(b){console.log("ERROR: "+b)}if(!this.b)this.b=a.getContext("2d"),this.Ma?(this.aa=document.createElement("canvas"),this.aa.width=a.width,this.aa.height=a.height,this.n=this.aa.getContext("2d"),
this.n.L=a.width,this.n.F=a.height,this.a(this,"offContext",this.n),this.a(this.n,"viewportWidth",this.n.L),this.a(this.n,"viewportHeight",this.n.F)):this.n=this.b,(!this.b||!this.n)&&i("Error initializing graphic context!"),this.d=o;this.a(this,"gl",this.b);this.Ua();this.Hb()};a.Ua=function(){var a=this.canvas;this.b.L=a.width;this.b.F=a.height;this.a(this.b,"viewportWidth",this.b.L);this.a(this.b,"viewportHeight",this.b.F)};a.Fb=function(){var c=this.b;this.Z("default",function(b){b.D=c.getUniformLocation(b,
"uMVPMatrix");b.e={vertexPositionAttribute:c.getAttribLocation(b,"aVertexPosition"),vertexColorAttribute:c.getAttribLocation(b,"aVertexColor")};a.a(b,"mvpMatrixUniform",b.D);a.a(b,"attribs",b.e)});this.Z("texture",function(b){b.D=c.getUniformLocation(b,"uMVPMatrix");b.Ga=c.getUniformLocation(b,"uSampler");b.e={vertexColorAttribute:c.getAttribLocation(b,"aVertexColor"),textureCoordAttribute:c.getAttribLocation(b,"aTextureCoord"),vertexPositionAttribute:c.getAttribLocation(b,"aVertexPosition")};a.a(b,
"mvpMatrixUniform",b.D);a.a(b,"samplerUniform",b.Ga);a.a(b,"attribs",b.e)})};a.Z=function(a,b){var d=this.b,e=this.hb(a,"frag"),f=this.hb(a,"vert"),k=d.createShader(d.FRAGMENT_SHADER);d.shaderSource(k,e);d.compileShader(k);d.getShaderParameter(k,d.COMPILE_STATUS)?(e=d.createShader(d.VERTEX_SHADER),d.shaderSource(e,f),d.compileShader(e),d.getShaderParameter(e,d.COMPILE_STATUS)?(d=this.createShader(a,k,e),b&&b(d)):console.log("problem compiling vertex shader "+a+"("+d.getShaderInfoLog(e)+"):\n"+f)):
console.log("problem compiling fragment shader "+a+"("+d.getShaderInfoLog(k)+"):\n"+e)};a.hb=function(a,b){var d=l;$.ajax({url:"shaders/"+a+"."+b,async:o,type:"GET",success:function(a,b){b=="success"?d=a:console.log("error getting the shader data")}});return d};a.createShader=function(a,b,d){var e=this.b,f=e.createProgram();e.attachShader(f,b);e.attachShader(f,d);e.linkProgram(f);e.getProgramParameter(f,e.LINK_STATUS)||console.log("problem linking shader");return this.lb[a]=f};a.Ba=function(a,b){this.na[a]=
b};a.mb=function(a,b){this.W[a]=b};a.u=function(a,b,d){var e=void 0;if(typeof b=="object")e=b.dataType,b=b.path;this.l[a]||(this.l[a]={});var f=this.l[a];if(f[b])if(f[b].status=="loading")d&&f[b].P.push(d);else if(f[b].status=="loaded")d&&d(f[b].data);else{if(f[b].status=="try"){f[b].status="loading";if(this.W[a])this.W[a](a,{url:b,dataType:e});else this.W["default"](a,{url:b,dataType:e});d&&f[b].P.push(d)}}else f[b]={data:l,status:"try",P:[]},d&&f[b].P.push(d),this.u(a,{path:b,dataType:e})};a.N=
function(a,b){var d=this.oa[a];d||(this.oa[a]=[],d=this.oa[a]);b&&d.push(b);var e=j;if(a=="all")for(var f in this.l){var k=this.l[f],h;for(h in k)if(k[h].status!="loaded"){e=o;break}if(!e)break}else for(h in k=this.l[a],k)if(k[h].status!="loaded"){e=o;break}if(e)for(;e=d.shift();)e()};a.G=function(a,b){return this.l[a][b].data};a.Ob=function(a){var b=this.b,d=j;try{var e=0;b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,1);b.activeTexture(b.TEXTURE0);b.bindTexture(b.TEXTURE_2D,a.ha);b.texImage2D(b.TEXTURE_2D,
0,b.RGBA,b.RGBA,b.UNSIGNED_BYTE,a);e=b.getError();e!=0&&(console.log("gl error "+e),d=o);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,b.LINEAR);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,b.LINEAR);b.bindTexture(b.TEXTURE_2D,l)}catch(f){console.log("got some error: "+f),d=o}return d};a.Db=function(c,b){if(a.d)b.ha=a.b.createTexture();a.l.texture[c].data=b;return a.d?a.Ob(b):j};a.Eb=function(c,b){var d=new Image,e=b.url;d.addEventListener("load",function(){var b=a.l.texture[e];if(a.na[c](e,
d)){b.status="loaded";for(var k;k=b.P.shift();)k(b.data);a.N(c);a.N("all")}else b.status="try",a.u(c,e)},o);d.src=e};a.Cb=function(c,b){var d=b.url;$.ajax({url:d,dataType:b.dataType,success:function(b,f){var k=a.l[c][d];if(f=="success")if(a.na[c](d,b)){k.status="loaded";for(var h;h=k.P.shift();)h(k.data);a.N(c);a.N("all")}else k.status="try",a.u(c,d);else console.log("Error loading asset "+d)}})};a.Tb=function(){var a=this.b;if(this.d){a.clearColor(0,0,0,1);a.blendFunc(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA);
a.enable(a.BLEND);a.disable(a.DEPTH_TEST);var b=a.L,d=a.F;a.viewport(0,0,b,d);this.I=mat4.create();if(this.ea=="2d")console.log("setting up 2d projection ("+b+","+d+")"),mat4.ortho(0,b,0,d,-1024,1024,this.I);else if(this.ea=="3d"){console.log("setting up 3d projection ("+b+","+d+")");var e=d/1.1566,a=mat4.perspective(60,b/d,0.5,1500),e=vec3.create([b/2,d/2,e]),b=vec3.create([b/2,d/2,0]),d=vec3.create([0,1,0]),b=mat4.lookAt(e,b,d);mat4.multiply(a,b,this.I)}else i("Invalid projection: "+this.ea)}};
a.Rb=function(a){this.R=a};a.Xa=function(){var a=void 0;this.d?(a=this.b,a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT)):(a=this.n,a.setTransform(1,0,0,1,0,0),a.fillRect(0,0,a.L,a.F));this.R&&this.R.ia();!this.d&&this.Ma&&(a.fillRect(0,0,a.L,a.F),a.drawImage(this.aa,0,0));a=Date.now();this.O=a-this.eb;this.eb=a};a.cb=Date.now();a.sa=0;a.va=0;a.fa=0;a.Ka=0;a.Zb=function(){var c=Date.now();this.sa+=this.O;this.va++;if(c-this.cb>1E3){var b=this.sa/this.va;this.Ka+=b;this.fa++;if(this.ra)this.ra.textContent=
b.toFixed(2);if(a.R&&this.vb&&this.fa>5)_gaq.push(["_trackEvent","ChesterGL","renderTime-"+this.d,a.R.title,Math.floor(this.Ka/this.fa)]),this.Ka=this.fa=0;this.sa=this.va=0;this.cb=c}};a.Hb=function(){$(this.canvas).mousedown(a.Lb);$(this.canvas).mousemove(a.Mb);$(this.canvas).mouseup(a.Nb)};a.Lb=function(c){for(var c=z(a.canvas,c),b=0,d=a.q.length;b<d;b++)a.q[b](c,a.p.Oa)};a.Mb=function(c){for(var c=z(a.canvas,c),b=0,d=a.q.length;b<d;b++)a.q[b](c,a.p.Pa)};a.Nb=function(c){for(var c=z(a.canvas,c),
b=0,d=a.q.length;b<d;b++)a.q[b](c,a.p.Qa)};a.zb=function(a){this.q.indexOf(a)==-1&&this.q.push(a)};a.Qb=function(a){a=this.q.indexOf(a);a>0&&this.q.splice(a,1)};a.Ea=function(){a.V||(g.nb(a.Ea,a.canvas),a.Xa(),a.o.ub(a.O),a.Zb())};a.Ub=function(){a.V?(a.V=o,a.Ea()):a.V=j};a.a(g,"ChesterGL",a);a.a(a,"useGoogleAnalytics",a.vb);a.a(a,"projection",a.ea);a.a(a,"webglMode",a.d);a.a(a,"usesOffscreenBuffer",a.Ma);a.a(a,"debugSpanId",a.Bb);a.a(a,"update",a.update);a.a(a,"mouseEvents",a.p);a.a(a.p,"DOWN",a.p.Oa);
a.a(a.p,"MOVE",a.p.Pa);a.a(a.p,"UP",a.p.Qa);a.a(a,"setup",a.Sb);a.a(a,"canvasResized",a.Ua);a.a(a,"initShader",a.Z);a.a(a,"registerAssetHandler",a.Ba);a.a(a,"loadAsset",a.u);a.a(a,"assetsLoaded",a.N);a.a(a,"getAsset",a.G);a.a(a,"setupPerspective",a.Tb);a.a(a,"setRunningScene",a.Rb);a.a(a,"drawScene",a.Xa);a.a(a,"run",a.Ea);a.a(a,"togglePause",a.Ub);a.a(a,"addMouseHandler",a.zb);a.a(a,"removeMouseHandler",a.Qb)})(window);(function(g){var a=g.ChesterGL;a.Block=function(c,b,d){this.type=b||a.Block.g.STANDALONE;if(d)this.parent=d;this.children=[];this.j=a.Block.k.DEFAULT;c&&(typeof c==="string"?(c=a.BlockFrames.bb(c),this.K(c.c),this.J(c.frame)):this.J(c));this.type==a.Block.g.STANDALONE&&this.ga([1,1,1,1]);if(a.d&&this.type==a.Block.g.STANDALONE&&(!d||d.type!=a.Block.g.BLOCKGROUP))this.s=a.b.createBuffer(),this.m=new Float32Array(a.Block.BUFFER_SIZE);this.f=mat4.create();this.C=mat4.create();mat4.identity(this.f);this.la=
[];this.ma=[]};a.Block.k={DEFAULT:0,TEXTURE:1};a.Block.ja=["default","texture"];a.Block.g={STANDALONE:0,BLOCKGROUP:1,SCENE:2,TMXBLOCK:3,PARTICLE:4};a.Block.ka=36;a.Block.BUFFER_SIZE=36;a.Block.Na=Math.PI/180;a.Block.ac=180/Math.PI;a.Block.wb=quat4.create([0,0,1,1]);a.Block.xb=r([0,0]);a.Block.prototype.title="";a.Block.prototype.f=l;a.Block.prototype.C=l;a.Block.prototype.U=j;a.Block.prototype.i=o;a.Block.prototype.H=o;a.Block.prototype.A=o;a.Block.prototype.pa=0;a.Block.prototype.s=l;a.Block.prototype.m=
l;a.Block.prototype.position=vec3.create();a.Block.prototype.r=l;a.Block.prototype.color=quat4.create([1,1,1,1]);a.Block.prototype.c=l;a.Block.prototype.opacity=1;a.Block.prototype.rotation=0;a.Block.prototype.scale=1;a.Block.prototype.update=l;a.Block.prototype.frame=l;a.Block.prototype.parent=l;a.Block.prototype.children=l;a.Block.prototype.la=l;a.Block.prototype.ma=l;a.Block.prototype.M=o;a.Block.prototype.J=function(a){this.frame=quat4.create(a);this.T([a[2],a[3]]);this.A=j};a.Block.prototype.T=
function(a){this.r=r(a);this.A=j};a.Block.prototype.Ja=function(a){this.scale=a;this.i=j};a.Block.prototype.ga=function(a){this.color=quat4.create(a);this.H=j};a.Block.prototype.K=function(c){this.c=c;this.j=a.Block.k.TEXTURE;var b=this;a.u("texture",c,function(a){b.r||b.T([a.width,a.height]);b.frame||b.J([0,0,a.width,a.height])})};a.Block.prototype.moveTo=function(c,b){if(b){var d=new a.MoveToAction(this,b,c);a.o.pb(d)}else this.position=vec3.create(c),this.i=j};a.Block.prototype.moveBy=function(a){vec3.add(this.position,
a);this.i=j};a.Block.prototype.Da=function(c){this.rotation=(a.d?-1:1)*c*a.Block.Na;this.i=j};a.Block.prototype.Ca=function(c){this.rotation+=(a.d?-1:1)*c*a.Block.Na;this.i=j};a.Block.prototype.z=function(a){a.parent&&i("can't add a block twice!");this.M?this.la.push(a):(this.children.push(a),a.parent=this)};a.Block.prototype.removeChild=function(a){(!a.parent||a.parent!=this)&&i("not our child!");this.M?this.ma.push(a):(a=this.children.indexOf(a),a>=0&&this.children.splice(a,1))};a.Block.prototype.transform=
function(){var c=a.b;if(this.i||this.parent&&this.parent.i){mat4.identity(this.f);mat4.translate(this.f,this.position);mat4.rotate(this.f,this.rotation,[0,0,1]);mat4.scale(this.f,[this.scale,this.scale,1]);var b=this.parent?this.parent.f:l;b&&mat4.multiply(b,this.f,this.f)}if(this.type!=a.Block.g.BLOCKGROUP){var b=this.m,d=this.parent&&this.parent.type==a.Block.g.BLOCKGROUP;if(a.d){!d&&(this.A||this.H)&&c.bindBuffer(c.ARRAY_BUFFER,this.s);if(this.A||d&&this.i){var e=9,f=this.r[0]*0.5,k=this.r[1]*
0.5,h=this.pa*a.Block.BUFFER_SIZE,g=this.position[2];if(d){var p=[f,k,0],n=[-f,k,0],m=[f,-k,0],f=[-f,-k,0];mat4.multiplyVec3(this.f,p);mat4.multiplyVec3(this.f,n);mat4.multiplyVec3(this.f,f);mat4.multiplyVec3(this.f,m);b[h]=f[0];b[h+1]=f[1];b[h+2]=g;b[h+e]=n[0];b[h+1+e]=n[1];b[h+2+e]=g;b[h+2*e]=m[0];b[h+1+2*e]=m[1];b[h+2+2*e]=g;b[h+3*e]=p[0];b[h+1+3*e]=p[1];b[h+2+3*e]=g}else b[h]=-f,b[h+1]=-k,b[h+2]=0,b[h+e]=-f,b[h+1+e]=k,b[h+2+e]=0,b[h+2*e]=f,b[h+1+2*e]=-k,b[h+2+2*e]=0,b[h+3*e]=f,b[h+1+3*e]=k,b[h+
2+3*e]=0;if(this.j==a.Block.k.TEXTURE)g=a.G("texture",this.c),n=g.width,m=g.height,g=this.frame[0]/n,p=this.frame[1]/m,n=this.frame[2]/n,m=this.frame[3]/m,h+=3,b[h]=g,b[h+1]=p,b[h+e]=g,b[h+1+e]=p+m,b[h+2*e]=g+n,b[h+1+2*e]=p,b[h+3*e]=g+n,b[h+1+3*e]=p+m}if(this.H){h=5+this.pa*a.Block.BUFFER_SIZE;g=this.color;p=this.opacity;for(n=0;n<4;n++)b[h+e*n]=g[0]*p,b[h+1+e*n]=g[1]*p,b[h+2+e*n]=g[2]*p,b[h+3+e*n]=g[3]*p}a.d&&!d&&(this.A||this.H)&&c.bufferData(c.ARRAY_BUFFER,this.m,c.STATIC_DRAW)}}};a.Block.prototype.ia=
function(){this.M=j;this.update&&this.update(a.O);if(this.U){this.transform();for(var c=this.children,b=c.length,d=0;d<b;d++)c[d].ia();(!this.parent||this.parent.type!=a.Block.g.BLOCKGROUP)&&this.Q();for(this.M=this.A=this.H=this.i=o;c=this.la.shift();)this.z(c);for(;c=this.ma.shift();)this.removeChild(c)}else this.M=o};a.Block.prototype.Q=function(){this.type==a.Block.g.BLOCKGROUP&&i("Cannot call render on a BlockGroup block!");if(this.type!=a.Block.g.SCENE)if(a.d){var c=a.b,b=a.S(a.Block.ja[this.j]);
c.bindBuffer(c.ARRAY_BUFFER,this.s);var d=a.Block.ka;c.vertexAttribPointer(b.e.vertexPositionAttribute,3,c.FLOAT,o,d,0);c.vertexAttribPointer(b.e.vertexColorAttribute,4,c.FLOAT,o,d,20);if(this.j!=a.Block.k.DEFAULT&&this.j==a.Block.k.TEXTURE){var e=a.G("texture",this.c);c.vertexAttribPointer(b.e.textureCoordAttribute,2,c.FLOAT,o,d,12);c.activeTexture(c.TEXTURE0);c.bindTexture(c.TEXTURE_2D,e.ha);c.uniform1i(b.Ga,0);c.bc=j}(this.i||this.parent&&this.parent.i)&&mat4.multiply(a.I,this.f,this.C);c.uniformMatrix4fv(b.D,
o,this.C);c.drawArrays(c.TRIANGLE_STRIP,0,4)}else if(c=a.n,this.j==a.Block.k.TEXTURE){b=this.f;e=a.G("texture",this.c);c.globalAlpha=this.opacity;c.setTransform(b[0],b[1],b[4],b[5],b[12],c.F-b[13]);var b=this.r[0],d=this.r[1],f=this.frame;c.drawImage(e,f[0],e.height-(f[1]+d),f[2],f[3],-b/2,-d/2,b,d)}};a.a(a,"Block",a.Block);a.a(a.Block,"FullFrame",a.Block.wb);a.a(a.Block,"SizeZero",a.Block.xb);a.a(a.Block,"TYPE",a.Block.g);a.a(a.Block,"PROGRAM",a.Block.k);a.a(a.Block,"PROGRAM_NAME",a.Block.ja);a.a(a.Block.prototype,
"visible",a.Block.prototype.U);a.a(a.Block.prototype,"position",a.Block.prototype.position);a.a(a.Block.prototype,"contentSize",a.Block.prototype.r);a.a(a.Block.prototype,"color",a.Block.prototype.color);a.a(a.Block.prototype,"texture",a.Block.prototype.c);a.a(a.Block.prototype,"opacity",a.Block.prototype.opacity);a.a(a.Block.prototype,"rotation",a.Block.prototype.rotation);a.a(a.Block.prototype,"scale",a.Block.prototype.scale);a.a(a.Block.prototype,"update",a.Block.prototype.update);a.a(a.Block.prototype,
"frame",a.Block.prototype.frame);a.a(a.Block.prototype,"parent",a.Block.prototype.parent);a.a(a.Block.prototype,"children",a.Block.prototype.children);a.a(a.Block.prototype,"setFrame",a.Block.prototype.J);a.a(a.Block.prototype,"setContentSize",a.Block.prototype.T);a.a(a.Block.prototype,"setScale",a.Block.prototype.Ja);a.a(a.Block.prototype,"setColor",a.Block.prototype.ga);a.a(a.Block.prototype,"setTexture",a.Block.prototype.K);a.a(a.Block.prototype,"moveTo",a.Block.prototype.moveTo);a.a(a.Block.prototype,
"moveBy",a.Block.prototype.moveBy);a.a(a.Block.prototype,"rotateTo",a.Block.prototype.Da);a.a(a.Block.prototype,"rotateBy",a.Block.prototype.Ca);a.a(a.Block.prototype,"addChild",a.Block.prototype.z);a.a(a.Block.prototype,"removeChild",a.Block.prototype.removeChild)})(window);(function(g){var a=g.ChesterGL;a.BlockGroup=function(c,b){a.d||i("BlockGroup only works on WebGL mode");a.Block.call(this,l,a.Block.g.BLOCKGROUP);c?(this.c=c,this.j=a.Block.k.TEXTURE):this.j=a.Block.k.DEFAULT;this.$=b||10;this.Ab()};a.BlockGroup.prototype=Object.create(a.Block.prototype);a.BlockGroup.prototype.$=0;a.BlockGroup.prototype.ya=o;a.BlockGroup.prototype.wa=l;a.BlockGroup.prototype.t=l;a.BlockGroup.prototype.Ab=function(){var c=a.b;this.s=c.createBuffer();this.m=new Float32Array(a.Block.ka*
this.$);this.wa=c.createBuffer();this.t=new Uint16Array(6*this.$)};a.BlockGroup.prototype.Va=function(c){c=new a.Block(c,a.Block.g.STANDALONE,this);this.c&&c.K(this.c);return c};a.BlockGroup.prototype.z=function(a){this.children.length>=this.$&&i("Error: too many children - Make the initial size of the BlockGroup larger");a.parent!=this&&i("Invalid child: can only add children created with BlockGroup.create");this.c?this.c!=a.c&&i("Invalid child: only can add child with the same texture"):this.c=
a.c;this.children.push(a);a.pa=this.children.length-1;a.m=this.m;this.ya=j};a.BlockGroup.prototype.Pb=function(){for(var c=(this.t[-1]||-1)+1,b=Math.max(this.children.length,1),d=0;d<b;d++){var e=d*6;this.t[e+0]=c;this.t[e+1]=c+1;this.t[e+2]=c+2;this.t[e+3]=c+2;this.t[e+4]=c+1;this.t[e+5]=c+3;c+=4}c=a.b;c.bindBuffer(c.ELEMENT_ARRAY_BUFFER,this.wa);c.bufferData(c.ELEMENT_ARRAY_BUFFER,this.t,c.STATIC_DRAW)};a.BlockGroup.prototype.ia=function(){this.update&&this.update(a.O);if(this.U){this.transform();
for(var c=this.children,b=c.length,d=0;d<b;d++)c[d].ia();c=a.b;c.bindBuffer(c.ARRAY_BUFFER,this.s);c.bufferData(c.ARRAY_BUFFER,this.m,c.STATIC_DRAW);if(this.ya)this.Pb(),this.ya=o;this.Q();this.A=this.H=this.i=o}};a.BlockGroup.prototype.Q=function(){var c=a.b,b=a.S(a.Block.ja[this.j]),d=this.children.length,e=a.Block.ka;c.bindBuffer(c.ARRAY_BUFFER,this.s);c.vertexAttribPointer(b.e.vertexPositionAttribute,3,c.FLOAT,o,e,0);if(this.j!=a.Block.k.DEFAULT&&this.j==a.Block.k.TEXTURE){var f=a.G("texture",
this.c);c.vertexAttribPointer(b.e.textureCoordAttribute,2,c.FLOAT,o,e,12);c.activeTexture(c.TEXTURE0);c.bindTexture(c.TEXTURE_2D,f.ha);c.uniform1i(b.Ga,0)}c.vertexAttribPointer(b.e.vertexColorAttribute,4,c.FLOAT,o,e,20);c.bindBuffer(c.ELEMENT_ARRAY_BUFFER,this.wa);mat4.multiply(a.I,this.f,this.C);c.uniformMatrix4fv(b.D,o,this.C);c.drawElements(c.TRIANGLES,d*6,c.UNSIGNED_SHORT,0)};a.a(a,"BlockGroup",a.BlockGroup);a.a(a.BlockGroup.prototype,"visible",a.BlockGroup.prototype.U);a.a(a.BlockGroup.prototype,
"position",a.BlockGroup.prototype.position);a.a(a.BlockGroup.prototype,"contentSize",a.BlockGroup.prototype.r);a.a(a.BlockGroup.prototype,"color",a.BlockGroup.prototype.color);a.a(a.BlockGroup.prototype,"texture",a.BlockGroup.prototype.c);a.a(a.BlockGroup.prototype,"opacity",a.BlockGroup.prototype.opacity);a.a(a.BlockGroup.prototype,"rotation",a.BlockGroup.prototype.rotation);a.a(a.BlockGroup.prototype,"scale",a.BlockGroup.prototype.scale);a.a(a.BlockGroup.prototype,"update",a.BlockGroup.prototype.update);
a.a(a.BlockGroup.prototype,"frame",a.BlockGroup.prototype.frame);a.a(a.BlockGroup.prototype,"parent",a.BlockGroup.prototype.parent);a.a(a.BlockGroup.prototype,"children",a.BlockGroup.prototype.children);a.a(a.BlockGroup.prototype,"setFrame",a.BlockGroup.prototype.J);a.a(a.BlockGroup.prototype,"setContentSize",a.BlockGroup.prototype.T);a.a(a.BlockGroup.prototype,"setScale",a.BlockGroup.prototype.Ja);a.a(a.BlockGroup.prototype,"setColor",a.BlockGroup.prototype.ga);a.a(a.BlockGroup.prototype,"setTexture",
a.BlockGroup.prototype.K);a.a(a.BlockGroup.prototype,"moveTo",a.BlockGroup.prototype.moveTo);a.a(a.BlockGroup.prototype,"moveBy",a.BlockGroup.prototype.moveBy);a.a(a.BlockGroup.prototype,"rotateTo",a.BlockGroup.prototype.Da);a.a(a.BlockGroup.prototype,"rotateBy",a.BlockGroup.prototype.Ca);a.a(a.BlockGroup.prototype,"addChild",a.BlockGroup.prototype.z);a.a(a.BlockGroup.prototype,"removeChild",a.BlockGroup.prototype.removeChild);a.a(a.BlockGroup.prototype,"createBlock",a.BlockGroup.prototype.Va)})(window);(function(g){var a=g.ChesterGL,c={frames:{}};c.Jb=function(b){if(b.meta&&b.meta.version=="1.0"){var d=b.meta.image;a.u("texture",d,function(a){var a=a.height,f=b.frames,g;for(g in f){var h=f[g],A={frame:{},c:""};A.frame=quat4.create([h.frame.x,a-(h.frame.y+h.frame.h),h.frame.w,h.frame.h]);A.c=d;c.frames[g]=A}})}else i("Unkown json data")};c.bb=function(a){return c.frames[a]};c.Ib=function(a){console.log("loadFrames: will fetch "+a);$.ajax({url:a,async:o,dataType:"json",success:function(a,b){b=="success"&&
c.Jb(a)}})};a.a(a,"BlockFrames",c);a.a(c,"getFrame",c.bb);a.a(c,"loadFrames",c.Ib)})(window);(function(g){var a=g.ChesterGL;a.TMXBlock=function(c){(c=a.TMXBlock.jb[c])||i("Invalid map - make sure you call loadTMX first");a.Block.call(this,l,a.Block.g.TMXBLOCK);for(var b=0;b<c.layers.length;b++){for(var d=c.layers[b],e=a.d?new a.BlockGroup(c.texture,d.blocks.length):new a.Block,f=0;f<d.blocks.length;f++){var g=d.blocks[f],h=void 0;a.d?h=e.Va(g.frame):(h=new a.Block(g.frame),h.K(c.texture));h.moveTo(g.position);e.z(h)}this.z(e)}};a.TMXBlock.prototype=Object.create(a.Block.prototype);a.TMXBlock.prototype.Q=
function(){};a.TMXBlock.jb={};a.TMXBlock.Kb=function(c){a.u("tmx",{path:c,dataType:"xml"},function(b){var d={},b=$(b).find("map"),e=b.find("tileset").first(),f=b.attr("orientation");if(e){d.tileSize=r([parseInt(e.attr("tilewidth"),10),parseInt(e.attr("tileheight"),10)]);d.mapTileSize=r([parseInt(b.attr("tilewidth"),10),parseInt(b.attr("tileheight"),10)]);e.attr("spacing")&&(d.spacing=parseInt(e.attr("spacing"),10));e.attr("margin")&&(d.margin=parseInt(e.attr("margin"),10));var e=e.find("image").first(),
g=r([parseInt(e.attr("width"),10),parseInt(e.attr("height"),10)]);d.texture=e.attr("source");a.u("texture",d.texture);d.layers=[];b.find("layer").each(function(a,b){var c={blocks:[]},e=r([parseInt($(b).attr("width"),10),parseInt($(b).attr("height"),10)]),m=$(b).find("data").first();if(m){(m.attr("encoding")!="base64"||m.attr("compression"))&&i("Invalid TMX Data");for(var m=m.text().trim(),m=base64.decode(m),s=0,t=0;t<e[1];t++)for(var u=0;u<e[0];u++){var w=((m.charCodeAt(s+3)&255)<<24|(m.charCodeAt(s+
2)&255)<<16|(m.charCodeAt(s+1)&255)<<8|m.charCodeAt(s+0)&255)-1,B={},x=d.margin||0,v=d.spacing||0,q=d.tileSize,y=d.mapTileSize,E=parseInt((g[0]-x*2+v)/(q[0]+v),10),w=quat4.create([w%E*(q[0]+v)+x,g[1]-q[1]-x-v-parseInt(w/E,10)*(q[1]+v)+x,q[0],q[1]]);B.frame=w;var C,D;f=="orthogonal"?(C=u*y[0]+q[0]/2,D=(e[1]-t-1)*y[1]+q[1]/2):f=="isometric"?(C=y[0]/2*(e[0]+u-t-1)+q[0]/2,D=y[1]/2*(e[1]*2-u-t-2)+q[1]/2):i("Invalid orientation");B.position=[C,D,0];c.blocks.push(B);s+=4}}else i("No data for layer!");d.layers.push(c)})}a.TMXBlock.jb[c]=
d})};a.Ba("tmx",function(c,b){console.log("tmx loaded: "+c);a.l.tmx[c].data=b;return j});a.a(a,"TMXBlock",a.TMXBlock);a.a(a.TMXBlock,"loadTMX",a.TMXBlock.Kb)})(window);(function(g){var a=g.ChesterGL;a.Action=function(a,d){this.Ta=a;this.La=d*1E3;this.X=0};a.Action.prototype.Ta=l;a.Action.prototype.La=0;a.Action.prototype.X=0;a.Action.prototype.ua=o;a.Action.prototype.update=function(a){this.X+=a;if(this.X>=this.La)this.ua=j};a.MoveToAction=function(b,d,c){a.Action.call(this,b,d);this.ta=vec3.create(c);this.rb=vec3.create(b.position)};a.MoveToAction.prototype=Object.create(a.Action.prototype);a.MoveToAction.prototype.ta=l;a.MoveToAction.prototype.rb=l;var c=vec3.create();
a.MoveToAction.prototype.update=function(b){a.Action.prototype.update.call(this,b);b=this.Ta;if(this.ua)b.moveTo(this.ta);else{var d=Math.min(1,this.X/this.La);vec3.lerp(this.rb,this.ta,d,c);b.moveTo(c)}};a.o={};a.o.Ha=[];a.o.pb=function(a){this.Ha.push(a)};a.o.ub=function(a){for(var d=0,c=this.Ha.length,d=0;d<c;d++){var f=this.Ha[d];!f.ua&&f.update(a)}};a.a(a,"ActionManager",a.o);a.a(a.o,"scheduleAction",a.o.pb);a.a(a.o,"tick",a.o.ub)})(window);(function(g){var a=g.ChesterGL;a.ParticleSystem=function(b){a.Block.call(this,l,a.Block.g.$b);var d=this;a.u("texture",b.texture,function(){d.gb(b)})};a.ParticleSystem.Ra=o;a.ParticleSystem.ib=function(){a.Z("particles",function(b){var d=a.b;b.D=d.getUniformLocation(b,"uMVPMatrix");b.Vb=d.getUniformLocation(b,"uSampler");b.Yb=d.getUniformLocation(b,"u_time");b.Xb=d.getUniformLocation(b,"u_startColor");b.Wb=d.getUniformLocation(b,"u_endColor");b.e={a_startPosition:d.getAttribLocation(b,"a_startPosition"),
a_lifetime:d.getAttribLocation(b,"a_lifetime"),a_startTime:d.getAttribLocation(b,"a_startTime"),a_startSize:d.getAttribLocation(b,"a_startSize"),a_endSize:d.getAttribLocation(b,"a_endSize"),a_speed:d.getAttribLocation(b,"a_speed")};b=d.getError();b!=0&&console.log("gl error: "+b)});a.ParticleSystem.Ra=j};a.ParticleSystem.prototype=Object.create(a.Block.prototype);a.ParticleSystem.prototype.Fa=j;a.ParticleSystem.prototype.kb=l;a.ParticleSystem.prototype.Ya=0;a.ParticleSystem.prototype.Y=0;a.ParticleSystem.prototype.v=
0;a.ParticleSystem.prototype.B=0;a.ParticleSystem.prototype.duration=0;a.ParticleSystem.prototype.za=0;a.ParticleSystem.prototype.fb=0;a.ParticleSystem.prototype.qb=l;a.ParticleSystem.prototype.da=l;a.ParticleSystem.prototype.Za=l;a.ParticleSystem.prototype.ba=l;a.ParticleSystem.prototype.ca=l;a.ParticleSystem.prototype.sb=0;a.ParticleSystem.prototype.tb=0;a.ParticleSystem.prototype.$a=0;a.ParticleSystem.prototype.ab=0;a.ParticleSystem.prototype.Aa=o;a.ParticleSystem.prototype.elapsedTime=0;a.ParticleSystem.prototype.qa=
["SRC_ALPHA","ONE_MINUS_SRC_ALPHA"];a.ParticleSystem.prototype.gb=function(b){this.j=-1;a.ParticleSystem.Ra||a.ParticleSystem.ib();this.kb=b.texture;this.B=b.maxParticles;this.duration=parseFloat(b.duration)*1E3;this.za=parseFloat(b.lifetime)*1E3;this.fb=parseFloat(b.lifetimeVariance)*1E3;this.qb=quat4.create(b.startColor);this.da=vec3.create(b.positionVariance);this.Za=quat4.create(b.endColor);this.ba=vec3.create(b.speed);this.ca=vec3.create(b.speedVariance);this.sb=parseFloat(b.startSize);this.tb=
parseFloat(b.startSizeVariance);this.$a=parseFloat(b.endSize);this.ab=parseFloat(b.endSizeVariance);this.elapsedTime=0;this.qa=b.blendOptions.slice(0);this.Fa=j;this.s=a.b.createBuffer();this.m=new Float32Array(this.B*10);this.ob()};a.ParticleSystem.prototype.Sa=function(){this.xa(this.v,Math.abs(this.za+this.fb*(Math.random()*2-1)),this.elapsedTime);this.v++;this.Aa=j};a.ParticleSystem.prototype.xa=function(a,d,c){var f=this.m;f[a*10+0]=d||-1;f[a*10+1]=c||0;f[a*10+2]=this.sb+this.tb*(Math.random()*
2-1);f[a*10+3]=this.$a+this.ab*(Math.random()*2-1);f[a*10+4]=this.ba[0]+this.ca[0]*(Math.random()*2-1);f[a*10+5]=this.ba[1]+this.ca[1]*(Math.random()*2-1);f[a*10+6]=this.ba[2]+this.ca[2]*(Math.random()*2-1);f[a*10+7]=(Math.random()*2-1)*this.da[0];f[a*10+8]=(Math.random()*2-1)*this.da[1];f[a*10+9]=(Math.random()*2-1)*this.da[2]};a.ParticleSystem.prototype.ob=function(){for(var b=a.S("particles"),d=a.b,c=0;c<this.B;c++)this.xa(c);d.uniform4fv(b.Xb,this.qb);d.uniform4fv(b.Wb,this.Za);d.uniform1i(b.Vb,
0);this.Ia();this.v=this.Y=0;this.Ya=this.B/Math.abs(this.za)};a.ParticleSystem.prototype.Ia=function(){var b=a.b;b.bindBuffer(b.ARRAY_BUFFER,this.s);b.bufferData(b.ARRAY_BUFFER,this.m,b.STATIC_DRAW)};var c=new Float32Array(10);a.ParticleSystem.prototype.update=function(b){if(a.S("particles")){this.elapsedTime+=b;var d=1/this.Ya;for(this.Y+=b;this.v<this.B&&this.Y>d&&this.Fa;)this.Sa(),this.Y-=d;for(b=0;b<this.B;b++){var d=this.m,e=b*10;if(d[e]>0&&d[e]+d[e+1]<=this.elapsedTime&&b!=this.v-1){var f=
d.subarray(e,e+10);c.set(f);c[0]=-1;f=d.subarray(e+10,this.v*10);d.set(f,e);d.set(c,(this.v-1)*10);this.v--}}if(this.duration>0&&this.elapsedTime>this.duration)this.Fa=o}};a.ParticleSystem.prototype.Q=function(){var b=a.S("particles");if(b){var c=a.b,e=a.G("texture",this.kb);c.enable(c.BLEND);c.blendFunc(c[this.qa[0]],c[this.qa[1]]);if(this.Aa)this.Ia(),this.Aa=o;c.uniform1f(b.Yb,this.elapsedTime);c.activeTexture(c.TEXTURE0);c.bindTexture(c.TEXTURE_2D,e.ha);c.bindBuffer(c.ARRAY_BUFFER,this.s);c.vertexAttribPointer(b.e.a_lifetime,
3,c.FLOAT,o,40,0);c.vertexAttribPointer(b.e.a_startTime,3,c.FLOAT,o,40,4);c.vertexAttribPointer(b.e.a_startSize,3,c.FLOAT,o,40,8);c.vertexAttribPointer(b.e.a_endSize,3,c.FLOAT,o,40,12);c.vertexAttribPointer(b.e.a_speed,3,c.FLOAT,o,40,16);c.vertexAttribPointer(b.e.a_startPosition,3,c.FLOAT,o,40,28);(this.i||this.parent&&this.parent.i)&&mat4.multiply(a.I,this.f,this.C);c.uniformMatrix4fv(b.D,o,this.C);c.drawArrays(c.POINTS,0,this.B)}};a.a(a,"ParticleSystem",a.ParticleSystem);a.a(a.ParticleSystem.prototype,
"visible",a.ParticleSystem.prototype.U);a.a(a.ParticleSystem.prototype,"position",a.ParticleSystem.prototype.position);a.a(a.ParticleSystem.prototype,"contentSize",a.ParticleSystem.prototype.r);a.a(a.ParticleSystem.prototype,"color",a.ParticleSystem.prototype.color);a.a(a.ParticleSystem.prototype,"texture",a.ParticleSystem.prototype.c);a.a(a.ParticleSystem.prototype,"opacity",a.ParticleSystem.prototype.opacity);a.a(a.ParticleSystem.prototype,"rotation",a.ParticleSystem.prototype.rotation);a.a(a.ParticleSystem.prototype,
"scale",a.ParticleSystem.prototype.scale);a.a(a.ParticleSystem.prototype,"update",a.ParticleSystem.prototype.update);a.a(a.ParticleSystem.prototype,"frame",a.ParticleSystem.prototype.frame);a.a(a.ParticleSystem.prototype,"parent",a.ParticleSystem.prototype.parent);a.a(a.ParticleSystem.prototype,"children",a.ParticleSystem.prototype.children);a.a(a.ParticleSystem,"loadShaders",a.ParticleSystem.ib);a.a(a.ParticleSystem.prototype,"setFrame",a.ParticleSystem.prototype.J);a.a(a.ParticleSystem.prototype,
"setContentSize",a.ParticleSystem.prototype.T);a.a(a.ParticleSystem.prototype,"setScale",a.ParticleSystem.prototype.Ja);a.a(a.ParticleSystem.prototype,"setColor",a.ParticleSystem.prototype.ga);a.a(a.ParticleSystem.prototype,"setTexture",a.ParticleSystem.prototype.K);a.a(a.ParticleSystem.prototype,"moveTo",a.ParticleSystem.prototype.moveTo);a.a(a.ParticleSystem.prototype,"moveBy",a.ParticleSystem.prototype.moveBy);a.a(a.ParticleSystem.prototype,"rotateTo",a.ParticleSystem.prototype.Da);a.a(a.ParticleSystem.prototype,
"rotateBy",a.ParticleSystem.prototype.Ca);a.a(a.ParticleSystem.prototype,"addChild",a.ParticleSystem.prototype.z);a.a(a.ParticleSystem.prototype,"removeChild",a.ParticleSystem.prototype.removeChild);a.a(a.ParticleSystem.prototype,"loadProperties",a.ParticleSystem.prototype.gb);a.a(a.ParticleSystem.prototype,"addParticle",a.ParticleSystem.prototype.Sa);a.a(a.ParticleSystem.prototype,"initParticle",a.ParticleSystem.prototype.xa);a.a(a.ParticleSystem.prototype,"resetParticles",a.ParticleSystem.prototype.ob);
a.a(a.ParticleSystem.prototype,"sendParticleData",a.ParticleSystem.prototype.Ia)})(window);
