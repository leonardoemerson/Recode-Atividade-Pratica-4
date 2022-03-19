package com.viajou.springboot.repository;

import com.viajou.springboot.model.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


public interface ClienteRepository extends JpaRepository<Cliente, Long> {
    //all crud database methods
}
