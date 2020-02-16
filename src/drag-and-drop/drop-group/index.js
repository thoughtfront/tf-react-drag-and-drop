import React from 'react';
import { connect } from 'react-redux';
import withStore from '../../hoc/withStore';
import PropTypes from 'prop-types';
import * as actions from '../../redux/actions';

const mapDispatchToProps = dispatch => ({
    registerGroup: groupName => dispatch(actions.registerGroup(groupName)),
    registerItem: (item, groupName) => dispatch(actions.registerItem(item, groupName)),
    clearGroup: groupName => dispatch(actions.clearGroup(groupName)),
    setDraggingItem: (item, groupName) => dispatch(actions.setDraggingItem(item, groupName)),
    dropInGroup: groupName => dispatch(actions.dropInGroup(groupName)),
});

const mapStateToProps = (state, props) => {
    const { groupItems } = state;
    const { groupName } = props;
    return {
        registeredItems: groupItems[groupName],
    }
};

class DropGroup extends React.Component {
    constructor(props) {
        super(props);
        const { groupName, registerGroup, registerItem, children } = props;
        registerGroup(groupName);
        if (Array.isArray(children)) children.forEach( child => registerItem(child, groupName));
        else registerItem(children, groupName);
    }

    componentWillUnmount() {
        const { clearGroup, groupName } = this.props;
        clearGroup(groupName);
    }

    onDragStart = (event, child) => {
        const { groupName, setDraggingItem } = this.props;
        this.props.setDraggingItem(child, groupName);
    }

    onDragOver = event => {
        event.preventDefault();
    }

    onDrop = (event, cat) => {
        const { dropInGroup, groupName } = this.props;
        dropInGroup(groupName);
    }

    getRenderedChildren = () => {
        const { registeredItems, style } = this.props;
        // Map children to new components containing the onDragStart callback
        return !!registeredItems ? React.Children.map(registeredItems, child => {
            return {
                ...child,
                props: {
                    onDragStart: event => this.onDragStart(event, child),
                    ...child.props,
                }
            }
        }) : null;
    }

    render() {
        const { style } = this.props;
        const renderedChildren = this.getRenderedChildren();

        return (
            <div
                style={!!style ? style : {}}
                onDragOver={ event => this.onDragOver(event) }
                onDrop={ event => this.onDrop(event) }
            >
                {renderedChildren}
            </div>
        )
    }
}

DropGroup.propTypes = {
    groupName: PropTypes.string.isRequired,
}

export default withStore(connect(mapStateToProps, mapDispatchToProps)(DropGroup));