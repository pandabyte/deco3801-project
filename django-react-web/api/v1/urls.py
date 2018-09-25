from django.urls import path

from . import views
import users.views as user_views

urlpatterns = [
    path('register/', views.register),
    path('users/', views.users),
    path('userid/', views.user_id),
    path('userprofile/', user_views.user_profile),
    path('userprofile/update', user_views.user_profile_update),

    path('test/', views.deprecate_test)
]
