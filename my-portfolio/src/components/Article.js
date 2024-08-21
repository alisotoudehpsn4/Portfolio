import React from 'react';
import './Article.css';
import Slideshow from './Slideshow';  // Import the Slideshow component

import aboutImage from '../assets/images/about.jpg';
import educationImage from '../assets/images/education.jpg';
import wealtheonImage1 from '../assets/images/w1.jpg';
import wealtheonImage2 from '../assets/images/w2.jpg';
import wealtheonImage3 from '../assets/images/w3.jpg';
import wealtheonImage4 from '../assets/images/w4.jpg';
import wealtheonImage5 from '../assets/images/w5.jpg';
import expenseMateImage from '../assets/images/ExpenseMate.jpg';
import taskifyImage from '../assets/images/taskify-screenshot.jpg';
import compLetterPDF from '../assets/Comp-Letter.pdf';
import transcriptPDF from '../assets/Transcript.pdf';

function openImageInNewTab(imageUrl) {
  window.open(imageUrl, '_blank');
}

function Article({ id, title, content, image, link, pdfLinks, galleryImages }) {
  return (
    <div className="article" id={id}>
      {image && (
        <img 
          src={image} 
          alt={title} 
          className="article-image"
          onClick={() => openImageInNewTab(image)} // Opens the image in a new tab when clicked
          style={{ cursor: 'pointer' }} // Changes cursor to indicate clickability
        />
      )}
      <h2 className="article-title">{title}</h2>
      <div className="article-content" dangerouslySetInnerHTML={{ __html: content }} />
      {galleryImages && galleryImages.length > 0 && (
        <Slideshow images={galleryImages} autoPlay autoPlayTime={4000} />
      )}
      {pdfLinks && (
        <div className="article-pdf-links">
          {pdfLinks.map((pdf, index) => (
            <a
              key={index}
              href={pdf.link}
              className="article-pdf-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {pdf.label}
            </a>
          ))}
        </div>
      )}
      {link && (
        <a href={link} className="article-link" target="_blank" rel="noopener noreferrer">
          View Website
        </a>
      )}
    </div>
  );
}

function Articles() {
  return (
    <div className="articles">
      <Article
        id="about"
        title="About Me"
        content="Hi, I'm Ali Sotoudeh, a software developer with a passion for creating impactful digital solutions. I graduated from Monash University, Melbourne, with a degree in Information Technology, majoring in Software Development. I am dedicated to mastering the art of programming and leveraging my skills to solve real-world challenges. My journey in software development has been both challenging and rewarding, driving me to constantly improve and stay ahead of the curve."
        image={aboutImage}
      />
      <Article
        id="education"
        title="Education"
        content="I earned my degree from Monash University, where I gained a solid foundation in software development, object-oriented programming, and web technologies. My academic journey has equipped me with the necessary skills to tackle complex problems and deliver high-quality solutions in fast-paced environments."
        image={educationImage}
        pdfLinks={[
          { label: 'Completion Letter', link: compLetterPDF },
          { label: 'Transcript', link: transcriptPDF },
        ]}
      />
      <Article
        id="project1"
        title="ExpenseMate - Expense Tracker App"
        content="ExpenseMate is a fully functional expense tracker app that helps users manage their finances effectively. Built using React and Node.js, it features an intuitive interface, real-time data updates, and insightful analytics through various charts. The app was designed with a focus on user experience and scalability, making it a powerful tool for personal finance management."
        image={expenseMateImage}
        link="https://expense-mate-seven.vercel.app/"
      />
      <Article
        id="project2"
        title="Taskify - Task Management App"
        content="Taskify is a task management application developed using React, which allows users to manage their tasks efficiently. The app includes features like adding, editing, and deleting tasks, as well as integration with external calendars. This project was an opportunity to explore React's capabilities and to develop a highly responsive and user-friendly interface."
        image={taskifyImage}
        link="https://alisotoudehpsn4.github.io/taskify/"
      />
      <Article
        id="wealtheon"
        title="Wealtheon - Educational Platform"
        content="As a Full Stack Developer for Wealtheon, I was responsible for developing an educational platform that enhanced the company's existing online offerings. The project involved creating a secure, scalable backend using CakePHP, coupled with a dynamic, user-friendly frontend. My work ensured seamless integration between the various components of the platform, providing a smooth experience for both administrators and end-users. Access to the educational platform is available by contacting Wealtheon directly through their website at <a href='https://wealtheon.com.au' target='_blank' rel='noopener noreferrer'>wealtheon.com.au</a> for further details."
        galleryImages={[
          wealtheonImage1,
          wealtheonImage2,
          wealtheonImage3,
          wealtheonImage4,
          wealtheonImage5,
        ]}
        link="https://wealtheon.au"
      />
    </div>
  );
}

export default Articles;
