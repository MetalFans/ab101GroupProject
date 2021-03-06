# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2016-06-28 11:34
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User10',
            fields=[
                ('field_id', models.CharField(db_column='_id', max_length=50, primary_key=True, serialize=False)),
                ('display_name', models.CharField(blank=True, max_length=150, null=True)),
                ('fav_cnt', models.IntegerField(blank=True, null=True)),
                ('follower_cnt', models.IntegerField(blank=True, null=True)),
                ('following_cnt', models.IntegerField(blank=True, null=True)),
                ('post_cnt', models.IntegerField(blank=True, null=True)),
                ('profile_pic_origin', models.CharField(blank=True, max_length=2000, null=True)),
                ('browse_cnt', models.IntegerField(blank=True, null=True)),
                ('checkin_cnt', models.IntegerField(blank=True, null=True)),
                ('certified', models.CharField(blank=True, max_length=20, null=True)),
                ('timestamp', models.DecimalField(blank=True, decimal_places=5, max_digits=25, null=True)),
                ('page_rank', models.DecimalField(blank=True, decimal_places=30, max_digits=32, null=True)),
            ],
            options={
                'db_table': 'user10',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Users',
            fields=[
                ('field_id', models.CharField(db_column='_id', max_length=50, primary_key=True, serialize=False)),
                ('display_name', models.CharField(blank=True, max_length=150, null=True)),
                ('fav_cnt', models.IntegerField(blank=True, null=True)),
                ('follower_cnt', models.IntegerField(blank=True, null=True)),
                ('following_cnt', models.IntegerField(blank=True, null=True)),
                ('post_cnt', models.IntegerField(blank=True, null=True)),
                ('profile_pic_origin', models.CharField(blank=True, max_length=2000, null=True)),
                ('browse_cnt', models.IntegerField(blank=True, null=True)),
                ('checkin_cnt', models.IntegerField(blank=True, null=True)),
                ('certified', models.CharField(blank=True, max_length=20, null=True)),
                ('timestamp', models.DecimalField(blank=True, decimal_places=5, max_digits=25, null=True)),
                ('page_rank', models.DecimalField(blank=True, decimal_places=30, max_digits=32, null=True)),
            ],
            options={
                'db_table': 'users',
                'managed': False,
            },
        ),
    ]
