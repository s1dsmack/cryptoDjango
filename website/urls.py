from django.urls import path
from . import views

urlpatterns = [
	path('', views.home, name="home"),
	path('prices/', views.prices, name="prices"),
	path('terms/', views.terms, name="terms"),
	path('contact/', views.contact, name="contact"),
	path('subscribe/', views.subscribe, name="subscribe"),

]
