package com.viajou.springboot;

import com.viajou.springboot.model.Destino;
import com.viajou.springboot.repository.DestinoRepository;
import com.viajou.springboot.repository.AgenciaRepository;
import com.viajou.springboot.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringbootBackendApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootBackendApplication.class, args);
	}

	@Autowired
	private DestinoRepository destinoRepository;
	@Autowired
	private DestinoRepository agenciaRepository;
	@Autowired
	private DestinoRepository clienteRepository;
	@Override
	public void run(String... args) throws Exception{

	}

}
