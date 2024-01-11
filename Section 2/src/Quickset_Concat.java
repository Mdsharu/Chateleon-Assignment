// Problem - 2 : QuickSet Concat -->
// Used Dynamic programming to solve this qn


import java.util.Arrays;

public class Quickset_Concat {

    public static int quickestConcat(String inputString, String[] words) {
        int n = inputString.length();
        // dp array is used to store the minimum number of words needed for each substring of the input string.
        int[] dp = new int[n + 1];
        Arrays.fill(dp, Integer.MAX_VALUE);
        dp[0] = 0;

        for (int i = 1; i <= n; i++) {
            for (String word : words) {
                int len = word.length();
                if (i >= len && inputString.substring(i - len, i).equals(word)) {
                    dp[i] = Math.min(dp[i], dp[i - len] + 1);
                }
            }
        }

        return (dp[n] == Integer.MAX_VALUE) ? -1 : dp[n];   // The final result is obtained from the last element of the dp array.
    }

    public static void main(String[] args) {
        String inputString = "leetcode";
        String[] wordsArray = {"leet", "code"};
        System.out.println(quickestConcat(inputString, wordsArray));  // Output: 2
    }
}
