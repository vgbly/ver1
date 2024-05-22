package com.quiz.fileio;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;
import java.util.Scanner;

import org.apache.commons.lang3.StringUtils;

import com.google.gson.Gson;
import com.json.been.KeyDataBean;
import com.json.been.SlideDataBean;

public class GetJson {

	public static void main(String[] args) {
		//String filePath1 = "E:\\Apache\\UwAmp\\www\\ws\\School\\src\\main\\webapp";
		String filePath = "E:\\Apache\\UwAmp\\www\\ws\\School\\src\\main\\webapp";
		//String inFile = filePath + "\\dataio\\cna1.txt";
		//String outFile = filePath + "\\html\\json\\cna1.json";
		String key = filePath + "\\html\\json\\newkey.json";
		ArrayList<KeyDataBean> kd =  readKeyJson(key);
		for (Iterator<KeyDataBean> iterator = kd.iterator(); iterator.hasNext();) {
			KeyDataBean keyData = (KeyDataBean) iterator.next();
			String sid = keyData.getSourceid();
			if (sid.equals("nh")) {
				ArrayList<String> al = readNH(filePath+ "\\dataio\\" + sid + ".txt");
				write(filePath + "\\html\\json\\" + sid + ".json", al, keyData.getPatternid());
			} else {
				ArrayList<String> al = readCN(filePath+ "\\dataio\\" + sid + ".txt");
				write(filePath + "\\html\\json\\" + sid + ".json", al, keyData.getPatternid());
			}
		}
		//ArrayList<String> al = readCN(inFile);
		//write(outFile, al);
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

	public static void write(String fn, ArrayList<String> al, String pattern) {
		try {
			FileWriter myWriter = new FileWriter(fn);
			List<SlideDataBean> sdl = new ArrayList<SlideDataBean>();
			int length = al.size();
			int i = 0;
			for (String line : al) {
				String[] arrSplit = line.split(":");
				SlideDataBean sd = new SlideDataBean();
				sd.setId(pattern + (i + 1));
				sd.setWord(arrSplit[0]);
				sd.setDesc(arrSplit[1]);

				sdl.add(sd);
				i++;
			}
			Gson gson = new Gson();
			String json = gson.toJson(sdl);
			myWriter.write(json);
			myWriter.close();
			System.out.println("Successfully wrote to the file.");
		} catch (IOException e) {
			System.out.println("An error occurred.");
			e.printStackTrace();
		}
	}

	public static ArrayList<String> readCN(String fn) {
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

	public static ArrayList<String> readNH(String fn) {
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
					addLine = data + ":";
					idno++;
				} else {
					addLine = addLine + " " + data;
				}
			}
			al.add(addLine);
			myReader.close();

		} catch (FileNotFoundException e) {
			System.out.println("An error occurred.");
			e.printStackTrace();
		}
		return al;
	}
	
	public static ArrayList<KeyDataBean> readKeyJson(String fn) {
		//ArrayList<KeyData> al = new ArrayList<KeyData>();
		String keyString = "";
		try {
			File myObj = new File(fn);
			Scanner myReader = new Scanner(myObj);
			while (myReader.hasNextLine()) {
				String data = myReader.nextLine();
				keyString = keyString + data;
			}
			
			myReader.close();
		} catch (FileNotFoundException e) {
			System.out.println("An error occurred.");
			e.printStackTrace();
		}
		Gson gson = new Gson();
		KeyDataBean[] keyData = gson.fromJson(keyString, KeyDataBean[].class);
		
		ArrayList<KeyDataBean> al = new ArrayList<KeyDataBean>(Arrays.asList(keyData));
		//al = Arrays.asList(keyData);
		//System.out.println(keyString);
		//System.out.println(keyData[2].getTopic());
		//System.out.println(al.get(1).getTopic());
		
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
