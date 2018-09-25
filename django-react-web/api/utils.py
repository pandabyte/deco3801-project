from rest_framework import status
from rest_framework.response import Response


def deprecated(func):
    def deprecatedFunc(self):
            return Response('Error: This API is deprecated, please check the documentation for more detail', status=status.HTTP_410_GONE)
    return deprecatedFunc

def deprecated_warn(func):
    def deprecatedFunc(self):
            return Response('Warning: This API will soon be deprecated, please check the documentation for more detail', status=299)
    return deprecatedFunc