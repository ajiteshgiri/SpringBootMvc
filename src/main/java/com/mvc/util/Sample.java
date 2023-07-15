package com.mvc.util;

public class Sample {
	
	Sample(){
		System.out.println("hello constructor");
	}
	Sample(int i){
		System.out.println("hello parameter");
	}
	
	{
		System.out.println("empty block");
	}
	
	static {
		System.out.println("hello ajitesh");
	}
	
public static void main(String[] args) {
	
	if(true) {
		int x = 60;
		System.out.println(x);
	}
	
	Sample s2 = new Sample();
	Sample s = new Sample(1);
}
}
