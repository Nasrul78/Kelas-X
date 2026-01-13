public class BelajarOperator {
  public static void main(String[] args) {
    // Operator Aritmatika
    System.out.println("Operator Aritmatika");
    
    int a = 10;
    int b = 3;

    int penjumlahan = a + b;
    System.out.println("Hasil penjumlahan 2 angka adalah: " + penjumlahan);

    int pengurangan = a - b;
    System.out.println("Hasil pengurangan 2 angka adalah: " + pengurangan);

    int perkalian = a * b;
    System.out.println("Hasil perkalian 2 angka adalah: " + perkalian);
    
    int pembagian = a / b;
    System.out.println("Hasil pembagian 2 angka adalah: " + pembagian);
    
    int modulus = a % b;
    System.out.println("Hasil modulus 2 angka adalah: " + modulus);

    // Operator Penugasan
    System.out.println("\nOperator Penugasan");
    
    int c = 15;

    c += 5;
    System.out.println("Hasil penugasan penambahan C adalah: " + c);

    c -= 2;
    System.out.println("Hasil penugasan pengurangan C adalah: " + c);

    c *= 100;
    System.out.println("Hasil penugasan perkalian C adalah: " + c);

    c /= 3;
    System.out.println("Hasil penugasan pembagian C adalah: " + c);

    c %= 7;
    System.out.println("Hasil penugasan modulus C adalah: " + c);

    // Operator Perbandingan
    System.out.println("\nOperator Perbandingan");
    
    int d = 24;
    int e = 12;
    
    boolean samaDengan = d == e;
    System.out.println("Hasil dari D == A adalah: " + samaDengan);
    
    boolean tidakSamaDengan = d != e;
    System.out.println("Hasil dari D != A adalah: " + tidakSamaDengan);

    boolean lebihDari = d > e;
    System.out.println("Hasil dari D > A adalah: " + lebihDari);

    boolean lebihDariSamaDengan = d >= e;
    System.out.println("Hasil dari D >= A adalah: " + lebihDariSamaDengan);
    
    boolean kurangDari = d < e;
    System.out.println("Hasil dari D < A adalah: " + kurangDari);

    boolean kurangDariSamaDengan = d <= e;    
    System.out.println("Hasil dari D <= A adalah: " + kurangDariSamaDengan);

    // Operator Logika
    System.out.println("\nOperator Logika");
    
    boolean f = true;
    boolean g = false;
    
    boolean and = true && false;
    System.out.println("Hasil dari D && A adalah: " + and);

    boolean or = true || false;
    System.out.println("Hasil dari D || A adalah: " + or);

    boolean not = !f;
    System.out.println("Hasil dari !D adalah: " + not);

    // Operator Perbandingan + Logika
    System.out.println("\nOperator campuran Perbandingan dan Logika");

    boolean result0 = (d > e) && (f || g);
    System.out.println("Hasil dari D > A && F || G adalah: " + result0);

    boolean result1 = (d < e) || (f && g);
    System.out.println("Hasil dari D < A || F && G adalah: " + result1);

    boolean result2 = (d > e) || (f && g);
    System.out.println("Hasil dari D > A || F && G adalah: " + result2);    
  }
}