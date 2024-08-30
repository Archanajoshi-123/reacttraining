import './Login.css';
function Login() {
    return (
       
        <div className='dflex'>
            <div className='card4'>
            <form  style={{margin:"90px 150px 40px 150px"}} className='card3'>

                <div  >
                    <h1 className='login dflex' style={{backgroundColor:"blue",height:"40px",width:"100%"}} >USER LOGIN</h1>
                </div>

                <div className='dflex'>
                    <img className="imgsize" src="https://th.bing.com/th/id/OIP.kbHczAIgV98NHgtvvj-fEAHaHa?pid=ImgDet&w=474&h=474&rs=1" />
                </div>

                
                <div className='dflex '>
                    <input style={{ marginTop: "10px" }} className='textboxs' type='text' placeholder='Username' />
                    <img src=   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQruH_uI0sln2eVMva9XmYTvJf3vYPo-g3pdQ&s" className="i position"/>
                </div>

                <div className='dflex '>
                    <input style={{ marginTop: "10px" }} className='textboxs ' type='password' placeholder='Password'/>
                    <img src="https://icons.veryicon.com/png/o/miscellaneous/remitting-country-linear-icon/password-148.png" className='i position'/>
                </div>


                <div className='dflex '>
                    <input type='checkbox' placeholder='Remember me'/>
                    <label style={{ fontSize: "10px",marginRight:"60px"}}>Remember me</label>
                    <a href="http://www.dummypoint.com/auth-forgot-password.html"  style={{ fontSize: "10px"}} >Forgot password?</a>
                </div>

                <div className='dflex'>
                    <button style={{ marginTop: "40px" }} className='textboxs b'>Log IN</button>
                </div>







              

            </form>
            </div>
            </div>
        
    )
}
export default Login;