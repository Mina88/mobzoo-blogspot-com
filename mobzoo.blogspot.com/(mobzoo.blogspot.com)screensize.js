// for NN4/IE4
if (self.screen) {     
        width = screen.width
        height = screen.height
}

// for NN3 w/Java
else if (self.java) {   
       var javakit = java.awt.Toolkit.getDefaultToolkit();
       var scrsize = javakit.getScreenSize();       
       width = scrsize.width; 
       height = scrsize.height; 
}
else {

// N2, E3, N3 w/o Java (Opera and WebTV)
width = height = '?' 
}
 
document.write(" "+ width +"x"+ height) 
      
//-->