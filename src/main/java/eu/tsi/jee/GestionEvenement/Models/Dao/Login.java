package eu.tsi.jee.GestionEvenement.Models.Dao;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "login")
public class Login {
    @Id
    @GeneratedValue(generator = "increment")
    @GenericGenerator(name="increment",strategy = "increment")
    @Column(name="id")
    private long id;
    @Column(name="nom",nullable = false)
    private String nom;
    @Column(name="prenom",nullable = false)
    private String prenom;
    @Column(name="privilege",nullable = false)
    private String privilege;
    @Column(name="login",nullable = false)
    private String login;
    @Column(name="password",nullable = false)
    private String password;
    @Column(name="create_date",nullable = false)
    private String create_date;
    @Column(name="last_connection",nullable = true)
    private String last_connection;
    public Login(){

    }
    public Login(String nom, String prenom, String privilege, String login, String password, String create_date, String last_connection) {
        this.nom = nom;
        this.prenom = prenom;
        this.privilege = privilege;
        this.login = login;
        this.password = password;
        this.create_date = create_date;
        this.last_connection = last_connection;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public String getPrivilege() {
        return privilege;
    }

    public void setPrivilege(String privilege) {
        this.privilege = privilege;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getCreate_date() {
        return create_date;
    }

    public void setCreate_date(String create_date) {
        this.create_date = create_date;
    }

    public String getLast_connection() {
        return last_connection;
    }

    public void setLast_connection(String last_connection) {
        this.last_connection = last_connection;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Login login1 = (Login) o;
        return id == login1.id && Objects.equals(nom, login1.nom) && Objects.equals(prenom, login1.prenom) && Objects.equals(privilege, login1.privilege) && Objects.equals(login, login1.login) && Objects.equals(password, login1.password) && Objects.equals(create_date, login1.create_date) && Objects.equals(last_connection, login1.last_connection);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, nom, prenom, privilege, login, password, create_date, last_connection);
    }

    @Override
    public String toString() {
        StringBuilder builder = new StringBuilder();
        builder.append("{\"id\" :");
        builder.append(id);
        builder.append(", \"nom\" :\"");
        builder.append(nom);
        builder.append("\", \"prenom\" :\"");
        builder.append(prenom);
        builder.append("\", \"privilege\" :\"");
        builder.append(privilege);
        builder.append("\", \"login\" :\"");
        builder.append(login);
        builder.append("\", \"password\" :\"");
        builder.append(password);
        builder.append("\", \"create_date\" :\"");
        builder.append(create_date);
        builder.append("\", \"last_connection\" :\"");
        builder.append(last_connection);
        builder.append("\"}");
        return builder.toString();
    }
}
