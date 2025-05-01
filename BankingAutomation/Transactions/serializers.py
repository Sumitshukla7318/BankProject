from rest_framework import serializers
from . models import Transaction

class TransactionSerializer(serializers.ModelSerializer):
    model=Transaction
    fields=['sender','receiver','transaction_type','amount','timestamp','status','transaction_id']