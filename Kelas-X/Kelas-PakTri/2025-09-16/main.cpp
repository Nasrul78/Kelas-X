#include <iostream>

using namespace std;

int main() {
  int nilai, standar = 75;

  while (true) {
    cin >> nilai;

    if (nilai >= standar) {
      cout << "Lulus!";
      cout << "Coding itu menyenangkan!";
    } else {
      cout << "Tidak Lulus!\n";
    }
  }

  return 0;
}