from django.shortcuts import render, redirect
from django.http import JsonResponse
from .models import UserData
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.serializers import Serializer
from .serializers import UserDataSerializer



@api_view(['POST'])
def save_data(request):
    data = request.data
    note = UserData.objects.create(
       
        flavor=data['flavor'],
        color=data['color'],
        animal=data['animal'],
        food=data['food']
    )
    serializer = UserDataSerializer(note, many=False)
    return Response(serializer.data)


@api_view(['GET'])
def get_data(request):
    data=UserData.objects.all()
    serializer=UserDataSerializer(data,many=True)
    return Response(serializer.data)
