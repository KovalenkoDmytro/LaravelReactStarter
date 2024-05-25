<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PhotoController extends Controller
{
    /**
     * @return Response
     */

    function index():Response
    {
        return Inertia::render('Photo/Index');
    }

    /**
     * @param int $id
     * @return Response
     */
    function show(int $id): Response
    {
        return Inertia::render('Photo/Show', ['id' => $id]);
    }
}
