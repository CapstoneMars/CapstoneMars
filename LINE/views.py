from django.shortcuts import render
from .apps import LineConfig
from django.http import HttpResponse, JsonResponse
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from kmeanscluster import Cluster as Cluster
from DB.views import Date_1D as Date_1D

import json

'''
현재 작성한 방식은 data를 request로 받아서 처리하여 lines를 response
start_date랑 end_date를 request로 받아서 처리하여 lines를 response
로 보내야 할 듯?
'''

'''
front -> start, end -> DB.views(start, end) -> data -> LINE.views(data) -> lines -> front
'''


class Fit(APIView):
    def get(self, request):
        if request.method == 'GET':
            kmeans = Cluster()
            lines = kmeans.returnLines(**request.data)
            json_lines = {
                "lines": lines
            }
            json_lines = json.dumps(json_lines)
            return JsonResponse(json_lines, status=200)
