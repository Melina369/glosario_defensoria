from django.db import models

class Titulo(models.Model):
    titulo = models.CharField(max_length=100)

    def __str__(self):
        return self.titulo


class Palabra(models.Model):
    titulo = models.ForeignKey(Titulo, related_name='palabras', on_delete=models.CASCADE)
    palabra = models.CharField(max_length=100)
    descripcion = models.TextField(blank=True, null=True)  # Permitir valores nulos

    def __str__(self):
        return self.palabra
