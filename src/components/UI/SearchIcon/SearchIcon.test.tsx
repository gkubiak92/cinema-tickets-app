import React from 'react';
import SearchIcon from './SearchIcon';
import { render, fireEvent, screen } from 'tests/test-utils';
import { store as initialStore } from 'redux/store';
import { showSearchBar } from 'redux/ui/actions';

describe('SearchIcon component', () => {
    test('render SearchIcon component', () => {
        const { container } = render(<SearchIcon />);
        expect(container).toBeInTheDocument();
    });

    test('SearchIcon component has proper icon rendered', () => {
        const { container } = render(<SearchIcon />);
        expect(container.firstChild?.firstChild).toHaveAttribute('data-icon', 'search');
        expect(container.firstChild?.firstChild).toHaveAttribute('data-prefix', 'fas');
    });

    test('clicking icon dispatch showSearchBar action', () => {
        const mockStore = initialStore;
        mockStore.dispatch = jest.fn();
        const { container, store } = render(<SearchIcon />);
        fireEvent.click(container.firstChild!);
        expect(store.dispatch).toHaveBeenCalledTimes(1);
        expect(store.dispatch).toHaveBeenCalledWith(showSearchBar());
    });
});