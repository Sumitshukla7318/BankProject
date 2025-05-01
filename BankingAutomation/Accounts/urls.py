from django.urls import path,include
from . import views

urlpatterns = [
    path('create_account/',views.CreateAccount.as_view(),name='create_account'),
    path('login/',views.CustomerLogin.as_view(),name='login'),
    path('get_balance/',views.GetBalance.as_view(),name='get_balance'),
    path('deposit-funds/',views.DepositFunds.as_view(),name='deposit-funds'),
]
