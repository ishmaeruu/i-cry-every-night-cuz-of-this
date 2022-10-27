/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package enrollmentsystem;

import java.sql.*;

/**
 *
 * @author Gebruiker
 */
public class DBConnect {
    public Connection con;
    public Statement st;
    public ResultSet rs;
    
    public DBConnect(){
       try{
           Class.forName("com.mysql.jdbc.Driver");
           con = DriverManager.getConnection("jdbc:mysql://localhost:3306/enrollmentsystem?zeroDateTimeBehavior=convertToNull","root","root");
           st = con.createStatement();
        }catch(Exception ex){}
    }
    }
