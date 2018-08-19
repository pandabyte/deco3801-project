# import json
# from django.http import HttpResponse
from django.http import JsonResponse
from rest_framework.decorators import api_view
# from rest_framework.response import Response

@api_view(['GET'])
def user_id(request):
    return JsonResponse({'userId':request.user.username})
