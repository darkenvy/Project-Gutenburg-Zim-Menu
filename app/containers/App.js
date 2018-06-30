import React from 'preact';

class App extends React.Component {
  constructor(props) {
    super(props); 
    this.location = window?.location?.href;
  }

  render() {
    return (
      <div>
        Hello World!
        {this.location}
      </div>
    );
  }
}

export default App;
