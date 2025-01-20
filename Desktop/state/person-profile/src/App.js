import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Wissem",
        bio: "A passionate software developer.",
        imgSrc: "https://randomuser.me/api/portraits/men/32.jpg",
        profession: "Software Engineer"
      },
      show: false,
      timeElapsed: 0
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        timeElapsed: prevState.timeElapsed + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  toggleProfile = () => {
    this.setState((prevState) => ({
      show: !prevState.show
    }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, timeElapsed } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleProfile}>
          {show ? "Hide Profile" : "Show Profile"}
        </button>

        {show && (
          <div>
            <h1>{fullName}</h1>
            <p>{bio}</p>
            <img src={imgSrc} alt={fullName} />
            <p>Profession: {profession}</p>
          </div>
        )}

        <p>Time since mounted: {timeElapsed} seconds</p>
      </div>
    );
  }
}

export default App;
