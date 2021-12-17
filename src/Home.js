import React from 'react';
import {useState} from 'react';
import InputLabel from '@mui/material/InputLabel';
import { MenuItem, FormControl, Select, Button } from '@mui/material';
import MemoList from './MemoList';
import {Link} from 'react-router-dom';

const Home = () => {
    const [name, setName] = useState('Your Kid')
    const [memories, setMemories] =  useState ([
      {title: 'first walk' , content: 'he took his first walk in kitchen.' , picture_url: 'http/localhost/image',id: 1},
      {title: 'first tooth' , content: 'he took his first walk in kitchen' , picture_url: 'http/localhost/image', name:'Your Kid',id: 2},
      {title: 'first day at school' , content: 'he took his first walk in kitchen' , picture_url: 'http/localhost/image',id:3}
    ])
    const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
    ]
    
    const showMemos = (name) => {
        //fetch memories for this kid to show them only.
    }
    
    return ( 
      <div> 
        <nav className="navbar">
            <h1>{name}'s Souvenirs</h1> 
            <FormControl variant="standard" sx={{minWidth: 120 , marginLeft: 5, marginBottom: 2}}>
              <InputLabel style={{fontFamily:'serif'}}>Choose a book</InputLabel>
                <Select style={{fontFamily:'serif'}}>
                  <MenuItem value="0">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10} style={{fontFamily:'serif'}}>Karim</MenuItem>
                  <MenuItem value={20} style={{fontFamily:'serif'}}>Jad</MenuItem>
                  <MenuItem value={50} style={{fontFamily:'serif'}}>Wael</MenuItem>
                </Select>
            </FormControl>

            <FormControl variant="standard" sx={{minWidth: 120 , marginLeft: 5, marginBottom: 2}}>
              <InputLabel style={{fontFamily:'serif'}}>Choose age</InputLabel>
                <Select style={{fontFamily:'serif'}}>
                  <MenuItem value="0">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10} style={{fontFamily:'serif'}}>10</MenuItem>
                  <MenuItem value={20} style={{fontFamily:'serif'}}>1</MenuItem>
                  <MenuItem value={50} style={{fontFamily:'serif'}}>12</MenuItem>
                </Select>
            </FormControl>
            <div className="links"> 
                <Button variant="contained" 
                  style={{
                    color: "grey",
                    backgroundColor: "#e6b9b1", fontFamily: "serif"   
                  }} >
                  <Link to="/create" style={{ textDecoration: 'none' }}> Add Memory</Link>
                  </Button>
            </div>
        </nav>
        <div className="content">
          <MemoList memos={memories} />
          <MemoList memos={memories.filter((memory) => memory.name === name )} />
        </div>
      </div>
    );
}
 
export default Home;
