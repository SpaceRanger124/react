import React, { useState } from 'react';
import Loader from 'react-loader-spinner'

const withLoadingDelay = (WrappedComponent) => {
    return props => {
        const [loading, setLoading] = useState(true);
        setTimeout(() => {
            setLoading(false)
        }, 2000);
        let loader = (
            <Loader type="Oval" />
        );
        return (
            <div className={props.className}>
                {loading ? loader : <WrappedComponent {...props} /> }
            </div>
        );
    };
};

export default withLoadingDelay;