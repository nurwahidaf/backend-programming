<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    # method index - get all resources
    public function index() {
        // $user = [
        //     'nama' => 'Nurwahida Fitriani',
        //     'jurusan' => 'Informatika'
        // ];

        # menggunakan model Student untuk select data
        $students = Student::all();

        $data = [
            'message' => 'Get all students',
            'data' => $students,
        ];

        # menggunakan respons json laravel
        # otomatis set header content type json
        # otomatik mengubah data array ke json
        # mengatur status code
        // return response()->json($user, 200);
        return response()->json($data, 200);
    }

    # method store - menambahkan resource
    public function store(Request $request) {
        # menangkap request
        $input = [
            'nama' => $request->nama,
            'nim' => $request->nim,
            'email' => $request->email,
            'jurusan' => $request->jurusan
        ];
        
        # menggunakan Student untuk insert data
        $student = Student::create($input);
    
        $data = [
            'message' => 'Student is created successfully.',
            'data' => $student
        ];
    
        # mengembalikan data (json) status code 201
        return response()->json($data, 201);
    }

    # method update - mengupdate resource
    public function update(Request $request, $id) {
        # menangkap request
        $input = [
            'nama' => $request->nama,
            'nim' => $request->nim,
            'email' => $request->email,
            'jurusan' => $request->jurusan
        ];
        
        Student::find($id)->update($input);
        # menggunakan Student untuk insert data
        $student = Student::find($id);
    
        $data = [
            'message' => 'Student is updated successfully.',
            'data' => $student
        ];
    
        # mengembalikan data (json) status code 200
        return response()->json($data, 200);
    }

    # method delete - menghapus resource
    public function destroy($id) {
        Student::destroy($id);
        $student = Student::all();

        $data = [
            'message' => 'Student is deleted successfully.',
            'data' => $student
        ];

        # mengembalikan data (json) status code 200
        return response()->json($data, 200);
    }
}
