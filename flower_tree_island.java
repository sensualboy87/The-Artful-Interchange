public class TheArtfulInterchange {
    
    public static void main(String[] args) {
    
        System.out.println("The Artful Interchange of Data and Code");
    
        //Declarations
        int count = 0;
        boolean running = true;
        double randDouble = Math.random();
        
        //Loop
        while (running) {
            count++;
            System.out.println("Iteration: " + count);
            //Random Math
            randDouble+= Math.sqrt(randDouble);
            System.out.println("Random Number: " + randDouble);
            
            //Output to terminal
            String text = (count == 10) ? "Minimum iterations achieved" : "Continue looping";
            System.out.println(text);
            
            //Logic
            running = (count < 10);
            
            //Increment count
            count++;
        }
        //Conclusion
        System.out.println("Loop complete!");
    }
}