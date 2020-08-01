import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import CustomButton from './CustomButton'
import { BrowserRouter } from 'react-router-dom';

describe('Custom button', () => {
    const buttonText = 'TestButton';
    const defaultLocation = 'http://localhost';

    afterEach(() => {
        window.history.pushState({}, '', defaultLocation);
    });

    test('redner custom button', () => {
        const { container } = render(
            <CustomButton type="button">{buttonText}</CustomButton>
        );
        expect(container).toBeInTheDocument();
        expect(container.firstChild).toHaveTextContent(buttonText);
    });

    test('render disabled button', () => {
        const { container } = render(
            <CustomButton type="button" disabled>
                {buttonText}
            </CustomButton>
        );
        expect(container).toBeInTheDocument();
        expect(container.firstChild).toBeDisabled();
    });

    test('onClick method', () => {
        const incrementCount = jest.fn();;
        const { container } = render(
            <CustomButton type="button" onClick={incrementCount}>
                {buttonText}
            </CustomButton>
        );
        expect(container).toBeInTheDocument();
        const clickResult = fireEvent.click(container.firstChild!);
        expect(clickResult).toBe(true);
        expect(incrementCount).toHaveBeenCalledTimes(1);
    });

    test('button is a link and redirects', () => {
        const link = '/test-page';
        const { container } = render(
            <BrowserRouter>
                <CustomButton type="button" to={link}>
                    {buttonText}
                </CustomButton>
            </BrowserRouter>
        );
        const button = container.firstChild;
        expect(container).toBeInTheDocument();
        fireEvent.click(button!);
        expect(window.location.href).toBe(`http://localhost${link}`);
    });

    test('button is both functional and link', () => {
        const incrementCount = jest.fn();
        const link = '/test-page';
        const { container } = render(
            <BrowserRouter>
                <CustomButton type="button" onClick={incrementCount} to={link}>
                    {buttonText}
                </CustomButton>
            </BrowserRouter>
        )
        expect(container).toBeInTheDocument();
        const button = container.firstChild;
        fireEvent.click(button!);
        expect(incrementCount).toHaveBeenCalledTimes(1);
        expect(window.location.href).toBe(`${defaultLocation}/`);
    })
})