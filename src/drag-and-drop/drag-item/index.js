import React from 'react';
import PropTypes from 'prop-types';

class DragItem extends React.Component {

    onDragStart = (event) => {
        console.warn('onDragStart');
    }

    render() {
        const { children } = this.props;
        return (
            <div
                onDragStart={ event => this.onDragStart(event)}
                draggable
            >
                {children}
            </div>
        )
    }
}

DragItem.propTypes = {
    uniqueId: PropTypes.string,
}

export default DragItem;