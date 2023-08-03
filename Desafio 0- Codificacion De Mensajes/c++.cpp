/*
    VERSION ORIGINAL DE MARCOS PICCOTTO
#include <iostream>
#include <string>
#include <stdlib.h>

using namespace std;

#define N 2

int main() {
    string abc = "abcdefghijklmnñopqrstuvwxyz";
    string word = "yo he logrado encender una cerilla";
    string res = "";
    int key[N] = {2,3};
    int k_aux = 0;

    for (auto i : word){
        if (i != ' ') {
            int pos = abc.find(i);
            if (k_aux == N) {
                k_aux = 0;
            }
            res += abc[(pos + key[k_aux]) % abc.size()];
            k_aux++;
        }
    }

    cout << res << '\n';
    return 0;
}
*/

 //CHAT GPT VERSION CORREGIDA
#include <iostream>
#include <string>

using namespace std;

#define N 2

int main() {
    string abc = "abcdefghijklmnñopqrstuvwxyz";
    string word = "yo he logrado encender una cerilla";
    string res = "";
    int key[N] = {2, 3};
    int k_aux = 0;

    for (auto i : word) {
        if (i != ' ') {
            int pos = abc.find(i);
            if (pos != string::npos) { // Verificar si la letra está en el alfabeto
                if (k_aux == N) {
                    k_aux = 0;
                }
                res += abc[(pos + key[k_aux]) % abc.size()];
                k_aux++;
            } else {
                res += i; // Si no es una letra del alfabeto, se mantiene tal cual.
            }
        } else {
            res += ' '; // Mantener los espacios en el mensaje cifrado
        }
    }

    cout << res << '\n';
    return 0;
}
