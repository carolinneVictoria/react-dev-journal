import {render, screen} from '@testing-library/react';
import { Header } from './index';

describe('Header', () => {
   test('deve renderizar o header', () => {
    expect(render(<Header />)).toBeTruthy();
   })

   test('deve renderizar o componente com a classe correta', () => {
    const {container} = render(<Header />)
    expect(container.firstChild).toHaveClass('header');
   })
});