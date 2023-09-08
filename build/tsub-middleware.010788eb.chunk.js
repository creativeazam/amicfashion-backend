(self.webpackChunkmedusa_starter_default=self.webpackChunkmedusa_starter_default||[]).push([[604],{15431:(t,r,e)=>{"use strict";e.r(r),e.d(r,{tsubMiddleware:()=>o});var n=e(47452),s=e.n(n),o=function(t){return function(r){var e=r.payload,s=r.integration,o=r.next;new n.Store(t).getRulesByDestinationName(s).forEach(function(t){for(var r=t.matchers,s=t.transformers,i=0;i<r.length;i++)if(n.matches(e.obj,r[i])&&(e.obj=n.transform(e.obj,s[i]),null===e.obj))return o(null)}),o(e)}}},47452:function(t,r,e){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(r,"__esModule",{value:!0}),r.Store=r.matches=r.transform=void 0;var s=e(10759);Object.defineProperty(r,"transform",{enumerable:!0,get:function(){return n(s).default}});var o=e(28574);Object.defineProperty(r,"matches",{enumerable:!0,get:function(){return n(o).default}});var i=e(71304);Object.defineProperty(r,"Store",{enumerable:!0,get:function(){return n(i).default}})},28574:function(t,r,e){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(r,"__esModule",{value:!0});var s=n(e(9913));function o(t,r){return Array.isArray(t)?t:"object"==typeof t?t.value:(0,s.default)(r,t)}function i(t){return!!Array.isArray(t)&&(("lowercase"===t[0]||"length"===t[0]||"typeof"===t[0])&&2===t.length||("contains"===t[0]||"match"===t[0])&&3===t.length)}function a(t,r){for(var e,n,s={t:"",ok:!1,err:!1};t.length>0;){if(0===r.length)return s;switch(t[0]){case"[":var o=r[0];r=r.slice(1);var i=!0;(t=t.slice(1)).length>0&&"^"===t[0]&&(i=!1,t=t.slice(1));for(var a=!1,c=0;;){if(t.length>0&&"]"===t[0]&&c>0){t=t.slice(1);break}var f="",p="";if(f=(e=u(t)).char,t=e.newChunk,e.err||(p=f,"-"===t[0]&&(p=(n=u(t.slice(1))).char,t=n.newChunk,n.err)))return s;f<=o&&o<=p&&(a=!0),c++}if(a!==i)return s;break;case"?":r=r.slice(1),t=t.slice(1);break;case"\\":if(0===(t=t.slice(1)).length)return s.err=!0,s;default:if(t[0]!==r[0])return s;r=r.slice(1),t=t.slice(1)}}return s.t=r,s.ok=!0,s.err=!1,s}function u(t){var r={char:"",newChunk:"",err:!1};return 0===t.length||"-"===t[0]||"]"===t[0]||"\\"===t[0]&&0===(t=t.slice(1)).length?r.err=!0:(r.char=t[0],r.newChunk=t.slice(1),0===r.newChunk.length&&(r.err=!0)),r}r.default=function(t,r){if(!r)throw Error("No matcher supplied!");switch(r.type){case"all":return!0;case"fql":return function(t,r){if(!t)return!1;try{t=JSON.parse(t)}catch(r){throw Error('Failed to JSON.parse FQL intermediate representation "'.concat(t,'": ').concat(r))}var e=function t(r,e){if(!Array.isArray(r))return!0===o(r,e);var n,s,u,c,f,p,l=r[0];switch(l){case"!":return!t(r[1],e);case"or":for(var v=1;v<r.length;v++)if(t(r[v],e))return!0;return!1;case"and":for(var v=1;v<r.length;v++)if(!t(r[v],e))return!1;return!0;case"=":case"!=":return function(r,e,n,s){switch(i(r)&&(r=t(r,s)),i(e)&&(e=t(e,s)),"object"==typeof r&&"object"==typeof e&&(r=JSON.stringify(r),e=JSON.stringify(e)),n){case"=":return r===e;case"!=":return r!==e;default:throw Error("Invalid operator in compareItems: ".concat(n))}}(o(r[1],e),o(r[2],e),l,e);case"<=":case"<":case">":case">=":return function(r,e,n,s){if(i(r)&&(r=t(r,s)),i(e)&&(e=t(e,s)),"number"!=typeof r||"number"!=typeof e)return!1;switch(n){case"<=":return r<=e;case">=":return r>=e;case"<":return r<e;case">":return r>e;default:throw Error("Invalid operator in compareNumbers: ".concat(n))}}(o(r[1],e),o(r[2],e),l,e);case"in":return n=o(r[1],e),void 0!==o(r[2],e).find(function(t){return o(t,e)===n});case"contains":return s=o(r[1],e),u=o(r[2],e),"string"==typeof s&&"string"==typeof u&&-1!==s.indexOf(u);case"match":return c=o(r[1],e),f=o(r[2],e),"string"==typeof c&&"string"==typeof f&&function(t,r){var e,n;t:for(;t.length>0;){var s=void 0,o=void 0;if(s=(e=function(t){for(var r,e={star:!1,chunk:"",pattern:""};t.length>0&&"*"===t[0];)t=t.slice(1),e.star=!0;var n=!1;r:for(r=0;r<t.length;r++)switch(t[r]){case"\\":r+1<t.length&&r++;break;case"[":n=!0;break;case"]":n=!1;break;case"*":if(!n)break r}return e.chunk=t.slice(0,r),e.pattern=t.slice(r),e}(t)).star,o=e.chunk,t=e.pattern,s&&""===o)return!0;var i=a(o,r),u=i.t,c=i.ok,f=i.err;if(f)return!1;if(c&&(0===u.length||t.length>0)){r=u;continue}if(s)for(var p=0;p<r.length;p++){if(u=(n=a(o,r.slice(p+1))).t,c=n.ok,f=n.err,c){if(0===t.length&&u.length>0)continue;r=u;continue t}if(f)break}return!1}return 0===r.length}(f,c);case"lowercase":var y=o(r[1],e);if("string"!=typeof y)return null;return y.toLowerCase();case"typeof":return typeof o(r[1],e);case"length":return null===(p=o(r[1],e))?0:Array.isArray(p)||"string"==typeof p?p.length:NaN;default:throw Error("FQL IR could not evaluate for token: ".concat(l))}}(t,r);return"boolean"==typeof e&&e}(r.ir,t);default:throw Error("Matcher of type ".concat(r.type," unsupported."))}}},71304:(t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var e=function(){function t(t){this.rules=[],this.rules=t||[]}return t.prototype.getRulesByDestinationName=function(t){for(var r=[],e=0,n=this.rules;e<n.length;e++){var s=n[e];(s.destinationName===t||void 0===s.destinationName)&&r.push(s)}return r},t}();r.default=e},10759:function(t,r,e){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(r,"__esModule",{value:!0});var s=n(e(82777)),o=n(e(9913)),i=n(e(74650)),a=e(19775),u=e(13098);function c(t,r,e){Object.entries(r).forEach(function(r){var n=r[0],s=r[1],i=function(t){"object"==typeof t&&null!==t&&e(t,s)},a=""===n?t:(0,o.default)(t,n);Array.isArray(a)?a.forEach(i):i(a)})}function f(t,r){for(var e=0;e<8;e++)for(var n=t[e],s=128;s>=1;s/=2)n-s>=0?(n-=s,r.push(1)):r.push(0)}r.default=function(t,r){for(var e=0;e<r.length;e++){var n,p,l=r[e];switch(l.type){case"drop":return null;case"drop_properties":c(t,l.config.drop,function(t,r){r.forEach(function(r){return delete t[r]})});break;case"allow_properties":c(t,l.config.allow,function(t,r){Object.keys(t).forEach(function(e){r.includes(e)||delete t[e]})});break;case"sample_event":if(n=t,!((p=l.config).sample.percent<=0)&&(p.sample.percent>=1||(p.sample.path?function(t,r){var e=(0,o.default)(t,r.sample.path),n=(0,s.default)(JSON.stringify(e)),a=-64,u=[];f(n.slice(0,8),u);for(var c=0,p=0;p<64&&1!==u[p];p++)c++;if(0!==c){var l=[];f(n.slice(9,16),l),a-=c,u.splice(0,c),l.splice(64-c),u=u.concat(l)}return u[63]=0===u[63]?1:0,(0,i.default)(parseInt(u.join(""),2),a)<r.sample.percent}(n,p):Math.random()<=p.sample.percent)))break;return null;case"map_properties":!function(t,r){var e=JSON.parse(JSON.stringify(t));for(var n in r.map)if(r.map.hasOwnProperty(n)){var s=r.map[n],i=n.split("."),c=void 0;if(i.length>1?(i.pop(),c=(0,o.default)(e,i.join("."))):c=t,"object"==typeof c){if(s.copy){var f=(0,o.default)(e,s.copy);void 0!==f&&(0,a.dset)(t,n,f)}else if(s.move){var p=(0,o.default)(e,s.move);void 0!==p&&(0,a.dset)(t,n,p),(0,u.unset)(t,s.move)}else s.hasOwnProperty("set")&&(0,a.dset)(t,n,s.set);if(s.to_string){var l=(0,o.default)(t,n);if("string"==typeof l||"object"==typeof l&&null!==l)continue;void 0!==l?(0,a.dset)(t,n,JSON.stringify(l)):(0,a.dset)(t,n,"undefined")}}}}(t,l.config);break;case"hash_properties":break;default:throw Error('Transformer of type "'.concat(l.type,'" is unsupported.'))}}return t}},13098:function(t,r,e){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(r,"__esModule",{value:!0}),r.unset=void 0;var s=n(e(9913));r.unset=function(t,r){if((0,s.default)(t,r)){for(var e=r.split("."),n=e.pop();e.length&&"\\"===e[e.length-1].slice(-1);)n=e.pop().slice(0,-1)+"."+n;for(;e.length;)t=t[r=e.shift()];return delete t[n]}return!0}},50659:t=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r="function"==typeof Float64Array?Float64Array:void 0;t.exports=r},72501:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n,s=e(92354),o=e(50659),i=e(28404);n=s()?o:i,t.exports=n},28404:t=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function r(){throw Error("not implemented")}t.exports=r},8429:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n,s=e(30199),o=e(42753),i=e(76422);n=s()?o:i,t.exports=n},76422:t=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function r(){throw Error("not implemented")}t.exports=r},42753:t=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r="function"==typeof Uint16Array?Uint16Array:void 0;t.exports=r},97004:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n,s=e(99788),o=e(52888),i=e(33610);n=s()?o:i,t.exports=n},33610:t=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function r(){throw Error("not implemented")}t.exports=r},52888:t=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r="function"==typeof Uint32Array?Uint32Array:void 0;t.exports=r},93277:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n,s=e(96957),o=e(60836),i=e(32523);n=s()?o:i,t.exports=n},32523:t=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function r(){throw Error("not implemented")}t.exports=r},60836:t=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r="function"==typeof Uint8Array?Uint8Array:void 0;t.exports=r},70062:t=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r="function"==typeof Float64Array?Float64Array:null;t.exports=r},92354:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(45340);t.exports=n},45340:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(58711),s=e(70062);function o(){var t,r;if("function"!=typeof s)return!1;try{r=new s([1,3.14,-3.14,NaN]),t=n(r)&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}t.exports=o},80682:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(53273);t.exports=n},53273:t=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=Object.prototype.hasOwnProperty;function e(t,e){return null!=t&&r.call(t,e)}t.exports=e},20271:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(87797);t.exports=n},87797:t=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function r(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}t.exports=r},35431:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(34096);t.exports=n},34096:(t,r,e)=>{"use strict";var n=e(20271)();function s(){return n&&"symbol"==typeof Symbol.toStringTag}t.exports=s},30199:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(21239);t.exports=n},21239:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(31109),s=e(9942),o=e(17882);function i(){var t,r;if("function"!=typeof o)return!1;try{r=[1,3.14,-3.14,s+1,s+2],r=new o(r),t=n(r)&&1===r[0]&&3===r[1]&&r[2]===s-2&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}t.exports=i},17882:t=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r="function"==typeof Uint16Array?Uint16Array:null;t.exports=r},99788:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(18152);t.exports=n},18152:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(17688),s=e(99576),o=e(94021);function i(){var t,r;if("function"!=typeof o)return!1;try{r=[1,3.14,-3.14,s+1,s+2],r=new o(r),t=n(r)&&1===r[0]&&3===r[1]&&r[2]===s-2&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}t.exports=i},94021:t=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r="function"==typeof Uint32Array?Uint32Array:null;t.exports=r},96957:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(6183);t.exports=n},6183:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(54845),s=e(71417),o=e(32445);function i(){var t,r;if("function"!=typeof o)return!1;try{r=[1,3.14,-3.14,s+1,s+2],r=new o(r),t=n(r)&&1===r[0]&&3===r[1]&&r[2]===s-2&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}t.exports=i},32445:t=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r="function"==typeof Uint8Array?Uint8Array:null;t.exports=r},58711:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(23851);t.exports=n},23851:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(16291),s="function"==typeof Float64Array;function o(t){return s&&t instanceof Float64Array||"[object Float64Array]"===n(t)}t.exports=o},26217:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(93277),s={uint16:e(8429),uint8:n};t.exports=s},59291:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(31747);t.exports=n},31747:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n,s=e(26217);n=function(){var t;return(t=new s.uint16(1))[0]=4660,52===new s.uint8(t.buffer)[0]}(),t.exports=n},31109:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(14086);t.exports=n},14086:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(16291),s="function"==typeof Uint16Array;function o(t){return s&&t instanceof Uint16Array||"[object Uint16Array]"===n(t)}t.exports=o},17688:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(49786);t.exports=n},49786:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(16291),s="function"==typeof Uint32Array;function o(t){return s&&t instanceof Uint32Array||"[object Uint32Array]"===n(t)}t.exports=o},54845:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(16985);t.exports=n},16985:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(16291),s="function"==typeof Uint8Array;function o(t){return s&&t instanceof Uint8Array||"[object Uint8Array]"===n(t)}t.exports=o},54966:t=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=1023;t.exports=r},27507:t=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=2147483647;t.exports=r},95162:t=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=2146435072;t.exports=r},82418:t=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=2147483648;t.exports=r},78745:t=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=-1023;t.exports=r},60912:t=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=1023;t.exports=r},25121:t=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=-1074;t.exports=r},32106:(t,r,e)=>{"use strict";var n=e(88617).NEGATIVE_INFINITY;t.exports=n},18582:t=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=Number.POSITIVE_INFINITY;t.exports=r},21425:t=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=22250738585072014e-324;t.exports=r},9942:t=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=65535;t.exports=r},99576:t=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=4294967295;t.exports=r},71417:t=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=255;t.exports=r},62369:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(59503);t.exports=n},59503:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(18582),s=e(32106);function o(t){return t===n||t===s}t.exports=o},99274:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(44175);t.exports=n},44175:t=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function r(t){return t!=t}t.exports=r},28769:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(69644);t.exports=n},69644:t=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function r(t){return Math.abs(t)}t.exports=r},12493:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(62857);t.exports=n},62857:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(82418),s=e(27507),o=e(81138),i=e(80255),a=e(92),u=[0,0];function c(t,r){var e;return o.assign(t,u,1,0),a(u[0]&s|i(r)&n,u[1])}t.exports=c},74650:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(66703);t.exports=n},66703:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(18582),s=e(32106),o=e(54966),i=e(60912),a=e(78745),u=e(25121),c=e(99274),f=e(62369),p=e(12493),l=e(50847),v=e(79036),y=e(81138),h=e(92),d=2220446049250313e-31,x=2148532223,b=[0,0],g=[0,0];function m(t,r){var e;return 0===t||c(t)||f(t)?t:(l(b,t),t=b[0],(r+=b[1]+v(t))<u)?p(0,t):r>i?t<0?s:n:(r<=a?(r+=52,e=d):e=1,y(g,t),e*h(g[0]&x|r+o<<20,g[1]))}t.exports=m},88617:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(27264);t.exports=n},27264:t=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=Number},79036:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(42759);t.exports=n},42759:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(80255),s=e(95162),o=e(54966);function i(t){var r=n(t);return(r=(r&s)>>>20)-o|0}t.exports=i},92:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(54692);t.exports=n},53553:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n,s,o;!0===e(59291)?(s=1,o=0):(s=0,o=1),n={HIGH:s,LOW:o},t.exports=n},54692:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(97004),s=e(72501),o=e(53553),i=new s(1),a=new n(i.buffer),u=o.HIGH,c=o.LOW;function f(t,r){return a[u]=t,a[c]=r,i[0]}t.exports=f},96718:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n;n=!0===e(59291)?1:0,t.exports=n},80255:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(13406);t.exports=n},13406:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(97004),s=e(72501),o=e(96718),i=new s(1),a=new n(i.buffer);function u(t){return i[0]=t,a[o]}t.exports=u},95074:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(21425),s=e(62369),o=e(99274),i=e(28769),a=4503599627370496;function u(t,r,e,u){return o(t)||s(t)?(r[u]=t,r[u+e]=0):0!==t&&i(t)<n?(r[u]=t*a,r[u+e]=-52):(r[u]=t,r[u+e]=0),r}t.exports=u},50847:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(82639),s=e(3834);n(s,"assign",e(95074)),t.exports=s},3834:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(95074);function s(t){return n(t,[0,0],1,0)}t.exports=s},11581:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(97004),s=e(72501),o=e(4654),i=new s(1),a=new n(i.buffer),u=o.HIGH,c=o.LOW;function f(t,r,e,n){return i[0]=t,r[n]=a[u],r[n+e]=a[c],r}t.exports=f},81138:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(82639),s=e(53901);n(s,"assign",e(11581)),t.exports=s},4654:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n,s,o;!0===e(59291)?(s=1,o=0):(s=0,o=1),n={HIGH:s,LOW:o},t.exports=n},53901:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(11581);function s(t){return n(t,[0,0],1,0)}t.exports=s},82639:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(28403);t.exports=n},28403:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(4856);function s(t,r,e){n(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}t.exports=s},58235:t=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=Object.defineProperty;t.exports=r},80085:t=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r="function"==typeof Object.defineProperty?Object.defineProperty:null;t.exports=r},29964:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(80085);function s(){try{return n({},"x",{}),!0}catch(t){return!1}}t.exports=s},4856:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n,s=e(29964),o=e(58235),i=e(344);n=s()?o:i,t.exports=n},344:t=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=Object.prototype,e=r.toString,n=r.__defineGetter__,s=r.__defineSetter__,o=r.__lookupGetter__,i=r.__lookupSetter__;function a(t,a,u){var c,f,p,l;if("object"!=typeof t||null===t||"[object Array]"===e.call(t))throw TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof u||null===u||"[object Array]"===e.call(u))throw TypeError("invalid argument. Property descriptor must be an object. Value: `"+u+"`.");if((f="value"in u)&&(o.call(t,a)||i.call(t,a)?(c=t.__proto__,t.__proto__=r,delete t[a],t[a]=u.value,t.__proto__=c):t[a]=u.value),p="get"in u,l="set"in u,f&&(p||l))throw Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&n&&n.call(t,a,u.get),l&&s&&s.call(t,a,u.set),t}t.exports=a},16291:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n,s=e(35431),o=e(8603),i=e(27379);n=s()?i:o,t.exports=n},8603:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(33337);function s(t){return n.call(t)}t.exports=s},27379:(t,r,e)=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n=e(80682),s=e(79466),o=e(33337);function i(t){var r,e,i;if(null==t)return o.call(t);e=t[s],r=n(t,s);try{t[s]=void 0}catch(r){return o.call(t)}return i=o.call(t),r?t[s]=e:delete t[s],i}t.exports=i},33337:t=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=Object.prototype.toString;t.exports=r},79466:t=>{"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r="function"==typeof Symbol?Symbol.toStringTag:"";t.exports=r},9913:function(t){t.exports=function(t,r,e,n,s){for(r=r.split?r.split("."):r,n=0;n<r.length;n++)t=t?t[r[n]]:s;return t===s?e:t}},19775:(t,r)=>{function e(t,r,e){r.split&&(r=r.split("."));for(var n,s,o=0,i=r.length,a=t;o<i&&"__proto__"!==(s=r[o++])&&"constructor"!==s&&"prototype"!==s;)a=a[s]=o===i?e:typeof(n=a[s])==typeof r?n:0*r[o]!=0||~(""+r[o]).indexOf(".")?{}:[]}r.dset=e},82777:(t,r,e)=>{"use strict";e.r(r),e.d(r,{default:()=>o});for(var n=[],s=0;s<64;)n[s]=0|4294967296*Math.sin(++s%Math.PI);function o(t){var r,e,o,i=[r=1732584193,e=4023233417,~r,~e],a=[],u=unescape(encodeURI(t))+"\x80",c=u.length;for(t=--c/4+2|15,a[--t]=8*c;~c;)a[c>>2]|=u.charCodeAt(c)<<8*c--;for(s=u=0;s<t;s+=16){for(c=i;u<64;c=[o=c[3],r+((o=c[0]+[r&e|~r&o,o&r|~o&e,r^e^o,e^(r|~o)][c=u>>4]+n[u]+~~a[s|15&[u,5*u+1,3*u+5,7*u][c]])<<(c=[7,12,17,22,5,9,14,20,4,11,16,23,6,10,15,21][4*c+u++%4])|o>>>-c),r,e])r=0|c[1],e=c[2];for(u=4;u;)i[--u]+=c[u]}for(t="";u<32;)t+=(i[u>>3]>>4*(1^u++)&15).toString(16);return t}}}]);