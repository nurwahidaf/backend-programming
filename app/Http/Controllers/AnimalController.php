<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnimalController extends Controller
{
    public $animal = ['Kucing', 'Ayam', 'Ikan'];

    public function index() {
        echo 'Menampilkan data animals: <br>';
        foreach ($this->animal as $animals) {
            echo '- ' . $animals . '<br>';
        }
    }

    public function store(Request $request) {
        echo 'Menambahkan hewan baru <br><br>';
        array_push($this->animal, $request->animal);
        $this->index();
    }

    // public function update(Request $request, $id) {
    //     echo 'Mengupdate data animal id $id <br><br>';
    //     $data = [
    //         'name' => $request->nama
    //     ];
    //     $this->animal[$id] = $data['name'];
    //     $this->index();
    //     echo '$request->nama';
    // }

    public function update(Request $request, $id) {
        echo "Mengupdate data animal id $id <br><br>";
        $data = [
            'name' => $request->animal
        ];
        $this->animal[$id] = $data['name'];
        echo $request->animal;
        $this->index();
    }

    public function destroy($id) {
        echo "Menghapus data hewan id $id <br><br>";
        array_splice($this->animal, $id);
        $this->index();
    }
}