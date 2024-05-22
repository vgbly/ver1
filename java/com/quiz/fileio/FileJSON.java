package com.quiz.fileio;

import java.io.File;  // Import the File class
import java.io.IOException;  // Import the IOException class to handle errors
import java.io.FileWriter; 
import java.io.FileNotFoundException;  // Import this class to handle errors
import java.util.ArrayList;
import java.util.Scanner; // Import the Scanner class to read text files


public class FileJSON {

	//File myObj = new File("C:\\Users\\MyName\\filename.txt");
	String filePath = "E:\\JSONDataFiles\\";
	String inFile = filePath + "GeometryIn.txt";
	String outFile = filePath + "GeometryOut.txt";
	
	public static void main(String[] args) { 
		String filePath = "E:\\JSONDataFiles\\";
		String inFile = filePath + "GeometryIn.txt";
		String outFile = filePath + "GeometryOut.txt";
		ArrayList<String> al = read(inFile);
		write(outFile, al);
	}
	
	public static void create(String fn) {
	    try {
	      File myObj = new File(fn);
	      if (myObj.createNewFile()) {
	        System.out.println("File created: " + myObj.getName());
	      } else {
	        System.out.println("File already exists.");
	      }
	    } catch (IOException e) {
	      System.out.println("An error occurred.");
	      e.printStackTrace();
	    }
	  }
	
	public static void write(String fn, ArrayList<String> al) {
	    try {
	      FileWriter myWriter = new FileWriter(fn);
	      for( String line : al) {
	    	  myWriter.write("\"" + line + "\"\n");
	      }
	      myWriter.write("Files in Java might be tricky, but it is fun enough!");
	      //myWriter.write("Files in Java might be tricky, but it is fun enough!");
	      myWriter.close();
	      System.out.println("Successfully wrote to the file.");
	    } catch (IOException e) {
	      System.out.println("An error occurred.");
	      e.printStackTrace();
	    }
	  }
	public static ArrayList<String> read(String fn) {
		ArrayList<String> al = new ArrayList<>();
	    try {
	      File myObj = new File(fn);
	      Scanner myReader = new Scanner(myObj);
	      while (myReader.hasNextLine()) {
	        String data = myReader.nextLine();
	        System.out.println(data);
	        al.add(data);
	      }
	      myReader.close();
	      
	    } catch (FileNotFoundException e) {
	      System.out.println("An error occurred.");
	      e.printStackTrace();
	    }
	    return al;
	  }
	
	public static void delete(String fn) { 
	    File myObj = new File(fn); 
	    if (myObj.delete()) { 
	      System.out.println("Deleted the file: " + myObj.getName());
	    } else {
	      System.out.println("Failed to delete the file.");
	    } 
	  } 
	
}
