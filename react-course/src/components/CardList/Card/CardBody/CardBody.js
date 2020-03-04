import React from 'react';
import ContentEditable from 'react-contenteditable';

import classes from './CardBody.module.css'

const cardBody = (props) => {
    return (
        <div>
            <hr />
            <ContentEditable
                className={classes['Card-text']}
                disabled={props.disabled}
                onChange={props.onChange}
                html={props.content}
            />
        </div>
    );
};

export default cardBody;