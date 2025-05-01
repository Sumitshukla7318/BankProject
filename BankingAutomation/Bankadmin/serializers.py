from rest_framework import serializers
from . models import BankAdmin

class BankAdminSerializer(serializers.ModelSerializer):
    class Meta:
        model=BankAdmin
        fields=['username','password','email','is_superadmin']
    