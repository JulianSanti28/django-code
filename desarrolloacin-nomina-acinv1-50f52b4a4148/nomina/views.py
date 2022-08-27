#se crea vista
from http.client import HTTPResponse
from multiprocessing import context
from django.shortcuts import render, redirect
from .forms import municipioAddForm
from .models import municipioAddModel



#La funcion recibe un objeto request, request nos da cierta información importante sobre la solicitud en sí.
#ejemplo: La persona que quiere entrar a esta vista


def cargo(request):
    return render(request, 'registro/registroCargo.html')

def municipioList(request):
    municipios = municipioAddModel.objects.all()
    context={'municipios':municipios}
    return render(request, 'lista/municipio.html', context)

def municipioAdd(request):
    if request.method == "POST":
        form = municipioAddForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('municipioList')
    else:
        form = municipioAddForm()
        
    context = {'form' : form}
    return render(request, 'registro/registroMunicipio.html', context)

def municipioDel (request, municipio_id):
    municipio = municipioAddModel.objects.get(id=municipio_id)
    municipio.delete()
    return redirect('municipioList')
    
def municipioEdit (request, municipio_id):
    municipio = municipioAddModel.objects.get(id=municipio_id)
    if request.method == "POST":
        form = municipioAddForm(request.POST, instance=municipio)
        if form.is_valid():
            form.save()
            return redirect('municipioList')
    else:
        form = municipioAddForm(instance=municipio)
    
    context = {"form":form}
    return render(request, "registro/editarMunicipio.html", context)