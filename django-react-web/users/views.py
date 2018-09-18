from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes

from users.models import User

# Create your views here.

@api_view(['POST'])
def user_profile(request):
    return JsonResponse({
        'username': request.user.username,
        'email': request.user.email,
        'position': request.user.position,
        'first_name': request.user.first_name,
        'last_name': request.user.last_name,
    #   'affiliation': request.user.aid.location # ONE-TO-ONE HERE BETTER IN MODELS?
    })

@api_view(['POST'])
def edit_user_profile(request):
    request.user.email=request.data.get('email'),
    request.user.first_name=request.data.get('first_name'),
    request.user.last_name=request.data.get('last_name'),
    request.user.password=request.data.get('password'),
    request.user.username=request.data.get('username'),
    # TODO need to handle affiliation
    request.user.save()
    # Return new user details
    return JsonResponse({
        'username': request.user.username,
        'email': request.user.email,
        'position': request.user.position,
        'first_name': request.user.first_name,
        'last_name': request.user.last_name,
    #   'affiliation': request.user.aid.location # ONE-TO-ONE HERE BETTER IN MODELS?
    })