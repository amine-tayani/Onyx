import { render } from '@testing-library/react';
import { CreateAccountForm } from './form';

describe('Tests for CreateAccount form component', () => {
  test('renders CreateAccount component', () => {
    render(<CreateAccountForm />);
  });
});
