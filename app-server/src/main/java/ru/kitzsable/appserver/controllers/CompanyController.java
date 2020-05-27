package ru.kitzsable.appserver.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("privateSpaceStats/company/{company-id}")
public class CompanyController {

    @GetMapping("info")
    public void getCompanyInfo(@PathVariable("company-id") String companyName) {

    }
}
