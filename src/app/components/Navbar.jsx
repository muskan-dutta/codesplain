import React from 'react'
import {Link} from "react-router-dom";

export default function Navbar() {
  return (

<div className="wrapper-navbar">
      <div id="banner" className="banner-course banner hide">
        <a id="banner-link" data-tb-track-click="banner_click" href="https://linkedin.com/in/gawravmehta"
          className="banner-text w-inline-block">
          <div data-w-id="" className="banner-phrase">
            <p className="xs text-white banner-text-desktop">
              Learn Project Documentation to mitigate risks | Feb 27
            </p>
            <p className="xs text-white banner-text-mobile-landscape"> Learn Project Documentation to mitigate risks | Feb
              27
            </p>
            <p className="xs text-white banner-text-mobile"> Learn Project Documentation to mitigate risks | Feb 27
            </p>
          </div>
          <div className="button-banner underline-text">
            <div className="text-block-15">Register</div>
            <img src="./arrow.svg" loading="lazy" alt="" className="image-48" /><img src="./go-up.png"
              loading="lazy" alt="" className="image-48-copy" />
          </div>
        </a>
        <div id="banner-close" data-w-id="" className="banner-close">
          <img src="./kopla.svg" loading="lazy" alt="" className="image-47" />
        </div>
      </div>
      <div data-animation="default" className="navbar navbar-main w-nav" data-easing2="ease-in-quad"
        data-easing="ease-out-quad" data-collapse="medium" data-w-id="" role="banner" data-no-scroll="1"
        data-duration="400" data-doc-height="1">
        <div className="container-navbar w-container">
          <a href="/" aria-current="page" className="brand w-nav-brand w--current"><img
              src="https://i.postimg.cc/c1jy4R4x/codesplain-logo-150.png" loading="lazy" alt="Codesplain Logo"
              className="logo" /></a>
          <nav role="navigation" className="nav-menu w-nav-menu">
            <Link to="/Product" className="navlink">Product</Link>
            <a href="/Why" className="navlink">Why Codesplain?</a>
            <Link to="/Pricing" className="navlink">Pricing</Link>
            <a href="https://app.Codesplain.live/register" id="signup-button" data-tb-track-click="signup_cta_click"
              data-tb-track-section="navbar" className="main-button _100-w arengu-form custom w-button">Document Project</a>
          </nav>
          <div className="menu-button w-nav-button">
            <div className="menu-line menu-line-top"></div>
            <div className="menu-line menu-line-middle"></div>
            <div className="menu-line menu-line-bottom"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

