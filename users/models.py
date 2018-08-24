from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.core import validators
from django.utils.translation import gettext_lazy as _

class UserManager(BaseUserManager):
    """
    Model manager for User with email as username.
    """
    use_in_migrations = True

    def _create_user(self, email, password, **extra_fields):
        """
        Create and save a User with the given email and password.
        """
        if not email:
            raise ValueError('The given email must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, email, password=None, **extra_fields):
        extra_fields.setdefault('username', None)
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)
        return self._create_user(email, password, **extra_fields)

    def create_superuser(self, email, password, **extra_fields):
        extra_fields.setdefault('username', None)
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self._create_user(email, password, **extra_fields)

class User(AbstractUser):
    """
    User with email as username.
    """
    USERNAME_FIELD = 'email'
    # Allow username to be None
    username = models.CharField(
        _('username'),
        max_length=30,
        unique=True,
        null=True,
        help_text=_('30 characters or fewer. Letters, digits and @/./+/-/_ only.'),
        validators=[
            validators.RegexValidator(
                r'^[\w.@+-]+$',
                _('Enter a valid username. This value may contain only '
                  'letters, numbers ' 'and @/./+/-/_ characters.')
            ),
        ],
        error_messages={
            'unique': _("A user with that username already exists."),
        },
    )
    # Set email to be unique
    email = models.EmailField(_('email address'), unique=True)
    # Remove email from required fields
    # REQUIRED_FIELDS should not contain the USERNAME_FIELD or password
    # https://docs.djangoproject.com/en/2.1/topics/auth/customizing/#django.contrib.auth.models.CustomUser.REQUIRED_FIELDS
    REQUIRED_FIELDS = []

    objects = UserManager()
