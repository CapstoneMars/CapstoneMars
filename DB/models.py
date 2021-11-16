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

<<<<<<< Updated upstream
=======

class result(models.Model):
    line = models.IntegerField(max_length=20)

    # from django.contrib.postgres.fields import ArrayField
    # line = ArrayField(models.IntegerField(max_length=20))
>>>>>>> Stashed changes
