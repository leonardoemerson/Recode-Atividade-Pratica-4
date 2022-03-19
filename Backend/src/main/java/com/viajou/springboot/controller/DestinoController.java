package com.viajou.springboot.controller;

import com.viajou.springboot.exception.ResourceNotFoundException;
import com.viajou.springboot.model.Destino;
import com.viajou.springboot.repository.DestinoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/destinos")
public class DestinoController {
    @Autowired
    private DestinoRepository destinoRepository;

    @GetMapping
    public List<Destino> getAllDestinos(){
        return destinoRepository.findAll();
    }

    //build create destino REST API
    @PostMapping
    public Destino createDestino(@RequestBody Destino destino){
        return destinoRepository.save(destino);
    }

    //build get destino by id REST API
    @GetMapping("{idDestino}")
    public ResponseEntity<Destino> getDestinoById(@PathVariable long idDestino){
        Destino destino = destinoRepository.findById(idDestino).orElseThrow(()-> new ResourceNotFoundException("Destino inexistente com id: " + idDestino));
        return ResponseEntity.ok(destino);
    }

    //build update destino REST API
    @PutMapping("{idDestino}")
    public ResponseEntity<Destino> updateDestino(@PathVariable long idDestino,@RequestBody Destino destinoDetails){
        Destino updateDestino = destinoRepository.findById(idDestino).orElseThrow(()-> new ResourceNotFoundException("Destino inexistente com id: "+ idDestino));

        updateDestino.setEndereco(destinoDetails.getEndereco());
        updateDestino.setNome(destinoDetails.getNome());
        updateDestino.setPreco(destinoDetails.getPreco());
        updateDestino.setQtdVagas(destinoDetails.getQtdVagas());

        destinoRepository.save(updateDestino);

        return ResponseEntity.ok(updateDestino);
    }

    //build delete destino REST API
    @DeleteMapping("{idDestino}")
    public ResponseEntity<HttpStatus> deleteDestino(@PathVariable long idDestino){

        Destino destino = destinoRepository.findById(idDestino)
                .orElseThrow(() -> new ResourceNotFoundException("Destino inexistente com id: " + idDestino));

        destinoRepository.delete(destino);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}
