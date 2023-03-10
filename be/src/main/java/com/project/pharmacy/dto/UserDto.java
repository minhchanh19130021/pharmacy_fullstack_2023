package com.project.pharmacy.dto;

import lombok.Data;

@Data
public class UserDto {
    // do không trả về password field cho client nên cần phải tạo UserDto
    private int id;
    private String email;
    private String phoneNumber;
    private String createDate;
    private String avatar;
    private String role;
}
