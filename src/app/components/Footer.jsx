import React from 'react'
import {Link} from "react-router-dom";

export default function Footer() {
  return (
        <div id="footer" data-w-id="" className="footer wf-section">
      <div className="container w-container">
        <div className="div-block-70">
          <div className="cont-footer-link">
            <div className="">
              <div id="" className="div-block-380">
                <div className="footer-legal-text">
                  <div className="xxs-ia">
                    Copyright ©
                    <span id="copyright-year">2023</span> Codesplain. All rights
                    reserved
                  </div>
                  <div className="footer-legal-links">
                    <Link to="/Terms" className="footer-link w-inline-block">
                      <div className="xxs-ia">Terms and conditions</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
