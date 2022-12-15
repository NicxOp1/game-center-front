import React from 'react'
import './checkbox.css'

export default function Checkbox(props) {
    let {category} = props


  return (
      <div className="content-checbox">
  <label className="checkBox-label">
    <input id="" type="checkbox"/>
    <div className="transition"></div>
  </label>{category}
</div>
  )
}
