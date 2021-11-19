import json
from collections import OrderedDict
from rest_framework import viewsets
from rest_framework import generics
from .models import one_day, one_hour, four_hours, fifteen_min
from .serializers import apiSerializer_1, apiSerializer_2, apiSerializer_3, apiSerializer_4
from rest_framework.response import Response
from rest_framework.generics import ListAPIView

from django.shortcuts import render
from django.views.generic import View
from django.http import JsonResponse

from DB.kmeanscluster import Cluster as Cluster

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


# ?start_date=2021-08-17&end_date=2021-08-20
class Date_1D(viewsets.ModelViewSet):
    serializer_class = apiSerializer_1
    pagination_class = None
    queryset = one_day.objects.all()

    def get_queryset(self):

        if self.request.method == "GET":

            interval = self.request.query_params.get('chart_interval')
            start_date = self.request.query_params.get('start_date')
            end_date = self.request.query_params.get('end_date')

            time_filter = self.queryset.filter(time__range=(
                start_date, end_date))
            result = apiSerializer_1(time_filter, many=True).data
            json_result = json.dumps(result)

            kmeans = Cluster()
            lines = kmeans.returnLines(json_result)

            tmp = []
            dv = len(lines) // 5
            pe = len(lines) % 5
            re = lines[-pe:]

            result = changeTime(result)

            for i in range(dv):
                result.append(OrderedDict([('time', lines[i * 5]), ('open', lines[i * 5 + 1]),
                              ('high', lines[i * 5 + 2]), ('low', lines[i * 5 + 3]), ('close', lines[i * 5 + 4])]))

            while True:
                if len(re) == 5:
                    break
                re.append(0)
            result.append(OrderedDict(
                [('time', re[0]), ('open', re[1]), ('high', re[2]), ('low', re[3]), ('close', re[4])]))

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
            json_result = json.dumps(result)

            kmeans = Cluster()
            lines = kmeans.returnLines(json_result)

            tmp = []
            dv = len(lines) // 5
            pe = len(lines) % 5
            re = lines[-pe:]

            result = changeTime(result)

            for i in range(dv):
                result.append(OrderedDict([('time', lines[i * 5]), ('open', lines[i * 5 + 1]),
                              ('high', lines[i * 5 + 2]), ('low', lines[i * 5 + 3]), ('close', lines[i * 5 + 4])]))

            while True:
                if len(re) == 5:
                    break
                re.append(0)
            result.append(OrderedDict(
                [('time', re[0]), ('open', re[1]), ('high', re[2]), ('low', re[3]), ('close', re[4])]))

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
            json_result = json.dumps(result)

            kmeans = Cluster()
            lines = kmeans.returnLines(json_result)

            tmp = []
            dv = len(lines) // 5
            pe = len(lines) % 5
            re = lines[-pe:]

            result = changeTime(result)

            for i in range(dv):
                result.append(OrderedDict([('time', lines[i * 5]), ('open', lines[i * 5 + 1]),
                              ('high', lines[i * 5 + 2]), ('low', lines[i * 5 + 3]), ('close', lines[i * 5 + 4])]))

            while True:
                if len(re) == 5:
                    break
                re.append(0)
            result.append(OrderedDict(
                [('time', re[0]), ('open', re[1]), ('high', re[2]), ('low', re[3]), ('close', re[4])]))

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
            json_result = json.dumps(result)

            kmeans = Cluster()
            lines = kmeans.returnLines(json_result)

            tmp = []
            dv = len(lines) // 5
            pe = len(lines) % 5
            re = lines[-pe:]

            result = changeTime(result)

            for i in range(dv):
                result.append(OrderedDict([('time', lines[i * 5]), ('open', lines[i * 5 + 1]),
                              ('high', lines[i * 5 + 2]), ('low', lines[i * 5 + 3]), ('close', lines[i * 5 + 4])]))

            while True:
                if len(re) == 5:
                    break
                re.append(0)
            result.append(OrderedDict(
                [('time', re[0]), ('open', re[1]), ('high', re[2]), ('low', re[3]), ('close', re[4])]))

            return result


class chart(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'chartjs/index.html')
