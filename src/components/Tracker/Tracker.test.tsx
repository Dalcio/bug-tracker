import { render, screen } from '@testing-library/react';
import { Tracker } from '.';

describe('Tracker component', () => {
  it('has correct Next.js theming section link', () => {
    render(<Tracker />);
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine.dev/theming/next/'
    );
  });
});
