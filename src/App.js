import './App.css';
import React,{useState, useEffect} from 'react';

import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import { Button } from '@material-ui/core';

import Pannel from "./components/Pannel"

function App() {
  const [backColor, setBackColor] = useState(null)
  useEffect(() => {
    console.log({backColor});
  })  

  
  return (
    <div className="App">
      <FormControl className="App__leftSide" component="fieldset">
      <FormLabel component="legend">Choose Background Color</FormLabel>
      <FormGroup className="sidebar__options">
        
        <Button
          variant="contained"
          style={{backgroundColor:"#5E4FDB"}}
          onClick={ ()=>setBackColor("#5E4FDB") }
        >Primary main</Button>

        <Button
        variant="contained"
        style={{backgroundColor:"#F3F2FC"}}
        onClick={ ()=>setBackColor("#F3F2FC") }
        >primary main - light</Button>

        <Button
        variant="contained"
        style={{backgroundColor:"#1ABC9C"}}
        onClick={ ()=>setBackColor("#1ABC9C") }
        >secondary main</Button>

        <Button
        variant="contained"
        style={{backgroundColor:"#D64B4B"}}
        onClick={ ()=>setBackColor("#D64B4B") }
        >negative</Button>
        
        <Button 
        variant="contained"
        style={{backgroundColor:"#852121"}}
        onClick={ ()=>setBackColor("#852121") }
        >dark red</Button>
        
        <Button
        variant="contained"
        style={{backgroundColor:"#FFE3E3"}}
        onClick={ ()=>setBackColor("#FFE3E3") }
        >light red</Button>

        <Button
        variant="contained"
        style={{backgroundColor:"#C06801"}}
        onClick={ ()=>setBackColor("#C06801") }
        >dark amber</Button>

        <Button
        variant="contained"
        style={{backgroundColor:"#FFF7E3"}}
        onClick={ ()=>setBackColor("#FFF7E3") }
        >light amber</Button>

        <Button
        variant="contained"
        style={{backgroundColor:"#0E4316"}}
        onClick={ ()=>setBackColor("#0E4316") }
        >dark green</Button>

        <Button
        variant="contained"
        style={{backgroundColor:"#E1EFE1"}}
        onClick={ ()=>setBackColor("#E1EFE1") }
        >light green</Button>

        <Button
        variant="contained"
        style={{backgroundColor:"#000000", color:"white"}}
        onClick={ ()=>setBackColor("#000000") }
        >pure black</Button>

        <Button
        variant="contained"
        style={{backgroundColor:"#FFFFFF"}}
        onClick={ ()=>setBackColor("#FFFFFF") }
        >pure white</Button>

        <Button
        variant="contained"
        style={{backgroundColor:"#808080"}}
        onClick={ ()=>setBackColor("#808080") }
        >pure black - 50% transparency</Button>

        <Button
        variant="contained"
        style={{backgroundColor:"#D8D8D8"}}
        onClick={ ()=>setBackColor("#D8D8D8") }
        >dark grey</Button>

        <Button
        variant="contained"
        style={{backgroundColor:"#F0F0F0"}}
        onClick={ ()=>setBackColor("#F0F0F0") }
        >grey</Button>

        <Button
        variant="contained"
        style={{backgroundColor:"#F6F6F6"}}
        onClick={ ()=>setBackColor("#F6F6F6") }
        >light background grey</Button>

      </FormGroup>
      {/* <FormHelperText>Note:</FormHelperText> */}
    </FormControl>
    <Pannel back={backColor} />
    </div>
  );
}

export default App;
