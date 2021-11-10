from rest_framework import viewsets
from rest_framework import generics
from .models import api
from .serializers import apiSerializer
from rest_framework.response import Response
from rest_framework.generics import ListAPIView
import datetime

# class Date(generics.ListCreateAPIView):
#    queryset = api.objects.all()
#    serializer_class = apiSerializer


class Date(viewsets.ModelViewSet):
    serializer_class = apiSerializer

    def get_queryset(self):
        date = api.objects.all()
        return date

    def post(self, request, *args, **kwargs):
        date_data = request.data

        new_date = api.objects.create(bong=date_data["bong"], start_date=date_data[
            "start_date"], end_date=date_data["end_date"])

        new_date.save()

        serializer = apiSerializer(new_date)

        return Response(serializer.data)


'''
class Data(ListAPIView):
    serializer_class = apiSerializer
    pagination_class = None
    queryset = api.objects.all()

    def get_queryset(self):
        start_date = datetime.date.today()
        end_date = start_date + datetime.timedelta(days=6)
        time_filter = self.queryset.filter(date__range=(start_date, end_date))
        ser = apiSerializer(time_filter, many=True).data
        return ser

# https://stackoverflow.com/questions/67296630/how-to-find-data-between-two-date-range-in-django-rest-framework
'''
