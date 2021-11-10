from rest_framework import serializers
from .models import api


class apiSerializer(serializers.ModelSerializer):
    class Meta:
        model = api
        fields = ['bong', 'start_date', 'end_date']
