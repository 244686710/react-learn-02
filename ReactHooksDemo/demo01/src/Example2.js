import React, {useEffect, useState} from 'react'

export default function Example2() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log(`useEffect=>You clicked ${count} times`)
    })
    
    return (
        <div>
            <h1>你点击了{count}次</h1>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    )
}