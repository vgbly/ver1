package com.test.hackerRank;

import java.io.CharArrayWriter;
import java.util.Arrays;
import java.util.Iterator;

public class Anagram {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String inword = "magicsa";
		//areTwoWordsAnagram("fatman", "manfat");
		//splitOneWordTwoHalfs(inword);
		//replaceNonCommonlettersFromTwoWords("mn", "op");
		//uncommonChars("fdhlvosf", "pafhalll");
		//uncommonChars("mvdalvk", "iopaufl");
		//uncommonChars("xaxb", "bbxx");
		makeAnagram2("fdhlvosf", "pafhalll");
	}
	
	public static int splitIntoTwoAndAnagramPossiblities(String s) {
		int length = s.length();
	    if (length%2 != 0) {
	        return -1;
	    } else {
	        String s1 = s.substring(0, length/2);
	        String s2 = s.substring(length/2);
	        char[] s1Array = s1.toCharArray();
	        char[] s2Array = s2.toCharArray();
	 
	        Arrays.sort(s1Array);
	        Arrays.sort(s2Array);
	 
	        int i = 0, j = 0, count = 0;
	 
	        // Compare characters in sorted arrays
	        while (i < s1Array.length && j < s2Array.length) {
	            if (s1Array[i] == s2Array[j]) {
	                i++;
	                j++;
	            } else if (s1Array[i] < s2Array[j]) {
	                i++;
	                count++;
	            } else {
	                j++;
	                count++;
	            }
	        }
	 
	        // Count the remaining characters in both arrays
	        count += (s1Array.length - i) + (s2Array.length - j);
	        return count/2;
	    }
	    
	}
	public static void areTwoWordsAnagram(String string1, String string2) {
		if (string1.length() != string2.length()) {
			//not anagrams
			System.out.println(-1);
	    }
		
		//String to char []
	    char[] c1 = string1.toCharArray();
	    char[] c2 = string2.toCharArray();
	    char c = 'A';
	    String cs = Character.toString(c);
	    
	    Arrays.sort(c1);
	    Arrays.sort(c2);
	    //Char [] to string
	    System.out.println(new String(c1) + " " + new String(c2));
	    
	    System.out.println(Arrays.equals(c1, c2));
	    //System.out.println(a1.equals(a2));
	}
	public static void makeAnagram2(String s1, String s2) {
		// Convert strings to character arrays and sort them
        char[] s1Array = s1.toCharArray();
        char[] s2Array = s2.toCharArray();
 
        Arrays.sort(s1Array);
        Arrays.sort(s2Array);
 
        int i = 0, j = 0, count = 0;
 
        // Compare characters in sorted arrays
        while (i < s1Array.length && j < s2Array.length) {
            if (s1Array[i] == s2Array[j]) {
                i++;
                j++;
            } else if (s1Array[i] < s2Array[j]) {
                i++;
                count++;
            } else {
                j++;
                count++;
            }
        }
 
        // Count the remaining characters in both arrays
        count += (s1Array.length - i) + (s2Array.length - j);
        System.out.println( count / 2);
	}
	public static void makeAnagram(String s1, String s2) {
		
	        int count = 0;
	 
	        // store the count of character
	        int char_count[] = new int[26];
	 
	        // iterate though the first String and update 
	        // count
	        for (int i = 0; i < s1.length(); i++) 
	            char_count[s1.charAt(i) - 'a']++;        
	 
	        // iterate through the second string
	        // update char_count.
	        // if character is not found in char_count
	        // then increase count
	        for (int i = 0; i < s2.length(); i++) 
	        {
	            char_count[s2.charAt(i) - 'a']--;
	        }
	       
	        for(int i = 0; i < 26; ++i)
	        {
	          if(char_count[i] != 0)
	          {
	            count+= Math.abs(char_count[i]);
	          }
	        }
	         
	        System.out.println( count / 2);
		/*
		n = s.length
		        return -1 if n % 2 == 1
		    n /= 2
		    a = s[0, n].split('').sort
		    b = s[n, s.length/2].split('').sort
		    if a == b
		        return 0
		    end
		    hash_a = Hash.new(0)
		    hash_b = Hash.new(0)
		    a.each{|i| hash_a[i] += 1}
		    b.each{|j| hash_b[j] += 1}
		    keys = hash_a.keys & hash_b.keys
		    
		    a1 = hash_a.select{ |k, v| keys.include? k }
		    b1 = hash_b.select{ |k, v| keys.include? k }
		    # num1 = a1.values.sum
		    # num2 = b1.values.sum
		    # print a, b, hash_a, hash_b , keys , a1, b1,num1, num2, "\n"
		    total = 0
		    for i in keys 
		        total += [hash_a[i], hash_b[i]].min        
		    end
		    return n - total
		    */
	}
	public static void uncommonChars(String s1, String s2) {
		char[] c1 = s1.toCharArray();
		char[] c2 = s2.toCharArray();
		CharArrayWriter uncommon1 = new CharArrayWriter(); 
		CharArrayWriter uncommon2 = new CharArrayWriter(); 
		int count1 = 0;
		int count2 = 0;
		boolean notmatch = false;
		//Arrays.sort(c1);
		//Arrays.sort(c2);
		for (int i = 0; i < c2.length; i++) {
			if ( s1.indexOf(c2[i]) == -1 ) {
				count1 = count1 +1;
			} else if (s1.indexOf(c2[i]) == -1 && uncommon1.toString().indexOf(c2[i]) == -1) {
				uncommon1.append(c2[i]); 
			}
		}
		
		for (int i = 0; i < c1.length; i++) {
			if ( s2.indexOf(c1[i]) == -1 ) {
				count2 = count2 +1;
			} else if (s2.indexOf(c1[i]) == -1 && uncommon2.toString().indexOf(c1[i]) == -1) {
				uncommon2.append(c1[i]); 
			}
		}
		
		if (count1==count2) {
				System.out.println(count1);
		} else if (count1 > count2)  {
			int diff = 0;
			if (count2 != 0) diff = count1-count2;
			System.out.println(count1+diff);
		} else if (count1 < count2)  {
			int diff = 0;
			if (count1 != 0) diff =  count2 - count1;
			System.out.println(count2+diff);
		}
		//System.out.println(uncommon1.toString()+count1 + " " + uncommon2.toString()+count2);
		
		System.out.println("count1 = " + count1 + " count2 = " +count2);
	}
	public static void splitOneWordTwoHalfs(String inword) {
		//Split a word into two halfs, -1 if odd # of letters
		int length = inword.length();
	    if (length%2 != 0) {
	        System.out.println(-1);
	    } else {
	        //public String substring(int start, int end)
	    	
	    	System.out.println(inword.substring(0, length/2));
	    	System.out.println(inword.substring(length/2));
	    }
		
	}

}
