import React from  'react';

function HOC(Comp) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
      this.increment = this.increment.bind(this);
    }
    increment() {
      this.setState({
        count: this.state.count + 1,
      });
    };
    
    render() {
      console.log(this.state.count);
      return <Comp increment={this.increment} count={this.state.count}/>;
    }
  };
}

export default HOC;
