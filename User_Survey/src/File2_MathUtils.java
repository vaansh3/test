public class MathUtils {

    public int sumArray(int[] arr) {
        int total = 0;
        for (int i = 0; i < arr.length; i++) {
            total += arr[i];
        }
        return total;
    }

    public int sumArraySafe(int[] arr) {
        if (arr == null || arr.length == 0) {
            return 0;
        }
        int total = 0;
        for (int i = 0; i < arr.length; i++) {
            total += arr[i];
        }
        return total;
    }

}
