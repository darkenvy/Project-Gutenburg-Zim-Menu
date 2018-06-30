import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(window?.location?.href)
    return <div>Hello World!</div>;
  }
}

export default App;