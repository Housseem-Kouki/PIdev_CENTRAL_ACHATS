package com.example.emlacementservice.Repository;

import com.example.emlacementservice.Entities.DemandeAchat;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DemandeAchatRepository extends JpaRepository<DemandeAchat, Integer> {
    public List<DemandeAchat> getDemandeAchatsByAcheteur_IdUser(int idUser);
}