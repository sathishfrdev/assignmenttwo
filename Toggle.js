import React,{useState} from "react";

const ToggleElement = () => {
    const [visible, setVisible] = React.useState(false);
    return (
      <div>
        <button onClick={() => setVisible(!visible)}>
          {visible ? 'Hide' : 'Show'}
        </button>
        {visible && <div>My element</div>}
      </div>
    );
  };
  
//   const root = document.querySelector('#root');
    
  export default ToggleElement;