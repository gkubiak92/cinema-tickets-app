import React from 'react';
import { render, fireEvent } from 'tests/test-utils';
import SideDrawer from './SideDrawer';
import { BrowserRouter } from 'react-router-dom';
import { toggleSideDrawer } from 'redux/ui/actions';
import { store as initialStore } from 'redux/store';

describe('SideDrawer component', () => {
    test('Render SideDrawer component', () => {
        const { container } = render(
            <BrowserRouter>
                <SideDrawer />
            </BrowserRouter>
        );
        expect(container).toBeInTheDocument();
    });

    test('SideDrawer should dispatch action on close click', () => {
        const mockStore = initialStore;
        mockStore.dispatch = jest.fn();
        const { container } = render(
            <BrowserRouter>
                <SideDrawer />
            </BrowserRouter>, mockStore
        );
        const closeBtn = container.querySelector('.close-button');
        fireEvent.click(closeBtn!);
        expect(mockStore.dispatch).toBeCalledTimes(1);
        expect(mockStore.dispatch).toBeCalledWith(toggleSideDrawer());
    })
})
