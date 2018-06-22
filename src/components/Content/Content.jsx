import React, {Component, Fragment} from 'react';
import './Content.sass';

import Comment from 'components/Comment';

export default class Content extends Component {
    render() {
        const { contentItems } = this.props;
        return (
            <Fragment>
                {contentItems.map(contentitem => 
                <div className = "content container" key = {contentitem.id}>
                    <h1>{contentitem.title}</h1>
                    <p className = "author">{contentitem.author}</p>
                    <p>{contentitem.text}</p>
                    <img src={contentitem.img} alt={contentitem.imgtitle}/>
                    <Comment />
                </div>)}
            </Fragment>
        );
    }
};