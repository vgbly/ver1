package com.test.hackerRank;

public class Town {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		// only 4 stops
		//int [] town = {120, 0, 4, 8, 12, 0, 13}; //141
		//int [] town = {1, 14, 4, 8, 12, 100, 13}; //140
		//int [] town = {12, 5, 4, -80, 12, 100, 13, -16, 20}; //149
		int [] town = {12, 5, 42, -80, 12, 10, 13, -16, 20, 43, 98}; //200
		
		int total = town[0];
		
		for (int i = 1; i < town.length; i++) {
			//int cost1 = town[i];
			if (i+2 < town.length && town[i] + town[i+1] <= town[i+2]) {
				total = total + town[i+2];
				i = i + 2;
				System.out.println("+3 is grater "+ town[i+2] +" total = " + total);
			} else {
				total = total + town[i];
				System.out.println("i is grater  "+ town[i] +" total = " + total);
			}
			
			/*
			if (i+3 <= town.length && town[i] >= town[i+3]) {
				total = total + town[i];
			} else if (i+3 <= town.length){
				total = total + town[i+3];
				i = i +3;
			} else {
				total = total + town[i];
			}
			*/
			
		}
		
		System.out.println(total);
		

	}

}
