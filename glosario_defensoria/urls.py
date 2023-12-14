"""glosario_defensoria URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from glosario.views import TituloListCreateView, PalabraListCreateView, PalabraListView, PalabraDetailView, PalabrasPorTituloView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('titulos/', TituloListCreateView.as_view(), name='titulos-list-create'),
    path('palabras/<int:pk>/', PalabraDetailView.as_view(), name='palabra-detail'),
    path('palabras/titulo/<int:titleId>/', PalabrasPorTituloView.as_view(), name='palabras-por-titulo'),
    path('palabras/', PalabraListCreateView.as_view(), name='palabras-list-create'),
    path('palabrasc/', PalabraListView.as_view(), name='palabras-list'),
]
