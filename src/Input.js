import React from "react";
import "./App.css";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      nameData: "",
      billData: "",
      service: ""
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleTotal = this.handleTotal.bind(this);
  }

  handleClick = () => {
    this.setState({
      product: [
        ...this.state.product,
        {
          nameData: this.state.nameData,
          tipAmt: this.state.billData * this.state.service
        }
      ],
      nameData: "",
      billData: "",
      service: ""
    });
  };

  handleTotal = () => {
    this.setState({ totalCust: [this.state.product.length] });
    var totalT = this.state.product
      .map((item) => item.tipAmt)
      .reduce((a, b) => a + b, 0);
    this.setState({ totalTip: totalT });
  };

  render() {
    return (
      <form id="tip_form">
        <p>Enter your name:</p>
        <input
          type="text"
          name="custname"
          value={this.state.nameData}
          onChange={(evt) => {
            this.setState({ nameData: evt.target.value });
          }}
        />

        <p>Enter your bill amount:</p>
        <input
          type="text"
          name="bill"
          value={this.state.billData}
          onChange={(evt) => {
            this.setState({ billData: evt.target.value });
          }}
        />

        <p>How was the service:</p>
        <select
          value={this.state.service}
          onChange={(evt) => {
            this.setState({ service: evt.target.value });
          }}
        >
          <option>Select</option>
          <option value="0.20">Excellent 20%</option>
          <option value="0.10">Medium 10%</option>
          <option value="0.05">Not so good 5%</option>
        </select>

        <p>
          <input
            type="button"
            value="Add customer"
            onClick={() => {
              this.handleClick();
            }}
          />
        </p>

        <h3>Customer List</h3>
        <ul>
          {this.state.product.map((item) => (
            <li>{`${item.nameData} is offering a tip of ${item.tipAmt} rupees.`}</li>
          ))}
        </ul>

        <p>
          <input
            type="button"
            value="Calculate Tip and Customer"
            onClick={() => {
              this.handleTotal();
            }}
          />
        </p>
        <div>
          <h3>Total Customer : {this.state.totalCust}</h3>
          <h3>Total Tip : ₹ {this.state.totalTip}</h3>
        </div>
      </form>
    );
  }
}

export default Input;
