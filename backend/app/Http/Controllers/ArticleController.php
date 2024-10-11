<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $articles = Article::with('scategories')->get();
            return response()->json($articles, 200);
        } catch(\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $article = new Article([
               "designation"=> $request->input('designation'),
               "reference"=> $request->input('reference'),
               "marque"=> $request->input('marque'),
               "prix"=> $request->input('prix'),
               "qtestock"=>$request->input('qtestock'),
               "imageart"=>$request->input('imageart'),
               "scategorieID"=>$request->input('scategorieID'),
            ]);
        } catch (\Exception $e) {

        }
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        try {
            $article =Article::with("scategorie")->findOrFail($id);
            return response()->json($article, 200);
        }
        catch(\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Article $article)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Article $article)
    {
        //
    }
}
