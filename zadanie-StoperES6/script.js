class Stopwatch extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        running: false,
        times: {      
            minutes: 0,
            seconds: 0,
            miliseconds: 0
        },
        results: []
      }
    }
  
    reset() {
      this.setState({
        times: {
          minutes: 0,
          seconds: 0,
          miliseconds: 0
        }
      });
    }
  
    getFormattedTimes() {
      //tworzymy zmienne
      let{minutes, seconds, miliseconds} = this.state.times;
      return `${pad0(minutes)}:${pad0(seconds)}:${pad0(Math.floor(miliseconds))}`;
    }
  
    start() {
      if (!this.state.running) {
        this.setState({
          running: true,
          watch: setInterval(() => this.step(), 10)
        })
      }
    }  
  
    step() {
      if (!this.state.running) return;
      this.calculate();
    }
  
    calculate() {
      let{minutes, seconds, miliseconds} = this.state.times;
      miliseconds += 1;
      if (miliseconds >= 100) {
        seconds += 1;
        miliseconds = 0;
      }
      if (seconds >= 60) {
        minutes += 1;
        seconds = 0;
      }
      this.setState({
        times: {
          minutes,
          seconds,
          miliseconds
        }  
      });
    }
  
    stop() {
      this.setState({
        running: false
      });
      clearInterval(this.state.watch);
    }
  
    stopAndReset() {
      this.setState({
        running: false,
        times: {
          minutes: 0,
          seconds: 0,
          miliseconds: 0
        }
      });
    }
  
    addResult() {
      this.setState({
        results: this.state.results.concat([this.getFormattedTimes()]) 
      });
    }
  
  
    render() {
      var resultsElements = this.state.results.map(function(item, index) {
        return (<li key={index}>{item}</li>)
      }) 
      return ( 
        <div>
          <nav className="controls">
            <button className="button" onClick={this.start.bind(this)}>Start</button>
            <button className="button" onClick={this.stop.bind(this)}>Stop</button>
            <button className="button" onClick={this.stopAndReset.bind(this)}>Reset</button>
          </nav>
          <div>{this.getFormattedTimes()}</div>
        </div>
      )
    }
  
  }
  
  function pad0(value) {
    let result = value.toString();
    if (result.length < 2) {
      result = '0' + result;
    }
    return result;
  }
  
  
  ReactDOM.render(<Stopwatch />, document.getElementById('app'));