from rest_framework.views import APIView
from rest_framework import status
from . models import Customer
from .serializers import CustomerSerializer,BalanceSerializer
from rest_framework.response import Response
from django.contrib.auth.hashers import check_password
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.http import JsonResponse
import json
from decimal import Decimal

class CreateAccount(APIView):
    def get(self,request):
        return Response({"message": "GET request is not allowed for account creation."},status=status.HTTP_405_METHOD_NOT_ALLOWED)
    
    def post(self,request):
        serializer=CustomerSerializer(data=request.data)
        # print("yes i am working")
        if serializer.is_valid():
            serializer.save()
            return Response({'message':'Account created sucessfully!'},status=status.HTTP_201_CREATED)
        else:
            # print("is valid is failed")
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)


@method_decorator(csrf_exempt, name='dispatch')
class CustomerLogin(APIView):
    def get(self,request):
         return Response({"message": "GET request is not allowed for account creation."},status=status.HTTP_405_METHOD_NOT_ALLOWED)

    def post(self,request):
        email = request.data.get('email')
        password = request.data.get('password')
        print(email,password)
        if not email or not password:
            return Response({"error": "Email and password are required."}, status=status.HTTP_400_BAD_REQUEST)

        try:
            customer = Customer.objects.get(email=email)
        except Customer.DoesNotExist:
            return Response({"error": "Invalid email or password."}, status=status.HTTP_401_UNAUTHORIZED)

        if password==customer.password:
            # Prepare response data
            data = {
                "message": "Login successful",
                "customer_id": customer.id,
                "name": customer.name,
                "email": customer.email,
                "account_type": customer.account_type,
                "profile_picture": customer.profile_picture.url if customer.profile_picture else None,
            }
            request.session['email']=customer.email
            print("all work done sucessfully")
            return Response(data, status=status.HTTP_200_OK)
        else:
            return Response({"error": "Invalid email or password."}, status=status.HTTP_401_UNAUTHORIZED)
        

class GetBalance(APIView):
    def get(self, request):
        email = request.session.get('email') 
        if not email:
            return Response({"error": "User not authenticated or session expired"}, status=401)

        try:
            customer = Customer.objects.get(email=email)
            serializer = BalanceSerializer({'balance': customer.balance})
            return Response(serializer.data)
        except Customer.DoesNotExist:
            return Response({"error": "Customer not found"}, status=404)


@method_decorator(csrf_exempt, name='dispatch')
class DepositFunds(APIView):
    def post(self, request):
        email = request.session.get('email')
        if not email:
            return Response({"error": "User not authenticated or session expired"}, status=401)

        data = request.data
        account_number = data.get('account_number')
        amount = data.get('amount')
        password = data.get('password')

        if not account_number or not amount or not password:
            return Response({"error": "All fields are required."}, status=400)

        try:
            customer = Customer.objects.get(email=email)

            # Optional: Verify account number (match with customer if needed)
            if str(customer.account_number) != str(account_number):
                return Response({"error": "Invalid account number."}, status=400)

            # Verify password
            if not password==customer.password:
                return Response({"error": "Incorrect password."}, status=403)

            # Add funds
            try:
                amount = float(amount)
                if amount <= 0:
                    return Response({"error": "Invalid deposit amount."}, status=400)
            except ValueError:
                return Response({"error": "Amount must be a number."}, status=400)

            customer.balance =customer.balance+Decimal(amount)
            customer.save()

            return Response({"message": f"₹{amount} deposited successfully."}, status=200)

        except Customer.DoesNotExist:
            return Response({"error": "Customer not found."}, status=404)

        


        

