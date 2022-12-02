from .views import RegisterAPIView, LoginAPIView, UserHomeAPIView
from django.urls import path


urlpatterns = [
    path('register/', RegisterAPIView.as_view(), name='Register'),
    path('login/', LoginAPIView.as_view(), name='LogIn'),
    path('home/', UserHomeAPIView.as_view(), name='Home'),
]