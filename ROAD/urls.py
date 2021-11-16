from django.contrib import admin
from django.urls import path, include
from DB import views
<<<<<<< Updated upstream
#from LINE import views
=======
>>>>>>> Stashed changes

urlpatterns = [
    path('admin/', admin.site.urls),
    path('DB/', include('DB.urls')),
    path('', views.chart.as_view()),
<<<<<<< Updated upstream
    # path()
=======
>>>>>>> Stashed changes
]
