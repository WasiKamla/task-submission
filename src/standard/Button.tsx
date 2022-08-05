import React from 'react';

const Button = (props: any) => {
  return (
    <button type='button' className='Button' onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
