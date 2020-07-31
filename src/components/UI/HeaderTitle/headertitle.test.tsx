import React from 'react';
import { render, screen } from '@testing-library/react';
import HeaderTitle from './HeaderTitle';
import { BrowserRouter } from 'react-router-dom';


describe('HeaderTitle', () => {
    test('render HeaderTitle', () => {
        const title = 'CINEMAPP';
        const theme = 'light';
        render(<BrowserRouter>
            <HeaderTitle theme={theme} title={title} />
        </BrowserRouter>);

        expect(screen.getByRole('link')).toBeInTheDocument();
        expect(screen.getByRole('heading')).toBeInTheDocument();
        expect(screen.getByRole('heading')).toHaveClass(theme);
        expect(screen.getByRole('heading')).toHaveTextContent(title);
        expect(screen.getByText(title)).toBeInTheDocument();
    })
})