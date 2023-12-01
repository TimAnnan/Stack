import React from 'react'

const WidgetTags = () => {
    const tags = ['c','c++','sql','mongodb','java','python','javascript','react','django','php','express']
  return (
    <div className='widget-tags'>
        <h3>Watched Tags</h3>
        <div className="widget-tags-div">
            {
                tags.map((tag) => (
                    <p key={tag}>{tag}</p>
                ))
            }
        </div>
    </div>
  )
}

export default WidgetTags