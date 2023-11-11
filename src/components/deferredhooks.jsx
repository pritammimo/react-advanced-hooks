import {useDeferredValue, useState} from 'react'
import SlowList from './Slowlist';

const Deferredhooks = () => {
    const [value, setvalue] = useState("");
    const devalue=useDeferredValue(value)
  return (
    <>
    <input
    value={value}
    onChange={(e)=>setvalue(e.target.value)}
    />
    <div>data:{value}</div>
    <div>devalue:{devalue}</div>
     <SlowList text={devalue} /> 
    </>
  )
}

export default Deferredhooks