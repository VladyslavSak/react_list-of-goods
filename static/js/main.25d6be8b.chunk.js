(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(t,e,n){t.exports=n(19)},15:function(t,e,n){},16:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),s=n(4),r=n.n(s),c=n(1),i=n(5),l=n(6),u=n(8),h=n(7),d=n(9),g=(n(15),n(16),n(2)),m=n.n(g),b=(m.a.string.isRequired,m.a,function(t){var e=t.good;return a.a.createElement("li",{className:"list-of-goods__item"},e)}),p=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],f=function(t){function e(){var t;return Object(i.a)(this,e),(t=Object(u.a)(this,Object(h.a)(e).call(this))).showListOfGoods=function(){t.setState({isButtonClicked:!0})},t.reverseList=function(){t.setState(function(t){return{goodsList:Object(c.a)(t.goodsList).reverse()}})},t.alphabeticSortList=function(){t.setState(function(t){return{goodsList:Object(c.a)(t.goodsList).sort()}})},t.lengthSortList=function(){t.setState(function(t){return{goodsList:Object(c.a)(t.goodsList).sort(function(t,e){return t.length-e.length})}})},t.reset=function(){t.setState({goodsList:[].concat(p),isButtonClicked:!1})},t.lengthSelect=function(e){t.setState({currentValue:e.target.value,goodsList:[].concat(p).filter(function(t){return t.length===Number(e.target.value)})})},t.resetLengthGoods=function(){t.setState({goodsList:[].concat(p),currentValue:1})},t.state={goodsList:[].concat(p),isButtonClicked:!1,currentValue:1},t}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{className:"app-wrapper"},a.a.createElement("h1",null,"List of goods:\xa0",this.state.goodsList.length),!this.state.isButtonClicked&&a.a.createElement("button",{type:"button",className:"startButton button-hide",onClick:this.showListOfGoods},"Start"),this.state.isButtonClicked&&a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"controls"},a.a.createElement("button",{type:"button",className:"reverse",onClick:this.reverseList},"Reverse"),a.a.createElement("button",{type:"button",className:"startButton button-hide",onClick:this.alphabeticSortList},"Alphabet Sort"),a.a.createElement("button",{type:"button",className:"startButton button-hide",onClick:this.lengthSortList},"Length sort"),a.a.createElement("button",{type:"button",className:"startButton button-hide",onClick:this.resetLengthGoods},"Reset length of goods"),a.a.createElement("button",{type:"button",className:"startButton button-hide",onClick:this.reset},"Reset")),a.a.createElement("span",{className:"selectedSort"},"Choose length for sort:",a.a.createElement("select",{onChange:this.lengthSelect,name:"lengthSelect",id:"lengthSelect",value:this.state.currentValue},a.a.createElement("option",{selected:!0},"Choose length of goods"),a.a.createElement("option",{value:"3"},"3"),a.a.createElement("option",{value:"4"},"4"),a.a.createElement("option",{value:"5"},"5"),a.a.createElement("option",{value:"6"},"6"),a.a.createElement("option",{value:"9"},"9"))),a.a.createElement("ul",{className:"list-of-goods"},this.state.goodsList.map(function(t){return a.a.createElement(b,{key:t,good:t})}))))}}]),e}(a.a.Component);r.a.render(a.a.createElement(f,{test:123}),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.25d6be8b.chunk.js.map