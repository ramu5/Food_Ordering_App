import React from "react";
import { render } from "react-dom";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log('child class constructor');
  }
  componentDidMount(){
    console.log('child mount');
  }
  render() {
    console.log('child class render');
    const { name, Location } = this.props;
    const { count } = this.state;
    return (
      <div className="user-card">
        <h1>count----{count}</h1>
        <button
          onClick={() => {
            this.setState({count : this.state.count + 1});
          }}
        >
          INCREASE ME
        </button>
        <h1>{name}</h1>
        <h2>{Location}</h2>
        <h3>SOFTWARE DEVELOPER</h3>
      </div>
    );
  }
}
export default UserClass;
