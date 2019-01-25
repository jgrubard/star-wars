import React, { Component } from 'react';
import '../css/Error.css';

class Error extends Component {
  constructor() {
    super();
    this.state = { countdown: 5 }
    this.timerID = 0;
  }

  timer() {
    this.timerID = setInterval(() => {
      this.setState({ countdown: this.state.countdown - 1 })
    }, 1000);
  }

  redirect() {
    setTimeout(() => {
      this.props.history.push('/');
    }, 5000);
  }

  componentDidMount() {
    this.timer();
    this.redirect();
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <h2>404 Not Found</h2>
        <h2>This is not the page you are looking for...</h2>
        <img
          className='jedi-mind-trick'
          src='https://starwarsblog.starwars.com/wp-content/uploads/2017/06/25-star-wars-quotes-obi-wan-kenobi-identification-tall.jpg'
          alt='Jedi Mind Trick Error'
        />
        <h3>Redirecting to homepage in {this.state.countdown} seconds...</h3>
      </div>
    );
  }
}

export default Error;