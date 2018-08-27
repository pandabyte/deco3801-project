from django.http import JsonResponse
from rest_framework.decorators import api_view

@api_view(['GET'])
def user_id(request):
    return JsonResponse({'userId': request.user.username})
