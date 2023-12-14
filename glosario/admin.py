from django.contrib import admin
from .models import Titulo, Palabra

class PalabraInline(admin.TabularInline):  # Inline para agregar palabras al editar un título
    model = Palabra
    extra = 1

class TituloAdmin(admin.ModelAdmin):
    inlines = [PalabraInline]

admin.site.register(Titulo, TituloAdmin)
admin.site.register(Palabra)
