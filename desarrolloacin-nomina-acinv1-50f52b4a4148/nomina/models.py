from django.db import models

class municipioAddModel(models.Model):
    nombreMpio  = models.CharField(max_length=100)
    idMpio = models.IntegerField()
    idDepto = models.IntegerField()
    consecutivo = models.IntegerField()
    region = models.CharField(max_length=1)

    def __str__(self):
        return self.nombreMpio
    
    