from django.shortcuts import render, redirect
from django.http import JsonResponse
from .models import UserData
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.serializers import Serializer
from .serializers import UserDataSerializer



@api_view(['POST'])
def save_data(request):
    if request.method == 'POST':
        serializer = UserDataSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Data saved successfully'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



@api_view(['GET'])
def get_data(request):
    data=UserData.objects.all()
    serializer=UserDataSerializer(data,many=True)
    return Response(serializer.data)
