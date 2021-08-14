<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\View\View;
use App\Helpers\RedirectHelper;

class UserController extends Controller
{

    /** 
     * UserController Constructor
     */
    public function __construct()
    {
    }

    /**
     * Renderiza la vista de profile
     * 
     * @return View | RedirectResponse
     */
    public function render_profile(): View | RedirectResponse
    {

        return (new RedirectHelper())->view_or_redirect(
            'user.profile',
            'user',
            auth()->user()
        );
    }

    /**
     * Actualizamos la imagen del usuario en sesion
     * 
     * @param Request request
     * @return RedirectResponse
     */
    public function update_avatar(Request $request): RedirectResponse
    {
        return (new RedirectHelper())->redirect_with_closure($request, function (Request $request) {

            $request->validate([
                'avatar' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:15360'
            ]);

            $user = auth()->user();

            $avatar = $user->id . 'avatar' . time() . '.' . $request->file('avatar')->getClientOriginalExtension();
            $request->file('avatar')->move('img/users/', $avatar);

            $user->avatar = $avatar;
            $user->save();
        });
    }
}
