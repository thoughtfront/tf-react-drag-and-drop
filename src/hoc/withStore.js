import React from 'react';
import store, { DndContext } from '../redux/store';
import { Provider } from 'react-redux';

export default Component => {
    return function withStore(props) {
        const passThruProps = {
            ...props,
            context: DndContext,
        };

        return (
            <Provider store={store} context={DndContext}>
                <Component {...passThruProps} />
            </Provider>
        );
    }
}