from django.contrib import admin
from django.urls import path, include
from DB import views
#from LINE import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('DB/', include('DB.urls')),
    path('', views.chart.as_view()),
    # path()
]
