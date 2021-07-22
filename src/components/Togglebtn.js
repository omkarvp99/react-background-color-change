import React from 'react'
import './togglebtn.css';


export default function Togglebtn({backColor,textShow}) {
    const st1 = {
        backgroundColor:"#D8D8D8",
    }
    return (
        <div className="togglebtn">
             <label className="switch">
                 <input type="checkbox" />
                 <span className="slider" style={backColor==="F3F2FC" ? st1 : null }>
                    <div>{textShow ?"Yes":null}</div>
                    <div>{textShow ?"No":null}</div>
                 </span>
             </label>
             {/* ######### Experimental #########  */}
             {/* <div className="toggle-btn">
                    <input type="checkbox" id="checkbox-input"/>
                    <label htmlFor="checkbox-input" className="round-slider-container" >
                        <div>Yes</div>
                        <div>No</div>
                        <div className="round-slider"></div>
                    </label>
             </div> */}
             {/* ################################  */}
        </div>
    )
}

