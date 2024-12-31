import React ,{useState} from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);
  return (
    <div className='mx-auto container mt-5  '>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}
        className='btn btn-close '>
      
      </button>
    </div>
  
  )
}