import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Form, Label} from './RegisterForm.styled';
import { Box } from 'theme-ui';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box sx={{ maxWidth: 640, py: 16, mx: 'auto' }}>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          Username
          <input type="text" name="name" />
        </Label>
        <Label>
          Email
          <input type="email" name="email" />
        </Label>
        <Label>
          Password
          <input type="password" name="password" />
        </Label>
        <button type="submit">Register</button>
      </Form>
    </Box>
  );
};
