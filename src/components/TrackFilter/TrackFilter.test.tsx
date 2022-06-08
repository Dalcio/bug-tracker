import { render, screen } from '@testing-library/react';
import { TrackFilter } from '.';

describe('TrackFilter component', () => {
  it('has correct Next.js theming section link', () => {
    render(<TrackFilter />);
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine.dev/theming/next/'
    );
  });
});
