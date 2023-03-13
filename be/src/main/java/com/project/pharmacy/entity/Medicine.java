package com.project.pharmacy.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Data
@NoArgsConstructor
public class Medicine {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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
