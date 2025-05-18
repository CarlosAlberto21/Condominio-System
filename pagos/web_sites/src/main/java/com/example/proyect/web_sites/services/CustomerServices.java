package com.example.proyect.web_sites.services;

    import com.example.proyect.web_sites.entities.Customer;
    import com.example.proyect.web_sites.repository.CustomerRepository;
    import org.springframework.beans.factory.annotation.Autowired;
    import org.springframework.stereotype.Service;


    import java.util.ArrayList;
    import java.util.List;

    @Service
    public class CustomerServices implements ICustomerServices {

        @Autowired
        private CustomerRepository repository;

        @Override
        public List<Customer> getAll() {
        return (List<Customer>) repository.findAll();

        }

        @Override
        public Customer getById(Long id) {
            return (Customer) repository.findById(id).get();
        }

        public void remove(Long id){
            repository.deleteById(id);
        }

        public void save(Customer customer){
            repository.save(customer);
        }
    }

