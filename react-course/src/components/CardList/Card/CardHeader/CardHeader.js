import React from 'react';
import ContentEditable from 'react-contenteditable';

import classes from './CardHeader.module.css';

const cardHeader = (props) => {
    return (
        <div className={classes['Card-header']}>
            <ContentEditable
                disabled={props.disabled}
                onChange={props.onChange}
                html={props.content}
            />
            <span>
                {!props.disabled ? (
                    <React.Fragment>
        			    {props.saveButton}
        				{props.cancelButton}
                    </React.Fragment>
                ) : (
                    <React.Fragment>
        			    {props.editButton}
                        <input
                            className={classes['Card-checkbox']}
                            type="checkbox"
                            checked={props.checked}
                            onChange={props.changeStyles}
                        />
                    </React.Fragment>
                )}
            </span>
        </div>
    );
};

export default cardHeader;