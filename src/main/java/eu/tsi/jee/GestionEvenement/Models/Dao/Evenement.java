package eu.tsi.jee.GestionEvenement.Models.Dao;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "evenement")
public class Evenement {
    @Id
    @GeneratedValue(generator = "increment")
    @GenericGenerator(name="increment",strategy = "increment")
    @Column(name="id")
    private long id;
    @Column(name="titre",nullable = false)
    private String titre;
    @Column(name="date",nullable = false)
    private String date;
    @Column(name="duree",nullable = false)
    private double duree;
    @Column(name="maxpart",nullable = false)
    private int maxpart;
    @Column(name="description",nullable = false)
    private String description;
    @Column(name="organisateur",nullable = false)
    private String organisateur;
    @Column(name="type_event",nullable = false)
    private String type_event;
    @OneToMany(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
    @JoinColumn(name = "event_id")
    private List<Participant> participant;

    public Evenement(){

    }

    public Evenement(String titre, String date, double duree, int maxpart, String description, String organisateur, String type_event) {
        this.titre = titre;
        this.date = date;
        this.duree = duree;
        this.maxpart = maxpart;
        this.description = description;
        this.organisateur = organisateur;
        this.type_event = type_event;
        this.participant = new ArrayList<>();
    }

    public void setParticipant(Participant participant){
        this.participant.add(participant);
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitre() {
        return titre;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public double getDuree() {
        return duree;
    }

    public void setDuree(double duree) {
        this.duree = duree;
    }

    public int getMaxpart() {
        return maxpart;
    }

    public void setMaxpart(int maxpart) {
        this.maxpart = maxpart;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getOrganisateur() {
        return organisateur;
    }

    public void setOrganisateur(String organisateur) {
        this.organisateur = organisateur;
    }

    public String getType_event() {
        return type_event;
    }

    public void setType_event(String type_event) {
        this.type_event = type_event;
    }

    public List<Participant> getParticipant() {
        return participant;
    }

    public void setParticipant(List<Participant> participant) {
        this.participant = participant;
    }

    public void deleteParticipant(Participant participant){
        this.participant.remove(participant);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Evenement evenement = (Evenement) o;
        return id == evenement.id && Double.compare(evenement.duree, duree) == 0 && maxpart == evenement.maxpart && Objects.equals(titre, evenement.titre) && Objects.equals(date, evenement.date) && Objects.equals(description, evenement.description) && Objects.equals(organisateur, evenement.organisateur) && Objects.equals(type_event, evenement.type_event) && Objects.equals(participant, evenement.participant);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, titre, date, duree, maxpart, description, organisateur, type_event, participant);
    }

    @Override
    public String toString() {
        StringBuilder builder = new StringBuilder();
        builder.append("{\"id\" :");
        builder.append(id);
        builder.append(", \"titre\" :\"");
        builder.append(titre);
        builder.append("\", \"date\" :\"");
        builder.append(date);
        builder.append("\", \"duree\" :");
        builder.append(duree);
        builder.append(", \"maxpart\" :");
        builder.append(maxpart);
        builder.append(", \"description\" :\"");
        builder.append(description);
        builder.append("\", \"organisateur\" :\"");
        builder.append(organisateur);
        builder.append("\", \"type_event\" :\"");
        builder.append(type_event);
        builder.append("\", \"participants\" :");
        builder.append(participant);
        builder.append("}");
        return builder.toString();
    }
}
