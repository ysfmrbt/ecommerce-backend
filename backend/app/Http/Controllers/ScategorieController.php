<?php

namespace App\Http\Controllers;

use App\Models\Scategorie;
use Illuminate\Http\Client\Response;
use Illuminate\Http\Request;

class ScategorieController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $scategories = Scategorie::with('categorie')->get();
            return response()->json($scategories);
        } catch(\Exception $e) {
            return response()->json(['error' => true, 'message' => $e->getMessage()]);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $scategorie = new Scategorie([
                "nomscategorie" => $request->input('nomscategorie'),
                "imagescategorie" => $request->input('imagescategorie'),
                "categorieID" => $request->input('categorieID'),
            ]);
            $scategorie->save();
            return response()->json($scategorie, 200);
        } catch (\Exception $e) {
            return response()->json(['error' => true, 'message' => $e->getMessage()], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        try{
            $scategorie = Scategorie::with('categorie')->findOrFail($id);
            return response()->json($scategorie, 200);
        }
        catch(\Exception $e){
            return response()->json(['error' => true, 'message' => $e->getMessage()], 500);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        try {
            $scategorie = Scategorie::findOrFail($id);
            $scategorie->update($request->all());
            return response()->json($scategorie, 200);
        } catch(\Exception $e){
            return response()->json(['error' => true, 'message' => $e->getMessage()], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        try {
            $scategoie = Scategorie::findOrFail($id);
            $scategoie->delete();
            return response()->json(null, 204);
        } catch (\Exception $e) {
            return response()->json(['error' => true, 'message' => $e->getMessage()], 500);
        }
    }
}
