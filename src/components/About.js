import React, { Component } from 'react';

export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about" style={{display: "flex", alignItems:"center", position: "relative"}}>
         <p style={{position: "absolute", top: "20vh", left:"40vw", font: "Roboto", fontSize:"15vw", 
         fontWeight:"600", textShadow:"20px 20px 0 rgb(0 0 0 / 20%)", opacity: 0.72, color:"#616161"}}>About</p>
         <div className="row">

            <div className="three columns">
               <img className="profile-pic"  src="images/ajinkya.jpg" alt="" />
            </div>

            <div className="eight columns main-col">
               <h2>Let me introduce myself!</h2>
               <p style={{fontSize:"20px"}}>
                  {resumeData.aboutme}
               </p>
               <div style={{display: "flex"}}>
                  <button style={{marginRight: "10px", height:"50px"}}>
                     <a className="smoothscroll" href="#footer">
                        <p style={{display:"relative", align:"center", color:"white"}}>    
                           Contact Me
                        </p>
                     </a>
                  </button>
                  <button style={{height:"50px"}}><p style={{display:"relative", align:"center", color:"white"}}>Download Resume</p></button>
               </div>
            </div>
         </div>
      </section>
    );
  }
}