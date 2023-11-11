import { memo } from 'react';

// eslint-disable-next-line react/prop-types, react/display-name
const SlowList=memo(({text})=>{
    const items = [];
    for (let i = 0; i < 250; i++) {
      items.push(<SlowItem key={i} text={text} />);
    }
    return <ul className='items'>{items}</ul>;
})

// eslint-disable-next-line react/prop-types
const SlowItem = ({ text }) => {
  let startTime = performance.now();
  while (performance.now() - startTime < 1) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }

  return <li className='item'>Text: {text}</li>;
};

export default SlowList;