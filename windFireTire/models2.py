# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey has `on_delete` set to the desired behavior.
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from __future__ import unicode_literals

from django.db import models


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=80)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.IntegerField()
    username = models.CharField(unique=True, max_length=30)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.CharField(max_length=254)
    is_staff = models.IntegerField()
    is_active = models.IntegerField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.SmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'


class Employee(models.Model):
    first_name = models.CharField(db_column='first_Name', max_length=20)  # Field name made lowercase.
    last_name = models.CharField(db_column='last_Name', max_length=20, blank=True, null=True)  # Field name made lowercase.
    age = models.IntegerField(blank=True, null=True)
    sex = models.CharField(max_length=1, blank=True, null=True)
    income = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'employee'


class User10(models.Model):
    field_id = models.CharField(db_column='_id', max_length=50)  # Field renamed because it started with '_'.
    display_name = models.CharField(max_length=150, blank=True, null=True)
    fav_cnt = models.IntegerField(blank=True, null=True)
    follower_cnt = models.IntegerField(blank=True, null=True)
    following_cnt = models.IntegerField(blank=True, null=True)
    post_cnt = models.IntegerField(blank=True, null=True)
    profile_pic_origin = models.CharField(max_length=2000, blank=True, null=True)
    browse_cnt = models.IntegerField(blank=True, null=True)
    checkin_cnt = models.IntegerField(blank=True, null=True)
    certified = models.CharField(max_length=20, blank=True, null=True)
    timestamp = models.DecimalField(max_digits=25, decimal_places=5, blank=True, null=True)
    page_rank = models.DecimalField(max_digits=32, decimal_places=30, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'user10'


class Users(models.Model):
    field_id = models.CharField(db_column='_id', max_length=50)  # Field renamed because it started with '_'.
    display_name = models.CharField(max_length=150, blank=True, null=True)
    fav_cnt = models.IntegerField(blank=True, null=True)
    follower_cnt = models.IntegerField(blank=True, null=True)
    following_cnt = models.IntegerField(blank=True, null=True)
    post_cnt = models.IntegerField(blank=True, null=True)
    profile_pic_origin = models.CharField(max_length=2000, blank=True, null=True)
    browse_cnt = models.IntegerField(blank=True, null=True)
    checkin_cnt = models.IntegerField(blank=True, null=True)
    certified = models.CharField(max_length=20, blank=True, null=True)
    timestamp = models.DecimalField(max_digits=25, decimal_places=5, blank=True, null=True)
    page_rank = models.DecimalField(max_digits=32, decimal_places=30, blank=True, null=True)
    blog_cnt_by_roast_chicken = models.IntegerField(blank=True, null=True)
    blog_cnt_by_barbecue = models.IntegerField(blank=True, null=True)
    blog_cnt_by_seafood = models.IntegerField(blank=True, null=True)
    blog_cnt_by_brunch = models.IntegerField(blank=True, null=True)
    blog_cnt_by_banquet = models.IntegerField(blank=True, null=True)
    blog_cnt_by_bar = models.IntegerField(blank=True, null=True)
    blog_cnt_by_japanese_food = models.IntegerField(blank=True, null=True)
    blog_cnt_by_continental_food = models.IntegerField(blank=True, null=True)
    blog_cnt_by_southeast_asia_food = models.IntegerField(blank=True, null=True)
    blog_cnt_by_mutton_beef_hotpot = models.IntegerField(blank=True, null=True)
    blog_cnt_by_chophouse = models.IntegerField(blank=True, null=True)
    blog_cnt_by_korea_food = models.IntegerField(blank=True, null=True)
    blog_cnt_by_vegetable_food = models.IntegerField(blank=True, null=True)
    blog_cnt_by_hongkong_food = models.IntegerField(db_column='blog_cnt_by_hongKong_food', blank=True, null=True)  # Field name made lowercase.
    blog_cnt_by_other = models.IntegerField(db_column='blog_cnt_by_Other', blank=True, null=True)  # Field name made lowercase.
    blog_cnt_by_dessert_ice_drink_bakery = models.IntegerField(blank=True, null=True)
    blog_cnt_by_themed_restaurant = models.IntegerField(blank=True, null=True)
    blog_cnt_by_taiwanses_food = models.IntegerField(db_column='blog_cnt_by_taiwanses_Food', blank=True, null=True)  # Field name made lowercase.
    blog_cnt_by_buffet = models.IntegerField(blank=True, null=True)
    blog_cnt_by_hotpot = models.IntegerField(blank=True, null=True)
    blog_cnt_by_light_meal_afternoon_tea = models.IntegerField(blank=True, null=True)
    between_zscore_roast_chicken = models.DecimalField(max_digits=25, decimal_places=20, blank=True, null=True)
    between_zscore_barbecue = models.DecimalField(max_digits=25, decimal_places=20, blank=True, null=True)
    between_zscore_seafood = models.DecimalField(max_digits=25, decimal_places=20, blank=True, null=True)
    between_zscore_brunch = models.DecimalField(max_digits=25, decimal_places=20, blank=True, null=True)
    between_zscore_banquet = models.DecimalField(max_digits=25, decimal_places=20, blank=True, null=True)
    between_zscore_bar = models.DecimalField(max_digits=25, decimal_places=20, blank=True, null=True)
    between_zscore_japanese_food = models.DecimalField(max_digits=25, decimal_places=20, blank=True, null=True)
    between_zscore_continental_food = models.DecimalField(max_digits=25, decimal_places=20, blank=True, null=True)
    between_zscore_southeast_asia_food = models.DecimalField(max_digits=25, decimal_places=20, blank=True, null=True)
    between_zscore_mutton_beef_hotpot = models.DecimalField(max_digits=25, decimal_places=20, blank=True, null=True)
    between_zscore_chophouse = models.DecimalField(max_digits=25, decimal_places=20, blank=True, null=True)
    between_zscore_korea_food = models.DecimalField(max_digits=25, decimal_places=20, blank=True, null=True)
    between_zscore_vegetable_food = models.DecimalField(max_digits=25, decimal_places=20, blank=True, null=True)
    between_zscore_hongkong_food = models.DecimalField(db_column='between_zscore_hongKong_food', max_digits=25, decimal_places=20, blank=True, null=True)  # Field name made lowercase.
    between_zscore_other = models.DecimalField(db_column='between_zscore_Other', max_digits=25, decimal_places=20, blank=True, null=True)  # Field name made lowercase.
    between_zscore_dessert_ice_drink_bakery = models.DecimalField(max_digits=25, decimal_places=20, blank=True, null=True)
    between_zscore_themed_restaurant = models.DecimalField(max_digits=25, decimal_places=20, blank=True, null=True)
    between_zscore_taiwanses_food = models.DecimalField(db_column='between_zscore_taiwanses_Food', max_digits=25, decimal_places=20, blank=True, null=True)  # Field name made lowercase.
    between_zscore_buffet = models.DecimalField(max_digits=25, decimal_places=20, blank=True, null=True)
    between_zscore_hotpot = models.DecimalField(max_digits=25, decimal_places=20, blank=True, null=True)
    between_zscore_light_meal_afternoon_tea = models.DecimalField(max_digits=25, decimal_places=20, blank=True, null=True)
    within_zscore_roast_chicken = models.DecimalField(max_digits=25, decimal_places=20, blank=True, null=True)
    within_zscore_barbecue = models.DecimalField(max_digits=25, decimal_places=20, blank=True, null=True)
    within_zscore_seafood = models.DecimalField(max_digits=25, decimal_places=20, blank=True, null=True)
    within_zscore_brunch = models.DecimalField(max_digits=25, decimal_places=20, blank=True, null=True)
    within_zscore_banquet = models.DecimalField(max_digits=25, decimal_places=20, blank=True, null=True)
    within_zscore_bar = models.DecimalField(max_digits=25, decimal_places=20, blank=True, null=True)
    within_zscore_japanese_food = models.DecimalField(max_digits=25, decimal_places=20, blank=True, null=True)
    within_zscore_continental_food = models.DecimalField(max_digits=25, decimal_places=20, blank=True, null=True)
    within_zscore_southeast_asia_food = models.DecimalField(max_digits=25, decimal_places=20, blank=True, null=True)
    within_zscore_mutton_beef_hotpot = models.DecimalField(max_digits=25, decimal_places=20, blank=True, null=True)
    within_zscore_chophouse = models.DecimalField(max_digits=25, decimal_places=20, blank=True, null=True)
    within_zscore_korea_food = models.DecimalField(max_digits=25, decimal_places=20, blank=True, null=True)
    within_zscore_vegetable_food = models.DecimalField(max_digits=25, decimal_places=20, blank=True, null=True)
    within_zscore_hongkong_food = models.DecimalField(db_column='within_zscore_hongKong_food', max_digits=25, decimal_places=20, blank=True, null=True)  # Field name made lowercase.
    within_zscore_other = models.DecimalField(db_column='within_zscore_Other', max_digits=25, decimal_places=20, blank=True, null=True)  # Field name made lowercase.
    within_zscore_dessert_ice_drink_bakery = models.DecimalField(max_digits=25, decimal_places=20, blank=True, null=True)
    within_zscore_themed_restaurant = models.DecimalField(max_digits=25, decimal_places=20, blank=True, null=True)
    within_zscore_taiwanses_food = models.DecimalField(db_column='within_zscore_taiwanses_Food', max_digits=25, decimal_places=20, blank=True, null=True)  # Field name made lowercase.
    within_zscore_buffet = models.DecimalField(max_digits=25, decimal_places=20, blank=True, null=True)
    within_zscore_hotpot = models.DecimalField(max_digits=25, decimal_places=20, blank=True, null=True)
    within_zscore_light_meal_afternoon_tea = models.DecimalField(max_digits=25, decimal_places=20, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'users'
