# Dokumentasi
---

#### Registrasi Akun
| Method | Endpoint | Fungsi |
| ------ | ------ | ------|
| POST | /auth/registrasi | Membuat akun user baru |
Berikut merupakan contoh penggunaan endpoint registrasi.
**Request**
```sh
<!--url-->
(POST) localhost:3000/auth/registrasi

<!--body-->
{
  "nama": "utaridy",
  "email": "utaridy@gmail.com",
  "password": "utaridy"
}
```
**Response**
```sh
Status: 200 OK
Size: 42 Bytes
Time: 121 ms

{
  "message": "account successfully created",
  "data": {
    "nama": "utaridy",
    "email": "utaridy@gmail.com",
    "password": "$2b$10$jEjXzzOgsQlU7lsLZlCXRe6HhVbhIrj1B62dUps6G54sGX6hb9te6",
    "_id": "63724f589072cdc1ec901a2a"
  }
}
```
---
#### Login
| Method | Endpoint | Fungsi |
| ------ | ------ | ------|
| GET | /auth/login | Login dengan akun yang sebelumnya sudah dibuat |
Berikut merupakan contoh penggunaan endpoint login.
**Request**
```sh
<!--url-->
localhost:3000/auth/login

<!--body-->
{
  "email": "utaridy@gmail.com",
  "password": "utaridy"
}
```
**Response**
```sh
Status: 200 OK
Size: 285 Bytes
Time: 142 ms

{
  "message": "you're logged in",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InV0YXJpZHlAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkakVqWHp6T2dzUWxVN2xzTFpsQ1hSZTZIaFZiaElyajFCNjJkVXBzNkc1NHNHWDZoYjl0ZTYiLCJpYXQiOjE2Njg0MzYwMjh9.qeVwuCSaGEw4fOEbta0DjvSKkxSfHYzoPwFjEu875S4"
}
```
----
#### User
| Method | Endpoint | Fungsi |
| ------ | ------ | ------|
| GET | /user | Mengambil seluruh data user (oleh role admin) |
| GET | /user/:id | Mengambil data user berdasarkan ID |
| DELETE | /user/:id | Menghapus data user berdasarkan ID |
| PUT | /user/:id | Melakukan perubahan pada data user berdasarkan ID |

1. **Sample get /user**
    Request
    ```sh
    (GET) localhost:3000/user
    ```
    Response
    Data yang ditampilkan hanya akan berupa nama dan email karena password, id, dan __v disembunyikan untuk menjaga keamanan data.
    ```sh
    Status: 200 OK
    Size: 431 Bytes
    Time: 83 ms
    
    {
      "message": "Success",
      "data": [
        {
          "nama": "dyani",
          "email": "dyani@gmail.com",
          "role": "admin"
        },
        {
          "nama": "utari",
          "email": "utari@gmail.com"
        },
        {
          "nama": "utari",
          "email": "utari@gmail.com"
        },
        {
          "nama": "utarid",
          "email": "utarid@gmail.com"
        },
        {
          "nama": "utaridy",
          "email": "utaridy@gmail.com"
        }
      ]
    }
    ```
    
    Response Jika User Salah Memasukan Endpoint
    ```sh
    Status: 404 Not Found
    Size: 144 Bytes
    Time: 6 ms
    ```
2. **Sample get user/:id**
    Request
    ```sh
    (GET) localhost:3000/user/6371cae2f2875a3a2e6ec9eb
    ```
    **Response**
    ```sh
    Status: 200 OK
    Size: 85 Bytes
    Time: 28 ms
    
    {
      "message": "Sucess",
      "data": {
        "nama": "utari",
        "email": "utari@gmail.com"
      }
    }
    ```
    Response jika params ID tidak valid
    ```sh
    Status: 500 Internal Server Error
    Size: 26 Bytes
    Time: 10 ms
    
    {
      "message": "Server Error"
    }
    ```
3. Sample delete /user/:id
    **Request**
    ```sh
    <!--url-->
    localhost:3000/user/63722f608858972c6668bc4e
    ```
    **Response**
    ```sh
    Status: 200 OK
    Size: 21 Bytes
    Time: 37 ms
    
    {
      "message": "data has successfully deleted"
    }
    ```
    Response jika id user tidak ditemukan
    ```sh
    Status: 404 Not Found
    Size: 56 Bytes
    Time: 47 ms
    
    User 63722f608858972c6668bc4 not found
    ```
4. Sample put /user/:id
    **Request**
    ```sh
    <!--url-->
    localhost:3000/user/63724aedb02092d8e65ec183
    
    <!--body-->
    {
      "nama": "nama baru"
    }
    ```
    **Response**
    ```sh
    Status: 200 OK
    Size: 74 Bytes
    Time: 110 ms
    
    {
      "message": "sucess",
      "data": {
        "nama": "nama baru",
        "email": "utari@gmail.com"
      }
    }
    ```
---
#### ToDo
| Method | Endpoint | Fungsi |
| ------ | ------ | ------|
| GET | /todo | Mengambil seluruh to-do list (oleh role admin) |
| GET | /todo/user/:id | Mengambil data to-do list berdasarkan user  ID |
| GET | /todo/:id | Mengambil data to-do berdasarkan ID |
| POST | /todo | Menambahkan to-do baru |
| PUT | /todo/:id | Melakukan perubahan pada data to-do berdasarkan ID |
| DELETE | /todo/:id | Menghapus data to-do berdasarkan ID |
| DELETE | /todo | Menghapus seluruh data to-do (oleh role admin) |

