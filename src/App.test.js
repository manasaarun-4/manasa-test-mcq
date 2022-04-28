import { render, screen } from '@testing-library/react';
import { Home } from './nasa/Home';



test('heading needs to be present in the page', () => {
  render(<Home />)
})
