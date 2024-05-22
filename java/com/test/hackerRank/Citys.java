package com.test.hackerRank;

public class Citys {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int n = 8;
		int[] cost = {3, 5, 4};
		for (int i = 0; i < args.length; i++) {
			
		}
	}
	public int minCost( int n)
	{
		
		//Minimum cost to get to n+1 th citi
		int [] cost = {3,5,4,6};
	 
	    // To store the total cost
	    int totalCost = 0;
	 
	    // Start from the first city
	    int boardingBus = 0;
	 
	    for (int i = 1; i < n; i++) {
	 
	        // If found any city with cost less than
	        // that of the previous boarded
	        // bus then change the bus
	        if (cost[boardingBus] > cost[i]) {
	 
	            // Calculate the cost to travel from
	            // the currently boarded bus
	            // till the current city
	            totalCost += ((i - boardingBus) * cost[boardingBus]);
	 
	            // Update the currently boarded bus
	            boardingBus = i;
	        }
	    }
	 
	    // Finally calculate the cost for the
	    // last boarding bus till the (N + 1)th city
	    totalCost += ((n - boardingBus) * cost[boardingBus]);
	    return totalCost;
	}

}
