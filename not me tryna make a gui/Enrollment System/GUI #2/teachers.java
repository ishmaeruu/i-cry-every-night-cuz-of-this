/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package enrollmentsystem;

/**
 *
 * @author Gebruiker
 */
public class teachers {
   int teachid;
   String teachname;
   String teachdept;
   String teachadd;
   String teachnum;
   String teachsts;
   
   DBConnect c = new DBConnect();
    
   public void AddTeach(int id, String name, String dept, String addr, String contact, String status){
       String query = "insert into teachers values("+id+",'"+name+"','"+dept+"','"+addr+"','"+contact+"','"+status+"')";
       try{
       c.st.executeUpdate(query);
       }catch(Exception ex){
       System.out.println("Failed to insert"+ex);
       }
   }
   
   public void DelTeach(String delete){
       if(delete.equals(";")){
           delete = "";
       }
       String query = "delete from teachers where teachid in (select teachid from (select * from teachers "+delete+") as x)";
       try{
       c.st.executeUpdate(query);
       }catch(Exception ex){
       System.out.println("Failed to delete"+ex);
       }
   }

   public void EditTeach(int id, String name, String dept, String addr, String contact, String status){
       String query = "update teachers set teachid='"+id+"', teachname='"+name+"', teachdept='"+dept+"', teachadd='"+addr+"', teachnum='"+contact+"', teachsts='"+status+"' where teachid='"+id+"'";
       try{
       c.st.executeUpdate(query);
       }catch(Exception ex){
       System.out.println("Failed to update"+ex);
       }
   }
}
