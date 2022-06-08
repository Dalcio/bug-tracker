import { render, screen } from '@testing-library/react';

import TrackBoard from '.';

describe('Track component', () => {
  it('has correct Next.js theming section link', () => {
    render(<TrackBoard />);
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine.dev/theming/next/'
    );
  });
});
