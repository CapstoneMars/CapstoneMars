from django.db import models


class api(models.Model):
    bong = models.CharField(max_length=10)
    start_date = models.CharField(max_length=200)
    end_date = models.CharField(max_length=200)

    def __str__(self):
        return self.bong
