import "./Homepage.css";
import React from "react";

function Homepage() {
    return (
        <div>
            <div className="s">
                <div>
                    <div>
                        <h4 className="h4">KEEP LEARNING</h4>
                    </div>
                    <div>
                        <h1 className="h1">Edify Your Skills With Our Tech Experts</h1>
                        <p className="t1">We make a intellectual route with skilled trainers that drive your wisdom to triumph</p>
                    </div>
                    <div>
                        <button className="b">Find Courses</button>
                    </div>
                </div>


                <div>
                    <div>
                        <img className="image" src="https://instedia.com/images/home-image.svg" />
                    </div>
                </div>
                <div>
                </div>
            </div>

<div style={{display:"flex",flexDirection:"row", backgroundColor:"blue"}}>
<div style={{display:"flex",flexDirection:"row",marginleft:"200px"}}>
<div  style={{margin: "10px 14px"}}   >
    <img className="ii" src="https://instedia.com/images/feature-card/course-white-1.svg"/>
</div>
<div>
    <h1 style={{fontSize:"16px",color:"white"}}>Have an Idea ?</h1>
    <p style={{fontSize:"14px",color:"white",lineHeight:"10px"}} >An idea can axe global glitch & can create trend. Join us to  </p>
        <p style={{fontSize:"14px",color:"white",lineHeight:"0px"}} >shape your idea</p> 
</div>
</div>


<div>
    <img className="ii" src="https://instedia.com/images/feature-card/idea-white.svg"/>
</div>
<div>
    <h1 style={{fontSize:"16px",color:"white"}}>Have a Doubt ?</h1>
    <p style={{fontSize:"14px",color:"white",lineHeight:"10px"}} >Enhanced technical skills with skilled proffessionals who make </p>
        <p style={{fontSize:"14px",color:"white",lineHeight:"0px"}} >you techies </p> 
</div>


<div>
    <img className="ii " src="https://instedia.com/images/feature-card/question-mark-white-1.svg"/>
</div>
<div >
    <h1 style={{fontSize:"16px",color:"white"}}>Learn Course</h1>
    <p style={{fontSize:"14px",color:"white",lineHeight:"10px"}} >Why to keep a doubt..? Ask us to make it clear and succeed in a  </p>
        <p style={{fontSize:"14px",color:"white",lineHeight:"0px"}} >better way</p> 
</div>
</div>












</div>



      
    )
}
export default Homepage;