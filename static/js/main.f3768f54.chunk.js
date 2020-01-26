(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{156:function(e,t,a){e.exports=a(396)},385:function(e,t,a){},387:function(e,t,a){},389:function(e,t,a){},391:function(e,t,a){},393:function(e,t,a){},396:function(e,t,a){"use strict";a.r(t);a(157);var n=a(1),r=a.n(n),c=a(151),o=a.n(c),l=a(37),u=a(38),s=a(40),i=a(39),d=a(41),p=a(13),m=a(154),h=a.n(m),f={lowestprice:function(e,t){return e.price<t.price?-1:e.price>t.price?1:0},highestprice:function(e,t){return e.price>t.price?-1:e.price<t.price?1:0}},v=(a(385),function(){return r.a.createElement("div",{className:"spinner lds-ring"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))}),y=function(e){var t=e.options,a=e.classes,n=e.handleOnChange;return r.a.createElement("div",null,r.a.createElement("div",{className:"onlySmallScreen"},"Sort by",r.a.createElement("select",{onChange:function(e){return n(e.target.value)},className:a},function(e){return e.map(function(e){return r.a.createElement("option",{value:e.value,key:e.value},e.label)})}(t))),r.a.createElement("div",{className:"onlyLargeScreen"},"Sort by",function(e){return e.map(function(e){return r.a.createElement("input",{onClick:function(e){return n(e.target.value)},type:"button",value:e.value,className:"sortLink"})})}(t)))},E=[{value:"",label:"Select"},{value:"lowestprice",label:"Lowest to highest"},{value:"highestprice",label:"Highest to lowest"}],g=Object(p.b)(function(e){return{sort:e.sort.type}},{updateSort:function(e){return{type:"UPDATE_SORT",payload:e}}})(function(e){var t=e.updateSort;e.sort;return r.a.createElement("div",{className:"sort"},r.a.createElement(y,{options:E,handleOnChange:function(e){return t(e)}}))}),b=Object(p.b)(function(e){return{search:e.search.type}},{updateSearch:function(e){return{type:"UPDATE_SEARCH",payload:e}}})(function(e){var t=e.updateSearch;e.search;return r.a.createElement("div",{className:"search"},"Search",r.a.createElement("input",{type:"text",onChange:function(e){return t(e.target.value)}}))}),O=function(e){return r.a.createElement("div",{className:"shelf-container-header"},r.a.createElement(g,null),r.a.createElement(b,null))},C=function(e){return r.a.createElement("div",{className:e.classes},r.a.createElement("img",{src:e.src,alt:e.alt,title:e.title}))},P=Object(p.b)(null,{addProduct:function(e){return{type:"ADD_PRODUCT",payload:e}}})(function(e){var t=e.product,a=e.addProduct;return t.quantity=1,r.a.createElement("div",{className:"shelf-item",onClick:function(){return a(t)}},r.a.createElement(C,{classes:"shelf-item__thumb",src:t.img_url,alt:t.name}),r.a.createElement("p",{className:"shelf-item__title"},t.name),r.a.createElement("div",{className:"shelf-item__price"},t.price," ",r.a.createElement("del",null,t.price*(t.discount/100)+t.price," "),r.a.createElement("span",{className:"shelf-item__success"},t.discount,"% off ")),r.a.createElement("div",{className:"shelf-item__buy-btn"},"Add to cart"))}),_=function(e){return e.products.map(function(e){return r.a.createElement(P,{product:e,key:e.id})})},N=(a(387),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!1},a.handleFetchProducts=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.props.filters,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.props.sort,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a.props.search;a.setState({isLoading:!0}),a.props.fetchProducts(e,t,n,function(){a.setState({isLoading:!1})})},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.handleFetchProducts()}},{key:"componentWillReceiveProps",value:function(e){var t=e.filters,a=e.sort,n=e.search,r=this.props.filters;t.length!==r.length&&this.handleFetchProducts(t,void 0,void 0),a!==this.props.sort&&this.handleFetchProducts(void 0,a,void 0),n!==this.props.search&&this.handleFetchProducts(void 0,void 0,n)}},{key:"render",value:function(){var e=this.props.products,t=this.state.isLoading;return r.a.createElement(r.a.Fragment,null,t&&r.a.createElement(v,null),r.a.createElement("div",{className:"shelf-container"},r.a.createElement(O,{productsLength:e.length}),r.a.createElement(_,{products:e})))}}]),t}(n.Component)),T=Object(p.b)(function(e){return{products:e.shelf.products,filters:e.filters.items,sort:e.sort.type,search:e.search.type}},{fetchProducts:function(e,t,a,n){return function(r){return h.a.get("https://api.myjson.com/bins/qzuzi").then(function(c){var o=c.data;return e&&e.length>0&&(o=o.filter(function(t){return t.price<=e})),t&&(o=o.sort(f[t])),a&&(o=o.filter(function(e){return Object.keys(e).some(function(t){return e[t].toString().toLowerCase().includes(a.toLowerCase())})})),n&&n(),r({type:"FETCH_PRODUCTS",payload:o})}).catch(function(e){console.log("Could not fetch products. Try again later.")})}}})(N),j=(a(389),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={inputValue:0},a.toggleCheckbox=function(){var e=a.state.inputValue;a.props.updateFilters(e)},a.inputValue=function(e){return a.setState({inputValue:e.target.value})},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.selectedCheckboxes=new Set}},{key:"render",value:function(){return r.a.createElement("div",{className:"filters"},r.a.createElement("h4",{className:"title"},"Filters: < ",this.state.inputValue),r.a.createElement("div",null,r.a.createElement("span",null,"100"),r.a.createElement("input",{className:"filterRange",type:"range",min:"100",max:"700",onChange:this.inputValue,step:"100"}),r.a.createElement("span",null,"700"),r.a.createElement("div",{className:"filterPriceTag"}," Price "),r.a.createElement("p",{className:"applyBtnCont"},r.a.createElement("input",{type:"submit",className:"applyBtn",value:"submit",onClick:this.toggleCheckbox}))))}}]),t}(n.Component)),R=Object(p.b)(null,{updateFilters:function(e){return{type:"UPDATE_FILTER",payload:e}}})(j),S=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(i.a)(t).call(this,e))).handleMouseOver=function(){a.setState({isMouseOver:!0})},a.handleMouseOut=function(){a.setState({isMouseOver:!1})},a.handleOnIncrease=function(){var e=a.props.changeProductQuantity,t=a.state.product;t.quantity=t.quantity+1,e(t)},a.handleOnDecrease=function(){var e=a.props.changeProductQuantity,t=a.state.product;t.quantity=t.quantity-1,e(t)},a.state={product:a.props.product,isMouseOver:!1},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.removeProduct,a=this.state.product,n=["shelf-item"];return this.state.isMouseOver&&n.push("shelf-item--mouseover"),r.a.createElement("div",{className:n.join(" ")},r.a.createElement("div",{className:"shelf-item__del",onMouseOver:function(){return e.handleMouseOver()},onMouseOut:function(){return e.handleMouseOut()},onClick:function(){return t(a)}}," REMOVE "),r.a.createElement(C,{classes:"shelf-item__thumb",src:a.img_url,alt:a.name}),r.a.createElement("div",{className:"shelf-item__details"},r.a.createElement("p",{className:"title"},a.name),r.a.createElement("p",{className:"desc"},a.price," ",r.a.createElement("del",null,a.price*(a.discount/100)+a.price," "),r.a.createElement("span",{className:"shelf-item__success"},a.discount,"% off "))),r.a.createElement("div",{className:"shelf-item__price"},r.a.createElement("div",null,r.a.createElement("button",{onClick:this.handleOnDecrease,className:"change-product-button"},"-"),r.a.createElement("label",null," ",a.quantity," "),r.a.createElement("button",{onClick:this.handleOnIncrease,className:"change-product-button"},"+"))))}}]),t}(n.Component),w=(a(391),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={isOpen:!1},a.openFloatCart=function(){a.setState({isOpen:!0})},a.closeFloatCart=function(){a.setState({isOpen:!1})},a.addProduct=function(e){var t=a.props,n=t.cartProducts,r=t.updateCart,c=!1;n.forEach(function(t){t.id===e.id&&(t.quantity+=e.quantity,c=!0)}),c||n.push(e),r(n)},a.removeProduct=function(e){var t=a.props,n=t.cartProducts,r=t.updateCart,c=n.findIndex(function(t){return t.id===e.id});c>=0&&(n.splice(c,1),r(n))},a.changeProductQuantity=function(e){var t=a.props,n=t.cartProducts,r=t.updateCart,c=n.find(function(t){return t.id===e.id});c.quantity=e.quantity,c.quantity<=0&&a.removeProduct(c),r(n)},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.newProduct!==this.props.newProduct&&this.addProduct(e.newProduct),e.productToRemove!==this.props.productToRemove&&this.removeProduct(e.productToRemove),e.productToChange!==this.props.productToChange&&this.changeProductQuantity(e.productToChange)}},{key:"render",value:function(){var e=this,t=this.props,a=t.cartTotal,n=t.cartProducts,c=t.removeProduct,o=t.changeProductQuantity,l=n.map(function(e){return r.a.createElement(S,{product:e,removeProduct:c,changeProductQuantity:o,key:e.id})}),u=["float-cart"];return this.state.isOpen&&u.push("float-cart--open"),r.a.createElement("div",{className:u.join(" ")},this.state.isOpen&&r.a.createElement("div",{onClick:function(){return e.closeFloatCart()},className:"float-cart__close-btn"},"Home"),!this.state.isOpen&&r.a.createElement("span",{onClick:function(){return e.openFloatCart()},className:"bag bag--float-cart-closed"},r.a.createElement("span",{className:"bag__quantity"},a.productQuantity)),r.a.createElement("div",{className:"float-cart__content"},r.a.createElement("div",{className:"float-cart__header"},r.a.createElement("span",{className:"bag"},r.a.createElement("span",{className:"bag__quantity"},a.productQuantity)),r.a.createElement("span",{className:"header-title"},"Cart")),r.a.createElement("div",{className:"float-cart__shelf-container"},l,!l.length&&r.a.createElement("p",{className:"shelf-empty"},"Add some products in the cart ",r.a.createElement("br",null),":)")),r.a.createElement("div",{className:"float-cart__footer"},r.a.createElement("h3",null,"PRICE DETAILS"),r.a.createElement("div",{className:"sub"},"Total Payable"),r.a.createElement("div",{className:"sub-price"},r.a.createElement("p",{className:"sub-price__val"},"".concat(a.currencyFormat," ").concat(function(e,t){switch(t){case"INR":return e.toFixed(2).replace(".",",");default:return e.toFixed(2)}}(a.totalPrice,a.currencyId)))))))}}]),t}(n.Component)),A=Object(p.b)(function(e){return{cartProducts:e.cart.products,newProduct:e.cart.productToAdd,productToRemove:e.cart.productToRemove,productToChange:e.cart.productToChange,cartTotal:e.total.data}},{loadCart:function(e){return{type:"LOAD_CART",payload:e}},updateCart:function(e){return function(t){var a=e.reduce(function(e,t){return e+=t.quantity},0),n=e.reduce(function(e,t){return e+=t.price*t.quantity},0);t({type:"UPDATE_CART",payload:{productQuantity:a,installments:e.reduce(function(e,t){return e=t.installments>e?t.installments:e},0),totalPrice:n,currencyId:"INR",currencyFormat:"\u20b9"}})}},removeProduct:function(e){return{type:"REMOVE_PRODUCT",payload:e}},changeProductQuantity:function(e){return{type:"CHANGE_PRODUCT_QUANTITY",payload:e}}})(w),D=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("main",null,r.a.createElement("header",null),r.a.createElement(R,null),r.a.createElement(T,null)),r.a.createElement(A,null))},k=a(42),F=a(155),I=a(12),U={products:[]},q={products:[]},L={data:{productQuantity:0,installments:0,totalPrice:0,currencyId:"INR",currencyFormat:"\u20b9"}},M={items:[]},Q={type:""},x={type:""},V=Object(k.c)({shelf:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_PRODUCTS":return Object(I.a)({},e,{products:t.payload});default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_CART":return Object(I.a)({},e,{products:t.payload});case"ADD_PRODUCT":return Object(I.a)({},e,{productToAdd:Object.assign({},t.payload)});case"REMOVE_PRODUCT":return Object(I.a)({},e,{productToRemove:Object.assign({},t.payload)});case"CHANGE_PRODUCT_QUANTITY":return Object(I.a)({},e,{productToChange:Object.assign({},t.payload)});default:return e}},total:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_CART":return Object(I.a)({},e,{data:t.payload});default:return e}},filters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_FILTER":return Object(I.a)({},e,{items:t.payload});default:return e}},sort:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_SORT":return Object(I.a)({},e,{type:t.payload});default:return e}},search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_SEARCH":return Object(I.a)({},e,{type:t.payload});default:return e}}}),H=function(e){e=JSON.parse(window.localStorage.getItem("state"))||e;var t=[F.a],a=Object(k.e)(V,e,Object(k.d)(k.a.apply(void 0,t)));return a.subscribe(function(){var e=a.getState(),t={cart:e.cart,total:e.total};window.localStorage.setItem("state",JSON.stringify(t))}),a},J=function(e){var t=e.children,a=e.initialState,n=void 0===a?{}:a;return r.a.createElement(p.a,{store:H(n)},t)};a(393);o.a.render(r.a.createElement(J,null,r.a.createElement(D,null)),document.getElementById("root"))}},[[156,2,1]]]);
//# sourceMappingURL=main.f3768f54.chunk.js.map