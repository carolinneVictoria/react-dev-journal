import React from 'react';
import { render } from '@testing-library/react';
import { SubHeading } from './index';

describe('SubHeading', () => {
    test('deveria renderizar o componente corretamente', () => {
        const {getByText} = render(<SubHeading>Para Estudar</SubHeading>);
        expect(getByText('Para Estudar')).toBeInTheDocument();
    });

    test('não deveria renderizar o componente corretamente quando não tem children', () => {
        const {getByText} = render(<SubHeading>Para Estudar</SubHeading>);
        expect(getByText('Para Estudar')).toBeInTheDocument();
    });
});