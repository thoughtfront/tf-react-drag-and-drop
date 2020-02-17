import React from 'react';
import PropTypes from 'prop-types';

class DragItem extends React.Component {

    render() {
        const { children, onDragStart } = this.props;

        return (
            <div
                onDragStart={ event => onDragStart(event) }
                draggable
            >
                {children}
            </div>
        )
    }
}

DragItem.propTypes = {
    uniqueId: PropTypes.string.isRequired,
}

export default DragItem;