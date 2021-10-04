import React, {Component} from 'react'


export default class Header extends Component {

  render(){

    return (
      <div class="container">] <div class=" text-center mt-5 ">
      <h1>Bootstrap Contact Form</h1>
  </div>
  <div class="row ">
      <div class="col-lg-7 mx-auto">
          <div class="card mt-2 mx-auto p-4 bg-light">
              <div class="card-body bg-light">
                  <div class="container">
                      <form id="contact-form" role="form">
                          <div class="controls">
                              <div class="row">
                                  
                                  <div class="col-md-6">
                                      <div class="form-group"> <label for="form_need">Please specify your need *</label> <select id="form_need" name="need" class="form-control" required="required" data-error="Please specify your need.">
                                      <option selected>Select The Preffered Examination</option>
                                        <option value="Sri Lanka Administrative Services(SLAS)">Sri Lanka Administrative Services (SLAS)</option>
                                        <option value="Banking Exams(IABF/DABF)">Banking Exams(IABF/DABF)</option>
                                        <option value="Sri Lanka Education Administrative Services(SLEAS)">Sri Lanka Education Administrative Services (SLEAS)</option>
                                        <option value="Sri Lanka Accountants Services(SLACS)">Sri Lanka Accountants Services (SLACS)</option>
                                          </select> </div>
                                  </div>
                                  <div class="col-md-6">
                                      <div class="form-group"> <label for="form_name">Lecture Title</label> <input id="form_name" type="text" name="name" class="form-control" value={this.state.LectureTitle} name="LectureTitle" onChange= {this.handleInputChange} placeholder="Please enter your firstname *" required="required" data-error="Firstname is required."/> </div>
                                  </div>
                                  <div class="col-md-6">
                                      <div class="form-group"> <label for="form_lastname">Lastname *</label> <input id="form_lastname" type="text" name="surname" class="form-control"  placeholder="Please enter your lastname *" required="required" data-error="Lastname is required."/> </div>
                                  </div>
                              </div>
                              <div class="row">
                                  <div class="col-md-6">
                                      <div class="form-group"> <label for="form_email">Email *</label> <input id="form_email" type="email" name="email" class="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required."/> </div>
                                  </div>
                              </div>
                              <div class="row">
                                  <div class="col-md-12">
                                      <div class="form-group"> <label for="form_message">Message *</label> <textarea id="form_message" name="message" class="form-control" placeholder="Write your message here." rows="4" required="required" data-error="Please, leave us a message."></textarea> </div>
                                  </div>
                                  <div class="col-md-12"> <input type="submit" class="btn btn-success btn-send pt-2 btn-block " value="Send Message"/> </div>
                              </div>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div> 
  </div>
</div>
     

      
    )
  }
}