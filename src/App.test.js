import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
<Input.Password
         prefix={<LockOutlined className="site-form-item-icon" />}
         type="password"
         placeholder="Password"
       />