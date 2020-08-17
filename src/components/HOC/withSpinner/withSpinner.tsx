import React from 'react';
import LoaderSpinner from 'components/LoaderSpinner/LoaderSpinner';

function withSpinner<T>(WrappedComponnent: React.ComponentType<T>, loading: boolean): React.ComponentType<T> {
    return (props: T) => loading ? <LoaderSpinner /> : <WrappedComponnent {...props} />;
}

export default withSpinner;