import React from 'react';
import {useState, useEffect} from 'react';
import InputLabel from '@mui/material/InputLabel';
import { MenuItem, FormControl, Select, Button } from '@mui/material';
import MemoList from './MemoList';
import {Link} from 'react-router-dom';
import axios from 'axios';
import BASE_API_URL from './BaseUrl';

const Home = () => {

    const [name, setName] = useState('Your Kid')
    const [kids, setNames] = useState(null);
    const [memories, setMemories] =  useState (null);
    const [ages, setAges] = useState(null);

    const getMemories = async () => {
      await axios.get(`${BASE_API_URL}/api`, { withCredentials: true }).then(
          response => { console.log(response)
            setMemories(response.data.post)}
      );        
    }

    const getKids =  async() => {
      await axios.get(`${BASE_API_URL}/api/kidsNames`, { withCredentials: true }).then(
        response =>{ 
          console.log(response);
          setNames(response.data.post)}
      ); 
    }

    const getAges =  async() => {
      await axios.get(`${BASE_API_URL}/api/getAges`, { withCredentials: true }).then(
        response =>{ 
          console.log(response);
          setAges(response.data.post)}
      ); 
    }


  useEffect(() =>{
    getMemories();
    getKids();
    getAges();
  },[]);

    return (
    <div>
    {memories && <div> 
        <nav className="navbar">
            <h1>{name}'s Souvenirs</h1> 
            <FormControl variant="standard" sx={{minWidth: 120 , marginLeft: 2, marginBottom: 2}}>
              <InputLabel style={{fontFamily:'serif'}}>Choose a book</InputLabel>
                <Select style={{fontFamily:'serif'}}>
                  <MenuItem value="0">
                    <em>None</em>
                  </MenuItem>
                  {kids && kids.map((kid) => (
                      <MenuItem key={kid.id} style={{fontFamily:'serif'}} value={kid.id}>{kid.name}</MenuItem>
                    
                  )) 
                  }
                </Select>
            </FormControl>

            <FormControl variant="standard" sx={{minWidth: 120 , marginLeft: 2, marginBottom: 2}}>
              <InputLabel style={{fontFamily:'serif'}}>Choose age</InputLabel>
                <Select style={{fontFamily:'serif'}}>
                  <MenuItem value="0">
                    <em>None</em>
                  </MenuItem>
                  {ages && ages.map((age) => (
                      <MenuItem key={age.id} style={{fontFamily:'serif'}} value={age.id}>{age.age}</MenuItem> 
                  )) 
                  }                
                  </Select>
            </FormControl>
            <div className="links" > 
                <Button variant="contained" 
                  style={{
                    color: "grey",
                    backgroundColor: "#e6b9b1", fontFamily: "serif",
                    width:90, height:50, fontSize: 13, position:'center'
                  }} >
                  <Link to="/create-memory" style={{ textDecoration: 'none' }}>Add Memory</Link>
                  </Button>
            </div>
        </nav>
        <div className="content">
          <MemoList memos={memories} />
        </div>
      </div>
    
    }
    </div>
      );
}
 
export default Home;
