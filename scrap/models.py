from django.db import models
from auths.models import User
# Create your models here.
class Scrap(models.Model):
    email = models.ForeignKey(User,  on_delete=models.CASCADE)
    product = models.CharField(max_length=30)
    price = models.CharField(max_length=30)

    def __str__(self):
        return self.product