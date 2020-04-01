import React from 'react';
import ContentEditable from 'react-contenteditable';

const CustomInput = (props) => {

    const handleInputChange = (event) => {
        props.onChange(event);

        if (props.validation === undefined) {
            return;
        }

        let isValid;
        let inputValue = event.target.value;
        if (props.validation.required !== undefined && props.validation.required) {
            isValid = inputValue.trim().length > 0;
        }

        if (props.validation.pattern !== undefined) {
            isValid = isValid && props.validation.pattern.test(inputValue);
        }
        if (props.validation.minLength !== undefined) {
            isValid = isValid && (inputValue.length > props.validation.minLength);
        }

        props.validation.validateInput(isValid);
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

export default CustomInput;