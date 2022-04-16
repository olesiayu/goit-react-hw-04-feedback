import React, { useState } from 'react';
import Section from "./Section/Section";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const status = { good, neutral, bad }
  const statusArray = Object.keys(status);
  

  const handleIncrement = (type) => {
    switch (type) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      
      default:
        return;
    }    
   };
  
  const countTotalFeedback = () => {
    return (good + neutral + bad);
  };
  
  
  const countPositiveFeedbackPercentage = () => {
    const positive = good * 100 / (good + neutral + bad);
    return Math.round(positive);
   };
  
      
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={statusArray} onLeaveFeedback={handleIncrement}/>            
        </Section>
        
        <Section title="Statistics">
          {countTotalFeedback() > 0 ? (<Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()}></Statistics>) :
          (<Notification message="There is no feedback"></Notification>)}          
        </Section>
      </>
    );
};
