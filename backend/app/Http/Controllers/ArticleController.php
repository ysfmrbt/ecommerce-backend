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
            $articles = Article::with('scategorie')->get();
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
            $article->save();
            return response()->json($article, 200);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
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
    public function update(Request $request, $id)
    {
        try {
            $article = Article::findOrFail($id);
            $article->update($request->all());
            return response()->json($article, 200);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        try {
            $article=Article::findOrFail($id);
            $article->delete();
            return response()->json(null, 204);
        } catch(\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function showArticlesBySCAT($idscat) {
        try {
            $articles = Article::with('scategories')->where('scategorieID', $idscat)->get();
            return response()->json($articles, 200);
        } catch(\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function articlesPaginate() {
        try {
            $perPage = request()->input('pageSize', 2);
            $articles = Article::with('scategorie')->paginate($perPage);
            return response()->json([
                'articles' => $articles->items(),
                'totalPages' => $articles->lastPage()
            ], 200);
        } catch(\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
