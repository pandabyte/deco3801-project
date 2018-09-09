import random
import string
from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.core import validators
from django.utils.translation import gettext_lazy as _

class UserManager(BaseUserManager):
    """
    Model manager for User with email as username.
    """
    use_in_migrations = True

    def _create_user(self, email, first_name, last_name, password, username=None, **extra_fields):
        """
        Create and save a User with the given email and password.
        """
        if not email:
            raise ValueError('Email must be given')
        elif self.filter(email__iexact=email):
            raise ValueError('An account with this email already exists')

        if not first_name:
            raise ValueError('First name must be given')

        if not last_name:
            raise ValueError('Last name must be given')

        if not password:
            raise ValueError('A password must be given')

        # Generate a unique username if not given
        if username is None:
            pool = string.ascii_lowercase + string.digits
            username = ''.join(random.choice(pool) for i in range(8))
            while self.filter(username__iexact=username):
                username = ''.join(random.choice(pool) for i in range(8))
        # If username is given check that it is unique
        elif self.filter(username__iexact=username):
            raise ValueError('An account with this username already exists')

        email = self.normalize_email(email)
        username = self.model.normalize_username(username)
        user = self.model(
            username=username,
            email=email,
            first_name=first_name,
            last_name=last_name,
            **extra_fields
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, email, first_name, last_name, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)
        return self._create_user(email, first_name, last_name, password, **extra_fields)

    def create_superuser(self, email, first_name, last_name, password, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self._create_user(email, first_name, last_name, password, **extra_fields)

    def get_by_natural_key(self, username):
        return self.get(**{'{}__iexact'.format(self.model.USERNAME_FIELD): username})


class User(AbstractUser):
    """
    User with email as username.
    """
    email = models.EmailField(_('email address'), unique=True)
    first_name = models.CharField(_('first name'), max_length=30)
    last_name = models.CharField(_('last name'), max_length=150)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']

    objects = UserManager()
