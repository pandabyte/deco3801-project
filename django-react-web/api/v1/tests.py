from django.test import TestCase

from users.models import User

class TestApiV1(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(
            email='user@example.com',
            first_name='first',
            last_name='last',
            password='password',
        )
        response = self.client.post(
            '/api/token/obtain/',
            {
                'email': 'user@example.com',
                'password': 'password',
            },
        )
        self.token = response.json()['access']

    def test_register(self):
        """
        Test registering a new user.
        """
        user_data = {
            'email': 'newuser1@example.com',
            'first_name': 'first',
            'last_name': 'last',
            'password': 'password',
        }
        # Create new user
        response = self.client.post(
            '/api/v1/register/',
            user_data,
        )
        expected = dict(user_data)
        del expected['password']
        self.assertEqual(response.status_code, 200)
        # Assert that response contains all expected data
        self.assertTrue(response.json().items() >= expected.items())

        # Fail to register user with same email
        response = self.client.post(
            '/api/v1/register/',
            user_data,
        )
        expected = {'error': 'An account with this email already exists'}
        self.assertEqual(response.status_code, 422)
        self.assertEqual(response.json(), expected)

        # Fail to register user with missing or blank fields
        for key in user_data.keys():
            incomplete_data = {**user_data, **{'email': 'newuser2@example.com'}}
            del incomplete_data[key]
            response = self.client.post(
                '/api/v1/register/',
                incomplete_data,
            )
            self.assertEqual(response.status_code, 422)
            self.assertTrue(response.json()['error'].endswith('must be given'))

            incomplete_data[key] = ''
            response = self.client.post(
                '/api/v1/register/',
                incomplete_data,
            )
            self.assertEqual(response.status_code, 422)
            self.assertTrue(response.json()['error'].endswith('must be given'))

        # Fail to register user with invalid email
        response = self.client.post(
            '/api/v1/register/',
            {**user_data, **{'email': 'invalid'}},
        )
        expected = {'error': 'Invalid email address'}
        self.assertEqual(response.status_code, 422)
        self.assertEqual(response.json()['error'], expected)

    def test_user_list(self):
        """
        Test getting the list of users.
        """
        # Get users without authorization
        response = self.client.get('/api/v1/users/')
        expected = {'detail': 'Authentication credentials were not provided.'}
        self.assertEqual(response.status_code, 401)
        self.assertEqual(response.json(), expected)

        # Get users with authorization
        response = self.client.get(
            '/api/v1/users/',
            HTTP_AUTHORIZATION='Bearer ' + self.token,
        )
        expected = [{
            'id': self.user.id,
            'email': self.user.email,
            'first_name': self.user.first_name,
            'last_name': self.user.last_name,
            'username': self.user.username,
            'aid': self.user.aid,
            'position': self.user.position,
        }]
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), expected)

    def test_user_id(self):
        """
        Test getting username.
        """
        # Get username without authorization
        response = self.client.get('/api/v1/userid/')
        expected = {'detail': 'Authentication credentials were not provided.'}
        self.assertEqual(response.status_code, 401)
        self.assertEqual(response.json(), expected)

        # Get username with authorization
        response = self.client.get(
            '/api/v1/userid/',
            HTTP_AUTHORIZATION='Bearer ' + self.token,
        )
        expected = {'userId': self.user.username}
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), expected)

    def test_user_profile(self):
        """
        Test getting user profile.
        """
        # Get user profile without authorization
        response = self.client.get('/api/v1/userprofile/')
        expected = {'detail': 'Authentication credentials were not provided.'}
        self.assertEqual(response.status_code, 401)
        self.assertEqual(response.json(), expected)

        # Get user profile with authorization
        response = self.client.get(
            '/api/v1/userprofile/',
            HTTP_AUTHORIZATION='Bearer ' + self.token,
        )
        expected = {
            'username': self.user.username,
            'email': self.user.email,
            'position': self.user.position,
            'first_name': self.user.first_name,
            'last_name': self.user.last_name,
        }
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), expected)

    def test_update_user(self):
        """
        Test updating user profile.
        """
        new_details = {
            'email': 'newuser1@example.com',
            'first_name': 'test1',
            'last_name': 'test1',
        }
        # Update user profile without authorization
        original_details = {
            'username': self.user.username,
        }
        response = self.client.post(
            '/api/v1/userprofile/update/',
            new_details,
        )
        expected = {'detail': 'Authentication credentials were not provided.'}
        self.assertEqual(response.status_code, 401)
        self.assertEqual(response.json(), expected)

        # Update user profile with authorization
        response = self.client.post(
            '/api/v1/userprofile/update/',
            new_details,
            HTTP_AUTHORIZATION='Bearer ' + self.token,
        )
        expected = {
            **original_details,
            **new_details,
        }
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), expected)

        # Partially update user profile
        original_details = {
            'username': self.user.username,
            'email': self.user.email,
        }
        partial_details = {
            'first_name': 'test2',
            'last_name': 'test2',
        }
        response = self.client.post(
            '/api/v1/userprofile/update/',
            partial_details,
            HTTP_AUTHORIZATION='Bearer ' + self.token,
        )
        expected = {
            **original_details,
            **partial_details,
        }
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), expected)

    def test_password_recovery_request(self):
        """
        Test password recovery request.
        """
        # Request password recovery with existing user
        response = self.client.post(
            '/api/v1/password-recovery/request/',
            {'email': self.user.email},
        )
        self.assertEqual(response.status_code, 200)

        # Request password recovery with nonexistent user
        response = self.client.post(
            '/api/v1/password-recovery/request/',
            {'email': 'fake@example.com'},
        )
        expected = {'error': 'User matching query does not exist.'}
        self.assertEqual(response.status_code, 400)
        self.assertEqual(response.json(), expected)
