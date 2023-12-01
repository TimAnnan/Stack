import React from 'react'
import { FaRegMessage } from 'react-icons/fa6'
import { FaPen } from 'react-icons/fa'
import { BsStackOverflow } from 'react-icons/bs'


const Widget = () => {
  return (
    <div className='widget'>
        <h4>The Overflow Blog</h4>
        <div className='right-sidebar-div-1'>
            <div className="right-sidebar-div-2">
                <FaPen /><p>Observability is key to the future of software (and your DevOps career)</p>
            </div>
            <div className="right-sidebar-div-2">
                <FaPen /><p>Podcast 374: How valuable is your screen name?</p>
            </div>
        </div>

        <h4>Featured on Meta</h4>
        <div className='right-sidebar-div-1'>
            <div className="right-sidebar-div-2">
                <FaRegMessage /><p>Review queue workflows - Final release....</p>
            </div>
            <div className="right-sidebar-div-2">
                <FaRegMessage /><p>Please welcome Valued Associates: #958 - V2Blast #959 - SpencerG</p>
            </div>
            <div className="right-sidebar-div-2">
                <BsStackOverflow /><p>Outdated Answers: accepted answer is now unpinned on Stack Overflow</p>
            </div>
        </div>

        <h4>Hot Meta Posts</h4>
        <div className='right-sidebar-div-1'>
            <div className="right-sidebar-div-2">
            <p>38</p>
                <p>38 Why was this spam flag declined, yet the question marked as spam?</p>
            </div>
            <div className="right-sidebar-div-2">
            <p>20</p>
               <p>20 What is the best course of action when a user has high enough rep to...</p>
            </div>
            <div className="right-sidebar-div-2">
                <p>14</p>
               <p>Is a link to the "How to ask" help page a useful comment?</p>
            </div>
        </div>
    </div>
  )
}

export default Widget