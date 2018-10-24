import json
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
            }
        )
        self.token = json.loads(response.content.decode('utf-8'))['access']

    def test_register_correct(self):
        """
        Test registering a new user.
        """
        user_data = {
            'email': 'newuser@example.com',
            'first_name': 'first',
            'last_name': 'last',
            'password': 'password',
        }
        # Create new user
        response = self.client.post(
            '/api/v1/register/',
            user_data,
        )
        self.assertEqual(response.status_code, 200)

        # Fail to register user with same email
        response = self.client.post(
            '/api/v1/register/',
            user_data,
        )
        self.assertEqual(response.status_code, 422)

        # Fail to register user with missing fields
        for key in user_data.keys():
            incomplete_data = dict(user_data)
            del incomplete_data[key]
            response = self.client.post(
                '/api/v1/register/',
                incomplete_data,
            )
            self.assertEqual(response.status_code, 422)

    def test_user_list(self):
        """
        Test getting the list of users.
        """
        # Get users without authorization
        response = self.client.get('/api/v1/users/')
        self.assertEqual(response.status_code, 401)

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
        self.assertEqual(response.content, json.dumps(expected).encode('utf-8'))

    def test_user_id(self):
        """
        Test getting username.
        """
        # Get username without authorization
        response = self.client.get('/api/v1/userid/')
        self.assertEqual(response.status_code, 401)

        # Get username with authorization
        response = self.client.get(
            '/api/v1/userid/',
            HTTP_AUTHORIZATION='Bearer ' + self.token,
        )
        expected = {'userId': self.user.username}
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.content, json.dumps(expected).encode('utf-8'))

    def test_user_profile(self):
        """
        Test getting user profile.
        """
        # Get user profil without authorization
        response = self.client.get('/api/v1/userprofile/')
        self.assertEqual(response.status_code, 401)

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
        self.assertEqual(response.content, json.dumps(expected).encode('utf-8'))
