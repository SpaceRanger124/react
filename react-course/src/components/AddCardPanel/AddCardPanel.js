import React, { Component } from 'react';
import ContentEditable from 'react-contenteditable';

import classes from './AddCardPanel.module.css';

class AddCardPanel extends Component {

    caption = "";
    description = "";

    handleCaptionChange = (event) => {
        this.caption = event.target.value;
    }

    handleDescriptionChange = (event) => {
        this.description = event.target.value;
    }

    submit = () => {
        this.props.submit(this.caption, this.description);
    }

    render() {
        return (
            <div className={classes['AddCardPanel']}>
                <div className={classes['AddCardPanel-left']}>
                    <div>
                        <label>Caption:</label>
                    </div>
                    <div>
                        <label>Description:</label>
                    </div>
                    <div>
                        <button onClick={this.submit}>Submit</button>
                    </div>
                </div>
                <div>
                    <ContentEditable
                        onChange={this.handleCaptionChange}
                        html=""
                        className={classes['AddCardPanel-ContentEditable']}
                    />
                    <ContentEditable
                        onChange={this.handleDescriptionChange}
                        html=""
                        className={classes['AddCardPanel-ContentEditable']}
                    />
                    <button onClick={this.props.cancel}>Cancel</button>
                </div>
            </div>
        );
    }

}

export default AddCardPanel;