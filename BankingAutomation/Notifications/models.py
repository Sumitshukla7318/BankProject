from django.db import models
from Accounts.models import Customer


class OTP(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    code = models.CharField(max_length=6)
    purpose = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    is_used = models.BooleanField(default=False)

    def __str__(self):
        return f"OTP for {self.customer.email} - {self.purpose}"