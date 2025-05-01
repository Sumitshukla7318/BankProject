from django.db import models

class BankAdmin(models.Model):
    username = models.CharField(max_length=50, unique=True)
    password = models.CharField(max_length=128)
    email = models.EmailField()
    is_superadmin = models.BooleanField(default=False)

    def __str__(self):
        return self.username