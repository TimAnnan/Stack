import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import TagsList from './TagsList'
import './Tags.css'
const Tags = () => {

    const tagslist = [{
        id:1,
        tagname: "Javascript",
        tagDesc:"For questions regarding programming in ECMAScript (JavaScript/JS) and its various dialects/implementations (excluding ActionScript). Please include all relevant tags on your question;"
    }, {
        id:2,
        tagname: "Css",
        tagDesc:"CSS is a representation style sheet language used for describing the look and formatting of HTML, XML documents and SVG elements including colors, layout, fonts, and animations"
    }, {
        id:3,
        tagname:"Python",
        tagDesc:"Python is a multi-paradigm, dynamically typed, multipurpose programming language. It is designed to be quick to learn, understand, and use, and enforces a clean and uniform syntax."
    },{
        id:4,
        tagname:"c#",
        tagDesc:"C# (pronounced 'see sharp') is a high level, statically typed, multi-paradigm programming language developed by Microsoft"
    }, {
        id:5,
        tagname:"php",
        tagDesc:"PHP is a widely used, open source, general-purpose, multi-paradigm, dynamically typed and interpreted scripting language originally designed for server-side web development"
    }, {
        id:6,
        tagname:"html",
        tagDesc:"HTML (HyperText Markup Language) is the markup language for creating web pages and other information to be displayed in a web browser."
    },{
        id:7,
        tagname:"React js",
        tagDesc:"React is a JavaScript library for building user interfaces. It uses a declarative, component-based paradigm and aims to be both efficient and flexible."
    },{
        id:8,
        tagname:"node.js",
        tagDesc:"Node.js is an event-based, non-blocking, asynchronous I/O runtime that uses Google's V8 JavaScript engine and libuv library."
    }
]
  return (
   <div className='home-container-1'>
    <LeftSidebar />
    <div className="home-container-2">
        <h1 className='tags-h1'>Tags</h1>
        <p className='tags-p'> 'A Tag is a keyword or label that categorizes your question with other, similar questions.</p>
        <p className='tags-p'> Using the right tags makes it easier for others to find and answer your question.</p>
        <div className='tags-list-container'>
            {
                tagslist.map((tag) =>(
                    <TagsList tag = {tag}  key = {tagslist.id}/>
                ))
            }
        </div>
    </div>
   </div>
  )
}

export default Tags