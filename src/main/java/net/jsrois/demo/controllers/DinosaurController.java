package net.jsrois.demo.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class DinosaurController {

    @GetMapping("/api/dinosaurs")
    public List<Dinosaur> dinosaurs() {
        return List.of(new Dinosaur("T-Rex"), new Dinosaur("Triceratops"));
    }
}
