from django.urls import path, re_path

from . import views

urlpatterns = [
    path('upload/', views.upload, name='upload'),
    re_path(r'.*', views.index, name='index'),
]
