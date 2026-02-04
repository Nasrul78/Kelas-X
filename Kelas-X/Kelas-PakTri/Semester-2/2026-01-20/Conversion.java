public class Conversion {
    public static void main(String[] args) {
        // Konversi String ke Int
        String nilaiString = "123";
        int nilaiInt = Integer.valueOf(nilaiString);

        System.out.println("nilaiString: " + nilaiString);
        System.out.println("nilaiInt: " + nilaiInt);

        // Konversi Double ke Int
        double nilaiDouble = 9.78;
        int nilaiInt2 = (int) nilaiDouble;
        System.out.println("nilaiDouble: " + nilaiDouble);
        System.out.println("nilaiInt2: " + nilaiInt2);

        // Konversi Int ke double
        int nilaiInt3 = 10;
        double nilaiDouble2 = (double) nilaiInt3;
        System.out.println("nilaiInt3: " + nilaiInt3);
        System.out.println("nilaiDouble2: " + nilaiDouble2);

        // Konversi String ke Int
        String nilaiString2 = "456";
        int nilaiInt5 = Integer.parseInt(nilaiString2);
        System.out.println("nilaiString2: " + nilaiString2);
        System.out.println("nilaiInt5: " + nilaiInt5);

        // Konversi Int ke String
        int nilaiInt4 = 789;
        String nilaiString3 = String.valueOf(nilaiInt4);
        System.out.println("nilaiInt4: " + nilaiInt4);
        System.out.println("nilaiString3: " + nilaiString3);
    }
}
