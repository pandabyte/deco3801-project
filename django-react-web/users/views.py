from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from users.models import User

@api_view(['GET'])
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

@api_view(['POST'])
def user_profile_update(request):
    """
    Updates details of the signed in user
    """
    try:
        request.user.email=request.data.get('email')
        request.user.first_name=request.data.get('first_name')
        request.user.last_name=request.data.get('last_name')
        #request.user.password=request.data.get('password') <- does this auto hash?
        request.user.username=request.data.get('username')
        request.user.save();
        return Response("OK", status=status.HTTP_200_OK)
    except:
        return Response("You failed", status=status.HTTP_400_BAD_REQUEST)

    