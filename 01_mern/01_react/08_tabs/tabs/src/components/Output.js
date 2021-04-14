import React from 'react';

const Output = (props) => {
    const { allTabs, currentTabIndex } = props;

    return (
        <div className="results">
            { allTabs[currentTabIndex].content }
        </div>
    )
}

export default Output;