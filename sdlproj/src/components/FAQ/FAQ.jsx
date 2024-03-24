import React from 'react';
import './FAQ.css';
import FAQ_Image from '../../assets/FAQ_image.svg';
export default function FAQ() {
    return (
        <div>

            <div className="container">
                <img className="faq_image" src={FAQ_Image}/>
                    <h1 className='faq_text'>
                        <strong>Frequestly Asked Questions</strong>
                    </h1>
            </div>



            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            How does the mock interview scheduling process work?
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Our platform allows users to schedule mock interviews by selecting their desired profession and available time slots. Our system then checks for empty slots and notifies users accordingly. Users can easily select and confirm their interview slots through our user-friendly interface.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            What types of mock interview questions are available?
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">We provide a wide range of mock interview questions tailored to various professions, including technical, behavioral, and industry-specific questions. These questions cover different aspects of the interview process to help users prepare effectively for their upcoming interviews.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            How does the resume check feature work, and what feedback can I expect?
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Our resume check feature analyzes users' resumes and provides personalized feedback on areas for improvement, such as content, formatting, and keywords. Users receive detailed evaluations along with recommendations to optimize their resumes for better visibility and effectiveness in job applications.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                            Are the job opportunities listed on your platform updated regularly?
                        </button>
                    </h2>
                    <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Yes, we strive to keep our job opportunities section updated with the latest listings from reputable sources. Our team continually monitors and updates the job listings to ensure users have access to current and relevant employment opportunities in their desired fields.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
