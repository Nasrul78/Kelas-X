import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    // Percabangan
    int nilai;
    Scanner InputUser = new Scanner(System.in);

    System.out.print("Masukkan nilai: ");
    nilai = InputUser.nextInt();
    System.out.println("Nilai: " + nilai);

    if (nilai >= 70) {
      System.out.println("Lulus");
    } else {
      System.out.println("Tidak Lulus");
    }

    // Zodiak
    System.out.print("Masukkan tanggal lahir: ");
    int tanggal = InputUser.nextInt();
    System.out.print("Masukkan bulan lahir: ");
    int bulan = InputUser.nextInt();
    System.out.print("Masukkan tahun lahir: ");

    System.out.println("Zodiak: " + zodiak(tanggal, bulan, tahun));
  }
}