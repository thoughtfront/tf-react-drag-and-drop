import React from 'react';
import { DropContainer, DragItem } from '../../src/drag-and-drop';
import DragAndDrop from '../../src';

const Test = () => (
    <DropContainer
        dropGroup='Group1'
    >
        <DragItem>TEST</DragItem>
        <DragItem>Works</DragItem>
    </DropContainer>
);

export default Test;