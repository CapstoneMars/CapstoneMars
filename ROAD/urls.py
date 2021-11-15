from django.contrib import admin
from django.urls import path, include
from DB import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('DB/', include('DB.urls')),
    path('', views.chart.as_view()),
    path('ajax_method/', views.ajax_method, name='ajax_method'),
    path('getChart/', views.getChart, name='getChart'),
]
