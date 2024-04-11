import React from 'react';
import './SignupPage.css';
import interviewImg from '../assets/interview.webp';

export default function SignupPage() {
  return (
    <div>
        <div className="toast align-items-center" role="alert" aria-live="assertive" aria-atomic="true">
    <div className="d-flex">
      <div className="toast-body">
        </div>
        <button type="button" className="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
    </div>
    <section className="h-100 bg-light">
    <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100" style={{boxShadow: "0px 0px 8px 0px grey"}}>
        <div className="col">
            <div className="card card-registration my-4">
            <div className="row g-0">
                <div className="col-xl-6 d-none d-xl-block">
                <img src={interviewImg}
                    alt="Sample photo" className="img-fluid"
                    style={{borderTopLeftRadius: ".25rem; border-bottom-left-radius: .25rem"}} />
                </div>
                <div className="col-xl-6">
                <div className="card-body p-md-5 text-black">
                    <h3 className="mb-5 text-uppercase">Registration form</h3>
                    <form action="">
                        <div className="row">
                        <div className="col-md-6 mb-4">
                            <div className="form-outline">
                            <input type="text" id="firstname" className="form-control form-control-lg" required/>
                            <label className="form-label" htmlFor="firstname">First name</label>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="form-outline">
                            <input type="text" id="lastname" className="form-control form-control-lg" required/>
                            <label className="form-label" htmlFor="lastname">Last name</label>
                            </div>
                        </div>
                        </div>
        
                        <div className="form-outline mb-4">
                        <input type="text" id="address" className="form-control form-control-lg" required/>
                        <label className="form-label" htmlFor="address">Address</label>
                        </div>
        
                        <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
        
                        <h6 className="mb-0 me-4">Gender: </h6>
        
                        <div className="form-check form-check-inline mb-0 me-4">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                            value="option1" />
                            <label className="form-check-label" htmlFor="femaleGender">Female</label>
                        </div>
        
                        <div className="form-check form-check-inline mb-0 me-4">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                            value="option2" />
                            <label className="form-check-label" htmlFor="maleGender">Male</label>
                        </div>
        
                        <div className="form-check form-check-inline mb-0">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                            value="option3" />
                            <label className="form-check-label" htmlFor="otherGender">Other</label>
                        </div>
        
                        </div>
        
                        <div className="row">
                        <div className="col-md-6 mb-4">
        
                            <select className="select" style={{marginBottom: "20px"}} id="state">
                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                            <option value="Assam">Assam</option>
                            <option value="Bihar">Bihar</option>
                            <option value="Chhattisgarh">Chhattisgarh</option>
                            <option value="Goa">Goa</option>
                            <option value="Gujarat">Gujarat</option>
                            <option value="Haryana">Haryana</option>
                            <option value="Himachal Pradesh">Himachal Pradesh</option>
                            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                            <option value="Jharkhand">Jharkhand</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Kerala">Kerala</option>
                            <option value="Madhya Pradesh">Madhya Pradesh</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Manipur">Manipur</option>
                            <option value="Meghalaya">Meghalaya</option>
                            <option value="Mizoram">Mizoram</option>
                            <option value="Nagaland">Nagaland</option>
                            <option value="Odisha">Odisha</option>
                            <option value="Punjab">Punjab</option>
                            <option value="Rajasthan">Rajasthan</option>
                            <option value="Sikkim">Sikkim</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                            <option value="Telangana">Telangana</option>
                            <option value="Tripura">Tripura</option>
                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                            <option value="Uttarakhand">Uttarakhand</option>
                            </select>
        
                        </div>
                        </div>
        
                        <div className="form-outline mb-4">
                        <input type="date" id="dob" className="form-control form-control-lg" required/>
                        <label className="form-label" htmlFor="dob">DOB</label>
                        </div>
        
                        <div className="form-outline mb-4">
                        <input type="email" id="email" className="form-control form-control-lg" required/>
                        <label className="form-label" htmlFor="email">Email ID</label>
                        </div>
        
            <div className="form-outline mb-4">
                        <input type="password" id="password" className="form-control form-control-lg" required/>
                        <label className="form-label" htmlFor="password">Password</label>
                        </div>
                        {/* <div className="col errorDiv">
                        <span className="error text-danger row">Must be 8 character long</span>
                        <span className="error text-danger row">Must contain at least 1 uppercase letter</span>
                        <span className="error text-danger row">Must contain at least 1 special character</span>
                        </div> */}
        
                        <div className="d-flex justify-content-end pt-3">
                        <button type="button" className="btn btn-light btn-lg">Reset all</button>
                        <button type="submit" className="btn btn-warning btn-lg ms-2" style={{backgroundColor:"#04364e",color:"white",border:"1px solid #04554e"}}>Submit form</button>
                        </div>
        
                    </form>
                    
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    </section>
    </div>
  )
}
