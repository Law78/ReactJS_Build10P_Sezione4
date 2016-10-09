import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Question extends Component{
  constructor(props){
      super(props);
      this.onChange = this.onChange.bind(this)
  }

  onChange(e){
    e.preventDefault();
    const {setCurrent, setScore, question} = this.props;

    let selected = e.target.value;

    if(selected == question.correct){
      setScore(this.props.score + 1);
    }

    setCurrent(this.props.current + 1);
    return;
  }

  renderChoice(){
    const {question} = this.props;

    return question.choices.map(choice => {
      return(
        <li className="list-group-item" key={choice.id}>
          {choice.id} <input type="radio" onChange={this.onChange} name={question.id}
            value={choice.id} /> {choice.text}
        </li>
      );
    });

  }

  render(){
    const {question} = this.props;
    return(
      <div className="well">
        <h3>{question.text}</h3>
        <hr />
        <ul className="list-group">
          {
            this.renderChoice()
          }
        </ul>
      </div>
    );
  }
}

export default Question;
