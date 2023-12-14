from rest_framework import generics
from .models import Titulo, Palabra
from .serializers import TituloSerializer, PalabraSerializer


class TituloListCreateView(generics.ListCreateAPIView):
    queryset = Titulo.objects.all()
    serializer_class = TituloSerializer

class PalabraListCreateView(generics.ListCreateAPIView):
    queryset = Palabra.objects.all()
    serializer_class = PalabraSerializer

class PalabraListView(generics.ListAPIView):
    queryset = Palabra.objects.all()
    serializer_class = PalabraSerializer

class PalabraDetailView(generics.RetrieveDestroyAPIView):
    queryset = Palabra.objects.all()
    serializer_class = PalabraSerializer

from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response

class PalabrasPorTituloView(APIView):
    def get(self, request, titleId):
        titulo = get_object_or_404(Titulo, id=titleId)
        palabras = Palabra.objects.filter(titulo=titulo)
        serializer = PalabraSerializer(palabras, many=True)
        return Response(serializer.data)


