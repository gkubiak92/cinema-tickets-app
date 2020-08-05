import React from 'react';
import { render, fireEvent } from 'tests/test-utils';
import MenuItem from './MenuItem';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter } from 'react-router-dom';
import { store as initialStore } from 'redux/store';
import { toggleSideDrawer } from 'redux/ui/actions';

describe('MenuItem component', () => {
    const defaultLocation = 'http://localhost';
    afterEach(() => {
        window.history.replaceState({}, '', defaultLocation);
    });

    test('Render MenuItem component', () => {
        const link = "/some-route";
        const title = 'Menu item';
        const { container } = render(
            <BrowserRouter>
                <MenuItem to={link} title={title} icon={faTimes} />
            </BrowserRouter>
        );
        expect(container).toBeInTheDocument();
    })

    test('Clicking menu item toggling side drawer', () => {
        const link = "/some-route";
        const title = 'Menu item';
        const mockStore = initialStore;
        mockStore.dispatch = jest.fn();

        const { container } = render(
            <BrowserRouter>
                <MenuItem to={link} title={title} icon={faTimes} />
            </BrowserRouter>, mockStore
        );
        fireEvent.click(container.firstChild!);
        expect(mockStore.dispatch).toHaveBeenCalledTimes(1);
        expect(mockStore.dispatch).toHaveBeenCalledWith(toggleSideDrawer());
    });

    test('Clicking menu item redirects to its route', () => {
        const link = "/some-route";
        const title = 'Menu item';
        const { container } = render(
            <BrowserRouter>
                <MenuItem to={link} title={title} icon={faTimes} />
            </BrowserRouter>
        );
        fireEvent.click(container.firstChild!);
        expect(window.location.href).toBe(`${defaultLocation}${link}`);
    })
})
