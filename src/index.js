import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Stars = (props) => {
  const range = Array.from({
    length: props.numberOfStars
  }, (v, k) =>
      k
  );

  return (
    <div className="col-5">
      {range.map(i =>
        <i key={i} className="fa fa-star"></i>
      )}
    </div>
  )
}

const Button = (props) => {
  return (
    <div className="col-2">
      <button className="btn btn-primary" disabled={props.selectedNumbers.length === 0}>=</button>
    </div>
  )
}

const Answer = (props) => {
  return (
    <div className="col-5">
      {props.selectedNumbers.map((number, i) =>
        <span key={i} onClick={() => [props.unselectNumber(number)]}>{number}</span>
      )}
    </div>
  )
}

const Numbers = (props) => {
  const numberClassName = (number) => {
    if (props.selectedNumbers.indexOf(number) >= 0) {
      return 'selected';
    }
  }
  return (
    <div className="card text-center">
      <div>
        {Numbers.list.map((number, i) =>
          <span key={i} className={numberClassName(number)} onClick={() => props.selectNumber(number)}>{number}</span>
        )}
      </div>
    </div>
  )
}
//This create a JavaScript array containing 1…N
Numbers.list = Array.from({
  length: 9
}, (v, k) =>
    k + 1
);

class Game extends React.Component {
  state = {
    selectedNumbers: [],
    randomNumOfStars: 1 + Math.floor(Math.random() * 9)
  };
  selectNumber = (clickedNumber) => {
    if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0) { return; }
    this.setState(prevState => ({
      selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
    }))
  };
  unselectNumber = (clickedNumber) => {
    this.setState(prevState => ({
      selectedNumbers: prevState.selectedNumbers.filter(number => number !== clickedNumber)
    }));
  }
  render() {
    const { randomNumOfStars, selectedNumbers } = this.state;
    return (
      <div className="container">
        <h1>Play 9</h1>
        <div className="row">
          <Stars numberOfStars={randomNumOfStars} />
          <Button selectedNumbers={selectedNumbers} />
          <Answer
            selectedNumbers={selectedNumbers}
            unselectNumber={this.unselectNumber} />
        </div>
        <br />
        <Numbers
          selectedNumbers={selectedNumbers}
          selectNumber={this.selectNumber} />
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Game />
      </div>
    )
  }
}

ReactDOM.render(< App />, document.getElementById("root"));