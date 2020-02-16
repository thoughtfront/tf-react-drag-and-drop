import React from 'react';
import PropTypes from 'prop-types';
import DragItem from '../drag-item'

class DropContainer extends React.Component {

    onDragOver = event => {
        event.preventDefault();
    }

    onDrop = (event, cat) => {
        const { dropGroup } = this.props;
        console.warn('drop in',dropGroup);
    }

    render() {
        const { children } = this.props;
        const types = children.map( child => child.type);
        console.warn('children',children);
        console.warn('types',types);
        console.warn('instance', children[0].type.name === 'DragItem');
        return (
            <div
                onDragOver={ event => this.onDragOver(event) }
                onDrop={ event => this.onDrop(event) }
            >
                {children}
            </div>
        )
    }
}

DropContainer.propTypes = {
    dropGroup: PropTypes.string,
    dragItems: PropTypes.array,
}

export default DropContainer;