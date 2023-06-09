import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Icon } from '@iconify/react';



const Footer=()=>{
    return (
<div class="footer-dark">
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-3 item">
                        <h3>services</h3>
                        <ul>
                          
                            <li><a href="/Development">Development</a></li>
                            <li><a href="#">International Shipping</a></li>
                            <li><a href="/Portfolio">Portfolio</a></li>
                            <li><a href="/Blogs">Blogs</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Information</h3>
                        <ul>
                            <li><a href="#">Company</a></li>
                            <li><a href="/team">Team</a></li>
                            <li><a href="/DevileryInformation">Devilery Information</a></li>
                            <li><a href="/FAQ">FAQs</a></li>

                           
                        </ul>
                    </div>
             


                    <div class="col-md-6 item text">
                        <h3>Contact Us</h3>
                        
                        <p>Phone: +1800-266-0123<br/>
Email: e-commerece@gmail.com<br/>
Address: 61-A , Dwakapuri , indore -india</p>
                    </div>

                    <div class="col item social">
                        
                      <h3>Follow Us On</h3>
                      <a href="https://www.facebook.com/"><Icon icon="ic:baseline-facebook" /></a>
                      <a href="https://twitter.com/i/flow/login"><Icon icon="ion:logo-twitter" /></a>
                      <a href="https://www.snapchat.com/"><Icon icon="ri:snapchat-fill" /></a>
                      <a href="https://www.instagram.com/"><Icon icon="mdi:instagram" /></a>
                      </div>
                </div>

  
                <p class="copyright">Company e-commerce © 2023</p>

            </div>
        </footer>
    </div>

//       
    )
}


export default Footer;