<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class PostController extends Controller
{
    /**
     * @return Response
     */

    function index():Response
    {
        return Inertia::render('Post/Index');
    }

    /**
     * @param int $id
     * @return Response
     */
    function show(int $id): Response
    {
        return Inertia::render('Post/Show', ['id' => $id]);
    }
}
