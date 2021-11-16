from rest_framework import serializers
from .models import one_day, one_hour, four_hours, fifteen_min


class apiSerializer_1(serializers.ModelSerializer):
    class Meta:
        model = one_day
        fields = ['time', 'open', 'high', 'low', 'close']


class apiSerializer_2(serializers.ModelSerializer):
    class Meta:
        model = one_hour
        fields = ['time', 'open', 'high', 'low', 'close']


class apiSerializer_3(serializers.ModelSerializer):
    class Meta:
        model = four_hours
        fields = ['time', 'open', 'high', 'low', 'close']

class apiSerializer_4(serializers.ModelSerializer):
    class Meta:
        model = fifteen_min
        fields = ['time', 'open', 'high', 'low', 'close']
