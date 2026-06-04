package com.example.ims;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @PostMapping
    public Product addProduct(@Valid @RequestBody Product product) {

        return productRepository.save(product);
    }

    @GetMapping
    public List<Product> getAllProducts() {

        return productRepository.findAll();
    }

    @GetMapping("/{id}")
    public Product getProductById(@PathVariable Long id) {

        return productRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Product not found"));
    }

    @PutMapping("/{id}")
    public Product updateProduct(
            @PathVariable Long id,
            @Valid @RequestBody Product updated) {

        Product existingProduct = productRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Product not found"));

        existingProduct.setName(updated.getName());
        existingProduct.setQuantity(updated.getQuantity());
        existingProduct.setPrice(updated.getPrice());

        return productRepository.save(existingProduct);
    }

    @DeleteMapping("/{id}")
    public String deleteProduct(@PathVariable Long id) {

        Product product = productRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Product not found"));

        productRepository.delete(product);

        return "Product deleted successfully";
    }

    @GetMapping("/search")
    public List<Product> searchProducts(@RequestParam String name) {

        return productRepository.findByNameContainingIgnoreCase(name);
    }
        @GetMapping("/count")
        public Map<String, Long> getProductCount() {

            Map<String, Long> response = new HashMap<>();

            response.put("totalProducts", productRepository.count());

            return response;
        }
    @GetMapping("/low-stock")
    public List<Product> getLowStockProducts() {

        return productRepository.findByQuantityLessThan(3);
    }

    @GetMapping("/total-value")
    public double getTotalInventoryValue() {

        List<Product> products = productRepository.findAll();

        double total = 0;

        for (Product product : products) {
            total += product.getPrice() * product.getQuantity();
        }

        return total;
    }
    @GetMapping("/recent")
    public List<Product> getRecentProducts() {

        LocalDateTime oneDayAgo = LocalDateTime.now().minusDays(1);

        return productRepository.findByCreatedAtAfter(oneDayAgo);
    }
}
