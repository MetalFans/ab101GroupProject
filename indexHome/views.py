from django.shortcuts import render
# Create your views here.
def goHome(request):
    return render(request,'index.html',{})


from django.shortcuts import render_to_response
from django.template import RequestContext

# HTTP Error 400
# # SECURITY WARNING: don't run with debug turned on in production!
# DEBUG = True   =>  DEBUG = False 
# ALLOWED_HOSTS = [] =>  ALLOWED_HOSTS = ['*']


def error404(request):
    response = render_to_response('404.html',context_instance=RequestContext(request))
    response.status_code = 404
    return response

def test_map(request):
    response = render_to_response('test_map.html',context_instance=RequestContext(request))
    return response

def kardi_cloud_status(request):
    response = render_to_response('kardi_cloud_status.html',context_instance=RequestContext(request))
    return response

def kardi_cloud_record(request):
    response = render_to_response('kardi_cloud_record.html',context_instance=RequestContext(request))
    return response

def kardi_cloud_travel(request):
    response = render_to_response('kardi_cloud_travel.html',context_instance=RequestContext(request))
    return response