from django.conf.urls import url
from . import views
urlpatterns = [
 # post views
url(r'(?P<id>^\w{24}$)', views.display, name='display'),
url(r'^network$', views.network, name='network'),

]
