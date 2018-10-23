from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes, parser_classes
from rest_framework.parsers import FileUploadParser

from users.models import User
from users.serializers import UserSerializer
from home.models import FileUpload
from api.utils import deprecated, deprecated_warn
from django.core.exceptions import ObjectDoesNotExist
from django.conf import settings
from django.core.mail import send_mail
from smtplib import SMTPException
import jwt, datetime

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

@api_view(['POST'])
@permission_classes(())
def password_recovery_request(request):
    try:
        user = User.objects.get(email=request.data.get('email'))
        one_time_secret = user.username + '-' + user.password + settings.SECRET_KEY
        payload = {
            'email': user.email,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=30)
        }
        encoded_jwt = jwt.encode(payload, one_time_secret, algorithm='HS256')
        email = 'jerryw4113@gmail.com'
        one_time_link = request.get_host() + '/pwrecovery/?resetott=' + str(encoded_jwt)
        print(one_time_link)
        try:
            send_mail(
                'Forgot Password - Reset Your Password',
                'Click on this link to reset your password: ' + one_time_link,
                'DO-NOT-REPLY@admin.com', # Prob should define a global variable for this
                [email],
                fail_silently=False,
            )
        except SMTPException:
            return JsonResponse({'error': str(e)}, status=400, reason=str(e))
        return JsonResponse({})
    except ObjectDoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400, reason=str(e))
    

@api_view(['GET'])
def password_recovery_landing(request):
    return

@api_view(['POST'])
def password_recovery_submit(request):
    return

@api_view(['GET'])
@permission_classes(())
@deprecated
def deprecate_test(request):
    return JsonResponse({'test':'not deprecated'})

@api_view(['PUT'])
@parser_classes((FileUploadParser,))
def upload(request):
    if 'file' not in request.data:
        return JsonResponse({'error': 'File not found'}, status=422)
    file = request.data['file']
    upload = FileUpload(owner=request.user)
    upload.file.save(file.name, file, save=True)
    return JsonResponse({'message': 'File saved'}, status=201)

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
        user = request.user
        user.email = request.data['email']
        user.first_name = request.data['first_name']
        user.last_name = request.data['last_name']
        user.save()
        return JsonResponse({
            'username': user.username,
            'email': user.email,
            'first_name': user.first_name,
            'last_name': user.last_name,
        })
    except KeyError:
        return JsonResponse(
            {'error': 'Invalid parameters'},
            status=422,
            reason='Invalid parameters'
        )
