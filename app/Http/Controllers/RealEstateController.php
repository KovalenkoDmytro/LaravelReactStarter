<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreRealEstateRequest;
use App\Models\RealEstate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class RealEstateController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): \Inertia\Response
    {
        return Inertia::render('RealEstate/Index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): \Inertia\Response
    {
        return Inertia::render('RealEstate/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRealEstateRequest $request): \Illuminate\Http\JsonResponse
    {

        try {

            $validated = $request->validated();
            $validated = [...$validated, ...$validated['address'], 'parameters' => count($validated['parameters']) > 0 ? json_encode($validated['parameters']) : ''];
            unset($validated['address']);

            RealEstate::create($validated);

            return response()->json(
                ['message' => 'SuccessResult',
                    'type' => 'success',
                    'status' => 200,
                ]
            );

        } catch (\Exception $exception) {
            Log::error($exception->getMessage());

            return response()->json(
                ['message' => $exception->getMessage(),
                    'type' => 'error',
                    'status' => $exception->getCode(),
                ]
            );
        }

    }

    /**
     * Display the specified resource.
     */
    public function show(RealEstate $realEstate)
    {
        return Inertia::render('RealEstate/Show');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(RealEstate $realEstate)
    {
        return Inertia::render('RealEstate/Edit');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, RealEstate $realEstate)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(RealEstate $realEstate)
    {
        //
    }
}
