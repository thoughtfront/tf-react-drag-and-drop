import React, { useState } from 'react';
import { DropGroup, DragItem } from '../../src/drag-and-drop-test';
import DragAndDrop from '../../src';
import Toggle from './components/toggle';
import Text from './components/text';

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

const toggleProps = {}

const Test = () => {
    const [on, setOn] = useState(true);

    toggleProps.isOn = on;
    toggleProps.onChange = isOn => setOn(isOn);

    return (
        <div style={wrapper}>
            <DropGroup
                style={dropContainerStyles}
                groupName='Group1'
            >
                <DragItem
                    uniqueId={'1'}
                    onGroupChange={itemGroupChange}
                    component={Toggle}
                    componentProps={toggleProps}
                />
                <DragItem
                    uniqueId={'2'}
                    onGroupChange={itemGroupChange}
                    component={Text}
                    componentProps={{
                        text: 'Works',
                    }}
                />
                <DragItem
                    uniqueId={'3'}
                    onGroupChange={itemGroupChange}
                    component={Text}
                    componentProps={{
                        text: 'Dude',
                    }}
                />
            </DropGroup>
            <DropGroup
                style={dropContainerStyles}
                groupName='Group2'
            >
                <DragItem
                    uniqueId={'4'}
                    onGroupChange={itemGroupChange}
                    component={Text}
                    componentProps={{
                        text: 'Second'
                    }}
                />
                <DragItem
                    uniqueId={'5'}
                    onGroupChange={itemGroupChange}
                    component={Text}
                    componentProps={{
                        text: 'Group'
                    }}
                />
                <DragItem
                    uniqueId={'6'}
                    onGroupChange={itemGroupChange}
                    component={Text}
                    componentProps={{
                        text: 'Foolish'
                    }}
                />
                <DragItem
                    uniqueId={'7'}
                    onGroupChange={itemGroupChange}
                    component={Text}
                    componentProps={{
                        text: 'Person'
                    }}
                />
            </DropGroup>
            <DropGroup
                style={dropContainerStyles}
                groupName='Group3'
            >
                <DragItem
                    uniqueId={'8'}
                    onGroupChange={itemGroupChange}
                    component={Text}
                    componentProps={{
                        text: 'ONLY ONE',
                    }}
                />
                <div style={itemStyles}>
                    NOT DRAGGABLE
                </div>
            </DropGroup>
        </div>
    );
}

export default Test;