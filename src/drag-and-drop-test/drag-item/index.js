import React from 'react';
import PropTypes from 'prop-types';

class DragItem extends React.Component {

    render() {
        const { children, onDragStart, component, componentProps } = this.props;
        const Component = component;

        return (
            <div
                onDragStart={ event => onDragStart(event) }
                draggable
            >
                <Component {...componentProps}/>
            </div>
        )
    }
}

DragItem.propTypes = {
    uniqueId: PropTypes.string.isRequired,
    componentProps: PropTypes.object,
}

export default DragItem;