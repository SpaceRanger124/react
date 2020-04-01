import React from 'react';
import { MdEdit, MdSave, MdCancel } from 'react-icons/md';

import classes from './CardHeader.module.css';
import CustomInput from '../../../CustomInput/CustomInput';

const CardHeader = (props) => {

    const captionStyle = props.isCaptionValid ? null : classes['Card-header-caption-invalid'];
    const saveButtonStyle = props.isCaptionValid ? classes['Card-icon'] : classes['Card-icon-disabled'];

    let saveButton = null;
    let cancelButton = null;
    let editButton = null;

    if (!props.readOnly) {
        saveButton = (
            <MdSave
                className={saveButtonStyle}
                onClick={props.isCaptionValid ? props.handleSaveClick: null}
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
            <CustomInput
                validation={props.captionValidation}
                disabled={props.disabled}
                onChange={props.onChange}
                className={captionStyle}
                value={props.content}
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