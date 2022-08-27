from dataclasses import fields
from pyexpat import model
from django import forms
from .models import municipioAddModel


class municipioAddForm(forms.ModelForm):
    
    class Meta:
        model= municipioAddModel
        fields=['nombreMpio', 'idMpio', 'idDepto', 'consecutivo', 'region']
    