import React, { useState } from 'react';
import Loader from 'react-loader-spinner'

const withLoadingDelay = WrappedComponent => {
    return props => {
        const [loading, setLoading] = useState(true);
        setTimeout(() => {
            setLoading(false)
        }, 2000);
        return loading ? (
            <Loader
                type="Oval"
                style={{ width: '500px', textAlign: 'center' }}
            />
        ) : (
            <WrappedComponent {...props} />
        );
    };
};

export default withLoadingDelay;