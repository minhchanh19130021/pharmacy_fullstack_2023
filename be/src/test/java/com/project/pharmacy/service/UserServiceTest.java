package com.project.pharmacy.service;

import com.project.pharmacy.entity.User;
import com.project.pharmacy.exception.CustomException;
import com.project.pharmacy.repository.UserRepository;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;
import org.junit.runner.RunWith;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.test.context.junit4.SpringRunner;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.CoreMatchers.instanceOf;
import static org.junit.jupiter.api.Assertions.*;

@RunWith(SpringRunner.class)
@SpringBootTest
class UserServiceTest {

    @Autowired
    private UserService userService;

    @MockBean
    private UserRepository userRepository; // cần phải mock repository object để không thể sửa đổi tới real data

    @ParameterizedTest
    @DisplayName("test find user by id")
    @ValueSource(ints = {-1, 0, 1})
    public void testFindUser(int userId) {
        try {
            assertThat(userService.findById(userId), instanceOf(User.class));
        }
         catch(CustomException e) {
             assertEquals(e.getStatus(), HttpStatus.NOT_FOUND);
             assertEquals("not found user by id", e.getMessage());
         }
    }
}
