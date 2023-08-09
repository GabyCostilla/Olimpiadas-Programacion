#include <iostream>

int SumaMaximaDeCadenas(a){
    int sumaMaxima= a;
    int divisor = 2;

    while(divisor <= a){
        if(a % divisor == 0){
            sumaMaxima += a / divisor;
            a = a/divisor ;
        } else {
            divisor ++ ;
        }
    }

    return sumaMaxima;
}