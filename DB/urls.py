from django.conf.urls import url, include
from .views import Date_15, Date_60, Date_240, Date_1D
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('date_15', Date_15, basename='date_15')
router.register('date_60', Date_60, basename='date_60')
router.register('date_240', Date_240, basename='date_240')
router.register('date_1D', Date_1D, basename='date_1D')
<<<<<<< Updated upstream

=======
router.register('lines', Lines, basename='lines')
>>>>>>> Stashed changes
urlpatterns = [
    url('', include(router.urls))
]
