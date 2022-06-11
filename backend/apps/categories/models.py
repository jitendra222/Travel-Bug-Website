from django.db import models
from cloudinary.models import CloudinaryField

# Create your models here.

class Category(models.Model):

    
   
    class Meta(object):
        db_table = "categories"

    name = models.CharField("Name", max_length=50, blank=False, null=False)

    image =  CloudinaryField("image", blank=False, null=False)

    def __str__(self):
        return self.name