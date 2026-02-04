import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner inputUser = new Scanner(System.in);

    // String
    System.out.print("Inputkan nama anda: ");
    String nama = inputUser.nextLine();
    
    // Integer
    System.out.print("Inputkan absen anda: ");
    int absen = inputUser.nextInt();

    // Boolean
    System.out.print("Apakah anda sudah dewasa? (true/false): ");
    boolean isDewasa = inputUser.nextBoolean();

    // Double
    System.out.print("Inputkan tinggi anda: ");
    double tinggi = inputUser.nextDouble();

    // Char
    System.out.print("Inputkan jenis kelamin anda: ");
    char jenisKelamin = inputUser.next().charAt(0);

    // Output
    System.out.println("Nama yang di input: " + nama);
    System.out.println("Absen yang di input: " + absen);
    System.out.println("Apakah anda sudah dewasa? " + isDewasa);
    System.out.println("Tinggi anda: " + tinggi);
    System.out.println("Jenis kelamin anda: " + jenisKelamin);

    inputUser.close();
  }
}
