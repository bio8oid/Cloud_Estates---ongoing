import React from "react"
import { Link } from "gatsby"
import SEO from "../components/Seo/seo"

const Contact
 = () => (
  <>
    <SEO title="contact" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    
    {/* <video poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/polina.jpg" id="bgvid" playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
<source src="http://thenewcode.com/assets/videos/polina.webm" type="video/webm"/>
        <source src="http://thenewcode.com/assets/videos/polina.mp4" type="video/mp4"/>

</video>



    <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
      <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4"/>
  </video> */}
  </>
)

export default Contact
;