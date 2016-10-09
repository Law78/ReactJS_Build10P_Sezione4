import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Question from 'Question';

class QuestionList extends Component{

  questionsRender(){
    const {questions} = this.props;

    return questions.map( question => {
      if(question.id === this.props.current){
        return <Question key={question.id} question={question} {...this.props} />
      }

    });

  }

  render(){

    return(
      <div className="questions">
        {
          this.questionsRender()
        }
      </div>
    );
  }
}

export default QuestionList;
