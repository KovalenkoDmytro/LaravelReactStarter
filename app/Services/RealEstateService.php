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

        foreach ($mediaFiles as $file) {

            $estateFolder = Str::replace(' ', '_', $realEstateModel->name);

            $realEstateModel->addMedia($file['file'])
                ->toMediaCollection('RealEstates\\'.$estateFolder);

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
