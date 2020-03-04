import React from 'react';
import ContentEditable from 'react-contenteditable';

import './CardBody.css'

const cardBody = (props) => {
    return (
        <div>
            <hr />
            <ContentEditable
                className="Card-text"
                disabled={props.disabled}
                onChange={props.onChange}
                html={props.content}
            />
        </div>
    );
};

export default cardBody;