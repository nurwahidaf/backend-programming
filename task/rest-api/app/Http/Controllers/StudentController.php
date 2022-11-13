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

    # method show - mendapatkan detail resource student
    public function show($id) {
        # mencari data student
        $student = Student::find($id);

        if ($student) {
            $data = [
                'message' => 'Get detail student.',
                'data' => $student
            ];

            # mengembalikan data (json) status code 200
            return response()->json($data, 200);
        } else {
            $data = [
                'message' => 'Student not found.'
            ];

            return response()->json($data, 404);
        }
    }

    # method update - mengupdate resource
    public function update(Request $request, $id) {
        # mencari data student
        $student = Student::find($id);

        if ($student) {
            # menangkap request
            $input = [
                'nama' => $request->nama ?? $student->nama,
                'nim' => $request->nim ?? $student->nim,
                'email' => $request->email ?? $student->email,
                'jurusan' => $request->jurusan ?? $student->jurusan
            ];
            
            # melakukan update data
            $student->update($input);

            $data = [
                'message' => 'Student is updated successfully.',
                'data' => $student
            ];

            return response()->json($data, 200);
        } else {
            $data = [
                'message' => 'Student not found.'
            ];

            # mengembalikan data (json) status code 404
            return response()->json($data, 404);
        };    
    }

    # method delete - menghapus resource
    public function destroy($id) {
        # mencari data student
        $student = Student::find($id);

        if ($student) {
            # menghapus data student
            $student->delete();
    
            $data = [
                'message' => 'Student is deleted successfully.'
            ];

            return response()->json($data, 200);
        } else {
            $data = [
                'message' => 'Student not found.'
            ];
    
            # mengembalikan data (json) status code 404
            return response()->json($data, 404);
        }
    }
}
