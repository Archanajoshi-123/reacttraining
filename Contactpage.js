import './Contactpage.css';
function Contactpage() {
    return (


<div className="bgcard" >
        <div>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <div>
                    <div>
                        <h6 style={{ fontSize: "15px" }} className="text">CONTACT DETAILS</h6>
                        <h1 className="text1">Get in Touch</h1>
                        <p style={{ margin: "0px 0px 0px 20px" }}> Every lock has it's right key to unlock. Join usto glorify tomorrow with skills... </p>
                    </div>

                    <div className="flexrow">
                        <div>
                            <img className='icon' src={"https://www.freeiconspng.com/uploads/blue-location-icon-png-19.png"} />
                        </div>
                        <div>
                            <h5 style={{ marginTop: "10px" }} className="text texts">Address</h5>
                            <p className="text2">V T Plaza, Road No 1, KPHB Colony, Phase 1, Hyderabad, Telangana - 500072 </p>
                        </div>
                    </div>

                    <div className="flexrow">
                        <div>
                            <img style={{ marginTop: "10px" }} className='icon' src="https://cdn-icons-png.freepik.com/512/9298/9298511.png" />
                        </div>
                        <div>
                            <h5 style={{ marginTop: "5px" }} className="text texts">Contact Us</h5>
                            <p className="text2">Mobile: +91 9966331226, Email: info@instedia.com </p>
                        </div>
                    </div>

                    <div className="flexrow">
                        <div>
                            <img style={{ marginTop: "10px" }} className='icon' src="https://cdn-icons-png.flaticon.com/512/1827/1827336.png" />
                        </div>
                        <div>
                            <h5 style={{ marginTop: "0px" }} className="text texts">Hours of Operation</h5>
                            <p className="text2"> 8 am - 8 pm</p>
                        </div>
                    </div>
                </div>


                <div>
                    <div style={{ marginLeft: "150px" }} className="cardss ">
                        <div>
                            <div>
                                <h3 style={{ fontWeight: "500", color: "#252525" }}>Ready to Get Started?</h3>
                                <p style={{ fontsize: "18px", fontweight: "400", color: "#252525" }}>*Your details will not be published</p>
                            </div>

                            <div style={{ display: "flex", flexDirection: "column" }} >
                                <input type="text" placeholder="Yourname" className="textbox" />
                            </div>

                            <div>
                                <input className="textbox" type="email" placeholder="Your mail" />
                            </div>
                            <div>
                                <input type="text" placeholder="Your Phone Number" className="textbox" />
                            </div>
                            <div>
                                <textarea style={{ height: "100px" }} className='textbox' placeholder='Write Your Msg'></textarea>
                            </div>
                            <div>
                                <button className="submit textbox">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>     
    )
}
export default Contactpage;