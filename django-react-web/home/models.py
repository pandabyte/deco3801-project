from django.db import models

from users.models import User

class FileUpload(models.Model):
    upload_time = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    file = models.FileField(upload_to='data/unprocessed/')
