<?php

namespace App\Services;

use App\Interfaces\Services\IRealEstateService;
use App\Models\RealEstate;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Spatie\MediaLibrary\MediaCollections\Exceptions\FileDoesNotExist;
use Spatie\MediaLibrary\MediaCollections\Exceptions\FileIsTooBig;

class RealEstateService implements IRealEstateService
{
    public function getRealEstateMedia(Collection $realEstates): Collection
    {

        $realEstates->map(function ($realEstate) {
            $media = $realEstate->getMedia('realEstates');

            return $realEstate['media'] = $media;
        });

        return $realEstates;
    }

    /**
     * @throws FileIsTooBig
     * @throws FileDoesNotExist
     */
    public function setRealEstateMedia(array $mediaFiles, RealEstate $realEstateModel): void
    {
        $folderName = Str::replace(' ', '_', $realEstateModel->name);
        $folderName = Str::trim($folderName);

        foreach ($mediaFiles as $file) {

            $path = Storage::disk('public')->put('RealEstates/images/'.$folderName, $file['file'], 'public');

            $realEstateModel->addMedia(storage_path('app/public/'.$path))
                ->toMediaCollection('realEstates');

        }

    }

    public function prepareData(array $validatedRequest): array
    {
        $preparedData = [...$validatedRequest, ...$validatedRequest['address'], 'parameters' => isset($validatedRequest['parameters']) ? json_encode($validatedRequest['parameters']) : ''];
        unset($preparedData['address']);

        if (Arr::exists($validatedRequest, 'media')) {
            unset($preparedData['media']);
        }

        return $preparedData;
    }
}
