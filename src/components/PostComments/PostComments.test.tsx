import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
    it('Teste para renderizar o primeiro comentario', () => {
        render(<Post />)
        const botao = screen.getByTestId('btn-comentar')
        const campo = screen.getByTestId('campo-comentar')
        fireEvent.change(campo, {
            target: {
                value: 'legal'
            }
        })
        fireEvent.click(botao)
        expect(screen.getByText('legal')).toBeInTheDocument();
    });
    it('Teste para renderizar o segundo comentario', () => {
        render(<Post />)
        const botao = screen.getByTestId('btn-comentar')
        const campo = screen.getByTestId('campo-comentar')
        fireEvent.change(campo, {
            target: {
                value: 'maneiro'
            }
        })
        fireEvent.click(botao)
        expect(screen.getByText('maneiro')).toBeInTheDocument();
    })
});