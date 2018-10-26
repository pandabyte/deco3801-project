from django.conf import settings
from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth import authenticate, login, logout
import jwt, boto3, datetime

from .models import FileUpload
from .forms import UploadForm
from users.models import User
from django.conf import settings

def index(request):
    return render(request, 'home/index.html')

def upload(request):
    if request.method == 'POST':
        form = UploadForm(request.POST, request.FILES)
        if form.is_valid():
            try:
                token = jwt.decode(request.POST['token'], settings.SECRET_KEY, algorithm='HS256')
                user = User.objects.get(id=token['user_id'])
            except e:
                form = UploadForm()
                return render(request, 'home/upload.html', {'form': form, 'message': 'Your session has expired, please log in again.'})
                #return HttpResponse(status=422)
            request.FILES['file'].name = 'devconLibSearch_' + request.POST['source'] + '_' + request.POST['mode'] + '_' + str(user.id) + '_' + str(datetime.datetime.now().replace(microsecond=0)) + '.xlsx'
            instance = FileUpload(file=request.FILES['file'], owner=user)
            instance.save()
            return render(request, 'home/index.html/')
        else:
            form = UploadForm()
            return render(request, 'home/upload.html', {'form': form, 'message': 'Form is invalid, please reopen this window.'})
    else:
        token = request.GET.get('token')
        form = UploadForm()
    return render(request, 'home/upload.html', {'form': form, 'token': token})
