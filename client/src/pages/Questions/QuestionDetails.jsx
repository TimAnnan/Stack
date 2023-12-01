import React, { useState } from 'react'
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom'
import moment from 'moment'
import copy from 'copy-to-clipboard'

import upvotes from '../../assests/sort-up.svg'
import downvotes from '../../assests/sort-down.svg'
import './Questions.css'
import Avatar from '../../components/Avatar/Avatar'
import DisplayAnswer from './DisplayAnswer'
import { useSelector, useDispatch } from 'react-redux'
import  {postAnswer } from '../../actions/question'
import { deleteQuestion, voteQuestion } from '../../actions/question'


const QuestionDetails = () => {

    const { id } = useParams()
    const questionList = useSelector((state) => state.questionsReducer)
    //console.log(id)

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
      }] */

      const [ Answer, setAnswer ] = useState('')
      const Navigate = useNavigate()
      const User = useSelector((state) => (state.currentUserReducer))
      const dispatch = useDispatch()
      const location = useLocation();
      
      const url = 'http://localhost:3000'
    
const handlePostAns = (e, answerLength ) => {
    e.preventDefault()
    if(User === null) {
        alert('Login or SignUp to answer a question')
        Navigate('/Auth')
    } else {
        if(Answer === '') {
            alert('Enter anAnswer before Submitting...)')
        } else {
            dispatch(postAnswer( { id, noOfanswers: answerLength + 1, answerBody: Answer, userAnswered: User.result.name, userId: User.result._id }))
        }
    }
}

const handleShare = () => {
    copy(url+location.pathname)
    alert("copied to clipboard.. :)")
}

const handleDelete = () => {
    dispatch(deleteQuestion( id, Navigate))
}

const handleUpVote = () => {
    dispatch(voteQuestion(id, 'upVote', User.result._id))
}

const handleDownVote = () => {
    dispatch(voteQuestion(id, 'downVote', User.result._id))
}


  return (
    <div>
        <div className="question-details-page">
            {
                questionList.data === null ? 
                <h1>Loading...</h1> :
                <>
                    {
                        questionList.data.filter(question => question._id === id).map(question => (
                            <div key={question._id}>
                                {console.log(question)}
                                <section className='question-details-container'>
                                    <h1>{question.questionTitle}</h1>
                                    <div className="question-details-container-2">
                                        <div className="question-votes">
                                            <img src={upvotes} alt='upvote' width='18' className='votes-icon' onClick={handleUpVote}  />
                                            <p>{question.upVote.length - question.downVote.length }</p>
                                            <img src={downvotes} alt='downvotes' width='18' className='votes-icon' onClick={ handleDownVote} />
                                        </div>
                                        <div style={{width:"100%"}}> 
                                            <p className='question-body'>{question.questionBody}</p>
                                            <div className="question-details-tags">
                                                {
                                                    question.questionTags.map((tag) => (
                                                        <p key={tag}>{tag}</p>
                                                    ))
                                                }
                                            </div>
                                            <div className="question-actions-user">
                                                <div>
                                                    <button type='button' onClick={ handleShare }>Share</button>
                                                     {
                                                        User?.result?._id === question?.userId && (
                                                            <button type='button' onClick={ handleDelete }>Delete</button>
                                                        )
                                                    }
                                                </div>
                                                <div>
                                                    <p>asked {moment(question.askedOn).fromNow()}</p>
                                                    <Link to={`/Users/${question.userId}`} className='user-link' style={{color:"#0086d8"}}>
                                                        <Avatar backgroundColor="orange" px='8px' py='5px'>{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                                        <div>
                                                            {
                                                                question.userPosted
                                                            }

                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                {
                                    question.noOfanswers !== 0 && (
                                        <section>
                                            <h3>{question.answer.length} Answers</h3>
                                            <DisplayAnswer key={question._id} question={question} handleShare={ handleShare}/>
                                        </section>
                                    )
                                }

                                <section className='post-ans-container'>
                                    <h3>Your Answer</h3>
                                    <form onSubmit={ (e) => { handlePostAns( e, question.answer.length )} }>
                                        <textarea name="" id="" cols="30" rows="10" value={Answer} onChange={(e) => setAnswer(e.target.value)}></textarea> <br />
                                        <input type='submit' className='post-ans-btn' value='Post your answer' />
                                    </form>
                                    <p>
                                        Browse other Questions tagged
                                        {question.questionTags.map((tag) => (
                                            <Link to='/Tags' key={tag} className='ans-tags'> {tag} </Link>
                                        ))}
                                        or
                                        <Link to='/AskQuestion' style={{textDecoration:"none",color:"#009dff"}} >ask your own question</Link>
                                    </p>
                                </section>

                            </div>
                        ))
                    }
                </>
            }
        </div>
    </div>
  )
}

export default QuestionDetails