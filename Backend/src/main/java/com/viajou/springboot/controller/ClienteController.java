package com.viajou.springboot.controller;

import com.viajou.springboot.exception.ResourceNotFoundException;
import com.viajou.springboot.model.Cliente;
import com.viajou.springboot.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/clientes")
public class ClienteController {
    @Autowired
    private ClienteRepository clienteRepository;

    @GetMapping
    public List<Cliente> getAllClientes(){
        return clienteRepository.findAll();
    }

    //build create cliente REST API
    @PostMapping
    public Cliente createCliente(@RequestBody Cliente cliente){
        return clienteRepository.save(cliente);
    }

    //build get cliente by id REST API
    @GetMapping("{idCliente}")
    public ResponseEntity<Cliente> getClienteById(@PathVariable long idCliente){
        Cliente cliente = clienteRepository.findById(idCliente).orElseThrow(()-> new ResourceNotFoundException("Cliente inexistente com id: " + idCliente));
        return ResponseEntity.ok(cliente);
    }

    //build update cliente REST API
    @PutMapping("{idCliente}")
    public ResponseEntity<Cliente> updateCliente(@PathVariable long idCliente,@RequestBody Cliente clienteDetails){
        Cliente updateCliente = clienteRepository.findById(idCliente).orElseThrow(()-> new ResourceNotFoundException("Cliente inexistente com id: "+ idCliente));

        updateCliente.setEndereco(clienteDetails.getEndereco());
        updateCliente.setNome(clienteDetails.getNome());
        updateCliente.setRg(clienteDetails.getRg());
        updateCliente.setCpf(clienteDetails.getCpf());

        clienteRepository.save(updateCliente);

        return ResponseEntity.ok(updateCliente);
    }

    //build delete cliente REST API
    @DeleteMapping("{idCliente}")
    public ResponseEntity<HttpStatus> deleteCliente(@PathVariable long idCliente){

        Cliente cliente = clienteRepository.findById(idCliente)
                .orElseThrow(() -> new ResourceNotFoundException("Cliente inexistente com id: " + idCliente));

        clienteRepository.delete(cliente);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}
