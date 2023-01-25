package eu.tsi.jee.GestionEvenement.Models.Dao;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Objects;
@Entity
@Table(name="participant")
public class Participant {
    @Id
    @GeneratedValue(generator = "increment")
    @GenericGenerator(name="increment",strategy = "increment")
    @Column(name="id")
    private long id;
    @Column(name="nom",nullable = false)
    private String nom;
    @Column(name="prenom",nullable = false)
    private String prenom;
    @Column(name="mail",nullable = false)
    private String mail;
    @Column(name="date_naiss",nullable = false)
    private String date_naiss;
    @Column(name="entreprise",nullable = false)
    private String entreprise;
    @Column(name="observation",nullable = false)
    private String observation;
    @ManyToOne
    @JoinColumn(name = "event_id")
    private Evenement evenement;

    public Participant(){
    }

    public Participant( String nom, String prenom, String mail, String date_naiss, String entreprise, String observateur, Evenement evenement) {
        this.nom = nom;
        this.prenom = prenom;
        this.mail = mail;
        this.date_naiss = date_naiss;
        this.entreprise = entreprise;
        this.observation = observateur;
        this.evenement = evenement;
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

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public String getDate_naiss() {
        return date_naiss;
    }

    public void setDate_naiss(String date_naiss) {
        this.date_naiss = date_naiss;
    }

    public String getEntreprise() {
        return entreprise;
    }

    public void setEntreprise(String entreprise) {
        this.entreprise = entreprise;
    }

    public String getObservation() {
        return observation;
    }

    public void setObservation(String observateur) {
        this.observation = observateur;
    }

    public Evenement getEvenement() {
        return evenement;
    }

    public void setEvenement(Evenement evenement) {
        this.evenement = evenement;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Participant that = (Participant) o;
        return id == that.id && Objects.equals(nom, that.nom) && Objects.equals(prenom, that.prenom) && Objects.equals(mail, that.mail) && Objects.equals(date_naiss, that.date_naiss) && Objects.equals(entreprise, that.entreprise) && Objects.equals(observation, that.observation) && Objects.equals(evenement, that.evenement);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, nom, prenom, mail, date_naiss, entreprise, observation, evenement);
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
        builder.append("\", \"mail\" :\"");
        builder.append(mail);
        builder.append("\", \"date_naiss\" :\"");
        builder.append(date_naiss);
        builder.append("\", \"entreprise\" :\"");
        builder.append(entreprise);
        builder.append("\", \"observation\" :\"");
        builder.append(observation);
        builder.append("\"}");
        return builder.toString();
    }
}
