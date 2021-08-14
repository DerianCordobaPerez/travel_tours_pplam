<?php

namespace App\Helpers;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\View\View;

class RedirectHelper
{

    /**
     * RedirectHelper Constructor
     */
    public function __construct()
    {
    }

    /**
     * Renderiza la vista necesaria si el usuario se encuentra con una sesion activa, en caso 
     * contrario lo redireccionaremos a la ruta de login
     * 
     * @param string name nombre de la vista a renderizar
     * @param string data nombre del parametro a enviar a la vista
     * @param mixed params parametro a enviar a la vista
     * @return View | RedirectResponse
     */
    public function view_or_redirect(string $name, string $data, $params): View | RedirectResponse
    {

        // Verifica si el usuario se encuentra con una sesion iniciada
        if (auth()->check())
            // Retornamos la vista con los datos necesarios
            return view($name)->with($data, $params);

        // Redireccionamos a la ruta de login si no tiene una sesion iniciada
        return redirect()->route('login')->with('warning', 'Inicia sesion para disfrutar de todas las ventajas');
    }

    /**
     * Redireccionamos a la ruta de manejo de usuario si el usuario en sesion contiene el rol de admin
     * de caso contrario lo redireccionaremos a la ruta de estadisticas
     *
     * @param Request $request
     * @param Closure | null $closure
     * @return RedirectResponse
     */
    public static function redirect_with_closure(Request $request, Closure $closure): RedirectResponse
    {

        // Verifica si el usuario se encuentra con una sesion iniciada
        if (auth()->check()) {

            // Se ejecuta el closure pasado como parametro
            $closure($request);

            return redirect()->route('home')->with('success', 'Accion realizada correctamente');
        }

        // En caso que el usuario no contenga el rol de admin redireccionamos a la pagina de estadisticas
        return redirect()->route('login')->with('warning', 'Inicia sesion para disfrutar de todas las ventajas');
    }
}
