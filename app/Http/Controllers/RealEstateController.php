<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreRealEstateRequest;
use App\Interfaces\Services\IRealEstateService;
use App\Models\RealEstate;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;

class RealEstateController extends Controller
{
    private IRealEstateService $realEstateService;

    public function __construct(IRealEstateService $service)
    {
        $this->realEstateService = $service;
    }

    /**
     * Display a listing of the resource.
     */
    public function index(): \Inertia\Response
    {
        $realEstateModels = RealEstate::all();

        $realEstates = $this->realEstateService->getRealEstateMedia($realEstateModels);


        return Inertia::render('RealEstate/Index', ['realEstates' => $realEstates]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): \Inertia\Response
    {
        return Inertia::render('RealEstate/Create');
    }

    private function prepareData(array $data): array
    {

        $preparedData = [...$data, ...$data['address'], 'parameters' => isset($data['parameters']) ? json_encode($data['parameters']) : ''];
        unset($preparedData['address']);

        if (Arr::exists($data, 'media')) {
            unset($preparedData['media']);
        }

        return $preparedData;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRealEstateRequest $request): \Illuminate\Http\JsonResponse
    {

        try {
            //            //todo service for each action

            $validated = $request->validated();
            $data = $this->prepareData($validated);

            $realEstateModel = RealEstate::create($data);

            $folderName = Str::replace(' ', '_', $realEstateModel->name);
            $folderName = Str::trim($folderName);

            if (Arr::exists($validated, 'media')) {
                foreach ($validated['media'] as $file) {

                    $path = Storage::disk('public')->put('RealEstates/images/'.$folderName, $file['file'], 'public');

                    $realEstateModel->addMedia(storage_path('app/public/'.$path))
                        ->toMediaCollection('realEstates');

                }
            }

            //
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
    public function show(RealEstate $realEstate): \Inertia\Response
    {
        return Inertia::render('RealEstate/Show', ['realEstate' => $realEstate]);
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
