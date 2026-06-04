package com.example.ims;

import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {

    // Search API
    List<Product> findByNameContainingIgnoreCase(String name);

    // Low stock products
    List<Product> findByQuantityLessThan(int quantity);

    // Recent products
    List<Product> findByCreatedAtAfter(LocalDateTime time);
}