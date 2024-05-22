package com.test.hackerRank;

import java.util.Arrays;
import java.util.List;

public class PrimeNumber {
	static boolean isPrime(int n)
    {
        // Corner case
        if (n <= 1)
            return false;
 
        // Check from 2 to sqrt(n)
        for (int i = 2; i <= Math.sqrt(n); i++)
            if (n % i == 0)
                return false;
 
        return true;
    }
 
    // Driver Program
    public static void main(String args[])
    {
        if (isPrime(11))
            System.out.println(" true");
        else
            System.out.println(" false");
        if (isPrime(15))
            System.out.println(" true");
        else
            System.out.println(" false");
        
      //String array to array list
        String[] array = {"a", "b", "c", "d", "e"};

        //Method 1
        List<String> list = Arrays.asList(array);     
       
        System.out.println(list);
        
    }
    
    
    
}
