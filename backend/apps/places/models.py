from django.db import models
from cloudinary.models import CloudinaryField
from apps.categories.models import Category


class Place(models.Model):

     
    MY_CHOICES = (
        ('NEW_YORK', 'NEW_YORK'),
        ('MIAMI', 'MIAMI'),
        ('LAS_VEGAS', 'LAS_VEGAS'),
        ('SAN FRANSISCO', 'SAN FRANSISCO'),
        ('CHICAGO', 'CHICAGO'),
        ('LOS_ANGELES', 'LOS_ANGELES'),
        ('NEW_ORLEANS', 'NEW_ORLEANS'),
        ('WASHINGTON_DC', 'WASHINGTON_DC'),
        ('WALT_DISNEY_WORLD', 'WALT_DISNEY_WORLD')
        )

    class Meta(object):
        db_table="places"
    
    name = models.CharField('Name', max_length=50, db_index=True, null=False, blank=False)

    image = CloudinaryField('image', blank=True, null=True)

    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    description = models.CharField('Description', max_length=500, db_index=True, null=False, blank=False)

    created_at = models.DateTimeField('Created_at', auto_now_add=True, null=False, blank=False)

    updated_at = models.DateTimeField('Updated_at', auto_now_add=True, null=False, blank=False)

    def __str__(self):
        return self.name