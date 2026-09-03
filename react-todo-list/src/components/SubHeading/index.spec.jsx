import React from 'react';
import { render } from '@testing-library/react';
import { SubHeading } from './index';

describe('SubHeading', () => {
    describe('queryBy', () => {
        test('deveria renderizar o componente corretamente', () => {
            const {queryByText} = render(<SubHeading>Para Estudar</SubHeading>);
            expect(queryByText('Para Estudar')).toBeInTheDocument();
        });
    
        test('não deveria renderizar o componente corretamente quando não tem children', () => {
            const {queryByText} = render(<SubHeading></SubHeading>);
            expect(queryByText('Para Estudar')).not.toBeInTheDocument();
        });
    })
    describe('getBy', () => {
        test('deveria renderizar o componente corretamente', () => {
            const {getByText} = render(<SubHeading>Para Estudar</SubHeading>);
            expect(getByText('Para Estudar')).toBeInTheDocument();
        });
    
        test('não deveria renderizar o componente corretamente quando não tem children', () => {
            const {getByText} = render(<SubHeading></SubHeading>);
            expect(getByText('Para Estudar')).not.toBeInTheDocument();
        });
    })
});