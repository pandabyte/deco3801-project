from django.test import TestCase

class TestApiV1(TestCase):
    def test_register_correct(self):
        """
        Test registering a new user.
        """
        response = self.client.post(
            '/api/v1/register/',
            {
                'email': 'user@example.com',
                'first_name': 'first',
                'last_name': 'last',
                'password': 'password',
            },
        )
        self.assertEqual(response.status_code, 200)

    def test_register_missing(self):
        """
        Test registering a new user without an email field.
        """
        response = self.client.post(
            '/api/v1/register/',
            {
                'first_name': 'first',
                'last_name': 'last',
                'password': 'password',
            },
        )
        self.assertEqual(response.status_code, 422)
