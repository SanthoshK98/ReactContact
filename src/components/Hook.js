import React, {useState} from 'react';

const Hook = () => {
    const [state, setState] = useState('');
    return (
        <div>
            <h1>Hello world</h1>
      <h2>{state}</h2>
      
      <button className='primary' onClick={()=> setState(state, "you are clicked")}>Click to Change</button>
        </div>
    )
}

export default Hook
