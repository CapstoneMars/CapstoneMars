from django.db import models


class one_day(models.Model):
    time = models.CharField(max_length=30)
    open = models.FloatField()
    high = models.FloatField()
    low = models.FloatField()
    close = models.FloatField()


class one_hour(models.Model):
    time = models.CharField(max_length=30)
    open = models.FloatField()
    high = models.FloatField()
    low = models.FloatField()
    close = models.FloatField()


class four_hours(models.Model):
    time = models.CharField(max_length=30)
    open = models.FloatField()
    high = models.FloatField()
    low = models.FloatField()
    close = models.FloatField()


class fifteen_min(models.Model):
    time = models.CharField(max_length=30)
    open = models.FloatField()
    high = models.FloatField()
    low = models.FloatField()
    close = models.FloatField()

