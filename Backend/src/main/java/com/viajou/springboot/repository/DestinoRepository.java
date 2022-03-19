package com.viajou.springboot.repository;

import com.viajou.springboot.model.Destino;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


public interface DestinoRepository extends JpaRepository<Destino, Long> {
    //all crud database methods
}
