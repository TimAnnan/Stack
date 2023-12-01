import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './HomeMainbar.css'
import QuestionList from './QuestionList'
import { useSelector } from 'react-redux'

const HomeMainbar = () => {

  const location = useLocation()
  const User = 1;
  const navigate = useNavigate()

  const questionList = useSelector(state => state.questionsReducer)
  console.log(questionList)
   /*var questionList = [{
    _id: '1',
    upVotes: 3,
    downVotes:2,
    noOfanswers: 2,
    questionTitle: "What is a function",
    questionBody: "it is meant to be",
    questionTags: ["java","c","c++","python","mern","js","php","react js","mongo db","sql","express","node.js","next.js"],
    userPosted: "mano",
    userId: 1,
    askedOn: "jan 1",
    answer: [{
      answerBody:"Answer",
      userAnswered: 'kumar',
      answeredOn: 'jan 2',
      userId: 2,
    }]
  },{
    _id: '2',
    upVotes: 3,
    downVotes:2,
    noOfanswers: 2,
    questionTitle: "What is a function",
    questionBody: "it is meant to be",
    questionTags: ["java","c","c++","python","mern","js","php","react js","mongo db","sql","express","node.js","next.js"],
    userPosted: "mano",
    userId: 1,
    askedOn: "mar 19",
    answer: [{
      answerBody:"Answer",
      userAnswered: 'kumar',
      answeredOn: 'jan 2',
      userId: 2,
    }]
  },{
    _id: '3',
    upVotes: 3,
    downVotes:2,
    noOfanswers: 2,
    questionTitle: "What is a function",
    questionBody: "it is meant to be",
    questionTags: ["java","c","c++","python","mern","js","php","react js","mongo db","sql","express","node.js","next.js"],
    userPosted: "mano",
    userId: 1,
    askedOn: "dec 1",
    answer: [{
      answerBody:"Answer",
      userAnswered: 'kumar',
      answeredOn: 'jan 2',
      userId: 2,
    }]
  }]  */

  
  const checkAuth = () => {
    if(User === null) {
      alert("login or sigup to ask a question")
      navigate('/Auth')
    } else {
      navigate('/AskQuestion')
    }
  }

  return (
    <div className='main-bar'>
      <div className="main-bar-header">
        {
          location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
        }
        <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
      </div>
      <div >
        {
          questionList.data === null ?
          <h1>Loading..</h1> :
          <>
            <p> { questionList.data.length }  questions</p>
              <QuestionList questionList={questionList.data} />
          </>
        }
      </div>
    </div>
  )
}

export default HomeMainbar