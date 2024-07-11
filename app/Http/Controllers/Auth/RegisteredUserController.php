<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\RegisterRequest;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     */
    public function store(RegisterRequest $request)
    {

        $request->validated();


        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        event(new Registered($user));

        Auth::login($user);


        if ($request->user()->hasVerifiedEmail()) {

            return redirect()->route('dashboard');

        }

        else{

            $request->user()->sendEmailVerificationNotification();

            return Inertia::render('Dashboard', [
                'auth' => ['user' => $user],
                'flash' => ['type' => 'success', 'message' => 'link has been sent to your email']
            ]);

        }

    }
}
