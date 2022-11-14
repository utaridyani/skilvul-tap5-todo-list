# DOKUMENTASI
---
Berikut merupakan panduan untuk menggunakan API To-Do List.

#### Registrasi Akun
| Method | Endpoint | Fungsi |
| ------ | ------ | ------|
| POST | /auth/registrasi | Membuat akun user baru |

#### Login
| Method | Endpoint | Fungsi |
| ------ | ------ | ------|
| GET | /auth/login | Login dengan akun yang sebelumnya sudah dibuat |

#### User
| Method | Endpoint | Fungsi |
| ------ | ------ | ------|
| GET | /user | Mengambil seluruh data user (oleh role admin) |
| GET | /user/:id | Mengambil data user berdasarkan ID |
| DELETE | /user/:id | Menghapus data user berdasarkan ID |
| PUT | /user/:id | Melakukan perubahan pada data user berdasarkan ID |

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