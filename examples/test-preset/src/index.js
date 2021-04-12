import React from 'react';

import { TestLib } from './util';

const TestComponent = () => {
    const result = TestLib?.a?.b;

    return <div>{result}</div>;
};

export default TestComponent;
