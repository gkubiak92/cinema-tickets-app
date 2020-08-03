import React from 'react';
import { render } from '@testing-library/react';
import MovieThumbnail from './MovieThumbnail';

describe('MovieThumbnail component', () => {
    test('Render MovieThumbnail component', () => {
        const url = 'testJpgUrl.jpg'
        const { container } = render(<MovieThumbnail thumbnailUrl={url} />);
        expect(container).toBeInTheDocument();
        expect(container.firstChild).toHaveClass('thumbnail');
        const thumbnail = container.firstChild;
        expect(thumbnail?.firstChild).toHaveAttribute('src', url);
    })
})