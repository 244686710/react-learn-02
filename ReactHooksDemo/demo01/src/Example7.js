import React, { useState, useMemo, Fragment } from 'react';

function Example7() {
    const [xiaohong, setXiaohong] = useState('小红在待客状态')    
    const [zhiling, setZhiling] = useState('志林在待客状态')    
    return (
        <div>
            <button onClick={
                () => setXiaohong(new Date().getTime())
            }>小红</button>
            <button onClick={
                () => setZhiling(new Date().getTime()　+ '志玲向我们走来')
            }>志林</button>
            <ChildComponent name={xiaohong}>{zhiling}</ChildComponent>
        </div>
    )
}

function ChildComponent({ name, children }) {
    const changeXihao = (name) =>   {
        console.log('小红来了')
        return name + ', 小红向我们走来了'
    }

    const actionXiaohong = useMemo(() => changeXihao(name),[name]) 
    return (
        <Fragment>
            <div>{actionXiaohong}</div>
            <div>{children}</div>
        </Fragment>
    )
}

export default Example7