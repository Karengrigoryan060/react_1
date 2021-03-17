import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { User } from 'user/user';
import { store } from './store/store';

const App = () => {
    return (
        <Provider store={store}>
            <User />
        </Provider>
    );
};

render(<App />, document.getElementById('root'));
