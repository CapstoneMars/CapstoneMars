from rest_framework import serializers
from .models import one_day, one_hour, four_hours, result


class apiSerializer_1(serializers.ModelSerializer):
    class Meta:
        model = one_day
        fields = ['time', 'open', 'high', 'low', 'close', 'Volume']


class apiSerializer_2(serializers.ModelSerializer):
    class Meta:
        model = one_hour
        fields = ['time', 'open', 'high', 'low', 'close', 'Volume']


class apiSerializer_3(serializers.ModelSerializer):
    class Meta:
        model = four_hours
        fields = ['time', 'open', 'high', 'low', 'close', 'Volume']


class resultSerializer(serializers.ModelSerializer):
    class Meta:
        model = result
        fields = ['line']
