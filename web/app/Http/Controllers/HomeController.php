<?php

namespace App\Http\Controllers;

use Illuminate\View\View;

class HomeController extends Controller {

    /**
     * HomeController Constructor
     *
     * @return void
     */
    public function __construct() { }

    /**
     * Renderiza la vista home
     *
     * @return View
     */
    public function index(): View {
        return view('home');
    }

    /**
     * Renderiza la vista about
     * 
     * @return View
     */
    public function about(): View {
        return view('about');
    }

}
