#include <iostream>
#include <string>
using namespace std;

int mintaBulan();
int mintaTanggal();
string hitungZodiak(int tanggal, int bulan);
string kasihFakta(string zodiak);

int main () {
  int tanggal, bulan;
  string zodiak;

  while (true) {
    tanggal = mintaTanggal();
    if (tanggal == 404) break;
    
    bulan = mintaBulan();
    if (bulan == 404) break;

    zodiak = hitungZodiak(tanggal, bulan);
    cout << zodiak << "\n";
    cout << kasihFakta(zodiak);
  }

  return 0;
}

int mintaBulan() {
  int bulan;
  cout << "Masukkan bulan lahir kamu (1-12): ";
  cin >> bulan;
  if (bulan >= 1 && bulan <= 12) return bulan;
  cout << "Masukkan bulan lahir kamu yang bener (1-12): ";
  cin >> bulan;
  if (bulan >= 1 && bulan <= 12) return bulan;
  cout << "MASUKIN bulan LAHIR YANG BENER (1-12): ";
  cin >> bulan;
  if (bulan >= 1 && bulan <= 12) return bulan;
  cout << "gausah ngisi udah!";
  return 404;
}

int mintaTanggal() {
  int tanggal;
  cout << "Masukkan tanggal lahir kamu (1-31): ";
  cin >> tanggal;
  if (tanggal >= 1 && tanggal <= 31) return tanggal;
  cout << "Masukkan tanggal lahir kamu yang bener (1-31): ";
  cin >> tanggal;
  if (tanggal >= 1 && tanggal <= 31) return tanggal;
  cout << "MASUKIN TANGGAL LAHIR YANG BENER (1-31): ";
  cin >> tanggal;
  if (tanggal >= 1 && tanggal <= 31) return tanggal;
  cout << "gausah ngisi udah!";
  return 404;
}

string hitungZodiak(int tanggal, int bulan) {
  if ((tanggal >= 21 && bulan == 12) || (tanggal <= 19 && bulan == 1)) return "Capricorn";
  else if ((tanggal >= 20 && bulan == 1) || (tanggal <= 18 && bulan == 2)) return "Aquarius";
  else if ((tanggal >= 20 && bulan == 2) || (tanggal <= 20 && bulan == 3)) return "Pisces";
  else if ((tanggal >= 21 && bulan == 3) || (tanggal <= 20 && bulan == 4)) return "Aries";
  else if ((tanggal >= 21 && bulan == 4) || (tanggal <= 20 && bulan == 5)) return "Taurus";
  else if ((tanggal >= 21 && bulan == 5) || (tanggal <= 20 && bulan == 6)) return "Gemini";
  else if ((tanggal >= 21 && bulan == 6) || (tanggal <= 22 && bulan == 7)) return "Cancer";
  else if ((tanggal >= 23 && bulan == 7) || (tanggal <= 22 && bulan == 8)) return "Leo";
  else if ((tanggal >= 23 && bulan == 8) || (tanggal <= 22 && bulan == 9)) return "Virgo";
  else if ((tanggal >= 23 && bulan == 9) || (tanggal <= 22 && bulan == 10)) return "Libra";
  else if ((tanggal >= 23 && bulan == 10) || (tanggal <= 21 && bulan == 11)) return "Scorpio";
  else if ((tanggal >= 22 && bulan == 11) || (tanggal <= 21 && bulan == 12)) return "Sagittarius";
  else return "Apasih, zodiakmu ga ada";
}

string kasihFakta(string zodiak) {
  if (zodiak == "Capricorn") return "Capricorn memiliki sikap ambisius dan getol mengejar cita-citanya. Sosoknya sangat pantang menyerah dalam meraih kesuksesan.\n";
  else if (zodiak == "Aquarius") return "Aquarius adalah sosok yang suka menjalankan sesuatu dengan caranya sendiri. Kepribadiannya yang kreatif dan cerdas membuatnya kerap melahirkan hal-hal inovatif.\n";
  else if (zodiak == "Pisces") return "Pisces memiliki sifat sabar, lembut dan sensitif perasaannya. Dalam pergaulan, sosok ini mudah tersinggung dan ragu-ragu dalam mengambil keputusan.\n";
  else if (zodiak == "Aries") return "Aries adalah sosok yang tidak takut terhadap risiko, segala hal dilakukan dengam insting. Energinya membara dan agresif.\n";
  else if (zodiak == "Taurus") return "Taurus adalah sosok yang menyukai keindahan. Kepribadiannya tenang, tulus, cerdas dan jika sudah memiliki niat akan dilakukan tanpa keraguan.\n";
  else if (zodiak == "Gemini") return "Gemini adalah zodiak yang moody, yaitu sikapnya bergantung dari suasana hatinya. Sosoknya mandiri dan suka kebebasan serta komunikatif.\n";
  else if (zodiak == "Cancer") return "Cancer adalah sosok yang sensitif, emosional, konservatif serta gemar berkhayal. Sosoknya perhatian terhadap orang di sekitarnya namun sisi negatifnya yaitu pendendam.\n";
  else if (zodiak == "Leo") return "Leo memiliki kepribadian percaya diri. Tetapi sosoknya suka marah jika disinggung perkara harga diri serta suka berkuasa dan memiliki jiwa kepimpinan yang besar.\n";
  else if (zodiak == "Virgo") return "Virgo adalah sosok yang perfeksionis, mementingkan gengsi dan ego. Dirinya suka menyalahkan orang lain karena tidak suka disalahkan walaupun kesalan itu dilakukan olehnya.\n";
  else if (zodiak == "Libra") return "Libra adalah zodiak yang perasaannya halus namun impulsif dalam mengambil keputusan. Hal itu kerap membuat Libra menyesali keputusannya di masa lalu.\n";
  else if (zodiak == "Scorpio") return "Scorpio adalah sosok yang bersemangat, suka merahasiakan sesuatu namun tabah dalam menghadapi cobaan.\n";
  else if (zodiak == "Sagittarius") return "Sagittarius adalah sosok pemberani yang suka berpetualang. Sikapnya  cerdas, memiliki kemampuan mudah menangkap sesuatu dan rajin bekerja.\n";
  else return "Ga ada kata-kata untukmu, wlee\n";
}