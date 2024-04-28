<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;
use Inertia\Inertia;
use Inertia\Response;

class PasswordResetLinkController extends Controller
{
    /**
     * Display the password reset link request view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/ForgotPassword', [
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming password reset link request.
     *
     */
    public function store(Request $request): \Illuminate\Http\JsonResponse
    {

        try{
            $request->validate([
                'email' => 'required|email',
            ]);

            // We will send the password reset link to this user. Once we have attempted
            // to send the link, we will examine the response then see the message we
            // need to show to the user. Finally, we'll send out a proper response.
            $status = Password::sendResetLink(
                $request->only('email')
            );


            if ($status === Password::RESET_LINK_SENT) {
                return response()->json([
                    'type' => 'success',
                    'message'=> __($status),
                ]);
            }else{
                return response()->json([
                    'type' => 'error',
                    'message'=> __($status),
                ]);
            }

        }
        catch (\Exception $exception){
            return response()->json([
                'type' => 'error',
                'message' => $exception->getMessage(),
            ]);
        }


    }
}
