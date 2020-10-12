import React, { Component } from 'react';

class PaymentSuccess extends Component {
  constructor() {
    super()
    this.state = { price: NaN };
  }

  componentDidMount(){
    if(this.props.location && this.props.location.state){
      this.setState({price: this.props.location.state.price })
    } else {
      this.props.history.push({pathname: '/'})
    }
  }

  render() {

    return (
      <div>
          <div className="container py-5">
            <div className="row mb-4">
              <div className="col-lg-8 mx-auto text-center">
                <h1 className="display-4">Success!</h1>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-7 mx-auto">
                <div className="bg-white rounded-lg shadow-sm p-5">
                  <ul role="tablist" className="nav bg-light nav-pills rounded-pill nav-fill mb-3">
                    <li className="nav-item">
                      <div className="nav-link rounded-pill">
                            ORDER PLACED! <br /> ${this.state.price} have been deducted from your account.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default PaymentSuccess;