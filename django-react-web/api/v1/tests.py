import json
from django.test import TestCase

from users.models import User
from users.serializers import UserSerializer

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
        # Create new user
        response = self.client.post(
            '/api/v1/register/',
            {
                'email': 'newuser@example.com',
                'first_name': 'first',
                'last_name': 'last',
                'password': 'password',
            },
        )
        self.assertEqual(response.status_code, 200)

        # Fail to register user with same email
        response = self.client.post(
            '/api/v1/register/',
            {
                'email': 'newuser@example.com',
                'first_name': 'first',
                'last_name': 'last',
                'password': 'password',
            },
        )
        self.assertEqual(response.status_code, 422)

        # Fail to register user with no email
        response = self.client.post(
            '/api/v1/register/',
            {
                'first_name': 'first',
                'last_name': 'last',
                'password': 'password',
            },
        )
        self.assertEqual(response.status_code, 422)

    def test_user_list(self):
        """
        Test getting the list of users.
        """
        # Get users without authorization
        response = self.client.get(
            '/api/v1/users/'
        )
        self.assertEqual(response.status_code, 401)

        # Get users with authorization
        response = self.client.get(
            '/api/v1/users/',
            HTTP_AUTHORIZATION='Bearer ' + self.token,
        )
        all_users = User.objects.all()
        serializer = UserSerializer(all_users, many=True)
        expected = [dict(user) for user in serializer.data]
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.content, json.dumps(expected).encode('utf-8'))
