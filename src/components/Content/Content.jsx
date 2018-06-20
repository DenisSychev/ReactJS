import React from 'react';

export default class Content extends React.Component {
    render() {
        const { contentItems } = this.props;
        return (
            <div className='content'>
                {contentItems.map(contentitem => 
                <div>
                    <h1>{contentitem.title}</h1>
                    <p>{contentitem.text}</p>
                    <img src={contentitem.img} alt={contentitem.imgtitle}/>
                </div>)}
            </div>
        );
    }
};