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
    window.localStorage.removeItem('error');
    clearInterval(this.timerID);
  }

  render() {
    const { countdown } = this.state;
    let error = JSON.parse(window.localStorage.getItem('error'));
    const genericError = { status: 500, message: 'Something Went Wrong' }
    error = error ? error : genericError;
    const dots = '.'.repeat(countdown);
    return (
      <div className='error-container'>
        <h1 className='red-sabre'>Error: {error.status} - {error.message}</h1>
        <img
          className='jedi-mind-trick'
          src='https://starwarsblog.starwars.com/wp-content/uploads/2017/06/25-star-wars-quotes-obi-wan-kenobi-identification-tall.jpg'
          alt='Jedi Mind Trick Error'
        />
        <h2 className='green-sabre'>This is not the page you are looking for.</h2>
        <h3>Redirecting to homepage in {countdown} second{countdown === 1 ? '' : 's'}{dots}</h3>
      </div>
    );
  }
}

export default Error;