package com.test.hackerRank;

import java.util.Arrays;

public class Balance {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String s = "[()]";
		if (s == null) {
			//return "false";
		} else if (s.length()%2 == 0) {
			String s1 = s.substring(0, s.length()/2);
			String s2 = s.substring(s.length()/2);
	        char[] s1Array = s1.toCharArray();
	        char[] s2Array = s2.toCharArray();
	        Arrays.sort(s1Array);
	        Arrays.sort(s2Array);
	        //String ss1 = String.valueOf(Arrays.sort(s1Array));
	        //String ss1 = String.valueOf(Arrays.sort(s2Array));
	       String ss1 = Arrays.toString(s1Array);
	       String ss2 = Arrays.toString(s2Array);
	        
	        System.out.println(ss1+ " - " + ss2);
		} else {
			//return "false";
		}
	}

}
