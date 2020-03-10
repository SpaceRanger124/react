import React, { useState } from 'react';
import Loader from 'react-loader-spinner'


const WithLoadingDelay = props => {
    const [loading, setLoading] = useState(true);
    setTimeout(() => {
        setLoading(false)
    }, 2000);
    let loader = (
        <Loader type="Oval" />
    );
    return (
        <div className={props.classes}>
            {loading ? loader : props.children}
        </div>
    );
};

export default WithLoadingDelay;