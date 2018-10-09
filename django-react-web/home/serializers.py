from rest_framework import serializers

from .models import FileUpload

class FileUplaodSerializer(serializers.ModelSerializer):
    class Meta:
        model = FileUpload
        read_only_fields = (
            'created',
            'owner',
            'file',
        )
