import React from 'react'
import { FaRegCommentAlt } from 'react-icons/fa'
import { IoArrowUp } from 'react-icons/io5'
import { IoDocumentAttachOutline } from 'react-icons/io5'
import { AiOutlineTrophy } from 'react-icons/ai'

const AboutAuth = () => {
  return (
    <div className='auth-container'>
        <h1 style={{fontSize:'2rem',paddingRight:"1.5rem"}}>Join the Stack Overflow community</h1>
        <h4><FaRegCommentAlt style={{paddingRight:"0.6rem"}} />Get unstuck — ask a question</h4>
        <h4><IoArrowUp style={{paddingRight:"0.6rem"}}/>Unlock new privileges like voting and commenting</h4>
        <h4><IoDocumentAttachOutline style={{paddingRight:"0.6rem"}} />Save your favorite questions, answers, watch tags, and more</h4>
        <h4><AiOutlineTrophy style={{paddingRight:"0.6rem"}}/>Earn reputation and badges</h4>
        <p>Collaborate and share knowledge with a private group for FREE.<br /><span style={{color:"blue"}}>Get Stack Overflow for Teams free for up to 50 users.</span></p>

    </div>
  )
}

export default AboutAuth