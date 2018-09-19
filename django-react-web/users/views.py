from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes

from users.models import User

@api_view(['POST'])
def user_profile(request):
    """
    Returns details of the signed in user.
    """
    return JsonResponse({
        'username': request.user.username,
        'email': request.user.email,
        'position': request.user.position,
        'first_name': request.user.first_name,
        'last_name': request.user.last_name,
    })
