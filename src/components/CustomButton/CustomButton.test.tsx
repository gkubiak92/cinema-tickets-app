import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import CustomButton from './CustomButton'
import { BrowserRouter } from 'react-router-dom';

describe('Custom button', () => {
    const buttonText = 'TestButton';

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
        let counter = 0;
        const incrementCount = () => counter++;
        const { container } = render(
            <CustomButton type="button" onClick={incrementCount}>
                {buttonText}
            </CustomButton>
        );
        expect(container).toBeInTheDocument();
        const clickResult = fireEvent.click(container.firstChild!);
        expect(clickResult).toBe(true);
        expect(counter).toBe(1);
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
    })
})