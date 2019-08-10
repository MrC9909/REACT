import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Route} from 'react-router-dom';

import A from "./component/A";
import B from "./component/B";
import C from "./component/C";

//在HAS-ROUTER机制中我们需要根据哈希地址的不同展示组件不同的内容，此时我们需要使用ROUTE

//ROUTE
    //path:匹配哈希后面的值（设置匹配地址，但是不是默认不是严格匹配，当前页面HASH地址只要包含完整的它（内容是不变的）都能被匹配上
    //component:一旦哈希值和当前ROUTE的PATH相同了，则渲染COMPONENT指定的组件
    //EXACT:让PATH的匹配严格严谨一些（只有URL的哈希值和PATH设定的值相等才可以匹配到）

ReactDOM.render(<HashRouter>
    <Route exact={true} path='/' component={A}/>
    <Route strict={true} exact={true} path='/user' component={B}/>
    <Route path='/user/personal' component={C}/>
</HashRouter>,document.querySelector("#root"));

