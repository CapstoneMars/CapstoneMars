from django.contrib import admin
from DB.models import one_day
from DB.models import one_hour
from DB.models import four_hours
from DB.models import fifteen_min
from DB.models import result


admin.site.register(one_day)
admin.site.register(one_hour)
admin.site.register(four_hours)
admin.site.register(fifteen_min)
admin.site.register(result)


# Register your models here.
