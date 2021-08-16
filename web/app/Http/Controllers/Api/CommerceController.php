<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\CommerceResource;
use App\Models\Commerce;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class CommerceController extends Controller
{
    
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['index', 'show']]);
    }

    /**
     * Devuelve la lista de recursos
     * 
     * @return AnonymousResourceCollection
     */
    public function index(): AnonymousResourceCollection
    {
        return CommerceResource::collection(Commerce::latest()->paginate());
    }

    /**
     * Devuelve un mensaje indicando si se creo el comercio
     * 
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request): JsonResponse
    {
        $response = Commerce::create($request->all());
        return response()->json(
            ['message' => $response ? 'Commerce created successfully' : 'Error to created commerce'],
            !$response ? 500 : 200 
        );
    }

    /**
     * Devuelve un recurso en especifico
     * 
     * @param Commerce $commerce
     * @return CommerceResource
     */
    public function show(Commerce $commerce): CommerceResource
    {
        return new CommerceResource($commerce);
    }

    /**
     * Actualiza el comercio en especifico
     * 
     * @param Request $request
     * @param Commerce $commerce
     * @return JsonResponse
     */
    public function update(Request $request, Commerce $commerce): JsonResponse
    {
        $commerce->name = $request->name;
        $commerce->subject = $request->subject;
        $commerce->description = $request->description;

        $response = $commerce->save();
        
        return response()->json(
            ['message' => $response ? 'Commerce update successfully' : 'Error to update commerce'],
            !$response ? 500 : 200
        );
    }

    /**
     * Elimina el commerce en especifico
     * 
     * @param Commerce $commerce
     * @return JsonResponse
     */
    public function destroy(Commerce $commerce): JsonResponse
    {
        $response = $commerce->delete();
        return response()->json(
            ['message' => $response ? 'Commerce delete successfully' : 'Error to delete commerce'],
            !$response ? 500 : 200
        );
    }

}
