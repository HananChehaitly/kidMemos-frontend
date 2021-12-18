import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import BASE_API_URL from "./BaseUrl";

const Create = () => {
    const [file, setFile] = useState(null);

    const fileSelect= e =>{
        console.log(e.target.files[0]);
        setFile(e.target.files[0])
    }
    const onSubmit  = async e =>{
        e.preventDefault();
        const formData =  new FormData() ;
        formData.append('image', file);
        try {
            console.log(`${BASE_API_URL}/post/make-memory`)
            const res =  await axios.post(`${BASE_API_URL}/post/make-memory`,
            formData, 
            { headers: { 'Content-Type': undefined } },
            { withCredentials: true });
        }catch(err){
            console.log(err);
        }       
    }
   
    return ( 
        <div>
        <form onSubmit={onSubmit}>
            <input type="file" className='file' id='customFile' onChange={fileSelect}/>
            <input type ='submit' value  ='Upload' />
        </form> 
           
        </div>
     );
}
 
export default Create;