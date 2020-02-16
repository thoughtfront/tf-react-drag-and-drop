import React from 'react';
import PropTypes from 'prop-types';

class DragItem extends React.Component {
    constructor(props) {
        super(props);
        console.warn('constructor for', props.uniqueId);
    }

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