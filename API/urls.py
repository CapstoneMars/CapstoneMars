from django.conf.urls import url, include
from .views import Date
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('date', Date, basename='date')


urlpatterns = [
    url('', include(router.urls))
]

'''
from django.urls import path
from .views import Date
#from .views import Date, Predict

urlpatterns = [
    # api/date
    path('date', Date.as_view()),

    #path('Predict', Predict.as_view()),
]
'''
