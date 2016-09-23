"""ab101GroupProject URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.9/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url,include
from django.contrib import admin

from django.conf.urls import handler404
from indexHome import views
# from django.conf import settings
# from django.conf.urls.static import static


urlpatterns = [
    # url(r'^$',include('indexHome.urls')),
    url(r'^admin/', admin.site.urls),
    url(r'^windFireTire/', include('windFireTire.urls')),
    url(r'^index/?$', include('indexHome.urls')),
    url(r'^foodieDetail/', include('foodieDetail.urls')),
    url(r'^userInfomation/', include('userInfomation.urls')),
    url(r'^test_map', views.test_map),
    url(r'^kardi_cloud_status', views.kardi_cloud_status),
    url(r'^kardi_cloud_record', views.kardi_cloud_record),
    url(r'^kardi_cloud_travel', views.kardi_cloud_travel),
    url(r'^.+$', views.error404),
    url(r'^$', include('indexHome.urls')),
]



