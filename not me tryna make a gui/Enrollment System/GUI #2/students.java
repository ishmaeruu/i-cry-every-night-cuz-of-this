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
public class students {
   int studid;
   String studname;
   String studadd;
   String studcrs;
   String studgend;
   String yrlvl;
   
   DBConnect a = new DBConnect();
    
   public void AddStud(int id, String name, String addr, String course, String gender, String yr){
       String query = "insert into students values("+id+",'"+name+"','"+addr+"','"+course+"','"+gender+"','"+yr+"')";
       try{
       a.st.executeUpdate(query);
       }catch(Exception ex){
       System.out.println("Failed to insert"+ex);
       }
   }
   
   public void DelStud(String delete){
       if(delete.equals(";")){
           delete = "";
       }
       String query = "delete from students where studid in (select studid from (select * from students "+delete+") as x)";
       try{
       a.st.executeUpdate(query);
       }catch(Exception ex){
       System.out.println("Failed to delete"+ex);
       }
   }

   public void EditStud(int id, String name, String addr, String course, String gender, String yr){
       String query = "update students set studid='"+id+"', studname='"+name+"', studadd='"+addr+"', studcrs='"+course+"', studgend='"+gender+"', yrlvl='"+yr+"' where studid='"+id+"'";
       try{
       a.st.executeUpdate(query);
       }catch(Exception ex){
       System.out.println("Failed to update"+ex);
       }
   }
}
