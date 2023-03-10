package com.project.pharmacy.service;

import com.project.pharmacy.dto.UserDto;
import com.project.pharmacy.entity.User;
import com.project.pharmacy.exception.CustomException;
import com.project.pharmacy.repository.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ModelMapper mapper;

    public User findById(int id) throws CustomException {
        Optional<User> user =  userRepository.findById(id);
        return user.map(u -> {
            return u;
        }).orElseThrow(() -> new CustomException(HttpStatus.NOT_FOUND, "not found user by id"));
    }

    public void save() {
        userRepository.save(new User());
    }
}
