package com.viajou.springboot.repository;

import com.viajou.springboot.model.Agencia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


public interface AgenciaRepository extends JpaRepository<Agencia, Long> {
    //all crud database methods
}
