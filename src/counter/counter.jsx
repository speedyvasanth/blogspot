import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {increment,  decrement} from './counterSlice'

function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
  return (
    <React.Fragment>
        
        <button className='btn btn-danger' onClick={() => dispatch(decrement())}> Minus - </button>
            <span>  {count}  </span>
        <button className='btn btn-success' onClick={() => dispatch(increment())}> Plus + </button>
        
    </React.Fragment>
    
  )
}

export default Counter