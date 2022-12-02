from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import ScrapSerializer
from rest_framework.permissions import IsAuthenticated


#  home page
class ScrapAPIView(GenericAPIView):
    permission_classes = [IsAuthenticated]
    def post(self, request):
        print('---',request.data)
        serializer = ScrapSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            scrap = serializer.save()
            return Response({'msg': 'Scrap saved'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    #
    # def get(self, request):
    #         serializer = ScrapSerializer(request.user)
    #         return Response(serializer.data, status=status.HTTP_200_OK)
