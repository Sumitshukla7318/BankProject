from rest_framework import serializers
from . models import Complaint

class ComplaintSerializer(serializers.ModelSerializer):
    model=Complaint
    fields=['customer','subject','description','status','created_at','admin_reply']
