import React from 'react';
import ContentEditable from 'react-contenteditable';

import './CardHeader.css';

const cardHeader = (props) => {
    return (
        <div className="Card-header">
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
                            className="Card-checkbox"
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