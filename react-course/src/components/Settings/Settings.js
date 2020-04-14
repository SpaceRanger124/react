import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import classes from './Settings.module.css';
import { switchReadOnly } from '../../reducers/cards/actions';

const StyledInput = styled.input`
    outline: 1px dashed purple;
    outline-offset: -1px;
    transform: scale(2);
    margin-top: 40px;
    margin-left: 30px;
`;

const Settings = (props) => {

    return (
        <div>
            <h1 style={{'textAlign': 'center'}}>Settings</h1>
            <StyledInput
                type="checkbox"
                id="readOnlyCheckbox"
                checked={props.readOnly}
                onChange={props.switchReadOnly}
            />
            <label
                className={classes['Settings-checkbox-label']}
                htmlFor="readOnlyCheckbox"
            >
                Read only
            </label>
        </div>
    );
};

const mapStateToProps = state => ({
    readOnly: state.cardsReducer.readOnly
});

const mapDispatchToProps = {
    switchReadOnly
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);