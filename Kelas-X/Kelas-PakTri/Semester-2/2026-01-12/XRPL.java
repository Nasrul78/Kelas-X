public class XRPL {
    public static void main(String[] args) {
        byte varByte = 10;
        short varShort = 1000;
        int varInt = 100;
        long varLong = 100000L;
        float varFloat = 3.14f;
        double varDouble = 3.14159;
        char varChar = 'A';
        boolean varBoolean = true;
        int[] varArray = {0, 2, 3, 1, 4};

        System.out.println(varByte);
        System.out.println(varShort);
        System.out.println(varInt);
        System.out.println(varLong);
        System.out.println(varFloat);
        System.out.println(varDouble);
        System.out.println(varChar);
        System.out.println(varBoolean);

        for (int i = 0; i < varArray.length; i++) {
            System.out.print(varArray[i] + ", ");
        }
        
        int angka = 100;
        angka = 10;

        System.out.println(angka);
        System.out.println("Angka yang anda inputkan: " + angka);

        angka = 100;
        System.out.println("Angka terbaru adalah: " + angka);
    }
}