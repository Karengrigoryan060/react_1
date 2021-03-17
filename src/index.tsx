import React from 'react';
import { render } from 'react-dom';
import { Balance } from './root/balance/balance';

const App = () => {
    return (
        <Balance />
    );
};

render(<App />, document.getElementById('root'));
