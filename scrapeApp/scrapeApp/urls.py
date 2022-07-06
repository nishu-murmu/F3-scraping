from django.contrib import admin
from django.urls import path
from scrapingbackend import views
urlpatterns = [
    path('', views.index),
    path('admin/', admin.site.urls),
    path('party/', views.party),
    path('show/', views.show),
    path('main/', views.main),
]
