import React from 'react'
import { render, screen } from '@testing-library/react'
import LoaderSpinner from './LoaderSpinner';

describe('Loader Spinner', () => {
    test('Render loader spinner', () => {
        const { container } = render(<LoaderSpinner />);
        expect(container.firstChild).toHaveClass('spinner-container');
        expect(container.firstChild?.firstChild).toHaveClass('lds-ripple');
    })
})