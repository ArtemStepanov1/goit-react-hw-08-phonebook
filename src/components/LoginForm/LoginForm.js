import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Form, Label} from './LoginForm.styled';
import { Box } from 'theme-ui';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box sx={{ maxWidth: 640, py: 16, mx: 'auto' }}>
      <Form onSubmit={handleSubmit}>
        <Label>
          Email
          <input type="email" name="email" />
        </Label>
        <Label>
          Password
          <input type="password" name="password" />
        </Label>
        <button type="submit">Log In</button>
      </Form>
    </Box>
  );
};
