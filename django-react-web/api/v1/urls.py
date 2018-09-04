from django.urls import path

from . import views

urlpatterns = [
    path('register/', views.register),
    path('userid/', views.user_id),
]
