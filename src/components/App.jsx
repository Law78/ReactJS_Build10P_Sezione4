import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import QuestionList from 'QuestionList';
import Scorebox from 'Scorebox';
import Results from 'Results';

class App extends Component{
  constructor(props){
    super(props)
    // Creo il mio stato iniziale
    this.state = {
      // Normalmente questi dati provengono da un db e non sono hardcoded
      questions: [
        {
          id: 1,
          text: "What's your name?",
          choices: [
            {
              id: 1,
              text: 'Federico'
            },
            {
              id: 2,
              text: 'Lorenzo'
            },
            {
              id: 3,
              text: 'Giordano'
            }
          ],
          correct: 2
        },
        {
          id: 2,
          text: "What's my favourite programming language?",
          choices: [
            {
              id: 1,
              text: 'Python'
            },
            {
              id: 2,
              text: 'C#'
            },
            {
              id: 3,
              text: 'Javascript'
            }
          ],
          correct: 3
        },
        {
          id: 3,
          text: "What's your favourie OS?",
          choices: [
            {
              id: 1,
              text: 'MacOS'
            },
            {
              id: 2,
              text: 'Windows'
            },
            {
              id: 3,
              text: 'Linux'
            }
          ],
          correct: 1
        }
      ],
      score: 0,
      current: 1 // la domanda in cui ci troviamo
    };

    this.setCurrent = this.setCurrent.bind(this);
    this.setScore = this.setScore.bind(this);
  }
  setCurrent(current){
    this.setState({current})
  }
  setScore(score){
    this.setState({score})
  }
  render(){
    if(this.state.current > this.state.questions.length){
      var score = <Results {...this.state} />;
    } else {
      var score = <Scorebox {...this.state} />;
    }
    return(
      <div>
        {score}
        <QuestionList {...this.state} setCurrent={this.setCurrent} setScore={this.setScore}/>
      </div>
    );
  }
}

export default App;
