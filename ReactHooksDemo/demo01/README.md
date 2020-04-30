## useState 不允许存在条件判断语句中，必须执行

## useContent 解决父子组件传值
```
import React, {useState, createContext, useContext} from 'react'

const CountContext = createContext();

function Counter() {
    let count = useContext(CountContext)
    return (
        <div>{count}</div>
    )
}

export default function Example2() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>你点击了{count}次</h1>
            <button onClick={() => setCount(count + 1)}>Click me</button>
            <CountContext.Provider value={count}>
                <Counter />
            </CountContext.Provider>
        </div>
    )
}
```

## useRuducer 解决状态共享 类似于rudex
    useRuducer + useContext

## shouldComponentUpdate 可以用useMemo 
把“创建”函数和依赖项数组作为参数传入 useMemo，它仅会在某个依赖项改变时才重新计算 memoized 值。这种优化有助于避免在每次渲染时都进行高开销的计算。

## useRef 获取dom , 保存变量