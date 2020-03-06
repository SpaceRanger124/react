import React from 'react';
import ContentEditable from 'react-contenteditable';
import { MdEdit, MdSave, MdCancel } from 'react-icons/md';

import classes from './CardHeader.module.css';

const CardHeader = (props) => {
    let saveButton = null;
    let cancelButton = null;
    let editButton = null;
    if (!props.readOnly) {
        saveButton = (
            <MdSave
                className={classes['Card-icon']}
                onClick={props.handleSaveClick}
            />
        );
        cancelButton = (
            <MdCancel
                className={classes['Card-icon']}
                onClick={props.handleCancelClick}
            />
        );
        editButton = (
            <MdEdit
                className={classes['Card-icon']}
                onClick={() => props.handleEditClick()}
            />
        );
    }
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
        			    {saveButton}
        				{cancelButton}
                    </React.Fragment>
                ) : (
                    <React.Fragment>
        			    {editButton}
                        <input
                            className={classes['Card-checkbox']}
                            type="checkbox"
                            checked={props.isChecked}
                            onChange={props.onChecked}
                        />
                    </React.Fragment>
                )}
            </span>
        </div>
    );
};

export default CardHeader;