import React from 'react';
import { DropContainer, DragItem } from '../../src/drag-and-drop';
import DragAndDrop from '../../src';

const wrapper = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
}

const dropContainerStyles = {
    width: '300px',
    border: '1px solid black',
}

const dragItemStyles = {
    minHeight: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid grey',
    margin: '5px',
}

const Test = () => (
    <div style={wrapper}>
        <DropContainer
            style={dropContainerStyles}
            dropGroup='Group1'
        >
            <DragItem uniqueId={'1'}>
                <div style={dragItemStyles}>
                    TEST
                </div>
            </DragItem>
            <DragItem uniqueId={'2'}>
                <div style={dragItemStyles}>
                    Works
                </div>
            </DragItem>
            <DragItem uniqueId={'3'}>
                <div style={dragItemStyles}>
                    Dude
                </div>
            </DragItem>
        </DropContainer>
        <DropContainer
            style={dropContainerStyles}
            dropGroup='Group2'
        >
            <DragItem uniqueId={'4'}>
                <div style={dragItemStyles}>
                    Second
                </div>
            </DragItem>
            <DragItem uniqueId={'5'}>
                <div style={dragItemStyles}>
                    Group
                </div>
            </DragItem>
            <DragItem uniqueId={'6'}>
                <div style={dragItemStyles}>
                    Fool
                </div>
            </DragItem>
        </DropContainer>
    </div>
);

export default Test;