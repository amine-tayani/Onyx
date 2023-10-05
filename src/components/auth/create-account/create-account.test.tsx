import { render, screen } from '@testing-library/react';
import { CreateAccountForm } from './form';
import '@testing-library/jest-dom/';

describe('CreateAccountForm', () => {
  it('should render create account form with all fields', () => {
    render(<CreateAccountForm />);

    expect(screen.getByPlaceholderText('Your first Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your last Name')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('Your email address')
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('Select your country')
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('Your LinkedIn profile')
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your password')).toBeInTheDocument();

    expect(screen.getByRole('button')).toHaveTextContent('Continue');
  });

  it('should render Already have an account link', () => {
    render(<CreateAccountForm />);

    expect(screen.getByText('Already have an account?')).toBeInTheDocument();

    expect(screen.getByRole('link')).toHaveTextContent('Login');
  });
});
