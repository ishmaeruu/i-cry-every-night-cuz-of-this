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
public class subjects {
   int subjid;
   String subjcode;
   String subjdesc;
   int subjunit;
   String subjsched;
   
   DBConnect b = new DBConnect();
    
   public void AddSubj(int id, String code, String desc, int unit, String sched){
       String query = "insert into subjects values("+id+",'" +code+"','"+desc+"','"+unit+"','"+sched+"')";
       try{
       b.st.executeUpdate(query);
       }catch(Exception ex){
       System.out.println("Failed to insert"+ex);
       }
   }
   
   public void DelSubj(int id){
       String query = "delete from subjects where subjid='"+id+"'";
       try{
       b.st.executeUpdate(query);
       }catch(Exception ex){
       System.out.println("Failed to delete"+ex);
       }
   }

   public void EditSubj(int id, String code, String desc, int unit, String sched){
       String query = "update subjects set subjid='"+id+"',subjcode='"+code+"',subjdesc='"+desc+"',subjunit='"+unit+"',subjsched='"+sched+"' where subjid='"+id+"'";
       try{
       b.st.executeUpdate(query);
       }catch(Exception ex){
       System.out.println("Failed to update"+ex);
       }
   } 
}
