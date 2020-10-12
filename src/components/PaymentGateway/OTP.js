import React, { Component } from 'react';

class OTP extends Component {
  constructor() {
    super()

    this.state = {
      otp: '',
      errorStatus: false,
      error: '',
      price: NaN,
    }

    this.onChangeOTP = this.onChangeOTP.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    if(this.props.location && this.props.location.state){
      this.setState({price: this.props.location.state.price })
    } else {
      this.props.history.push({pathname: '/'})
    }
  }

  onChangeOTP = (event) => {
    const value = event.target.value;

    if (!isNaN(value) && value.length <= 6) {
      this.setState({otp: value, errorStatus: false, error: ''});
    } else {
      this.setState({errorStatus: true, error: 'Please enter valid 6 digit OTP!'});
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if(this.state.otp.length !== 6){
      this.setState({errorStatus: true, error: 'Please enter valid 6 digit OTP!'});
      return null;
    }

    if(this.state.otp === '123456'){
      this.props.history.push({pathname: `/payment-success`, state: { fromOtpPage: true, price: this.state.price }});
    } else {
      this.props.history.push({pathname: `/payment-failed`, state: { fromOtpPage: true, price: this.state.price }});
    }
    
  }

  render() {

    return (
      <div>
          <div className="container py-5">
            <div className="row mb-4">
              <div className="col-lg-8 mx-auto text-center">
                <h1 className="display-4">OTP Page</h1>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-7 mx-auto">
                <div className="bg-white rounded-lg shadow-sm p-5">
                  <ul role="tablist" className="nav bg-light nav-pills rounded-pill nav-fill mb-3">
                    <li className="nav-item">
                      <div className="nav-link rounded-pill">
                            Enter OTP
                      </div>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div className="tab-pane fade show active">
                      {this.state.errorStatus && (
                        <p className="alert alert-danger">{this.state.error}</p>
                      )}

                      <form>
                        <div className="form-group">
                          <div className="input-group">
                            <input type="number" placeholder="******" className="form-control" onChange={this.onChangeOTP} />
                          </div>
                        </div>

                        <div className="form-group">
                          <div className="input-group">
                            <h5><strong>Total Amount:</strong> {'$' + this.state.price}</h5>
                          </div>
                        </div>

                        <input type="submit" value="Pay" className="subscribe btn btn-primary btn-block rounded-pill shadow-sm" onClick={this.handleSubmit} />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default OTP;