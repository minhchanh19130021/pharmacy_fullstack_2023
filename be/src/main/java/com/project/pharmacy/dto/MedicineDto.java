package com.project.pharmacy.dto;

import lombok.Data;

@Data
public class MedicineDto {
    private int id;
    private String name;
    private int producer;
    private int brand;
    private String category;
    private String itemForm;
    private int categoryDetailId;
    private String price;
    private double discount;
    private String slug;
}
