package com.quiz.fileio;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Scanner;
import java.util.regex.Pattern;

import org.apache.commons.lang3.StringUtils;

public class FileNH {
	
	
		public static void main(String[] args) { 
			//System.out.println("File created: ".substring(0, 3));
			String filePath = "E:\\eclipse-SDK-4.27-win32-x86_64\\WorkSpace\\School\\src\\main\\webapp";
			String inFile = filePath + "\\dataio\\nh.txt";
			String outFile = filePath + "\\html\\jsdata\\nh.js";
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
		      
		      myWriter.write("const glossary = [\n");
		      int length = al.size();
		      int i = 0;
		      for( String line : al) {
		    	  System.out.println(line);
		    	  String[] arrSplit = line.split(":");
		    	  myWriter.write("\t{\n");
		    	  myWriter.write("\t\tid: \"" + "C" + (i+1) + "\",\n");
		    	  myWriter.write("\t\tword: \"" + arrSplit[0] + "\",\n");
		    	  myWriter.write("\t\tdesc: \"" + arrSplit[1] + "\"\n");
		    	  i++;
		    	  if (i == length) {
		    		  myWriter.write("\t}\n");
		    	  } else {
		    		  myWriter.write("\t},\n");
		    	  }
		      }
		      myWriter.write("];");
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
		      int idno = 1;
		      String addLine = "";
		      while (myReader.hasNextLine()) {
		        String data = myReader.nextLine();
		        boolean isupper = StringUtils.isAllUpperCase(data.substring(0, 3));
		        if (isupper) {
		        	if (addLine != null && !addLine.equals("")) {
		        		al.add(addLine);
		        	}
		        	addLine = "";
		        	//addLine = "C" + idno + " - " + data + ":";
		        	addLine = data + ":";
		        	idno++;
		        } else {
		        	addLine = addLine + " " + data;
		        }
		        //al.add(addLine);
		        //System.out.println(addLine);
		        
		      }
		      al.add(addLine);
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
