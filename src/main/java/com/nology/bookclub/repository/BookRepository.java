package com.nology.bookclub.repository;

import com.nology.bookclub.model.Book;
import org.springframework.data.repository.CrudRepository;
import org.springframework.http.HttpMethod;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMethod;

@CrossOrigin
public interface BookRepository extends CrudRepository<Book, Integer> {
}

