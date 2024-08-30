import './Loginpage.css';
function Loginpage(){
    return(

<div>
<div className='dflex'>
<div style={{marginTop:"10px"}} className='card4'>



 <div>  
<div className='dflex'>
<div style={{margin:"90px 40px 90px 40px"}}  className='card3'>




<div className='c'>
<div className='dflex' >
    <h1 className='login' >USER LOGIN</h1>
</div>
</div>





<div className='dflex'>
<img className="imgsize"    src="https://th.bing.com/th/id/OIP.kbHczAIgV98NHgtvvj-fEAHaHa?pid=ImgDet&w=474&h=474&rs=1"/>
</div>


<div className='dflex '>
    <input style={{marginTop:"10px"}}   className='textboxs'  type='text' placeholder='Username'/>
</div>

<div  className='dflex'>
    <input  style={{marginTop:"10px"}} className='textboxs' type='password' placeholder='Password'/>
</div>

<div className='dflex '>
    <input type='checkbox' placeholder='Rememberme'/>
    <label style={{fontSize:"10px",marginRight:"10px"}}>Remember me</label>
    <label style={{fontSize:"10px",marginLeft:"90px"}}>Forgot password?</label>
</div>

<div className='dflex'>
<button style={{marginTop:"40px"}}  className='textboxs b'>Log IN</button>
</div>

{/* <div className='dflex'>
    <input className='textboxs' type='button' placeholder='Log IN'/>
</div> */}





</div>












</div>
</div> 


</div>
</div>
</div>

















       
    )
}
export default Loginpage;