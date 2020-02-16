import React from 'react';
import { connect } from 'react-redux';
import withStore from '../../hoc/withStore';
import PropTypes from 'prop-types';
import DragItem from '../drag-item'
import * as actions from '../../redux/actions';

const mapDispatchToProps = dispatch => ({
    registerGroup: groupName => dispatch(actions.registerGroup(groupName)),
});

class DropContainer extends React.Component {
    constructor(props) {
        super(props);
        const { dropGroup, registerGroup, children } = props;
        // console.warn('children', children);
        registerGroup(dropGroup);
    }

    onDragOver = event => {
        event.preventDefault();
    }

    onDrop = (event, cat) => {
        const { dropGroup } = this.props;
        console.warn('drop in',dropGroup);
    }

    render() {
        const { children, style } = this.props;
        const types = children.map( child => child.type);
        // console.warn('children',children);
        // console.warn('types',types);
        // console.warn('instance', children[0].type.name === 'DragItem');
        return (
            <div
                style={!!style ? style : {}}
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

// export default connect(null, mapDispatchToProps)(
//     withStore(DropContainer)
// );
export default withStore(connect(null, mapDispatchToProps)(DropContainer));