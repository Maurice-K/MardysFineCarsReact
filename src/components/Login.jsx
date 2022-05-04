import { Button, Container, Stack, TextField } from '@mui/material';
import { useState } from 'react';

const Login = () => {
	const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

	const onCredentialsChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
		setCredentials({ ...credentials, [name]: value });
	};

	const onLogin = (event) => {
		event.preventDefault();
		console.log(credentials);
	};

	return (
		<form onSubmit={onLogin}>
			<Container>
				<Stack>
					<TextField
						label='username'
						name='username'
						value={credentials.username}
						onChange={onCredentialsChange}
					/>
					<TextField
						label='password'
						name='password'
            type='password'
						value={credentials.password}
						onChange={onCredentialsChange}
					/>
          <Button type='submit' variant='contained' >Login</Button>

				</Stack>
			</Container>
		</form>
	);
};

export default Login;
