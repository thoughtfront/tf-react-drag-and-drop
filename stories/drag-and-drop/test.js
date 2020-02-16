import React from 'react';
import { DropGroup, DragItem } from '../../src/drag-and-drop';
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
        <DropGroup
            style={dropContainerStyles}
            groupName='Group1'
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
        </DropGroup>
        <DropGroup
            style={dropContainerStyles}
            groupName='Group2'
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
                    Foolish
                </div>
            </DragItem>
            <DragItem uniqueId={'7'}>
                <div style={dragItemStyles}>
                    Person
                </div>
            </DragItem>
        </DropGroup>
        <DropGroup
            style={dropContainerStyles}
            groupName='Group3'
        >
            <DragItem uniqueId={'1'}>
                <div style={dragItemStyles}>
                    ONLY ONE
                </div>
            </DragItem>
        </DropGroup>
    </div>
);

export default Test;