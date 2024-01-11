// Problem - 1 : Pair Sum

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

public class PairSum {

    public static int[] twoSum(int[] input, int target) {

        // array value -> array index
        Map<Integer, Integer> map = new HashMap<>();
        map.put(input[0], 0);

        for (int i = 1; i < input.length; i++) {
            if (map.containsKey(target - input[i]))
                return new int[]{map.get(target - input[i]), i};
            else
                map.put(input[i], i);
        }
        return new int[]{-1, -1};
    }

    private static void printArray(int[] arr) {
        System.out.println(Arrays.stream(arr).mapToObj(Long::toString).collect(Collectors.joining(",")));
    }

    public static void main(String[] args) {
        printArray(twoSum(new int[]{3, 2, 5, 4, 1}, 8));  // Return -> [0, 2]
//        printArray(twoSum(new int[]{4, 7, 9, 2, 5, 1}, 5)); // -> [0, 5]
//        printArray(twoSum(new int[]{4, 7, 9, 2, 5, 1}, 3); // -> [3, 5]
    }
}

// Time Complexity - O(n) (linear TC)
// Space Complexity - O(n)
