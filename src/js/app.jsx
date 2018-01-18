import React from 'react';

export default class App extends React.Component {
  constructor(props) {
  super(props)
  this.state = { 
    balance: '',
    rate: '',
    terms: '15',
    payment: '',
  }
  this.handleBalance = this.handleBalance.bind(this)
  this.handleRate = this.handleRate.bind(this);
  this.handleTerm = this.handleTerm.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleBalance(event) {
    this.setState({balance: event.target.value})
  }

  handleRate(event) {
    this.setState({rate: event.target.value})
  }
  handleTerm(event) {
    this.setState({terms: event.target.value})
  }

handleSubmit(event) {
 event.preventDefault();
  let monthly = (this.state.rate / 12) / 100;
  let total = this.state.terms * 12;
  var payment = this.state.balance * (monthly * Math.pow((1 + monthly), total) / (Math.pow(1 + monthly, total) - 1));

  payment = payment.toFixed(2)
  this.setState({payment})
}

render() {
    const headingAreaStyle = {
      paddingLeft: 9 + 'px',
      paddingRight: 2 + 'px',
      marginBottom: 20 + 'px'
    }
    const pageHeaderStyle = {
      paddingBottom: 0 + 'px',
      marginTop: 20 + 'px',
      marginBottom: 20 + 'px'
    }


    return (
      <div className='container'>
        <form className="form-horizontal">
          <div className="col-sm-3"></div>
          <div className="col-sm-9" style={headingAreaStyle}>
            <div className="page-header" style={pageHeaderStyle}>
              <h3>Mortgage Calculator</h3>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-3 control-label">Balance of your loan</label>
            <div className="col-sm-9">
              <input
                name="balance"
                value={ this.state.balance }
                onChange={ this.handleBalance }
                type="number"
                className="form-control"
                id="loan-balance"
                placeholder="$0.00"/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-3 control-label">Your interest rate (in percentage)</label>
            <div className="col-sm-9">
              <input
                name="rate"
                value={this.state.rate}
                onChange={this.handleRate}
                step="0.01"
                type="number"
                className="form-control"
                id="rate"
                placeholder="Interest Rate "/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-3 control-label">The term of your loan (in years)</label>
            <div className="col-sm-9">
              <select
                value={this.state.value}
                onChange={this.handleTerm}
                name="term"
                className="form-control"
                placeholder="Choose Term">
                <option value="15">15</option>
                <option value="30">30</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-3 col-sm-9">
              <button
                name="submit"
                type="submit"
                onClick={this.handleSubmit}
                className="btn btn-primary btn-default">Submit</button>
              { this.state.payment &&
              <div
                id="output"
                className="well text-center"
                style={{marginTop: 20 + 'px'}}>
              {
                `Your monthly payment is $${this.state.payment}.`
              }
              </div>
              }
            </div>
          </div>
        </form>
      </div>
    );
  }
}




