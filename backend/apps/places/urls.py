
   
from django.urls import path
from . import views

urlpatterns = [
    path('', views.PlaceList.as_view(), name='places_list'),
]