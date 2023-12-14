from rest_framework import serializers
from .models import Titulo, Palabra

class PalabraSerializer(serializers.ModelSerializer):
    class Meta:
        model = Palabra
        fields = '__all__'

class TituloSerializer(serializers.ModelSerializer):
    palabras = PalabraSerializer(many=True, required=False)

    class Meta:
        model = Titulo
        fields = '__all__'
