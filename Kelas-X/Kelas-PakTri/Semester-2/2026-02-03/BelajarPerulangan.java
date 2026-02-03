import java.util.Scanner;

public class BelajarPerulangan {
  public static void main(String[] args) {
    // Perulangan Nama
    Scanner inputUser = new Scanner(System.in);

    System.out.print("Masukkan nama Anda: ");
    String nama = inputUser.nextLine();

    System.out.print("Masukkan jumlah perulangan: ");
    int jumlah = inputUser.nextInt();

    for (int i = 1; i <= jumlah; i++) {
      System.out.println(i + ". " + nama);
    }

    // Segitiga Siku-siku Sudut Kanan Bawah
    System.out.print("Masukkan tinggi segitiga: ");
    int tinggi = inputUser.nextInt();

    System.out.println("Segitiga Siku-siku Sudut Kanan Bawah");
    for (int i = 1; i <= tinggi; i++) {
      for (int j = 1; j <= i; j++) {
        System.out.print("*");
      }
      System.out.println();
    }

    // Segitiga Siku-siku Sudut Kiri Bawah
    System.out.println("Segitiga Siku-siku Sudut Kiri Bawah");
    for (int i = tinggi; i >= 1; i--) {
      for (int j = 1; j <= i; j++) {
        System.out.print("*");
      }
      System.out.println();
    }

    // Segitiga Siku-siku Sudut Kanan Atas
    System.out.println("Segitiga Siku-siku Sudut Kanan Atas");
    for (int i = tinggi; i >= 1; i--) {
      for (int j = 1; j <= tinggi - i + 1; j++) {
        System.out.print(" ");
      }

      for (int j = 1; j <= i; j++) {
        System.out.print("*");
      }
      System.out.println();
    }

    // Segitiga Siku-siku Sudut Kiri Atas
    System.out.println("Segitiga Siku-siku Sudut Kiri Atas");
    for (int i = tinggi; i >= 1; i--) {
      for (int j = 1; j <= i; j++) {
        System.out.print(" ");
      }

      for (int j = 1; j <= tinggi - i + 1; j++) {
        System.out.print("*");
      }
      System.out.println();
    }

    inputUser.close();
  }
}