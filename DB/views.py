import json

from rest_framework import viewsets
from rest_framework import generics
from .models import one_day, one_hour, four_hours, fifteen_min
from .serializers import apiSerializer_1, apiSerializer_2, apiSerializer_3, apiSerializer_4
from rest_framework.response import Response
from rest_framework.generics import ListAPIView

from django.shortcuts import render
from django.views.generic import View
from django.http import JsonResponse

from LINE.kmeanscluster import Cluster as Cluster

mon = {'01': "Jan",  '02': 'Feb', '03':  'Mar', '04': 'Apr', '05': 'May', '06': 'Jun',
       '07':  'Jul', '08':  'Aug', '09':  'Sep', '10':  'Oct', '11': 'Nov', '12':  'Dec'}


def changeTime(result):
    for i in range(len(result)):
        st = result[i]['time']
        year = st[0:4]
        b = mon[st[5:7]]
        c = st[8:10]
        d = st[11:16]
        str = c + " " + b + " " + year + " " + d + " Z"
        result[i]['time'] = str
    return result

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
            result = changeTime(result)

            return result


class Line_1D(viewsets.ModelViewSet):
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
            kmeans = Cluster()
            lines = kmeans.returnLines(result)

            json_lines = {"lines": lines}
            json_lines = json.dumps(json_lines)
            print(json_lines)
            return json_lines


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
            result = changeTime(result)

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
            result = changeTime(result)

            return result

# ?start_date=2021-10-09T00:00:00Z&end_date=2021-10-09T06:30:00Z


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
            result = changeTime(result)

            return result


class chart(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'chartjs/index.html')


class newp(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'newp/daeguri.html')


def ajax_method(request):
    # 날짜 인풋 데이터 가져오기

    receive_s = request.GET.get('start_date')
    receive_e = request.GET.get('end_date')
    receive_i = request.GET.get('chart_interval')

    receive_i = "Date_60"

    print(receive_s)
    print(receive_e)
    print(receive_i)
    # http://127.0.0.1:8000/DB/date_60/?start_date=2021-08-17&end_date=2021-08-20

    # 지지저항선 값을 모델연결을 해서 욜로 가져옴

    # 임시로 데이터 2개전송
    # supportLine 누르면 num1부분의 값만 창에 띄워지도록 해놨어용
    LineData = {'num1': 54000000, 'num2': 56000000, 'stri': receive_i}
    # 여기로 라인데이터를 보내주시면 됩니다
    return JsonResponse(LineData)
