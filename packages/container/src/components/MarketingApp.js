import React, {useEffect, useRef} from 'react';
import {mount} from 'packages/marketing/MarketingApp'

const MarketingApp = () => {
    const ref = useRef(null);

    useEffect(() => {
        mount(ref.current)
    }, [])

    return (
        <div ref={ref}/>
    );
};

export default MarketingApp;