import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Card, Alert } from 'react-bootstrap';
import { login } from '../service/api';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [showCard, setShowCard] = useState(true);

  // Default admin credentials
  const defaultAdminUsername = 'admin';
  const defaultAdminPassword = 'admin123';

  useEffect(() => {
    if (loggedIn) {
      setShowWelcome(true);
      setTimeout(() => {
        setShowWelcome(false);
        setShowCard(false);
      }, 1000);
    }
  }, [loggedIn]);

  const handleLogin = async (e) => {
    e.preventDefault();
    // Simulating authentication with default admin credentials
    login({
      email: username,
      password: password,
    })
      .then((res) => {
        console.log(res.data);
        //Save res.data.token to local storage
        localStorage.setItem('token', res.data.token);
        //Save res.data.user to local storage

        localStorage.setItem('email', res.data.result.email);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setUsername('');
        setPassword('');
      });
  };

  return (
    <Container className='col-4'>
      <br />
      <br />
      <br />
      {showCard && (
        <Card>
          <Card.Body>
            <Card.Title>Login</Card.Title>
            <Form onSubmit={handleLogin}>
              <Form.Group controlId='formBasicUsername'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter Email'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <br />
              <br />
              <Button variant='primary' type='submit'>
                Login
              </Button>
            </Form>
            {showWelcome && (
              <Alert variant='success' className='mt-3'>
                Welcome!
              </Alert>
            )}
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default LoginPage;
