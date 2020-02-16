import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setDraggingItem } from '../../redux/actions';

const mapDispatchToProps = dispatch => ({
    setDraggingItem: item => dispatch(setDraggingItem(item)),
});

class DragItem extends React.Component {

    // onDragStart = (event) => {
    //     console.warn('onDragStart',this);
    //     this.props.setDraggingItem(this);
    // }

    render() {
        const { children, style, test, onDragStart } = this.props;

        return (
            <div
                onDragStart={ event => onDragStart(event)}
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

export default connect(null,mapDispatchToProps)(DragItem);