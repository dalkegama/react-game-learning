// import React from "react";
// import ReactDOM from "react-dom";
// import axios from "axios";
// import "./index.css";

// const Card = props => {
//   return (
//     <div>
//       <div className="info">
//         <div>{props.name}</div>
//         <div>{props.company}</div>
//       </div>
//       <img src={props.avatar_url} alt={props.alt} />
//     </div>
//   );
// };

// const CardList = props => {
//   return <div>{props.cards.map(card => <Card key={card.id} {...card} />)}</div>;
// };

// class Form extends React.Component {
//   state = {
//     username: ""
//   };
//   handleSubmit = event => {
//     event.preventDefault();
//     axios
//       .get(`https://api.github.com/users/${this.state.username}`)
//       .then(resp => {
//         this.props.onSubmit(resp.data);
//         this.setState({ username: "" });
//       });
//   };
//   render() {
//     return (
//       <from onSubmit={this.handleSubmit}>
//         <input
//           value={this.state.username}
//           onChange={event => this.setState({ username: event.target.value })}
//           type="text"
//           placeholder="github username"
//           required
//         />
//         <button type="submit" onClick={this.handleSubmit}>
//           Add Card
//         </button>
//       </from>
//     );
//   }
// }

// class App extends React.Component {
//   state = {
//     cards: []
//   };

//   addNewCard = cardInfo => {
//     this.setState(prevState => ({
//       cards: prevState.cards.concat(cardInfo)
//     }));
//   };

//   render() {
//     return (
//       <div>
//         <Form onSubmit={this.addNewCard} />
//         <CardList cards={this.state.cards} />
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById("root"));
