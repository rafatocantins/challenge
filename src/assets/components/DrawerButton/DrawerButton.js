import React from 'react';

const DrawerButton = (props) => {
  return (
    <div className="menu__burger" onClick={props.click}><span></span></div>
  )
}

export default DrawerButton;