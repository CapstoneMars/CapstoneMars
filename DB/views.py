from rest_framework import viewsets
from rest_framework import generics
from .models import one_day, one_hour, four_hours, fifteen_min, result
from .serializers import apiSerializer_1, apiSerializer_2, apiSerializer_3, apiSerializer_4, resultSerializer
from rest_framework.response import Response
from rest_framework.generics import ListAPIView


# ?start_date=2017-08-17&end_date=2017-08-20
class Date_1D(viewsets.ModelViewSet):
    serializer_class = apiSerializer_1
    pagination_class = None
    queryset = one_day.objects.all()

    def get_queryset(self):

        if self.request.method == "GET":

            start_date = self.request.query_params.get('start_date')
            end_date = self.request.query_params.get('end_date')

            time_filter = self.queryset.filter(time__range=(
                start_date, end_date))

            result = apiSerializer_1(time_filter, many=True).data

            return result


class Date_60(viewsets.ModelViewSet):
    serializer_class = apiSerializer_2
    pagination_class = None
    queryset = one_hour.objects.all()

    def get_queryset(self):

        if self.request.method == "GET":

            start_date = self.request.query_params.get('start_date')
            end_date = self.request.query_params.get('end_date')

            time_filter = self.queryset.filter(time__range=(
                start_date, end_date))

            result = apiSerializer_2(time_filter, many=True).data

            return result


class Date_240(viewsets.ModelViewSet):
    serializer_class = apiSerializer_3
    pagination_class = None
    queryset = four_hours.objects.all()

    def get_queryset(self):
        if self.request.method == "GET":

            start_date = self.request.query_params.get('start_date')
            end_date = self.request.query_params.get('end_date')

            time_filter = self.queryset.filter(time__range=(
                start_date, end_date))

            result = apiSerializer_3(time_filter, many=True).data

            return result

class Date_15(viewsets.ModelViewSet):
    serializer_class = apiSerializer_4
    pagination_class = None
    queryset = fifteen_min.objects.all()

    def get_queryset(self):
        if self.request.method == "GET":

            start_date = self.request.query_params.get('start_date')
            end_date = self.request.query_params.get('end_date')

            time_filter = self.queryset.filter(time__range=(
                start_date, end_date))

            result = apiSerializer_4(time_filter, many=True).data

            return result

class Lines(viewsets.ModelViewSet):
    serializer_class = resultSerializer

    # def post(self, request):
    # 알고리즘 결과물 json 으로 저장해서 post

    def get_queryset(self):
        if self.request.method == "GET":
            line = result.objects.all()
            return line
