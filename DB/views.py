from rest_framework import viewsets
from rest_framework import generics
from .models import one_day, one_hour, four_hours, fifteen_min, result
from .serializers import apiSerializer_1, apiSerializer_2, apiSerializer_3, apiSerializer_4, resultSerializer
from rest_framework.response import Response
from rest_framework.generics import ListAPIView

from django.shortcuts import render
from django.views.generic import View
from django.http import JsonResponse
import json


class chart(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'chartjs/index.html')


def ajax_method(request):
    # 날짜 인풋 데이터 가져오기
    receive_s = request.GET.get('start_date')
    receive_e = request.GET.get('end_date')
    receive_i = request.GET.get('chart_interval')

    print(receive_s)
    print(receive_e)
    print(receive_i)
    if receive_i == "15M":
        serializer_class = apiSerializer_4
        queryset = fifteen_min.objects.all()
        time_filter = queryset.filter(time__range=(receive_s, receive_e))
        result = apiSerializer_4(time_filter, many=True).data
    elif receive_i == "1H":
        serializer_class = apiSerializer_2
        queryset = one_hour.objects.all()
        time_filter = queryset.filter(time__range=(receive_s, receive_e))
        result = apiSerializer_2(time_filter, many=True).data
    elif receive_i == "4H":
        serializer_class = apiSerializer_3
        queryset = four_hours.objects.all()
        time_filter = queryset.filter(time__range=(receive_s, receive_e))
        result = apiSerializer_3(time_filter, many=True).data
    else:
        serializer_class = apiSerializer_1
        queryset = one_day.objects.all()
        time_filter = queryset.filter(time__range=(receive_s, receive_e))
        result = apiSerializer_1(time_filter, many=True).data

    print(result)

    # 지지저항선 값을 모델연결을 해서 욜로 가져옴

    # 임시로 데이터 2개전송
    # supportLine 누르면 num1부분의 값만 창에 띄워지도록 해놨어용
    LineData = {'num1': 54000000, 'num2': 56000000, 'stri': receive_i}
    # 여기로 라인데이터를 보내주시면 됩니다
    return JsonResponse(LineData)


def getChart(request):
    # 날짜 인풋 데이터 가져오기
    receive_s = request.GET.get('start_date')
    receive_e = request.GET.get('end_date')
    receive_i = request.GET.get('chart_interval')

    print(receive_s)
    print(receive_e)
    print(receive_i)
    if receive_i == "15M":
        serializer_class = apiSerializer_4
        queryset = fifteen_min.objects.all()
        time_filter = queryset.filter(time__range=(receive_s, receive_e))
        result = apiSerializer_4(time_filter, many=True).data
    elif receive_i == "1H":
        serializer_class = apiSerializer_2
        queryset = one_hour.objects.all()
        time_filter = queryset.filter(time__range=(receive_s, receive_e))
        result = apiSerializer_2(time_filter, many=True).data
    elif receive_i == "4H":
        serializer_class = apiSerializer_3
        queryset = four_hours.objects.all()
        time_filter = queryset.filter(time__range=(receive_s, receive_e))
        result = apiSerializer_3(time_filter, many=True).data
    else:
        serializer_class = apiSerializer_1
        queryset = one_day.objects.all()
        time_filter = queryset.filter(time__range=(receive_s, receive_e))
        result = apiSerializer_1(time_filter, many=True).data

    mon = {'01': "Jan",  '02': 'Feb', '03':  'Mar', '04': 'Apr', '05': 'May', '06': 'Jun',
           '07':  'Jul', '08':  'Aug', '09':  'Sep', '10':  'Oct', '11': 'Nov', '12':  'Dec'}

    for i in range(len(result)):
        st = result[i]['time']
        year = st[0:4]
        b = mon[st[5:7]]
        c = st[8:10]
        d = st[11:16]
        str = c + " " + b + " " + year + " " + d + " Z"
        result[i]['time'] = str
    # 01 Oct 2021 00:00

    # 지지저항선 값을 모델연결을 해서 욜로 가져옴
    # Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec

    # 임시로 데이터 2개전송
    # supportLine 누르면 num1부분의 값만 창에 띄워지도록 해놨어용
    LineData = {'num1': 54000000, 'num2': 56000000, 'stri': receive_i}

    print(result)

    jsonData = json.dumps(result)

    print(jsonData)
    # 여기로 라인데이터를 보내주시면 됩니다
    return JsonResponse(jsonData, safe=False)
