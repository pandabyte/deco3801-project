from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout

from .models import FileUpload
from .forms import UploadForm

def index(request):
    return render(request, 'home/index.html')

def upload(request):
    if request.method == 'POST':
        form = UploadForm(request.POST, request.FILES)
        if form.is_valid():
            instance = FileUpload(file=request.FILES['file'])
            instance.save()
            return HttpResponse(status=201)
    else:
        form = UploadForm()
    return render(request, 'home/upload.html', {'form': form})
