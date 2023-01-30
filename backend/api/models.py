from django.db import models

class UserData(models.Model):
    flavor = models.CharField(max_length=100)
    color = models.CharField(max_length=100)
    animal = models.CharField(max_length=100)
    food = models.CharField(max_length=100)
