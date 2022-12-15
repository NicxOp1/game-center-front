import React from 'react'
import './addForm.css'
import { useRef } from 'react'
import './addForm.css'
import Swal from 'sweetalert2'
import {useNavigate} from 'react-router-dom'
import axios from "axios";
import {BASE} from '../../Api/url'
import {  useSelector } from "react-redux";


export default function AddForm() {
    const navigate = useNavigate() 
    let { token} = useSelector(state=>state.userReducer)
    let formRef= useRef()
    // let elements = document.getElementsByTagName('input')
    let handleSubmit=(e)=>{
     
        e.preventDefault()
       let form={
          name: formRef.current.elements.name.value,
          description: formRef.current.elements.description.value,
          photo: [formRef.current.elements.photo.value],
          price: formRef.current.elements.price.value,
            video:formRef.current.elements.video.value,
            date: formRef.current.elements.date.value ,
          buyed: [],
          rate: formRef.current.elements.rate.value,
          category: [formRef.current.elements.category.value]
        }
        if(formRef.current.elements.category1.value !== '' ){
            form.category.push(formRef.current.elements.category1.value, formRef.current.elements.category2.value )
        }
        console.log(formRef.current.elements);
   
        let headers= {headers: {'Authorization': `Bearer ${token}`}}
     axios.post(`${BASE}/games`, form, headers )
       .then(response=>{console.log(response.data.success)
        if(response.data.success === true){
            Swal.fire({
                background:'#151513',
            title: "Success",
            text: "The Show was editted succesfully",
             icon: "success",
             timer: 5000,
             confirmButtonText: "Cool"
          })
          navigate(`/`)
        } else{
          let error = response.data.message.join( ",\n ")
        
            console.log(error)
            Swal.fire({
            background:'#151513',
            icon: 'error',
            title: 'Check the info you sent',
                  
           })
        }
        
      })

      .catch(error=>{
      
        
            console.log(error)
            Swal.fire({
                background:'#151513',
                icon: 'error',
                title: 'Check the info you sent',
                      
               })
        }
      )
    } 
    

  return (
    <div className='form-container'>
    <form ref={formRef} className='form-template'>
        <h3> Create a new product</h3>
        <input type='text' name='name' placeholder='Game Name' required/>
        <input type='text' name='description' placeholder='Description' required/>
        <input type='text' name='photo' placeholder='Photo' required/>
        <input type='number' name='price' placeholder='Price'  required/>
        <input type='text' name='video' placeholder='Video' required/>
        <input type='date' name='date' placeholder='Date' required/>
        <input type='number' name='rate' placeholder='Rate' min='0' max='5' step=".1" required/>
        <input type='text' name='category' placeholder='Category' required/>
        <input type='text' name='category1' placeholder='Category'/>
        {/* <input type='text' name='category2' placeholder='Category'/> */}
        <button type='submit' onClick={handleSubmit} className='btn'> Create</button>
    </form>
    </div>
  )
}
