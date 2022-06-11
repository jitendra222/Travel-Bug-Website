from django.db import models
from rest_framework import generics, filters
from .models import Place
from .serializers import PlaceSerializer
from django_filters.rest_framework import DjangoFilterBackend

# Create your models here.

class PlaceList(generics.ListAPIView):
    queryset = Place.objects.all()
    serializer_class = PlaceSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['category']
    search_fields = ['name', 'description']