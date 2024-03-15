
import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Yash_Bhoskar_resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import NavBar from "../Navbar";
import "../../style.css"
import Footer from "../Footer";
// import { GoZoomIn } from "react-icons/go";
// import { GoZoomOut } from "react-icons/go";
import { GiGraduateCap } from "react-icons/gi";
import { FaLaptopCode } from "react-icons/fa";
import { FaSchool } from "react-icons/fa6";
import { BiSolidSchool } from "react-icons/bi";

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {
  return (

    <>
      <div className="container pt-5 mt-5 PB-5">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="Jun 2023 - present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FaLaptopCode />}>
            <h5 className="vertical-timeline-element-title">Software Engineer</h5>
            <h6 className="vertical-timeline-element-subtitle">Automaton Ai Infosystem</h6>
            <p className="experience-desc">
              <ul>
                <li>Collaborate with the development team to design, develop, and maintain the application and implement innovative features that enhance the UI/UX experience.</li>
                <li>Developed secure, modular and robust web applications using Angular, TypeScript, Python Flask Api and React Js.</li>
                <li>Work closely with the data science and AI/ML teams to seamlessly integrate AI/ML capabilities into the application.</li>
                  <p>KEY ACHIEVEMENTS</p>
                  <li>Successfully implemented a secure license authentication system, enhancing the platform’s security.</li>
                  <li>Development and implementation of a real-time user-wise data analysis and visualization system resulting in a 35% increase in decision-making eﬃciency and a 40% improvement in user performance tracking.</li>
              </ul>
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019 - 2023"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<GiGraduateCap />}>
            <h5 className="vertical-timeline-element-title">College Of Engineering Pune [COEP]</h5>
            <h6 className="vertical-timeline-element-subtitle">Pune, IND</h6>
            <p className="experience-desc">CGPA : 7.16</p>
            {/* <p>
              Creative Direction, User Experience, Visual Design, SEO, Online Marketing
            </p> */}
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  )
}

export default Experience
