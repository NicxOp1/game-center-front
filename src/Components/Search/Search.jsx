import React from 'react'
import './search.css'

export default function Search() {
  return (
    <div className="content-search-store">
        {/* <input type="text" name="text" class="input" placeholder="Search!"/> */}
    
{/*       <div class="input-group">
      <input required="" type="text" name="text" autocomplete="off" class="input"/>
      <label class="user-label">First Name</label>
    </div> */} 

   <div class="container">
    <input type="text" required="required"/>
    <label>Search!</label>
    <i></i>
  </div> 

{/*   <input placeholder="Enter your text..." class="input" name="text" type="text"/> */}
  </div>
  )
}
