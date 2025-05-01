from rest_framework import serializers 
from .models import Customer
from django.http import JsonResponse
from django.core.validators import validate_email
from django.core.exceptions import ValidationError

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model=Customer
        fields='__all__'

    def validate_email(self, value):
        try:
            validate_email(value)
        except ValidationError:
            raise serializers.ValidationError("Please enter a valid email address.")
        return value

    def validate_phone(self, value):
        if not value.isdigit():
            raise serializers.ValidationError("Phone number must contain only digits.")
        if len(value) < 10 or len(value) > 15:
            raise serializers.ValidationError("Phone number must be between 10 and 15 digits.")
        return value

    def validate_password(self, value):
        if len(value) < 6:
            raise serializers.ValidationError("Password must be at least 6 characters long.")
        return value

    def validate_id_proof_number(self, value):
        if value: 
            if not value.isdigit():
                raise serializers.ValidationError("ID Proof number must contain only digits.")
            if len(value) != 12:
                raise serializers.ValidationError("ID Proof (Aadhaar) number must be exactly 12 digits.")
        return value
    
class BalanceSerializer(serializers.ModelSerializer):
    balance = serializers.DecimalField(max_digits=10, decimal_places=2)

    class Meta:
        model = Customer
        fields = ['balance']
    

    