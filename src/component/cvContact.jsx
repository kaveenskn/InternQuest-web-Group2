import React from 'react'
import '../styles/cvContact.css'
import { MdAttachEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { SiWebmoney } from "react-icons/si";


const Contact = () => {
  return (
    <div className='contactcard'>
        <h1>Contact Information</h1>
        <div className="c-cards">
        <div className="cdetails">
            <div className="icon-circle"><MdAttachEmail /></div>
            <div className="text">
            <span className="label">Email</span>
            <span className="value">kaveen@gmail.com</span>
            </div>
        </div>
        <div className="cdetails">
            <div className="icon-circle"><FaPhone /></div>
            <div className="text">
            <span className="label">Phone</span>
            <span className="value">0759685325</span>
            </div>
        </div>
        <div className="cdetails">
            <div className="icon-circle"><FaUniversity /></div>
            <div className="text">
            <span className="label">University</span>
            <span className="value">Sabaragamuwa university</span>
            </div>
        </div>
        <div className="cdetails">
            <div className="icon-circle"><SiWebmoney /></div>
            <div className="text">
            <span className="label">Website</span>
            <span className="value">https://yourwebsite.com</span>
            </div>
        </div>
        </div>

        
    </div>
  )
}

export default Contact
