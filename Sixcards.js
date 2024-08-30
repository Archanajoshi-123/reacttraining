import './Sixcards.css';
function Sixcards(){
    return(
        <div>
<div className="displayflex flex   column">
            <button className="button">SERVICES</button>
            <h1>About Our Featured Services</h1>
        </div>
        <div style={{margin: 30}}>
            <div className="row flex ">
                <div className="card">
                    <img src="https://innostes.com/images/home/section-5/web-application-development.svg"
                        className="Img" />
                    <h3>Web Application Development</h3>
                    <p>
                        We develop your idea into a user-friendly and high secured app with sophisticated technology
                        that
                        are trend in market
                    </p>
                </div>
                <div className="card">
                    <img src="https://innostes.com/images/home/section-5/web-designing&development.svg"
                        className="Img" />
                    <h3>Web Designing & Development</h3>
                    <p>
                        We turn your idea into a beautiful web-site with our honed team who are dedicated. They overhaul
                        and usher you in an easy way
                    </p>
                </div>
                <div className="card">
                    <img src="https://innostes.com/images/home/section-5/Mobile-Application-Development.svg"
                        className="Img" />

                    <h3>Mobile Application Development</h3>

                    <p>
                        We develop both Android/iOS applications that are ease to access and facilitated with data
                        security in a fast paced environment
                    </p>
                </div>
            </div>

            <div className="row flex">
                <div className="card">
                    <img src="https://innostes.com/images/home/section-5/cloud-computing-service.svg" className="Img" />
                    <h3>Web Application Development</h3>
                    <p>
                        We develop your idea into a user-friendly and high secured app with sophisticated technology
                        that
                        are trend in market
                    </p>
                </div>
                <div className="card">
                    <img src="https://innostes.com/images/home/section-5/product-design-and-development.svg" className="Img" />
                    <h3>Cloud Computing</h3>
                    <p>
                        We provide cloud computing on SaaS base which is highly secured and flexible to access from
                        anywhere
                        on planet
                    </p>
                </div>
                <div className="card">
                    <img src="https://innostes.com/images/home/section-5/cms-website-development.svg" className="Img" />

                    <h3>Product Design And Development</h3>

                    <p>
                        We write a clean and secured code which is impregnable for its hustle performance of the
                        designed
                        product
                    </p>
                </div>
            </div>
        </div>
        </div>
  
    )
}
export default Sixcards;