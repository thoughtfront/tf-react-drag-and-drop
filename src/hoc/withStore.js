import React from 'react';
import store from '../redux/store';
import { Provider } from 'react-redux';

export default Component => {
    return class extends React.Component {
        render() {
            const passThruProps = {
                ...this.props,
            };

            return (
                <Provider store={store}>
                    <Component {...passThruProps} />
                </Provider>
            );
        }
    }
}