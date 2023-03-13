package com.project.pharmacy.service;

import com.project.pharmacy.entity.Medicine;
import com.project.pharmacy.repository.MedicineRepostory;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MedicineService {
    @Autowired
    private MedicineRepostory medicineRepostory;
    @Autowired
    private ModelMapper mapper;

    public List<Medicine> getAllMedicine() {
        return medicineRepostory.findAll();
    }


}
