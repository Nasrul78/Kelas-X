public class Main {
    // Method 1: 2 parameter int
    static int perkalian(int a, int b) {
        return a * b;
    }

    // Method 2: 3 parameter int
    static int perkalian(int a, int b, int c) {
        return a * b * c;
    }

    // Method 3: 2 parameter float
    static float perkalian(float a, float b) {
        return a * b;
    }

    // Method 4: 1 parameter array
    static int perkalian(int[] arr) {
        int result = 1;
        for (int i = 0; i < arr.length; i++) {
            result *= arr[i];
        }
        return result;
    }

    public static void main(String[] args) {
        // 2 * 3 = 6
        System.out.println("2, 3 = " + perkalian(2, 3));

        // 2 * 3 * 4 = 24
        System.out.println("2, 3, 4 = " + perkalian(2, 3, 4));

        // 2.5 * 4.0 = 10.0
        System.out.println("2.5f, 4.0f = " + perkalian(2.5f, 4.0f));

        // 2 * 3 * 4 = 24
        int[] arr = { 2, 3, 4 };
        System.out.println("[2, 3, 4] = " + perkalian(arr));
    }
}