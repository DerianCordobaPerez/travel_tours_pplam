<?php

namespace App\Http\Controllers;

use App\Models\Commerce;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\View\View;

class CommerceController extends Controller
{
    /**
     * Renderiza la vista principal del negocio
     *
     * @return View
     */
    public function index(): View {
        return view('');
    }

    /**
     * Renderiza la vista de creacion de commerce
     *
     * @return View
     */
    public function create(): View {
        return view('');
    }

    /**
     * Almacena el commerce dentro de la db
     *
     * @param  Request  $request
     * @return RedirectResponse
     */
    public function store(Request $request): RedirectResponse {
        return redirect()->route('');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Commerce  $commerce
     * @return \Illuminate\Http\Response
     */
    public function show(Commerce $commerce) {
        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Commerce  $commerce
     * @return \Illuminate\Http\Response
     */
    public function edit(Commerce $commerce)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Commerce  $commerce
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Commerce $commerce)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Commerce  $commerce
     * @return \Illuminate\Http\Response
     */
    public function destroy(Commerce $commerce)
    {
        //
    }
}
