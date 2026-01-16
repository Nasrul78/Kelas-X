#include <iostream>
using namespace std;

int main() {
    // For Loop
    cout << "Loop for:\n";
    for (int a = 1; a <= 5; a++) {
        cout << "Perulangan ke-" << a << endl;
    }

    // For Loop Berulang
    cout << "\nLoop for berulang:\n";
    for (int a = 1; a <= 3; a++) {
        cout << "Unit ke - " << a << endl;
        for (int b = 1; b <= 3; b++) {
            cout << "Inner loop ke-" << a << "." << b << endl;
        }
    }


    // Bentuk segitiga siku-siku
    cout << "\nBentuk segitiga siku-siku: \n";
    for (int i=1; i<=5; i++) {
        for (int k=5;k>i;k--) {
            cout << " ";
        }
        for (int j=1; j<=i; j++) {
            cout << "* ";
            
        }
        cout << endl;
    }

    // Bentuk segitiga sama kaki
    cout << "\nBentuk segitiga sama kaki: \n";
    cout << "Masukkan tinggi pola:  ";
    int a;
    cin >> a;
    for (int i=1; i<=a; i++) {
        for (int k=a;k>i;k--) {
            cout << " ";
        }
        for (int j=1; j<=(2*i-1); j++) {
            cout << "*";
            
        }
        cout << endl;
    }

    // Bentuk belah ketupat
    cout << "\nBentuk belah ketupat: \n  ";
    cout << "Masukkan tinggi pola:";
    int n;
    cin >> n;
    for (int i=1; i<=n; i++) {
        for (int k=1;k<=i-1;k++) {
            cout << "+";
            
        }
        for (int j=n; j>=i; j--) {
            cout << "*";
        }
        cout << endl;
    }

    return 0;
}