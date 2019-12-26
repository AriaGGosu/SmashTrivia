import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

// components
import Questions from './components/Questions';

// images
import Smash64 from './img/smash_64.jpg';
import Ssbm from './img/ssbm.jpg';

// css
import './App.css';

const test = [
  {
    title:"Question N°1",
    text: "Who is the final boss of ssb 64 ?",
    option1:"Bowser" ,
    option2:"Giga Bowser", 
    option3:"Master Hand",
    option4:"Crazy Hand",
    url:Smash64,
    answer: "Master Hand"
  },
  {
    title:"Question N°2",
    text: "which character do you unlock Completing Classic or Adventure Mode or playing 50 VS battles?",
    option1:"Falco" ,
    option2:"Marth", 
    option3:"Jigglypuff",
    option4:"Mewtwo",
    url:Ssbm
  }
]

class App extends Component {
  constructor(){
    super();
    this.state = {
      testNumber: 0,
      correctAnswers: 0,
      eaea: ''
    };

    
  
  }


  onHandlerOption = e => {
  console.log('e',e)
    this.setState({
      testNumber:1
    })
  }

  render(){

    const { testNumber } = this.state;
    return (
      <div className="App">

      <Grid fluid>
        <Row>
          <Col xs={4}>
            <Questions 
              imgUrl={test[testNumber].url}
              title={test[testNumber].title}
              text={test[testNumber].text}
              option1={test[testNumber].option1} 
              option2={test[testNumber].option2}
              option3={test[testNumber].option3}
              option4={test[testNumber].option4}
              onHandlerOption={ e => this.onHandlerOption(e) }
            />
          </Col>
        </Row>
      </Grid>
        
    </div>
  );
}
}

export default App;
