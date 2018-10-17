from django.conf import settings
from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth import authenticate, login, logout
import jwt

from .models import FileUpload
from .forms import UploadForm
from users.models import User

def index(request):
    return render(request, 'home/index.html')

def upload(request):
    if request.method == 'POST':
        form = UploadForm(request.POST, request.FILES)
        if form.is_valid():
            try:
                token = jwt.decode(request.POST['token'], settings.SECRET_KEY, algorithm='HS256')
                user = User.objects.get(id=token['user_id'])
            except:
                return HttpResponse(status=422)
            instance = FileUpload(file=request.FILES['file'], owner=user)
            instance.save()
            return HttpResponse(status=201)
    else:
        form = UploadForm()
    return render(request, 'home/upload.html', {'form': form})
