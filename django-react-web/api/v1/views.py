from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes

from users.models import User
from users.serializers import UserSerializer

@api_view(['POST'])
@permission_classes(())
def register(request):
    """
    Creates a user with the given details.
    """
    try:
        user = User.objects.create_user(
            email=request.data.get('email'),
            first_name=request.data.get('first_name'),
            last_name=request.data.get('last_name'),
            password=request.data.get('password'),
            username=request.data.get('username'),
        )
    except ValueError as e:
        return JsonResponse({'error': str(e)}, status=422, reason=str(e))

    if not user:
        return JsonResponse(
            {'error': 'Invalid parameters'},
            status=422,
            reason='Invalid parameters'
        )
    else:
        return JsonResponse({
            'username': user.username,
            'email': user.email,
            'first_name': user.first_name,
            'last_name': user.last_name,
        })

@api_view(['GET'])
def users(request):
    """
    Returns a list of all users.
    """
    queryset = User.objects.all()
    serializer = UserSerializer(queryset, many=True)
    return JsonResponse(serializer.data, safe=False)

@api_view(['GET'])
def user_id(request):
    """
    Returns the username of the logged in user.
    """
    return JsonResponse({'userId': request.user.username})
