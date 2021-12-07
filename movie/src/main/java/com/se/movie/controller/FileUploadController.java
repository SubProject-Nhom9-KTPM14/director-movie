package com.se.movie.controller;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.concurrent.TimeUnit;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.bind.annotation.CrossOrigin;


@CrossOrigin
@RestController
@RequestMapping("/movies")
public class FileUploadController {
    @Value("${file.upload-dir}")
    String FILE_MAIN_DIRECTORY;

    @Autowired
    ServletContext context;

    @PostMapping("/upload-file")
    public ResponseEntity<Object> fileUpload(@RequestParam("File") MultipartFile file) throws IOException {
        try {
            String FILE_DIRECTORY = FILE_MAIN_DIRECTORY + getFileExtension(file) + "/";
            File directory = new File(FILE_DIRECTORY);
            // Create a folder if not exist
            if (!directory.exists()) {
                directory.mkdirs();
            }
            String convertFileName = (FILE_DIRECTORY + file.getOriginalFilename()).replaceAll("\\s+", "_");
            File myFile = new File(convertFileName);
            myFile.createNewFile();
            FileOutputStream fos = new FileOutputStream(myFile);
            fos.write(file.getBytes());
            fos.close();
            HashMap<String, String> fileObject = new HashMap<>();
            fileObject.put("fileUrl", getFileUrl(myFile));
            fileObject.put("fileExtension", this.getFileExtension(file));
            fileObject.put("fileName", file.getOriginalFilename());
            fileObject.put("fileExtension", this.getFileExtension(file));
            fileObject.put("status", "Upload successfully");
            TimeUnit.SECONDS.sleep(3);
            return new ResponseEntity<Object>(fileObject, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<Object>("Upload failed: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    private String getFileExtension(MultipartFile file) {
        String name = file.getOriginalFilename();
        int lastIndexOf = name.lastIndexOf(".");
        if (lastIndexOf == -1) {
            return ""; // empty extension
        }
        return name.substring(lastIndexOf + 1);
    }

    private String getFileUrl(File file) {
        String name = file.getAbsolutePath();
        int lastIndexOf = name.lastIndexOf("storage");
        String fileUrl = "http://localhost:9191/" + name.substring(lastIndexOf).replace("\\", "/");
        return fileUrl;
    }
}
