package com.nology.bookclub.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomePageController {

    @GetMapping(value = "/")
    public String index() {
        return "index";
    }

    @GetMapping(value="/addBook")
    public String addBook() {
        return "index";
    }

}
