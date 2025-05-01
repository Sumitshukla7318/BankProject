from django.db import models
from Accounts.models import Customer
import uuid
from datetime import datetime

class Transaction(models.Model):
    TRANSACTION_TYPE_CHOICES = (
        ('DEPOSIT', 'Deposit'),
        ('WITHDRAWAL', 'Withdrawal'),
        ('TRANSFER', 'Transfer'),
    )

    STATUS_CHOICES = (
        ('PENDING', 'Pending'),
        ('COMPLETED', 'Completed'),
        ('FAILED', 'Failed'),
    )

    CHANNEL_CHOICES = (
        ('WEB', 'Web Portal'),
        ('MOBILE', 'Mobile App'),
        ('ATM', 'ATM'),
    )

    # Core Fields
    transaction_id = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    reference_number = models.CharField(max_length=30, unique=True, blank=True)

    sender = models.ForeignKey(Customer, related_name='sent_transactions', on_delete=models.PROTECT, null=True, blank=True)
    receiver = models.ForeignKey(Customer, related_name='received_transactions', on_delete=models.PROTECT, null=True, blank=True)

    transaction_type = models.CharField(max_length=20, choices=TRANSACTION_TYPE_CHOICES)
    amount = models.DecimalField(max_digits=12, decimal_places=2)
    timestamp = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='PENDING')
    channel = models.CharField(max_length=10, choices=CHANNEL_CHOICES, default='WEB')

    description = models.TextField(blank=True)

    def __str__(self):
        return f"{self.get_transaction_type_display()} - {self.reference_number}"

    def save(self, *args, **kwargs):
        if not self.reference_number:
            today_str = datetime.now().strftime('%Y%m%d')
            self.reference_number = f"TXN{today_str}{uuid.uuid4().hex[:6].upper()}"
        super().save(*args, **kwargs)
