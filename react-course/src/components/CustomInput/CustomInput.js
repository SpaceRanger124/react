import React from 'react';
import ContentEditable from 'react-contenteditable';

const CustomInput = (props) => {

    const handleInputChange = event => {
        const inputValue = event.target.value;
        const isValid = props.validation.every(fn => fn(inputValue));
        if (props.validation.length > 0) {
            props.validateInput(isValid);
        }
        props.onChange(event);
    }

    return (
        <ContentEditable
            disabled={props.disabled}
            html={props.value}
            onChange={handleInputChange}
            className={props.className}
        />
    );

}

CustomInput.defaultProps = {
    validation: []
};

export default CustomInput;