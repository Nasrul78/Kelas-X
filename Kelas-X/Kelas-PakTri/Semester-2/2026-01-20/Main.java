import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner inputUser = new Scanner(System.in);
    Scanner inputAbsen = new Scanner(System.in);

    System.out.print("Inputkan nama anda: ");
    String nama = inputUser.nextLine();
    
    System.out.print("Inputkan absen anda: ");
    int absen = inputAbsen.nextInt();

    System.out.println("Nama yang di input: " + nama);
    System.out.println("Absen yang di input: " + absen);
  }
}
