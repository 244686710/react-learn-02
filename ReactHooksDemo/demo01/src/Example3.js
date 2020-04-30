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