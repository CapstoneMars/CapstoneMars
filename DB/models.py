from django.db import models


class one_day(models.Model):
    time = models.CharField(max_length=30)
    open = models.IntegerField()
    high = models.IntegerField()
    low = models.IntegerField()
    close = models.IntegerField()


class one_hour(models.Model):
    time = models.CharField(max_length=30)
    open = models.IntegerField()
    high = models.IntegerField()
    low = models.IntegerField()
    close = models.IntegerField()


class four_hours(models.Model):
    time = models.CharField(max_length=30)
    open = models.IntegerField()
    high = models.IntegerField()
    low = models.IntegerField()
    close = models.IntegerField()


class fifteen_min(models.Model):
    time = models.CharField(max_length=30)
    open = models.IntegerField()
    high = models.IntegerField()
    low = models.IntegerField()
    close = models.IntegerField()
