from re import template
from django.shortcuts import render

# Create your views here.
from django.template import loader
from django.http import HttpResponse, HttpResponseNotFound
from django.views.decorators.http import require_http_methods


def index(request):
    return HttpResponse('<h1>Main website</h1>')


def main(request):
    template = loader.get_template('index.html')
    name = {
        'student': 'Nishu'
    }
    return HttpResponse(template.render(name))


def party(request):
    a = True
    if a:
        return HttpResponse("<h2>Hello, Welcome Nishu!</h2>")
    else:
        return HttpResponseNotFound('<h2>Error not found!</h2>')


@require_http_methods(['GET'])
def show(request):
    return HttpResponse('<h2>This is a GET request!</h2>')
