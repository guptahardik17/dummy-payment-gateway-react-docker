import React, { Component } from 'react';

class CardDetails extends Component {
  constructor() {
    super()

    this.state = {
      name: '',
      cardNumber: '',
      expiryMonth: '',
      expiryYear: '',
      cvv: '',
      errorStatus: false,
      error: '',
      price: NaN,
    }

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeCardNumber = this.onChangeCardNumber.bind(this);
    this.onChangeExpiryMonth = this.onChangeExpiryMonth.bind(this);
    this.onChangeExpiryYear = this.onChangeExpiryYear.bind(this);
    this.onChangeCvv = this.onChangeCvv.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    if(this.props.location && this.props.location.state){
      this.setState({price: this.props.location.state.price })
    } else {
      this.props.history.push({pathname: '/'})
    }
  }

  onChangeName = (event) => {
    this.setState({name: event.target.value});
  }

  onChangeCardNumber = (event) => {
    const value = event.target.value;

    if (!isNaN(value)) {
      this.setState({cardNumber: value, errorStatus: false, error: ''});
    } else {
      this.setState({errorStatus: true, error: 'Please enter valid 16 digit Card Number!'});
    }
  }

  onChangeExpiryMonth = (event) => {
    const value = event.target.value;
    
    if (!isNaN(value) && 1 <= value && value <= 12) {
      this.setState({expiryMonth: value, errorStatus: false, error: ''});
    } else {
      this.setState({errorStatus: true, error: 'Please enter a valid Month!'});
    }
  }

  onChangeExpiryYear = (event) => {
    const value = event.target.value;

    if (!isNaN(value) && value.length <= 4) {
      this.setState({expiryYear: value, errorStatus: false, error: ''});
    } else {
      this.setState({errorStatus: true, error: 'Please enter a valid 4 digit year!'});
    }
  }

  onChangeCvv = (event) => {
    const value = event.target.value;

    if (!isNaN(value) && value.length <= 3) {
      this.setState({cvv: value, errorStatus: false, error: ''});
    } else {
      this.setState({errorStatus: true, error: 'Please enter a valid 3 digit CVV!'});
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if(this.state.name.length === 0){
      this.setState({errorStatus: true, error: 'Please enter Card Owner Name!'});
      return null;
    }

    if(this.state.cardNumber.length !== 16){
      this.setState({errorStatus: true, error: 'Please enter valid 16 digit Card Number!'});
      return null;
    }

    if(this.state.expiryMonth.length === 0){
      this.setState({errorStatus: true, error: 'Please enter a valid Month!'});
      return null;
    }

    if(this.state.expiryYear.length !== 4){
      this.setState({errorStatus: true, error: 'Please enter a valid 4 digit year!'});
      return null;
    }

    if(this.state.cvv.length !== 3){
      this.setState({errorStatus: true, error: 'Please enter a valid 3 digit CVV!'});
      return null;
    }

    this.props.history.push({pathname: `/otp`, state: { fromPaymentPage: true, price: this.state.price }});
  }

  render() {

    return (
      <div>
          <div className="container py-5">
            <div className="row mb-4">
              <div className="col-lg-8 mx-auto text-center">
                <h1 className="display-4">Payment Page</h1>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-7 mx-auto">
                <div className="bg-white rounded-lg shadow-sm p-5">
                  <ul role="tablist" className="nav bg-light nav-pills rounded-pill nav-fill mb-3">
                    <li className="nav-item">
                      <div className="nav-link rounded-pill">
                        <i className="fa fa-credit-card"></i> &nbsp; Pay through Credit Card
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
                          Name (on the card)
                          <input type="text" placeholder="Full Name" className="form-control" onChange={this.onChangeName}/>
                        </div>

                        <div className="form-group">
                          Card number
                          <div className="input-group">
                            <input type="text" placeholder="XXXX XXXX XXXX XXXX" className="form-control" onChange={this.onChangeCardNumber} />
                            <div className="input-group-append">
                              <span className="input-group-text text-muted">
                                  <i className="fa fa-cc-visa mx-1"></i>
                                  <i className="fa fa-cc-amex mx-1"></i>
                                  <i className="fa fa-cc-mastercard mx-1"></i>
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-sm-8">
                            <div className="form-group">
                              <span className="hidden-xs">Expiration</span>
                              <div className="input-group">
                                <input type="number" placeholder="MM" className="form-control" onChange={this.onChangeExpiryMonth} />
                                <input type="number" placeholder="YYYY" className="form-control" onChange={this.onChangeExpiryYear} />
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="form-group mb-4">
                              CVV
                              <input type="text" placeholder="***" className="form-control" onChange={this.onChangeCvv} />
                            </div>
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

export default CardDetails;
