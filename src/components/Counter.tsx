import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    // const [count, setCount] = useState<number>(0); => 이렇게 줘도 됨 !!
    const onIncrease = () => setCount(count + 1);
    const onDecrease = () => setCount(count - 1);
    return (
        <div>
            <h2>{count}</h2>
            <div>
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>
            </div>
        </div>
    );
};

export default Counter;