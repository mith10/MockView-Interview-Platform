import React from 'react';
import './Pricing.css';

export default function Pricing() {
  return (
    <div>
         <div className=" container-fluid pricingTable pt-90">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="inner d-flex tabsBtnHolder">
                            <ul>
                                <li><p id="monthly" className="active">Pricing</p></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row monthlyPriceList animated">
                    <div className="col-md-4 pricing-box">
                        <div className="inner holder">
                            <div className="hdng">
                                <p>Starter Plan</p>
                            </div>
                            <div className="price mt-5">
                                <p><b>₹2000</b><span> / mo</span></p>
                            </div>
                            <div className="info">
                                <p>Access to mock interviews for 1 month</p>
                                <p>Limited mock interview questions</p>
                                <p>Basic resume check with 1 evaluation</p>
                                <p>Limited access to job opportunities</p>
                                <p>Basic access to aptitude tests</p>
                            </div>
                            <div className="btn">
                                <a href="#" className="readon">Buy Now</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 pricing-box">
                        <div className="inner holder active standar_plan">
                            <div className="hdng">
                                <p>Standard Plan</p>
                            </div>
                            <div className="price mt-5">
                                <p><b>₹5000</b><span> / mo</span></p>
                            </div>
                            <div className="info">
                                <p>Access to mock interviews for 3 months</p>
                                <p>Full access to mock interview questions</p>
                                <p>Enhanced resume check with 3 evaluations</p>
                                <p>Expanded access to job opportunities</p>
                                <p>Expanded access to aptitude tests</p>
                            </div>
                            <div className="btn">
                                <a href="#" className="readon">Buy Now</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 pricing-box">
                        <div className="inner holder premium_plan">
                            <div className="hdng">
                                <p>Premium Plan</p>
                            </div>
                            <div className="price mt-5">
                                <p><b>₹8000</b><span> / mo</span></p>
                            </div>
                            <div className="info">
                                <p>Access to mock interviews for 6 months</p>
                                <p>Advanced access to mock interview questions</p>
                                <p>Comprehensive resume check with 6 evaluations</p>
                                <p>Unlimited access to job opportunities</p>
                                <p>Unlimited access to aptitude tests</p>
                            </div>
                            <div className="btn">
                                <a href="#" className="readon">Buy Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </div>
    </div>
  )
}
