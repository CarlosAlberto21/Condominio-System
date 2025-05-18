package com.example.proyect.web_sites.services;

import com.example.proyect.web_sites.entities.Customer;

import java.util.List;

public interface ICustomerServices {
     List<Customer> getAll();

    Customer getById(Long id);
    void remove(Long id);
    void save(Customer customer);
}
