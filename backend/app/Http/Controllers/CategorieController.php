<?php

namespace App\Http\Controllers;

use App\Models\Categorie;
use Illuminate\Http\Request;

class CategorieController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $categories = Categorie::all();
            return response()->json($categories, 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Erreur de récupération des données' . $e], 500);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $categorie = new Categorie([
                "nomcategorie" => $request->input('nomcategorie'),
                "imagecategorie" => $request->input('imagecategorie')
            ]);
            $categorie->save();
            return response()->json($categorie, 200);
        } catch (\Exception $e) {
            return response()->json("Insertion impossible", 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        try {
            $categorie = Categorie::findOrFail($id);
            return response()->json($categorie, 200);
        } catch (\Exception $e) {
            return response()->json("Récupération de catégorie impossible", 500);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        try {
            $categorie = Categorie::findOrFail($id);
            $categorie->update($request->all());
            return response()->json($categorie, 200);
        } catch(\Exception $e) {
            return response()->json($e->getMessage(), 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        try {
            $categorie = Categorie::findOrFail($id);
            $categorie->delete();
            return response()->json("Suppression réussite", 200);
        } catch (\Exception $e) {
            return response()->json("Erreur de suppression", 500);
        }
    }
}
