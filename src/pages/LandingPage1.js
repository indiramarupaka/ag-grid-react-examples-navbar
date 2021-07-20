//https://wonderfullandingpage.github.io/mylandingpage/
//https://github.com/wonderfullandingpage/mylandingpage
import React from "react";
import ParticlesBg from "particles-bg";
class LandingPage1 extends React.Component {
  render() {
    return (
      <>
        <header id="header">
          <div className="intro">
            <ParticlesBg
              // type="lines"
              type="circule"
              bg={{ zIndex: 0, position: "absolute", top: 0 }}
            />
            {/* <ParticlesBg color="#000000" num={100} type="cobweb" bg={true} /> */}
            <div className="overlay">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 col-md-offset-2 intro-text">
                    <h1>
                      WE ARE A LANDING PAGE
                      <span></span>
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis sed dapibus leo nec ornare diam sed commodo nibh ante
                      facilisis bibendum.
                    </p>
                    <a
                      href="#features"
                      className="btn btn-custom btn-lg page-scroll"
                    >
                      Learn More
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <style jsx global>{`
          /* Header Section */
          .intro {
            display: table;
            position: relative;
            width: 100%;
            padding: 0;
            background-color: #e5e5e5;
            -webkit-background-size: cover;
            -moz-background-size: cover;
            background-size: cover;
            -o-background-size: cover;
          }
          .intro .overlay {
            background: rgba(0, 0, 0, 0.2);
          }
          .intro h1 {
            font-family: "Raleway", sans-serif;
            color: #fff;
            font-size: 82px;
            font-weight: 700;
            text-transform: uppercase;
            margin-top: 0;
            margin-bottom: 10px;
          }
          .intro h1 span {
            font-weight: 800;
            color: #5ca9fb;
          }
          .intro p {
            color: #fff;
            font-size: 22px;
            font-weight: 300;
            line-height: 30px;
            margin: 0 auto;
            margin-bottom: 60px;
          }
          header .intro-text {
            padding-top: 350px;
            padding-bottom: 200px;
            text-align: center;
          }
        `}</style>
      </>
    );
  }
}
export default LandingPage1;
