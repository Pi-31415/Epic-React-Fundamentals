(this["webpackJsonp@kentcdodds/react-fundamentals"]=this["webpackJsonp@kentcdodds/react-fundamentals"]||[]).push([[21],{182:function(e,t,a){"use strict";a.r(t),a.d(t,"readingTime",(function(){return o})),a.d(t,"default",(function(){return i})),a.d(t,"tableOfContents",(function(){return c})),a.d(t,"frontMatter",(function(){return p}));var n=a(34),r=(a(1),a(209)),s=["components"],o={text:"6 min read",minutes:5.07,time:304200,words:1014},l={};function i(e){var t=e.components,a=Object(n.a)(e,s);return Object(r.a)("wrapper",Object.assign({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.a)("h1",{id:"forms"},"Forms"),Object(r.a)("h2",{id:"-your-notes"},"\ud83d\udcdd Your Notes"),Object(r.a)("p",null,"Elaborate on your learnings here in ",Object(r.a)("inlineCode",{parentName:"p"},"src/exercise/06.md")),Object(r.a)("h2",{id:"background"},"Background"),Object(r.a)("p",null,"In React, there actually aren\u2019t a ton of things you have to learn to interact\nwith forms beyond what you can do with regular DOM APIs and JavaScript. Which I\nthink is pretty awesome."),Object(r.a)("p",null,"You can attach a submit handler to a form element with the ",Object(r.a)("inlineCode",{parentName:"p"},"onSubmit")," prop. This\nwill be called with the submit event which has a ",Object(r.a)("inlineCode",{parentName:"p"},"target"),". That ",Object(r.a)("inlineCode",{parentName:"p"},"target")," is a\nreference to the ",Object(r.a)("inlineCode",{parentName:"p"},"<form>")," DOM node which has a reference to the elements of the\nform which can be used to get the values out of the form!"),Object(r.a)("h2",{id:"exercise"},"Exercise"),Object(r.a)("p",null,"Production deploys:"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},Object(r.a)("a",{parentName:"li",href:"http://react-fundamentals.netlify.app/isolated/exercise/06.js"},"Exercise")),Object(r.a)("li",{parentName:"ul"},Object(r.a)("a",{parentName:"li",href:"http://react-fundamentals.netlify.app/isolated/final/06.js"},"Final"))),Object(r.a)("p",null,"In this exercise, we have a form where you can submit a username and then you\u2019ll\nget an \u201calert\u201d showing what you typed."),Object(r.a)("p",null,"\ud83e\udd89 There are several ways to get the value of the name input:"),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"Via their index: ",Object(r.a)("inlineCode",{parentName:"li"},"event.target.elements[0].value")),Object(r.a)("li",{parentName:"ul"},"Via the elements object by their ",Object(r.a)("inlineCode",{parentName:"li"},"name")," or ",Object(r.a)("inlineCode",{parentName:"li"},"id")," attribute:\n",Object(r.a)("inlineCode",{parentName:"li"},"event.target.elements.usernameInput.value")),Object(r.a)("li",{parentName:"ul"},"There\u2019s another that I\u2019ll save for the extra credit")),Object(r.a)("h2",{id:"extra-credit"},"Extra Credit"),Object(r.a)("h3",{id:"1--using-refs"},"1. \ud83d\udcaf using refs"),Object(r.a)("p",null,Object(r.a)("a",{parentName:"p",href:"http://react-fundamentals.netlify.app/isolated/final/06.extra-1.js"},"Production deploy")),Object(r.a)("p",null,"Another way to get the value is via a ",Object(r.a)("inlineCode",{parentName:"p"},"ref")," in React. A ",Object(r.a)("inlineCode",{parentName:"p"},"ref")," is an object that\nstays consistent between renders of your React component. It has a ",Object(r.a)("inlineCode",{parentName:"p"},"current"),"\nproperty on it which can be updated to any value at any time. In the case of\ninteracting with DOM nodes, you can pass a ",Object(r.a)("inlineCode",{parentName:"p"},"ref")," to a React element and React\nwill set the ",Object(r.a)("inlineCode",{parentName:"p"},"current")," property to the DOM node that\u2019s rendered."),Object(r.a)("p",null,"So if you create an ",Object(r.a)("inlineCode",{parentName:"p"},"inputRef")," object via ",Object(r.a)("inlineCode",{parentName:"p"},"React.useRef"),", you could access the\nvalue via: ",Object(r.a)("inlineCode",{parentName:"p"},"inputRef.current.value"),"\n(\ud83d\udcdc",Object(r.a)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-reference.html#useref"},"https://reactjs.org/docs/hooks-reference.html#useref"),")"),Object(r.a)("p",null,"Try to get the usernameInput\u2019s value using a ref."),Object(r.a)("h3",{id:"2--validate-lower-case"},"2. \ud83d\udcaf Validate lower-case"),Object(r.a)("p",null,Object(r.a)("a",{parentName:"p",href:"http://react-fundamentals.netlify.app/isolated/final/06.extra-2.js"},"Production deploy")),Object(r.a)("p",null,"With React, the way you use state is via a special \u201chook\u201d called ",Object(r.a)("inlineCode",{parentName:"p"},"useState"),".\nHere\u2019s a simple example of what that looks like:"),Object(r.a)("pre",null,Object(r.a)("code",{parentName:"pre",className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">function</span> <span class="token function">Counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>\n  <span class="token keyword">const</span> <span class="token function-variable function">increment</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>\n  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>increment<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n<span class="token punctuation">}</span>\n'}})),Object(r.a)("p",null,Object(r.a)("inlineCode",{parentName:"p"},"React.useState")," accepts a default initial value and returns an array. Typically\nyou\u2019ll destructure that array to get the state and a state updater function."),Object(r.a)("p",null,"\ud83d\udcdc ",Object(r.a)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-state.html"},"https://reactjs.org/docs/hooks-state.html")),Object(r.a)("p",null,"In this extra credit, we\u2019re going to say that this username input only accepts\nlower-case characters. So if someone types an upper-case character, that\u2019s\ninvalid input and we\u2019ll show an error message."),Object(r.a)("p",null,"If we want our form to be dynamic, we\u2019ll need a few things:"),Object(r.a)("ol",null,Object(r.a)("li",{parentName:"ol"},"Component state to store the dynamic values (an error message in our case)"),Object(r.a)("li",{parentName:"ol"},"A change handler on the input so we know what the value is as the user\nchanges it and can update the error state.")),Object(r.a)("p",null,"Once we have that wired up then we can render the error message and disable the\nsubmit button if there\u2019s an error."),Object(r.a)("p",null,"\ud83d\udcb0 This one\u2019s a little more tricky, so here are a few things you need to do to\nmake this work:"),Object(r.a)("ol",null,Object(r.a)("li",{parentName:"ol"},"Create a ",Object(r.a)("inlineCode",{parentName:"li"},"handleChange")," function that accepts the change ",Object(r.a)("inlineCode",{parentName:"li"},"event")," and uses\n",Object(r.a)("inlineCode",{parentName:"li"},"event.target.value")," to get the value of the input. Remember this event will\nbe triggered on the input, not the form."),Object(r.a)("li",{parentName:"ol"},"Use the value of the input to determine whether there\u2019s an error. There\u2019s an\nerror if the user typed any upper-case characters. You can check this really\neasily via ",Object(r.a)("inlineCode",{parentName:"li"},"const isValid = value === value.toLowerCase()")),Object(r.a)("li",{parentName:"ol"},"If there\u2019s an error, set the error state to ",Object(r.a)("inlineCode",{parentName:"li"},"'Username must be lower case'"),".\n(\ud83d\udcb0 here\u2019s how you do that:\n",Object(r.a)("inlineCode",{parentName:"li"},"setError(isValid ? null : 'Username must be lower case')"),") and disable the\nsubmit button."),Object(r.a)("li",{parentName:"ol"},"Finally, display the error in an element")),Object(r.a)("p",null,"You may consider adding a ",Object(r.a)("inlineCode",{parentName:"p"},'role="alert"')," to the element you use to display the\nerror to assist with screen reader users."),Object(r.a)("p",null,"Make sure you pass ",Object(r.a)("inlineCode",{parentName:"p"},"handleChange")," to the ",Object(r.a)("inlineCode",{parentName:"p"},"onChange")," handler of the ",Object(r.a)("inlineCode",{parentName:"p"},"input"),"."),Object(r.a)("h3",{id:"3--control-the-input-value"},"3. \ud83d\udcaf Control the input value"),Object(r.a)("p",null,Object(r.a)("a",{parentName:"p",href:"http://react-fundamentals.netlify.app/isolated/final/06.extra-3.js"},"Production deploy")),Object(r.a)("p",null,"Sometimes you have form inputs which you want to programmatically control. Maybe\nyou want to set their value explicitly when the user clicks a button, or maybe\nyou want to change what the value is as the user is typing."),Object(r.a)("p",null,"This is why React supports Controlled Form inputs. So far in our exercises, all\nof the form inputs have been \u201cuncontrolled\u201d which means that the browser is\nmaintaining the state of the input by itself and we can be notified of changes\nand \u201cquery\u201d for the value from the DOM node."),Object(r.a)("p",null,"If we want to explicitly update that value we could do this:\n",Object(r.a)("inlineCode",{parentName:"p"},"inputNode.value = 'whatever'")," but that\u2019s pretty imperative. Instead, React\nallows us to programmatically set the ",Object(r.a)("inlineCode",{parentName:"p"},"value")," prop on the input like so:"),Object(r.a)("pre",null,Object(r.a)("code",{parentName:"pre",className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>myInputValue<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n'}})),Object(r.a)("p",null,"Once we do that, React ensures that the value of that input can never differ\nfrom the value of the ",Object(r.a)("inlineCode",{parentName:"p"},"myInputValue")," variable."),Object(r.a)("p",null,"Typically you\u2019ll want to provide an ",Object(r.a)("inlineCode",{parentName:"p"},"onChange"),' handler as well so you can be\nmade aware of \u201csuggested changes\u201d to the input\u2019s value (where React is basically\nsaying "if I were controlling this value, here\u2019s what I would do, but you do\nwhatever you want with this").'),Object(r.a)("p",null,"Typically you\u2019ll want to store the input\u2019s value in a state variable (via\n",Object(r.a)("inlineCode",{parentName:"p"},"React.useState"),") and then the ",Object(r.a)("inlineCode",{parentName:"p"},"onChange")," handler will call the state updater to\nkeep that value up-to-date."),Object(r.a)("p",null,"Wouldn\u2019t it be even cooler if instead of showing an error message we just didn\u2019t\nallow the user to enter invalid input? Yeah! In this extra credit I\u2019ve backed us up\nand removed the error stuff and now we\u2019re going to control the input state and\ncontrol the input value. Anytime there\u2019s a change we\u2019ll call ",Object(r.a)("inlineCode",{parentName:"p"},".toLowerCase()")," on\nthe value to ensure that it\u2019s always the lower case version of what the user\ntypes."),Object(r.a)("p",null,"So we can get rid of our ",Object(r.a)("inlineCode",{parentName:"p"},"error")," state and instead we\u2019ll manage state called\n",Object(r.a)("inlineCode",{parentName:"p"},"username")," (with ",Object(r.a)("inlineCode",{parentName:"p"},"React.useState"),") and we\u2019ll set the ",Object(r.a)("inlineCode",{parentName:"p"},"username")," to whatever the\ninput value is. We\u2019ll just lowercase the input value before doing so. Then we\u2019ll\npass that value to the ",Object(r.a)("inlineCode",{parentName:"p"},"input"),"'s ",Object(r.a)("inlineCode",{parentName:"p"},"value")," prop and now it\u2019s impossible for users\nto enter an invalid value!"),Object(r.a)("h2",{id:"-feedback"},"\ud83e\udd89 Feedback"),Object(r.a)("p",null,"Fill out\n",Object(r.a)("a",{parentName:"p",href:"https://ws.kcd.im/?ws=React%20Fundamentals%20%E2%9A%9B&e=06%3A%20Forms&em="},"the feedback form"),"."))}i.isMDXComponent=!0;var c=function(){return[{id:"-your-notes",level:2,title:"\ud83d\udcdd Your Notes",children:[]},{id:"background",level:2,title:"Background",children:[]},{id:"exercise",level:2,title:"Exercise",children:[]},{id:"extra-credit",level:2,title:"Extra Credit",children:[{id:"1--using-refs",level:3,title:"1. \ud83d\udcaf using refs",children:[]},{id:"2--validate-lower-case",level:3,title:"2. \ud83d\udcaf Validate lower-case",children:[]},{id:"3--control-the-input-value",level:3,title:"3. \ud83d\udcaf Control the input value",children:[]}]},{id:"-feedback",level:2,title:"\ud83e\udd89 Feedback",children:[]}]},p={}},209:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(1),r=a.n(n);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"===typeof e?e(t):l(l({},t),e)),a},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=p(a),d=n,m=h["".concat(o,".").concat(d)]||h[d]||u[d]||s;return a?r.a.createElement(m,l(l({ref:t},c),{},{components:a})):r.a.createElement(m,l({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"===typeof e||n){var s=a.length,o=new Array(s);o[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"===typeof e?e:n,o[1]=l;for(var c=2;c<s;c++)o[c]=a[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);
//# sourceMappingURL=21.07f1be42.chunk.js.map