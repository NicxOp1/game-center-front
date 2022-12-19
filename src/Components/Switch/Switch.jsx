import React from 'react';
import './switch.css'
const Switch = ({ isOn, handleToggle, onColor }) => {
  return (
    <>
    <div className='switch-container'>
        <h4 className={isOn ?('tittle'):('active')}>LOG IN</h4>

      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        style={{ background: isOn && onColor }}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
      <h4 className={isOn ?('active'):('tittle')}>SIGN UP</h4>
      </div>
    </>
  );
};
 
export default Switch;