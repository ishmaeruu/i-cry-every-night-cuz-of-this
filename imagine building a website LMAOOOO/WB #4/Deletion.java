import java.util.*;

public class Deletion{
    public static void main(String[] args){
        String[] list = new String[20];

        try (Scanner inp = new Scanner(System.in)){
            int found = 0;
            int x, size;
            int search;
            System.out.println("Please enter the size of the array: ");
            size = inp.nextInt();
            int array[] = new int[size];
            System.out.println("Please enter the elements of the array: ");
            for (int i=0; i < size; i++){
                list[i] = inp.next();
            }
            System.out.println("Please enter the element you want to find in the array: ");
            search = inp.nextInt();
            for(int i = 0; i < size; i++){
                if (array[i] == search){
                    System.out.println("The element "+search+" was found at position ["+i+"]");
                    found = 1;
                    break;
                }
            }
            if (found == 0){
                System.out.println("Sorry. The element was NOT found.");
            }
            System.out.println("These are the elements of the array: ");
            for (String element : list){
                System.out.println(element);
            }
            System.out.println("Please choose a location that you want to delete: ");
            int location = inp.nextInt();
            for (int i = 0; i < location - 1; i++){
                list[i] = list[i + 1];
            }
            location--;
        }
        for (int i = 0; i < list.length; i++){
            System.out.print(list[i]+" ");
        }
    }
}