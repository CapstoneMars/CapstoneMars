# Generated by Django 3.2.8 on 2021-11-08 08:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('DB', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='result',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('line', models.FloatField()),
            ],
        ),
    ]
