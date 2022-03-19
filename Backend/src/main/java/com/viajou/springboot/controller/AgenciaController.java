package com.viajou.springboot.controller;

import com.viajou.springboot.exception.ResourceNotFoundException;
import com.viajou.springboot.model.Agencia;
import com.viajou.springboot.repository.AgenciaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/agencias")
public class AgenciaController {
    @Autowired
    private AgenciaRepository agenciaRepository;

    @GetMapping
    public List<Agencia> getAllAgencias(){
        return agenciaRepository.findAll();
    }

    //build create agencia REST API
    @PostMapping
    public Agencia createAgencia(@RequestBody Agencia agencia){
        return agenciaRepository.save(agencia);
    }

    //build get agencia by id REST API
    @GetMapping("{idAgencia}")
    public ResponseEntity<Agencia> getAgenciaById(@PathVariable long idAgencia){
        Agencia agencia = agenciaRepository.findById(idAgencia).orElseThrow(()-> new ResourceNotFoundException("Agencia inexistente com id: " + idAgencia));
        return ResponseEntity.ok(agencia);
    }

    //build update agencia REST API
    @PutMapping("{idAgencia}")
    public ResponseEntity<Agencia> updateAgencia(@PathVariable long idAgencia,@RequestBody Agencia agenciaDetails){
        Agencia updateAgencia = agenciaRepository.findById(idAgencia).orElseThrow(()-> new ResourceNotFoundException("Agencia inexistente com id: "+ idAgencia));

        updateAgencia.setEndereco(agenciaDetails.getEndereco());
        updateAgencia.setCnpj(agenciaDetails.getCnpj());
        updateAgencia.setTelefone(agenciaDetails.getTelefone());
        updateAgencia.setEmail(agenciaDetails.getEmail());

        agenciaRepository.save(updateAgencia);

        return ResponseEntity.ok(updateAgencia);
    }

    //build delete agencia REST API
    @DeleteMapping("{idAgencia}")
    public ResponseEntity<HttpStatus> deleteAgencia(@PathVariable long idAgencia){

        Agencia agencia = agenciaRepository.findById(idAgencia)
                .orElseThrow(() -> new ResourceNotFoundException("Agencia inexistente com id: " + idAgencia));

        agenciaRepository.delete(agencia);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}
