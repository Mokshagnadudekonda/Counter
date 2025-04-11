import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div className='container'>
            <h1>Counter</h1>
            <div className='display'>
                <span>{count}</span>
            </div>
            <div className='button-group'>
                <button className='btn increment' onClick={() => setCount(count + 1)}>+</button>
                <button className='btn decrement' onClick={() => setCount(count - 1)}>-</button>
                <button className='btn reset' onClick={() => setCount(0)}>Reset</button>
            </div>
        </div>
    )
}

export default Counter