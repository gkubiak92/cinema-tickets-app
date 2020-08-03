import React from 'react';
import { render, screen } from 'tests/test-utils';
import Rating from './Rating';

describe('Rating component', () => {
    test('Render Rating component', () => {
        const rating = 3;
        const { container } = render(<Rating rating={rating} />);
        expect(container).toBeInTheDocument();
    });

    test('Rating component should have 5 stars', () => {
        const { container } = render(<Rating rating={0} />);
        expect(container.firstChild?.childNodes.length).toBe(5);
    });

    test('Rating 3 should render 3 filled and 2 empty stars', () => {
        const rating = 3;
        render(<Rating rating={rating} />);
        const filledStarsCount = document.querySelectorAll(`[data-prefix="fas"]`).length;
        const emptyStarsCount = document.querySelectorAll(`[data-prefix="far"]`).length;
        expect(filledStarsCount).toBe(3);
        expect(emptyStarsCount).toBe(2);
    });

    test('Rating greater than 5 should render 5 filled stars', () => {
        const rating = 12;
        render(<Rating rating={rating} />);
        const filledStarsCount = document.querySelectorAll(`[data-prefix="fas"]`).length;
        expect(filledStarsCount).toBe(5);
    });

    test('Rating less than 0 should render 5 empty stars', () => {
        const rating = -5;
        render(<Rating rating={rating} />);
        const filledStarsCount = document.querySelectorAll(`[data-prefix="far"]`).length;
        expect(filledStarsCount).toBe(5);
    });
})