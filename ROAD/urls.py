from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('API.urls')),
    path('DB/', include('DB.urls')),
]
