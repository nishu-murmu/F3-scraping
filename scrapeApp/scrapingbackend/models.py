from django.db import models

# Create your models here.


class Party(models.Model):
    username = models.EmailField()
    password = models.CharField()
