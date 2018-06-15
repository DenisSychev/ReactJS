import React from 'react';

export default class Content extends React.Component {
    render() {
        const {contentItems} = this.props;
        return (
            <div className='content'>
                {contentItems.map(contentitem => <h1>{contentitem.title}</h1>)}
            </div>
        );
    }
};