from rest_framework.serializers import ModelSerializer
from .models import UserData


class UserDataSerializer(ModelSerializer):
    class Meta:
        model = UserData
        fields = '__all__'