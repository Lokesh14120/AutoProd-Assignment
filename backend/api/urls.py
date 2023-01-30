from django.urls import path
from . import views

urlpatterns = [
    path('save_data/', views.save_data, name='save_data'),
    path('get_data/', views.get_data, name='get_data'),
]
