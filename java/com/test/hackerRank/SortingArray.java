package com.test.hackerRank;

import java.util.Arrays;
import java.util.Collections;

public class SortingArray {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String[] ar = {"Hi", "How", "Are", "You", "String", "Example"};
		Arrays.sort(ar);
		System.out.println("Assending " + Arrays.toString(ar));
		
		Arrays.sort(ar, Collections.reverseOrder());
		System.out.println("Descending " + Arrays.toString(ar));
		
		int[] ari = {5, 10, 4, 0, 8, 12, 22};
		Arrays.sort(ari);
		System.out.println("Assending " + Arrays.toString(ari));
		Integer[] intarr = new Integer[ari.length];
		for (int i = 0; i < ari.length; i++) {
			intarr[i] = Integer.valueOf(ari[i]);
		}
		Arrays.sort(intarr, Collections.reverseOrder());
		System.out.println("Descending " + Arrays.toString(intarr));

	}
	//Convert int[] to Integer[]
	public static int[] toPrimitive(Integer[] IntegerArray) {

		int[] result = new int[IntegerArray.length];
		for (int i = 0; i < IntegerArray.length; i++) {
			result[i] = IntegerArray[i].intValue();
		}
		return result;
	}

}
