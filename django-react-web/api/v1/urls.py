from django.urls import path

from . import views
import users.views as userViews

urlpatterns = [
    path('register/', views.register),
    path('userid/', views.user_id),
    path('userprofile/', userViews.user_profile)
]
