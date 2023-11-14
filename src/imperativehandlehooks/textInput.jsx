import {
    forwardRef,
    useImperativeHandle,
    useRef,
  } from 'react';
  
  
  
  // eslint-disable-next-line react-refresh/only-export-components
  function TextInput(
    props,
    ref
  ) {
    const localRef = useRef(null);
  
    useImperativeHandle(ref, () => ({
      reset: () => {
        if (!localRef.current) return;
  
        localRef.current.value = '';
        localRef.current?.focus();
      },
    }));
  
    return <input type='text' ref={localRef} />;
  }
  
  // eslint-disable-next-line react-refresh/only-export-components
  export default forwardRef(TextInput);