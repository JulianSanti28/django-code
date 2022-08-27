# Auí registro la nueva url para entrar a la vista que acabamos de crear
from django.urls import path

from . import views

urlpatterns = [
    # se lee: en la url principal voy aretornar unidadView y que se llama unidad
    path('cargo/', views.cargo, name='cargo'),
    path('municipioList/', views.municipioList, name='municipioList'),
    path('municipioAdd/', views.municipioAdd, name='municipioAdd'),   
    path('municipioDel/<int:municipio_id>/', views.municipioDel, name='municipioDel'),
    path('municipioEdit/<int:municipio_id>/', views.municipioEdit, name='municipioEdit'),
]