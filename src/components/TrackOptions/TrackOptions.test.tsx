import { render, screen } from '@testing-library/react';

import TrackOptions from '.';

describe('Track Options component', () => {
  it('has correct Next.js theming section link', () => {
    render(<TrackOptions />);
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine.dev/theming/next/'
    );
  });
});
