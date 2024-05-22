package com.test.hackerRank;

public class HackerAndSQL {
	public HackerAndSQL(String a, String b) {
		
	}
	
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
			for (int i = 0; i < args.length; i++) {
				
			}
	}
	public static void fizzBuzz(int n) {
		
		//SELECT * FROM Products ORDER BY Price ASC|DESC;
		//SELECT * FROM Customers ORDER BY Country ASC, CustomerName DESC;
		//SELECT product, ROUND(price, 2) FROM sales;
		//SELECT name, SUM(total) FROM students GROUP BY name ORDER BY total;
		//SELECT ROUND(235.415, 2) AS RoundValue;
		
//		SELECT CONVERT(DECIMAL(10,2),SUM(PAPostedTotalCostN)) AS Total_Cost 
//		FROM PA01201
//		WHERE PA01201.PAcontid = '00900'       the result will be 443.23

//		SELECT CONVERT(DECIMAL(10,2), 123.3245) as data_t;
		
	    // Write your code here
	        for (int i = 1; i < n +1; i++) {
	            if ((i%3 == 0) && (i%5 == 0)) {
	                System.out.println("FizzBuzz");
	            } else if ((i%3 ==0) && !(i%5 ==0)) {
	                System.out.println("Fizz");
	            } else if ((i%5 ==0) && !(i%3 ==0)) {
	                System.out.println("Buzz");
	            }
	            else if (!(i%5 ==0) && !(i%3 ==0)) {
	                System.out.println(i);
	            }
	        }
	    

	}

}

//List contains
//public static void main(String[] args) {
//    List<Student> list = new ArrayList<>();
//    list.add(new Student(1, "Zara"));
//    list.add(new Student(2, "Mahnaz"));
//    list.add(new Student(3, "Ayan"));
//    System.out.println("List: " + list);
//    Student student = new Student(3, "Ayan");
//    Student missingStudent = new Student(4, "Aman");
//    System.out.println("Ayan is present at: " + list.indexOf(student));
//    System.out.println("Aman index: " + list.indexOf(missingStudent));
//    System.out.println("List contains Ayan: " + list.contains(student));
//    System.out.println("List contains Aman: " + list.contains(missingStudent));
// }


