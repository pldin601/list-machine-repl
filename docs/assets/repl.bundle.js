webpackJsonp([0],{21:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),r=n(15),s=n(32);n(66),r.render(o.createElement(s.App,null),document.getElementById("app"))},32:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(33);e.App=o.default},33:function(t,e,n){"use strict";var o=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),r=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))(function(r,s){function i(t){try{c(o.next(t))}catch(t){s(t)}}function a(t){try{c(o.throw(t))}catch(t){s(t)}}function c(t){t.done?r(t.value):new n(function(e){e(t.value)}).then(i,a)}c((o=o.apply(t,e||[])).next())})},s=this&&this.__generator||function(t,e){function n(t){return function(e){return o([t,e])}}function o(n){if(r)throw new TypeError("Generator is already executing.");for(;c;)try{if(r=1,s&&(i=s[2&n[0]?"return":n[0]?"throw":"next"])&&!(i=i.call(s,n[1])).done)return i;switch(s=0,i&&(n=[0,i.value]),n[0]){case 0:case 1:i=n;break;case 4:return c.label++,{value:n[1],done:!1};case 5:c.label++,s=n[1],n=[0];continue;case 7:n=c.ops.pop(),c.trys.pop();continue;default:if(i=c.trys,!(i=i.length>0&&i[i.length-1])&&(6===n[0]||2===n[0])){c=0;continue}if(3===n[0]&&(!i||n[1]>i[0]&&n[1]<i[3])){c.label=n[1];break}if(6===n[0]&&c.label<i[1]){c.label=i[1],i=n;break}if(i&&c.label<i[2]){c.label=i[2],c.ops.push(n);break}i[2]&&c.ops.pop(),c.trys.pop();continue}n=e.call(t,c)}catch(t){n=[6,t],s=0}finally{r=i=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var r,s,i,a,c={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a};Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),a=n(34),c=n(54),u=function(t){function e(e){var n=t.call(this,e)||this;return n.evaluate=a.default(),n.onEditorEval=n.onEditorEval.bind(n),n.onCodeUpdate=n.onCodeUpdate.bind(n),n}return o(e,t),e.prototype.getCode=function(){var t=window.location.hash;return t?decodeURIComponent(t.slice(1)):this.getCodeFromLocalStorage()},e.prototype.onEditorEval=function(t){return r(this,void 0,void 0,function(){return s(this,function(e){switch(e.label){case 0:return[4,this.consoleRef.clean()];case 1:return e.sent(),[4,this.consoleRef.writeLine("input","")];case 2:return e.sent(),[4,this.consoleRef.eval(t)];case 3:return e.sent(),[2]}})})},e.prototype.onCodeUpdate=function(t){this.saveCodeToLocalStorage(t),window.location.hash=encodeURIComponent(t)},e.prototype.getCodeFromLocalStorage=function(){return window.localStorage.getItem("code")||""},e.prototype.saveCodeToLocalStorage=function(t){window.localStorage.setItem("code",t)},e.prototype.render=function(){var t=this;return i.createElement("div",{className:"repl-container"},i.createElement(c.Editor,{code:this.getCode(),onEval:this.onEditorEval,onChange:this.onCodeUpdate}),i.createElement(c.Console,{ref:function(e){return t.consoleRef=e},onEval:function(e){return a.print(t.evaluate(e))}}))},e}(i.Component);e.default=u},54:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(55);e.Console=o.default;var r=n(56);e.Editor=r.default},55:function(t,e,n){"use strict";var o=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),r=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))(function(r,s){function i(t){try{c(o.next(t))}catch(t){s(t)}}function a(t){try{c(o.throw(t))}catch(t){s(t)}}function c(t){t.done?r(t.value):new n(function(e){e(t.value)}).then(i,a)}c((o=o.apply(t,e||[])).next())})},s=this&&this.__generator||function(t,e){function n(t){return function(e){return o([t,e])}}function o(n){if(r)throw new TypeError("Generator is already executing.");for(;c;)try{if(r=1,s&&(i=s[2&n[0]?"return":n[0]?"throw":"next"])&&!(i=i.call(s,n[1])).done)return i;switch(s=0,i&&(n=[0,i.value]),n[0]){case 0:case 1:i=n;break;case 4:return c.label++,{value:n[1],done:!1};case 5:c.label++,s=n[1],n=[0];continue;case 7:n=c.ops.pop(),c.trys.pop();continue;default:if(i=c.trys,!(i=i.length>0&&i[i.length-1])&&(6===n[0]||2===n[0])){c=0;continue}if(3===n[0]&&(!i||n[1]>i[0]&&n[1]<i[3])){c.label=n[1];break}if(6===n[0]&&c.label<i[1]){c.label=i[1],i=n;break}if(i&&c.label<i[2]){c.label=i[2],c.ops.push(n);break}i[2]&&c.ops.pop(),c.trys.pop();continue}n=e.call(t,c)}catch(t){n=[6,t],s=0}finally{r=i=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var r,s,i,a,c={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a};Object.defineProperty(e,"__esModule",{value:!0});var i=n(19),a=n(2),c=function(t){function e(e){var n=t.call(this,e)||this;return n.setStateAsync=function(t){return new Promise(function(e){n.setState(t,e)})},n.state={input:"",cursorPosition:0,log:[]},n.renderLogItem=n.renderLogItem.bind(n),n.onKeyDown=n.onKeyDown.bind(n),n.onKeyPress=n.onKeyPress.bind(n),n.onPaste=n.onPaste.bind(n),n}return o(e,t),e.prototype.onKeyPress=function(t){switch(t.preventDefault(),t.key){case"Enter":return t.ctrlKey?this.writeAtCursor("\n"):this.onEnterPressed();default:return this.writeAtCursor(t.key)}},e.prototype.onPaste=function(t){t.preventDefault();var e=t.clipboardData.getData("Text");return this.writeAtCursor(e)},e.prototype.onKeyDown=function(t){switch(t.key){case"ArrowLeft":return this.onArrowLeftKeyPressed();case"ArrowRight":return this.onArrowRightKeyPressed();case"End":return this.onEndKeyPressed();case"Home":return this.onHomePressed();case"Backspace":return this.onBackspacePressed();case"Delete":return this.onDeletePressed()}},e.prototype.onArrowLeftKeyPressed=function(){return this.setStateAsync({cursorPosition:Math.max(0,this.state.cursorPosition-1)})},e.prototype.onArrowRightKeyPressed=function(){return this.setStateAsync({cursorPosition:Math.min(this.state.input.length,this.state.cursorPosition+1)})},e.prototype.onEndKeyPressed=function(){return this.setStateAsync({cursorPosition:this.state.input.length})},e.prototype.onHomePressed=function(){return this.setStateAsync({cursorPosition:0})},e.prototype.onBackspacePressed=function(){var t=this.state.input.slice(0,this.state.cursorPosition),e=this.state.input.slice(this.state.cursorPosition);return this.setStateAsync({input:""+t.slice(0,-1)+e,cursorPosition:Math.max(0,this.state.cursorPosition-1)})},e.prototype.onDeletePressed=function(){var t=this.state.input.slice(0,this.state.cursorPosition),e=this.state.input.slice(this.state.cursorPosition);return this.setStateAsync({input:""+t+e.slice(1)})},e.prototype.onEnterPressed=function(){return r(this,void 0,void 0,function(){var t;return s(this,function(e){switch(e.label){case 0:return t=this.state.input,[4,this.writeLine("input",t)];case 1:return e.sent(),[4,this.eval(t)];case 2:return e.sent(),[4,this.cleanInput()];case 3:return e.sent(),[2]}})})},e.prototype.eval=function(t){try{var e=String(this.props.onEval(t));return this.writeLine("output",e)}catch(t){return this.writeLine("error",t.message)}},e.prototype.writeLine=function(t,e){return this.setStateAsync({log:this.state.log.concat([{type:t,content:e}])})},e.prototype.cleanInput=function(){return this.setStateAsync({input:"",cursorPosition:0})},e.prototype.clean=function(){return this.setStateAsync({input:"",cursorPosition:0,log:[]})},e.prototype.writeAtCursor=function(t){var e=this.state.input,n=e.slice(0,this.state.cursorPosition),o=e.slice(this.state.cursorPosition);return this.setStateAsync({input:""+n+t+o,cursorPosition:this.state.cursorPosition+t.length})},e.prototype.componentDidMount=function(){this.focus()},e.prototype.focus=function(){this.elementRef.focus()},e.prototype.renderLogItem=function(t,e){return"input"===t.type?a.createElement("span",{key:e,className:i("row",t.type)},a.createElement("span",null,"> "),a.createElement("span",null,t.content+"\n")):a.createElement("span",{key:e,className:i("row",t.type)},t.content+"\n")},e.prototype.renderLog=function(){return a.createElement("div",{className:"log"},this.state.log.map(this.renderLogItem))},e.prototype.renderPrompt=function(){var t=this.state.input,e=t.slice(0,this.state.cursorPosition),n=t[this.state.cursorPosition],o=t.slice(this.state.cursorPosition+1);return a.createElement("div",{className:"prompt"},a.createElement("span",null,"> "),a.createElement("span",null,e),a.createElement("span",{className:"cursor"},this.sanitizeCharUnderCursor(n)),a.createElement("span",null,o))},e.prototype.render=function(){var t=this;return a.createElement("div",{ref:function(e){return t.elementRef=e},className:"console",tabIndex:0,onKeyDown:this.onKeyDown,onKeyPress:this.onKeyPress,onPaste:this.onPaste},this.renderLog(),this.renderPrompt())},e.prototype.sanitizeCharUnderCursor=function(t){return t?t.replace("\n"," \n"):" "},e}(a.Component);e.default=c},56:function(t,e,n){"use strict";var o=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),s=n(57);n(65);var i={mode:"commonlisp",theme:"material"},a=function(t){function e(e){var n=t.call(this,e)||this;return n.state={code:n.props.code},n.onCodeUpdate=n.onCodeUpdate.bind(n),n.onEvalClick=n.onEvalClick.bind(n),n}return o(e,t),e.prototype.onCodeUpdate=function(t){this.setState({code:t}),this.props.onChange(t)},e.prototype.onEvalClick=function(){this.props.onEval(this.state.code)},e.prototype.render=function(){return r.createElement("div",{className:"editor"},r.createElement(s,{value:this.state.code,onChange:this.onCodeUpdate,options:i}),r.createElement("div",{className:"panel"},r.createElement("button",{className:"button flat",onClick:this.onEvalClick},"Evaluate")))},e}(r.Component);e.default=a},66:function(t,e){}},[21]);