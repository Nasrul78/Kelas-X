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

    InputUser.close();
  }
}