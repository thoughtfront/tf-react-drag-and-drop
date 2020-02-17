import React, { useState } from 'react';
import { DropGroup, DragItem } from '../../src/drag-and-drop-children';
import DragAndDrop from '../../src';
import Toggle from './components/toggle';

const wrapper = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
}

const dropContainerStyles = {
    width: '300px',
    border: '1px solid black',
    height: 'fit-content',
    minHeight: '100px',
}

const dragItemStyles = {
    minHeight: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid grey',
    margin: '25px 25px',
    cursor: 'pointer',
}

const itemStyles = {
    minHeight: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid grey',
    margin: '25px 25px',
}

const itemGroupChange = (id, group) => {
    console.warn(`item ${id} moved to ${group}`);
}

const WithChildren = () => {
    const [on, setOn] = useState(false);

    return (
        <div style={wrapper}>
            <DropGroup
                style={dropContainerStyles}
                groupName='Group1'
            >
                <DragItem uniqueId={'1'} onGroupChange={itemGroupChange}>
                    <div style={dragItemStyles}>
                        <Toggle on={on} onChange={ isOn => setOn(isOn) }/>
                    </div>
                </DragItem>
                <DragItem uniqueId={'2'} onGroupChange={itemGroupChange}>
                    <div style={dragItemStyles}>
                        Works
                    </div>
                </DragItem>
                <DragItem uniqueId={'3'} onGroupChange={itemGroupChange}>
                    <div style={dragItemStyles}>
                        Dude
                    </div>
                </DragItem>
            </DropGroup>
            <DropGroup
                style={dropContainerStyles}
                groupName='Group2'
            >
                <DragItem uniqueId={'4'} onGroupChange={itemGroupChange}>
                    <div style={dragItemStyles}>
                        Second
                    </div>
                </DragItem>
                <DragItem uniqueId={'5'} onGroupChange={itemGroupChange}>
                    <div style={dragItemStyles}>
                        Group
                    </div>
                </DragItem>
                <DragItem uniqueId={'6'} onGroupChange={itemGroupChange}>
                    <div style={dragItemStyles}>
                        Foolish
                    </div>
                </DragItem>
                <DragItem uniqueId={'7'} onGroupChange={itemGroupChange}>
                    <div style={dragItemStyles}>
                        Person
                    </div>
                </DragItem>
            </DropGroup>
            <DropGroup
                style={dropContainerStyles}
                groupName='Group3'
            >
                <DragItem uniqueId={'8'} onGroupChange={itemGroupChange}>
                    <div style={dragItemStyles}>
                        ONLY ONE
                    </div>
                </DragItem>
                <div style={itemStyles}>
                    NOT DRAGGABLE
                </div>
            </DropGroup>
        </div>
    );
}

export default WithChildren;