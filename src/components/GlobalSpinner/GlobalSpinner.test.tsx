import React from 'react'
import { render, screen } from '@testing-library/react'
import GlobalSpinner from './GlobalSpinner'

describe('Global Spinner', () => {
    test('Render global spinner component', () => {
        const { container } = render(<GlobalSpinner />);
        expect(container.firstChild).toHaveClass('global-spinner-container');
    })
})