#include <iostream>
using namespace std;

int main()
{
    int nilai;
    cout << "Masukkan Nilai Anda : ";
    cin >> nilai;

    // nilai = 0;
    // if (nilai >= 90) {
    //     cout << "Predikat anda A dengan nilai : " << nilai << endl;
    // } else if (nilai >= 80) {
    //     cout << "Predikat anda B dengan nilai : " << nilai << endl;
    // } else if (nilai >= 70) {
    //     cout << "Predikat anda C dengan nilai : " << nilai << endl;
    // } else if (nilai >= 60) {
    //     cout << "Predikat anda D dengan nilai : " << nilai << endl;
    // } else if (nilai == 0) {
    //     cout << "Nice try :)"<< endl;
    // } else {
    //     cout << "Predikat anda E dengan nilai : " << nilai << endl;
    // }

    if (nilai < 0 || nilai > 100) {
        cout << "Yang bener dikit." << endl;
    } else if (nilai ==  100) {
        cout << "Predikat anda A+ dengan nilai : "<< nilai << endl;
    } else if (nilai >= 90) {
        cout << "Predikat anda A dengan nilai : " << nilai << endl;
    } else if (nilai >= 80) {
        cout << "Predikat anda B dengan nilai : " << nilai << endl;
    } else if (nilai >= 70) {
        cout << "Predikat anda C dengan nilai : " << nilai << endl;
    } else if (nilai >= 60) {
        cout << "Predikat anda D dengan nilai : " << nilai << endl;
    } else if (nilai == 0) {
        cout << "Nice try :)"<< endl;
    } else {
        cout << "Predikat anda E dengan nilai : " << nilai << endl;
    }

    return 0;
}