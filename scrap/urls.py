from .views import ScrapAPIView
from django.urls import path


urlpatterns = [
    path('', ScrapAPIView.as_view(), name='scrap'),
]