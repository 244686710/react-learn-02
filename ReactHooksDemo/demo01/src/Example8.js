import React, { useRef, useState, useEffect } from 'react'

function Example8() {
    const inputEl = useRef()
    const [text, setText] = useState('');

    const textRef = useRef();

    useEffect(() => {
        textRef.current = text
        console.log('textRef.current:', textRef.current)
    }, [text])

    const hanldeClick = () => {
        console.log(inputEl)
    }
    return (
        <div>
            <p>
                {text}
            </p>
            <input ref={inputEl} type="text" />
            <button onClick={hanldeClick}>在input上展示文字</button>
        </div>
    )
}

export default Example8