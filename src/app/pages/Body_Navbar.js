import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import "./howitworkscss.css"


export default function Body_Navbar() {
const  [show,setShow]=useState(false)
const handleClick2=(event) =>{
  let currId=event.currentTarget.id
  if (currId=="section1"){
    document.getElementById("section1Corres").classList.remove("howitworks")
    document.getElementById("section2Corres").classList.add("howitworks")
    document.getElementById("section3Corres").classList.add("howitworks")
  }else if (currId=="section2"){
    document.getElementById("section2Corres").classList.remove("howitworks")
    document.getElementById("section1Corres").classList.add("howitworks")
    document.getElementById("section3Corres").classList.add("howitworks")
  }else{
    document.getElementById("section3Corres").classList.remove("howitworks")
    document.getElementById("section1Corres").classList.add("howitworks")
    document.getElementById("section2Corres").classList.add("howitworks")
  }


}

  return (
      <div className="wrapper-content">

        <div id="banner" className="banner-course banner hide">
          <a id="banner-link" data-tb-track-click="banner_click" href="https://linkedin.com/in/gawravmehta"
            className="banner-text w-inline-block">
            <div data-w-id="" className="banner-phrase">
              <p className="xs text-white banner-text-desktop">
                Live: Learn Project Documentation to mitigate risks | Feb 27
              </p>
              <p className="xs text-white banner-text-mobile-landscape">
                Live: Learn Project Documentation to mitigate risks | Feb 27
              </p>
              <p className="xs text-white banner-text-mobile">
                Live: Learn Project Documentation to mitigate risks | Feb 27
              </p>
            </div>
            <div className="button-banner underline-text">
              <div className="text-block-15">Register</div>
              <img src="./arrow.svg" loading="lazy" alt="" className="image-48" /><img src="/images/go-up.png"
                loading="lazy" alt="" className="image-48-copy" />
            </div>
          </a>
          <div id="banner-close" data-w-id="b2f50ba1-8471-0ae9-c0bf-766a8c126f4c" className="banner-close">
            <img src="./kopla.svg" loading="lazy" alt="" className="image-47" />
          </div>
        </div>

        <div className="hero wf-section">
          <div className="container w-container">
            <div data-w-id="" className="status-animation-anchor"></div>
            <div className="cols-header w-row">
              <div className="col-head-1 w-col w-col-6 w-col-stack">
                <div data-w-id="">
                  <div className="cont-title mb-24">
                    <div className="hero-title">
                    </div>
                    <div className="hero-title">
                      <h1 className="xxl mb-24">Build docs, better.</h1>
                    </div>
                    <div className="home-hero-subtitle mb-48">
                      <p className="s text-grey">
                        Codesplain is a revolutionary AI-powered documentation generation tool that ingests code to produce
                        clear and concise documentation. Save time and effort, improves collaboration within development
                        teams, and reduces the risk of
                        crucial knowledge being monopolized.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="cont-button">
                  <a data-tb-track-section="hero" data-tb-track-click="signup_cta_click"
                    href="https://app.Codesplain.live/register"
                    className="main-button secondary mr-20 arengu-form w-button"><strong>Create Project
                      Documentation</strong></a>
                  <div>
                  </div>
                </div>
              </div>
              <div className="col-head-2 w-col w-col-6 w-col-stack">
                <img loading="lazy" src="./codesplain.gif" alt="" />
              </div>
            </div>
            <div className="cont-clients-logos">
              <div className="header-text">
                <h3 className="xs-ia">Documented 120+ projects, including </h3>
              </div>
              <div className="w-layout-grid grid">
                <a href="" className="client w-inline-block"><img src="./company-1.svg" loading="lazy" alt="Plytix"
                  className="client-image" /></a><a href="" className="client w-inline-block"><img src="./company-1.svg"
                    loading="lazy" alt="The Hotels Network" className="client-image" /></a><a
                      id="w-node-_63a660b6-b272-5ec7-34a5-5c75c557f8e0-86b17deb" href="" className="client w-inline-block"><img
                    src="./company-1.svg" loading="lazy" alt="The Hotels Network" className="client-image" /></a>
                <div id="w-node-aee10cfb-448e-5a23-d1f8-3492df809cbd-86b17deb" className="client">
                  <img src="./company-1.svg" loading="lazy" alt="Feedback Loop" className="client-image" />
                </div>
                <div id="w-node-bfcb20d4-0fdb-288e-6c56-3247bcd85b83-86b17deb" className="client">
                  <img src="./company-1.svg" loading="lazy" alt="Stay" className="client-image" />
                </div>
                <div id="w-node-e3f7f874-6010-f915-3ffd-391d46454a8b-86b17deb" className="client">
                  <img src="./company-1.svg" loading="lazy" alt="Audiense" className="client-image" />
                </div>
                <a href="" className="client w-inline-block"><img src="./company-1.svg" loading="lazy" alt="Situm"
                  className="client-image" /></a><a href="" className="client w-inline-block"><img src="./company-1.svg"
                    loading="lazy" alt="Genially" className="client-image" /></a>
              </div>
              <div className="cont-mobile">
                <div className="first-grid-logos">
                  <a href="" className="logo-client-wrap w-inline-block"><img src="./company-1.svg" loading="lazy"
                    alt="The Hotels Network" className="client-image" /></a><a href=""
                      className="logo-client-wrap w-inline-block"><img src="images/company-1.svg" loading="lazy"
                        alt="The Hotels Network" className="client-image" /></a>
                  <div className="logo-client-wrap">
                    <img src="./company-1.svg" loading="lazy" alt="Feedback Loop" className="client-image" />
                  </div>
                  <div className="logo-client-wrap">
                    <img src="./company-1.svg" loading="lazy" alt="Stay" className="client-image" />
                  </div>
                  <div className="logo-client-wrap">
                    <img src="./company-1.svg" loading="lazy" alt="Plytix" className="client-image" />
                  </div>
                  <div className="logo-client-wrap">
                    <img src="./company-1.svg" loading="lazy" alt="Audiense" className="client-image" />
                  </div>
                  <div className="logo-client-wrap">
                    <img src="./company-1.svg" loading="lazy" alt="Situm" className="client-image" />
                  </div>
                  <div className="logo-client-wrap">
                    <img src="./company-1.svg" loading="lazy" alt="Genially" className="client-image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="how-it-works wf-section">
          <div className="container w-container">
            <div className="how-it-works-title">
              <h2 className="xl align-center mb-32">
                How <span className="underline-text padding-12">it works?</span>
              </h2>
            </div>
            <div data-current="Ingest" data-easing="ease" data-duration-in="300" data-duration-out="100" className="w-tabs">
              <div className="tabs-menu-11 w-tab-menu">
                <a onClick={handleClick2} data-w-tab="Ingest" id="section1" className="how-it-works-tab-link w-inline-block w-tab-link w--current">
                  <div className="div-block-392">
                    <div className="number-div">
                      <p className="s bold text-white">1</p>
                    </div>
                  </div>
                  <div className="div-block-391">
                    <h1 className="s semi-bold">Connect & ingest your code</h1>
                  </div>
                  <p className="xs text-lightgrey">
                    With Codesplain, you have the flexibility to bring in your code from a variety of sources. Whether you
                    prefer to utilize the power of Github or GitLab, or prefer to manually upload your code.
                  </p>
                </a>
                <a onClick={handleClick2} data-w-tab="Transform" id="section2" className="how-it-works-tab-link w-inline-block w-tab-link">
                  <div className="div-block-392">
                    <div className="number-div">
                      <p className="s bold text-white">2</p>
                    </div>
                  </div>
                  <div className="div-block-391">
                    <h1 className="s semi-bold">Extensive AI Documentation</h1>
                  </div>
                  <p className="xs text-lightgrey">
                    AI algorithms will analyze the code and generate a comprehensive
                    documentation, ensuring that all relevant information is captured and available for future reference.
                  </p>
                </a>
                <a  onClick={handleClick2}data-w-tab="Publish" id="section3" className="how-it-works-tab-link w-inline-block w-tab-link">
                  <div className="div-block-392">
                    <div className="number-div">
                      <p className="s bold text-white">3</p>
                    </div>
                  </div>
                  <div className="div-block-391">
                    <h1 className="s semi-bold">Preserve Code Knowledge</h1>
                  </div>
                  <p className="xs text-lightgrey">
                    Save technical product knowledge and thousands of dev-hours since anyone can
                    comprehend the code, decreasing the time, effort and improving team collaboration.
                  </p>
                </a>
              </div>
              <div className="w-tab-content">
                <div data-w-tab="Ingest" id="section1Corres" className="how-it-works-tab-pane w-tab-pane w--tab-active ">
                  <div className="cont-lines">
                    <div className="icon-flex">
                      <div className="iconflex">
                        <img loading="lazy" src="./github.png" alt="" />
                      </div>
                      <div className="iconflex">
                        <img loading="lazy" src="./gitlab.png" alt="" />
                      </div>
                      <div className="iconflex">
                        <img loading="lazy" src="./bitbucket.jpg" alt="" />
                      </div>
                      <div className="iconflex no-margin">
                        <img loading="lazy" src="./visual-code.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="cont-img-header negative-margin">
                    <div className="gradient-background">
                      <div className="flex-cols">
                        <div className="dark-col">
                          <div className="browser-dots">
                            <img loading="lazy" src="./three-dot.svg" alt="" />
                          </div>
                          <div className="code-wrap">
                            <h5 className="code02">
                             <h5>import (</h5>
                             <h5>"io"</h5>
                             <h5>"github.com/cloudflare/circl/group"</h5>
                             <h5>)</h5>
                             <h5>func ProveGen(myGroup group.Group, DB,</h5>
                              <h5> verifierLabel, dst []byte, rnd io.Reader)</h5>
                              <h5>(group.Element, group.Scalar)</h5>
                              <h5> v := myGroup.RandomNonZeroScalar(rnd)</h5>
                              <h5>V := myGroup.NewElement()</h5>
                              <h5>V.Mul(DB, v)</h5>

                            </h5>
                          </div>
                        </div>
                        <div className="light-col">
                          <div className="light-col-head">
                            <div className="table-head">
                              <div className="table-head-title">
                                <div className="head-icon">
                                  <img loading="lazy" src="./kafta.svg" alt="Icon Apache Kafka" />
                                </div>
                                <div className="table-head-text">
                                  <p className="paragraph-5">main.py</p>
                                  <p className="paragraph-6">21.3kb / 2.3Mb</p>
                                </div>
                              </div>
                            </div>


                            <div className="table-bottom">
                                
                                <div className="table-head-text">
                                  <p className="paragraph-chatgpt">Code imports the io and 
                                  circl/group packages. It defines a function ProveGen that takes a 
                                  group object, a byte slice DB, verifierLabel, destination, and an 
                                  io. Reader object and creates a new 
                                  group element V using the group object. V is computed as the result 
                                  of multiplying DB and v using the group operation. The function 
                                  returns the group element V and the scalar value v as a tuple..</p>
                                  
                                </div>
                              
                            </div>


                          </div>
                          <div className="light-col-body">

                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="line-bottom"></div>
                  </div>
                </div>
                <div data-w-tab="Transform" id="section2Corres" className="how-it-works-tab-pane w-tab-pane w--tab-active howitworks">

                 <h2>
                  <p>this is section 2</p>
                  </h2>
                </div>
                <div data-w-tab="Publish"  id="section3Corres" className="how-it-works-tab-pane w-tab-pane w--tab-active howitworks">
                  <h2> this is section 3</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="develop wf-section">
          <div className="container w-container">
            <div className="w-row">
              <div className="column-7 w-col w-col-6 w-col-stack">
                <div className="div-block-29">
                  <h4 className="xs-ia mb-8">Advance Documentation</h4>
                  <h2 className="xl mb-24">
                    For <span className="underline-text">developers</span> by
                    <span className="underline-text">developers</span>
                  </h2>
                  <div className="subtitle-dev">
                    <p className="s">
                      Envision having the ability to transform your code into comprehensive documentation, saving countless
                      hours while decreasing the risk of crucial knowledge being monopolized by few individuals in
                      organization.
                      <br /><br /> With
                      Codesplain, you can easily onboard new developers, streamlining the process and ensuring that your
                      team has access to all the necessary information. Make the most of your code with Codesplain's
                      cutting-edge AI technology.
                    </p>
                  </div>
                  <div className="cont-button centered">
                    <a data-tb-track-section="developers-section" data-tb-track-click="contact_sales_cta_click"
                      href="https://app.Codesplain.live/register"
                      className="main-button secondary mr-20 arengu-form w-button"><strong>Create Project
                        Documentation</strong></a>
                    <div>

                    </div>
                  </div>
                </div>
                <div className="div-block-34">
                  <img src="./programs.png" loading="lazy" alt="App and supported programs for documentation"
                    className="image-21" />
                </div>
              </div>
              <div className="column-8 w-col w-col-6 w-col-stack">
                <div className="div-block-33">
                  <img src="./Codesplain-sample.png" loading="lazy" alt="" className="image-21-copy" />
                </div>
              </div>
            </div>
            <div>
              <img src="/images/581.png" loading="lazy"
                sizes="(max-width: 479px) 100vw, (max-width: 767px) 92vw, (max-width: 991px) 672px, 100vw" srcset="/images/581-500.png 500w, 6048c50adefe73fe3bc6c51b/60c74614beee7fefb08c009f_Group 581@2x-p-800.png 800w, 
            /images/581-1080.png 1080w, 
            /images/581-1600.png 1600w, 
            /images/581-2000.png 2000w, 
            /images/581 2146w" alt="" className="image-22" />
            </div>
          </div>
        </div>

        <div className="section-8-copy wf-section">
          <div className="container">
            <div className="div-block-387">
              <div id="" className="div-block-388">
                <div className="div-block-29-copy">
                  <h4 className="xs-ia mb-16 text-white">Testimonials</h4>
                  <h2 className="xl text-white">
                    What people say <span className="underline-text">about us</span><span className="underline-text"></span>
                  </h2>
                </div>
                <div className="testimonial">
                  <blockquote className="testimonial-quote">
                    &quot;As the CEO of a growing tech company, I understand the importance of having accurate and
                    up-to-date documentation. Codesplain has transformed our code into a comprehensive and easily
                    understandable
                    documentation, saving us countless hours and improving collaboration within our development team. Our
                    onboarding process has become seamless, and we no longer have to worry about crucial knowledge being
                    monopolized by one person. Codesplain has truly been a game-changer for our company.&quot;
                  </blockquote>
                  <a href="#" className="div-block-202 w-inline-block">
                    <div className="div-block-204">
                      <img src="./person-1.jpg" loading="lazy" alt="" className="image-63-copy-copy" />
                    </div>
                    <div>
                      <div className="div-block-205">
                        <div className="xxs semibold text-white lh-small">
                          Salman Khan
                        </div>
                      </div>
                      <div className="div-block-206">
                        <div className="xxs text-white lh-small opacity-40">
                          Software Engineer @ Google.com
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div id="w-node-_5c75bb56-129d-cfc4-97a8-4c6de38cfb15-894427f3" className="div-block-389">
                <div className="testimonial">
                  <blockquote className="testimonial-quote">
                    “I was absolutely blown away by what Codesplain has to
                    offer! The AI-powered documentation generation is nothing short of a game-changer. We were able to save
                    countless hours and effort, while also dramatically improving the quality of our documentation. The
                    clear and concise documentation generated by Codesplain has allowed our development team to quickly
                    understand the codebase and collaborate more effectively. I highly, highly recommend Codesplain to any
                    CTO looking to take their documentation process to the next level!”
                  </blockquote>
                  <a href="#" className="div-block-202 w-inline-block">
                    <div className="div-block-204">
                      <img src="./person-2.jpg" loading="lazy" alt="" className="image-63-copy-copy" />
                    </div>
                    <div>
                      <div className="div-block-205">
                        <div className="xxs semibold text-white lh-small">
                          Suresh Raina
                        </div>
                      </div>
                      <div className="div-block-206">
                        <div className="xxs text-white lh-small opacity-40">
                          CTO @ Compnay
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="testimonial">
                  <blockquote className="testimonial-quote">
                    “I have worked on countless projects and have seen the struggles that come with keeping a codebase
                    well-documented and easily understandable. The clear and concise documentation by Codesplain has made it
                    much easier for me to understand the code and everyone else. Must have!”
                  </blockquote>
                  <a href="#" className="div-block-202 w-inline-block">
                    <div className="div-block-204">
                      <img src="./person-3.jpg" loading="lazy" alt="" className="image-63-copy-copy" />
                    </div>
                    <div>
                      <div className="div-block-205">
                        <div className="xxs semibold text-white lh-small">
                          Bharosa Aadmi
                        </div>
                      </div>
                      <div className="div-block-206">
                        <div className="xxs text-white lh-small opacity-40">
                          Sr. Dev @ The Project
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-8 wf-section">
          <div className="container">
            <div className="div-block-381">
              <div className="div-block-382">
                <div className="div-block-384">
                  <div className="div-block-383">
                    <h2 className="l text-white"></h2>
                  </div>
                  <div className="div-block-385">
                    <div className="s text-black">
                      Build high-quality, comprehensive project documents that preserves knowledge and makes collabration
                      cake-walk.
                    </div>
                  </div>
                  <div className="div-block-386">
                    <a data-tb-track-section="cta-section" data-tb-track-click="contact_sales_cta_click"
                      href="https://app.Codesplain.live/register"
                      className="main-button secondary mr-20 arengu-form w-button">Start
                      Documentation</a>
                  </div>
                </div>
                <img
                  src="https://global-uploads.webflow.com/6048c50adefe73fe3bc6c51b/62ea24b8dbd70f0e4da45162_cta-asset-mobile-portrait.png"
                  loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 91vw, 100vw" srcset="
            https://global-uploads.webflow.com/6048c50adefe73fe3bc6c51b/62ea24b8dbd70f0e4da45162_cta-asset-mobile-portrait-p-500.png 500w,
            https://global-uploads.webflow.com/6048c50adefe73fe3bc6c51b/62ea24b8dbd70f0e4da45162_cta-asset-mobile-portrait.png       750w
          " alt="" className="image-95" />
              </div>
            </div>
          </div>
        </div>
        <div className="section-6 wf-section">
          <div className="container">
            <div className="div-block-109" image-50>
              <h2 className="slack-title">Connect Github</h2>
              <div className="text-block-17">
                <div className="s text-white">Save your technical knowledge for everyone before its too late. Connect your
                  github, gitlab or upload
                  the code to start building comprehensive
                  documentation. </div>
              </div>
              <div className="div-block-16"><a href="" target="_blank" className="main-button-2 secondary w-button">Create
                Documentation</a></div>
            </div>
          </div>
        </div>
      </div>
  )
}
