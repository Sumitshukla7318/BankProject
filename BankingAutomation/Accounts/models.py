from django.db import models
import random

def generate_account_number():
    """Generate a random 10-digit account number"""
    return str(random.randint(10**9, 10**10 - 1))

class Customer(models.Model):
    ACCOUNT_TYPE_CHOICES = (
        ('savings', 'Savings'),
        ('current', 'Current'),
    )

    GENDER_CHOICES = (
        ('male', 'Male'),
        ('female', 'Female'),
        ('other', 'Other'),
    )

    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=15, unique=True)
    password = models.CharField(max_length=128)  # hashed password
    account_number = models.CharField(max_length=20, unique=True, default=generate_account_number)
    balance = models.DecimalField(max_digits=12, decimal_places=2, default=0.00)
    account_type = models.CharField(max_length=10, choices=ACCOUNT_TYPE_CHOICES, default='savings')
    address = models.TextField(blank=True, null=True)
    dob = models.DateField(blank=True, null=True)  # Date of Birth
    branch = models.CharField(max_length=100, blank=True, null=True)
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES, blank=True, null=True)
    nationality = models.CharField(max_length=50, blank=True, null=True)
    id_proof_number = models.CharField(max_length=50, blank=True, null=True)  # Aadhaar/PAN etc
    profile_picture = models.ImageField(upload_to='profile_pics/', blank=True, null=True)

    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} ({self.account_number})"
