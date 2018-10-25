from django.urls import path

from . import views

urlpatterns = [
    path('register/', views.register),
    path('users/', views.users),
    path('userid/', views.user_id),
    path('userprofile/', views.user_profile),
    path('userprofile/update/', views.user_profile_update),
    path('password-recovery/request/', views.password_recovery_request),
    path('upload/', views.upload),
]
