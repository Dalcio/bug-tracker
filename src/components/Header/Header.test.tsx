import { render, screen } from '@testing-library/react';
import { Header } from '.';

describe('Header component', () => {
  it('has correct Next.js theming section link', () => {
    render(<Header />);
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine.dev/theming/next/'
    );
  });
});