1. **Sample get /todo**
    Request
    ```sh
    (GET) localhost:3000/todo
    ```
    Response
    ```sh
    Status: 200 OK
    Size: 720 Bytes
    Time: 29 ms
    
    {
      "message": "success",
      "data": [
        {
          "_id": "63725e537fd18b79bffe2521",
          "judul": "tugas 1",
          "deadline": "2022-12-12T00:00:00.000Z",
          "isDone": false,
          "user": {
            "_id": "63724b75ef3f41ae9eb1b09d",
            "nama": "utarid"
          },
          "__v": 0
        },
        {
          "_id": "63725e71902ef2159189d128",
          "judul": "tugas 2",
          "deadline": "2022-12-12T00:00:00.000Z",
          "isDone": false,
          "user": {
            "_id": "63724b75ef3f41ae9eb1b09d",
            "nama": "utarid"
          },
          "__v": 0
        },
        {
          "_id": "63725ece902ef2159189d12a",
          "judul": "tugas 3",
          "deadline": "2022-12-12T00:00:00.000Z",
          "isDone": false,
          "user": {
            "_id": "63724f589072cdc1ec901a2a",
            "nama": "utaridy"
          },
          "__v": 0
        },
        {
          "_id": "63725ed3902ef2159189d12c",
          "judul": "tugas 4",
          "deadline": "2022-12-12T00:00:00.000Z",
          "isDone": false,
          "user": {
            "_id": "63724f589072cdc1ec901a2a",
            "nama": "utaridy"
          },
          "__v": 0
        }
      ]
    }
    ```
2. **Sample get /todo/user/:id**
    Request
    ```sh
    (GET) localhost:3000/todo/user/63724f589072cdc1ec901a2a
    ```
    Response
    ```sh
    Status: 200 OK
    Size: 326 Bytes
    Time: 17 ms
    
    {
      "message": "success",
      "data": [
        {
          "_id": "63725ece902ef2159189d12a",
          "judul": "tugas 3",
          "deadline": "2022-12-12T00:00:00.000Z",
          "isDone": false,
          "user": "63724f589072cdc1ec901a2a",
          "__v": 0
        },
        {
          "_id": "63725ed3902ef2159189d12c",
          "judul": "tugas 4",
          "deadline": "2022-12-12T00:00:00.000Z",
          "isDone": false,
          "user": "63724f589072cdc1ec901a2a",
          "__v": 0
        }
      ]
    }
    ```
3. **Sample get /todo/:id**
    Request
        ```sh
        (GET) localhost:3000/todo/63725e71902ef2159189d128
        ```
        Response
        ```sh
        Status: 200 OK
        Size: 200 Bytes
        Time: 23 ms
        
        {
          "message": "success",
          "data": {
            "_id": "63725e71902ef2159189d128",
            "judul": "tugas 2",
            "deadline": "2022-12-12T00:00:00.000Z",
            "isDone": false,
            "user": {
              "_id": "63724b75ef3f41ae9eb1b09d",
              "nama": "utarid"
            },
            "__v": 0
          }
        }
        ```
4. **Sample post /todo**
    Request
    ```sh
    <!--url-->
    (POST) localhost:3000/todo
    
    <!--body-->
    {
      "judul": "tugas 2",
      "deadline": "2022-12-12",
      "isDone": false,
      "user": "63724b75ef3f41ae9eb1b09d"
    }
    ```
    Response
    ```sh
    Status: 200 OK
    Size: 182 Bytes
    Time: 59 ms
    
    {
      "message": "data has been created",
      "data": {
        "judul": "tugas 2",
        "deadline": "2022-12-12T00:00:00.000Z",
        "isDone": false,
        "user": "63724b75ef3f41ae9eb1b09d",
        "_id": "63725e71902ef2159189d128"
      }
    }
    ```
5. **Sample put /todo/:id**
    Request
    ```sh
    <!--URL-->
    (PUT) localhost:3000/todo/63725e537fd18b79bffe2521
    
    <!--body-->
    {
      "judul": "tugas baru"
    }
    ```
    Response
    ```sh
    Status: 200 OK
    Size: 179 Bytes
    Time: 111 ms
    
    {
      "message": "success",
      "data": {
        "_id": "63725e537fd18b79bffe2521",
        "judul": "tugas baru",
        "deadline": "2022-12-12T00:00:00.000Z",
        "isDone": false,
        "user": "63724b75ef3f41ae9eb1b09d",
        "__v": 0
      }
    }
    ```
6. **Sample delete /todo/:id**
    Request
    ```sh
    (DELETE) localhost:3000/todo/63725e537fd18b79bffe2521
    ```
    Response
    ```sh
    Status: 200 OK
    Size: 21 Bytes
    Time: 14 ms
    
    {
      "message": "success"
    }
    ```
7. **Sample delete /todo**
    Request
    ```sh
    (DELETE) localhost:3000/todo
    ```
    Response
    ```sh
    Status: 200 OK
    Size: 91 Bytes
    Time: 69 ms
    
    {
      "message": "All todo data have been deleted",
      "data": {
        "acknowledged": true,
        "deletedCount": 3
      }
    }
    ```

