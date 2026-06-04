package com.example.ims;

import org.springframework.web.bind.annotation.*;

@RestController
public class LoginController {

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest request) {

        if (request.getUsername().equals("admin")
                && request.getPassword().equals("admin123")) {

            return "Login Successful";
        }

        return "Invalid Username or Password";
    }
}