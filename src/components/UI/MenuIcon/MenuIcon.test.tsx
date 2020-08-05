import React from 'react';
import { render, fireEvent } from 'tests/test-utils';
import MenuIcon from './MenuIcon';
import { store as initialStore } from 'redux/store';
import { toggleSideDrawer } from 'redux/ui/actions';

describe('MenuIcon', () => {
    test('Render MenuIcon', () => {
        const { container } = render(<MenuIcon />);
        expect(container).toBeInTheDocument();
    })

    test('Clicking menu icon toggles side drawer', () => {
        const mockStore = initialStore;
        mockStore.dispatch = jest.fn();
        const { container } = render(<MenuIcon />, mockStore);
        fireEvent.click(container.firstChild!);
        expect(mockStore.dispatch).toHaveBeenCalledTimes(1);
        expect(mockStore.dispatch).toHaveBeenLastCalledWith(toggleSideDrawer());
    })
});