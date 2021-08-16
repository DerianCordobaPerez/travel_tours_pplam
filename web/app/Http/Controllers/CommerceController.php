<?php

namespace App\Http\Controllers;

use App\Models\Commerce;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CommerceController extends Controller
{
    /**
     * Renderiza la vista principal del negocio
     */
    public function index()
    {
        return Commerce::all();
    }

    /**
     * Devuelve el comercio
     *
     * @param  Commerce $commerce
     * @return Commerce
     */
    public function show(Commerce $commerce): Commerce
    {
        return $commerce;
    }

    /**
     * Devuelve le comercio creado en formato json
     *
     * @param  Request  $request
     * @return JsonResponse
     */
    public function store(Request $request): JsonResponse
    {
        return response()->json(Commerce::create($request->all()), 201);
    }

    /**
     * Devuelve el comercio actualizado en formato de json
     *
     * @param  Request  $request
     * @param  Commerce  $commerce
     * @return JsonResponse
     */
    public function update(Request $request, Commerce $commerce): JsonResponse
    {
        return response()->json($commerce->update($request->all()), 200);
    }

    /**
     * Devuelve un json con la respuesta luego de borrar el comercio
     *
     * @param  Commerce  $commerce
     * @return JsonResponse
     */
    public function destroy(Commerce $commerce)
    {
        $commerce->delete();
        return response()->json(null, 204);
    }
}
