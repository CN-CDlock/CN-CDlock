#include <stdio.h>
#include  <math.h>
int main()
{
	 double  a,b,c,d;
	  double e;
	  //double f,g; 
	 scanf("%lf",&a);
	 scanf("%lf",&b);
	 c=a;      
	 d=0;
	  for(;c<b;) { 
	  
	  c =c+0.00001;
	  e=(abs(a*100-c*100))/(abs(a-b) ) ;  
	   //f=abs(a*100-c*100);  
	  //g=abs(a-b);
	  //printf("%lf   %lf  ",f,g);
	    d=d+((4*c*c*c+3*c*c+abs(c)*c)*0.00001);
	   printf ("c=%lf   当前进度：%.0lf%%\n",c,e);  
	   }  
	    printf("%lf",d); 
	    scanf(" ");    
	        
                            
	    
}          
