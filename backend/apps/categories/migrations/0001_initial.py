# Generated by Django 3.2.1 on 2022-06-09 04:13

import cloudinary.models
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, verbose_name='Name')),
                ('image', cloudinary.models.CloudinaryField(max_length=255, verbose_name='image')),
            ],
            options={
                'db_table': 'categories',
            },
        ),
    ]