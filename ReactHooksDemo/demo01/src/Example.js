import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

function Index() {
    useEffect(() => {
        console.log('userEffect => 老弟，你来了！ Index页面')
        return () => { // return解绑执行
            console.log('老弟！你走了 Index页面')
        }
    }, []) // 传空，表示组件销毁时，执行return
    return <h2>YU.com</h2>
}

function List() {
    return <h2>List page</h2>
}

function Example() {
    const [count, setCount] = useState(0); // 数组解构
    useEffect(() => {
        console.log(`点击了${count}次`)
    }, [count])
    return (
        <div>
            <h1>你点击了{count}次</h1>
            <button onClick={() => setCount(count + 1)}>Click me</button>
            <Router>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/list/">列表</Link></li>
                </ul>
                <Route path='/' exact component={Index}/>
                <Route path='/list/' component={List}/>
            </Router>
        </div>
    )
}

export default Example;