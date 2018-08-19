from django.urls import path

from . import views

urlpatterns = [
    path('userid/', views.user_id),
]
