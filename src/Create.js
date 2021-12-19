import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import BASE_API_URL from "./BaseUrl";

const Create = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState('');

    const onSubmit  = async (e) => {

        e.preventDefault();

        // const formData =  new FormData() ;
        // formData.append('image', file);
    
        try {

            const res =  await axios.post(`${BASE_API_URL}/api/make-memory`,
            {
                name:name,
                age:age,
                title: title,
                content: body
            },
            {   headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true 
            }
            
            );

            // const result = await axios.post(`${BASE_API_URL}/api/picture`,
            // formData, 
            // { headers: { 'Content-Type': 'multipart/form-data'}},
            // { withCredentials: true }
            // );
        
        }catch(err){
            console.log(err);
        }       
    }
   
    return ( 
    <div className="create">
      <h2>Add a New Souvenir</h2>
      <form onSubmit={onSubmit}>
        <label>Name:</label>
        <input 
          type="text" 
          required 
          value={name}
          onChange={(e) => {setName(e.target.value)}}
        />
        <label>Age:</label>
        <input 
          type="text" 
          required 
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <label>Title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Description:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Image:</label>
        <input type="file" className='file' id='customFile' onChange={(e)=>{setFile(e.target.files[0]); setFileName(e.target.files[0].name);}}/>
        <button>Save</button>
      </form>
    </div>
     );
}
 
export default Create;