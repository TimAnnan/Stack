import React, { useState } from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { useNavigate} from 'react-router-dom'
import './AskQuestion.css'
import { askQuestion } from '../../actions/question'

const AskQuestion = () => {
  const  [questionTitle, setQuestionTitle ] = useState('')
  const  [questionBody, setQuestionBody ] = useState('')
  const  [questionTags, setQuestionTags ] = useState('')

  const dispatch = useDispatch()
  const User = useSelector((state) => (state.currentUserReducer))
  const navigate = useNavigate()

  const handleSubmit =(e) => {
    e.preventDefault()
    //console.log({questionBody, questionTags, questionTilte})
    dispatch(askQuestion({ questionTitle,questionBody,questionTags, userPosted: User.result.name, userId: User?.result._id },navigate))
  }
    /* const handleEnter = (e) => {
    if(e.key === 'Enter') {
      setQuestionBody(questionBody + "\n")
    }

  }*/
  return (
   <div className='ask-question'>
      <div className="ask-ques-container">
        <h1>Ask a public Question</h1>
        <form onSubmit={handleSubmit}>
          <div className="ask-form-container">
            <label htmlFor='ask-ques-title'>
              <h4>Title</h4>
              <p>Be specific and imagine you are asking a question to All.</p>
              <input type='text' name='questionTilte' id='ask-ques-title' placeholder='Your Question Please' onChange={(e) => {setQuestionTitle(e.target.value)}} />
            </label>

            <label htmlFor='ask-ques-body'>
              <h4>Body</h4>
              <p>Include all the information someone would need to answer your question</p>
              <textarea name='questionTilte' id='ask-ques-body' rows='10' cols='30'  /*onKeyPress={handleEnter} */ onChange={(e) => {setQuestionBody(e.target.value)}} ></textarea>
              
            </label>

            <label htmlFor='ask-ques-tags'>
              <h4>Tags</h4>
              <p>Add up to 5 tags to describe what your question is about.</p>
              <input type='text' name='questionTilte' id='ask-ques-tags' placeholder='tags are' onChange={(e) => {setQuestionTags(e.target.value.split(" "))}} />
            </label>
          </div>
          <input type='submit' value='Review your qestion' className='review-btn' />
        </form>
      </div>
   </div>
  )
}

export default AskQuestion